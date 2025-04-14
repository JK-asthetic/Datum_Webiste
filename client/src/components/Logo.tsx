import { SVGProps } from "react";
import { motion } from "framer-motion";

export default function Logo({ className = "", width = 80, height = 80 }: SVGProps<SVGSVGElement> & { width?: number, height?: number }) {
  return (
    <motion.svg 
      width={width} 
      height={height} 
      viewBox="0 0 400 400" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileHover={{ scale: 1.05 }}
    >
      <defs>
        <linearGradient id="headGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1E90FF" />
          <stop offset="100%" stopColor="#0066CC" />
        </linearGradient>
        <linearGradient id="networkGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0066CC" />
          <stop offset="100%" stopColor="#1E90FF" />
        </linearGradient>
      </defs>
      
      {/* Silhouette */}
      <motion.path 
        d="M170 50C170 50 110 70 100 130C90 190 100 270 170 300C240 330 240 340 230 360C220 380 210 390 210 390H160C160 390 130 280 90 240C50 200 50 140 70 100C90 60 130 20 200 20C270 20 270 70 270 70L245 90C245 90 230 50 170 50Z" 
        fill="url(#headGradient)" 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      />
      
      {/* Network */}
      <motion.g 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1.2 }}
      >
        {/* Nodes */}
        <motion.circle cx="240" cy="90" r="12" fill="white" 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.6, duration: 0.4 }}
        />
        <motion.circle cx="270" cy="150" r="12" fill="white" 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.7, duration: 0.4 }}
        />
        <motion.circle cx="310" cy="110" r="12" fill="white" 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.8, duration: 0.4 }}
        />
        <motion.circle cx="330" cy="200" r="12" fill="white" 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.9, duration: 0.4 }}
        />
        <motion.circle cx="290" cy="240" r="12" fill="white" 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.0, duration: 0.4 }}
        />
        <motion.circle cx="220" cy="200" r="12" fill="white" 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.1, duration: 0.4 }}
        />
        <motion.circle cx="320" cy="280" r="12" fill="white" 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.2, duration: 0.4 }}
        />
        <motion.circle cx="270" cy="320" r="12" fill="white" 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.3, duration: 0.4 }}
        />
        
        {/* Lines */}
        <motion.line x1="240" y1="90" x2="310" y2="110" stroke="white" strokeWidth="2" 
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        />
        <motion.line x1="310" y1="110" x2="270" y2="150" stroke="white" strokeWidth="2" 
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        />
        <motion.line x1="270" y1="150" x2="330" y2="200" stroke="white" strokeWidth="2" 
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 1.0, duration: 0.6 }}
        />
        <motion.line x1="330" y1="200" x2="290" y2="240" stroke="white" strokeWidth="2" 
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
        />
        <motion.line x1="290" y1="240" x2="220" y2="200" stroke="white" strokeWidth="2" 
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        />
        <motion.line x1="290" y1="240" x2="320" y2="280" stroke="white" strokeWidth="2" 
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 1.3, duration: 0.6 }}
        />
        <motion.line x1="320" y1="280" x2="270" y2="320" stroke="white" strokeWidth="2" 
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
        />
        <motion.line x1="270" y1="150" x2="240" y2="90" stroke="white" strokeWidth="2" 
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        />
        <motion.line x1="270" y1="150" x2="220" y2="200" stroke="white" strokeWidth="2" 
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 1.6, duration: 0.6 }}
        />
        
        {/* Triangles */}
        <motion.polygon points="260,120 280,150 290,125" fill="#1E90FF" 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.7, duration: 0.4 }}
        />
        <motion.polygon points="300,170 330,180 310,200" fill="#1E90FF" 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.4 }}
        />
        <motion.polygon points="250,220 280,230 260,250" fill="#1E90FF" 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.9, duration: 0.4 }}
        />
        <motion.polygon points="300,260 330,270 310,290" fill="#1E90FF" 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.0, duration: 0.4 }}
        />
        <motion.polygon points="340,110 360,120 350,140" fill="#1E90FF" 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.1, duration: 0.4 }}
        />
        <motion.polygon points="350,170 370,180 360,200" fill="#1E90FF" 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 0.4 }}
        />
        <motion.polygon points="360,240 380,250 370,270" fill="#1E90FF" 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.3, duration: 0.4 }}
        />
      </motion.g>
    </motion.svg>
  );
}
