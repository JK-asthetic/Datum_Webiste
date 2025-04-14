import { ReactNode, useEffect, useRef } from 'react';
import { motion, useAnimation, useInView, Variant, Variants } from 'framer-motion';

type AnimationDirection = 'up' | 'down' | 'left' | 'right' | 'scale' | 'rotate' | 'flip' | 'none';
type AnimationEffect = 'fade' | 'slide' | 'bounce' | 'spring' | 'stagger';

interface ScrollRevealProps {
  children: ReactNode;
  direction?: AnimationDirection;
  effect?: AnimationEffect;
  duration?: number;
  delay?: number;
  staggerChildren?: number;
  className?: string;
  distance?: number;
  once?: boolean;
  threshold?: number; // Renamed to threshold for clarity, but using 'amount' internally
}

export default function ScrollReveal({
  children,
  direction = 'up',
  effect = 'fade',
  duration = 0.6,
  delay = 0,
  staggerChildren = 0.1,
  className = '',
  distance = 50,
  once = true,
  threshold = 0.2,
}: ScrollRevealProps) {
  const controls = useAnimation();
  const ref = useRef(null);
  // useInView accepts 'amount' not 'threshold'
  const inView = useInView(ref, { once, amount: threshold });

  // Handle initial animation variants
  const getInitialVariant = (): Variant => {
    const initial: Variant = { opacity: 0 };
    
    if (effect === 'fade') {
      return initial;
    }
    
    if (effect === 'slide' || effect === 'spring' || effect === 'bounce') {
      switch (direction) {
        case 'up':
          return { ...initial, y: distance };
        case 'down':
          return { ...initial, y: -distance };
        case 'left':
          return { ...initial, x: distance };
        case 'right':
          return { ...initial, x: -distance };
        case 'scale':
          return { ...initial, scale: 0.8 };
        case 'rotate':
          return { ...initial, rotate: -10 };
        case 'flip':
          return { ...initial, rotateX: 90 };
        default:
          return initial;
      }
    }
    
    return initial;
  };

  // Handle animation variants
  const getAnimateVariant = (): Variant => {
    const animate: Variant = { opacity: 1 };
    
    if (effect === 'fade') {
      return animate;
    }
    
    if (effect === 'slide' || effect === 'spring' || effect === 'bounce') {
      switch (direction) {
        case 'up':
        case 'down':
          return { ...animate, y: 0 };
        case 'left':
        case 'right':
          return { ...animate, x: 0 };
        case 'scale':
          return { ...animate, scale: 1 };
        case 'rotate':
          return { ...animate, rotate: 0 };
        case 'flip':
          return { ...animate, rotateX: 0 };
        default:
          return animate;
      }
    }
    
    return animate;
  };

  // Handle transition
  const getTransition = () => {
    switch (effect) {
      case 'spring':
        return {
          type: 'spring', 
          damping: 12, 
          stiffness: 100,
          delay,
        };
      case 'bounce':
        return {
          type: 'spring',
          stiffness: 300,
          damping: 10,
          delay,
        };
      case 'stagger':
        return {
          staggerChildren,
          delayChildren: delay,
        };
      default:
        return {
          duration,
          delay,
          ease: 'easeOut',
        };
    }
  };

  const variants: Variants = {
    hidden: getInitialVariant(),
    visible: getAnimateVariant(),
  };

  // Child variants for staggered animations
  const childVariants: Variants = {
    hidden: getInitialVariant(),
    visible: {
      ...getAnimateVariant(),
      transition: {
        duration: 0.5,
      },
    },
  };

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else if (!once) {
      controls.start('hidden');
    }
  }, [controls, inView, once]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={effect === 'stagger' ? { visible: { transition: getTransition() } } : variants}
      transition={effect !== 'stagger' ? getTransition() : undefined}
      className={className}
    >
      {effect === 'stagger' ? (
        <>{
          Array.isArray(children) 
            ? children.map((child, i) => (
                <motion.div key={i} variants={childVariants}>
                  {child}
                </motion.div>
              ))
            : <motion.div variants={childVariants}>{children}</motion.div>
        }</>
      ) : (
        children
      )}
    </motion.div>
  );
}