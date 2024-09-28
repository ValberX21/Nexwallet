import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

interface LoadingScreenProps {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const spinnerVariants = {
  initial: {
    rotate: 0,
  },
  animate: {
    rotate: 360,
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: 'linear',
    },
  },
};

const LoadingScreen: React.FC<LoadingScreenProps> = ({ setLoading }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [setLoading]);

  return (
    <div className="flex justify-center items-center h-screen w-screen bg-black">
      <motion.div
        className="w-20 h-20 border-t-4 border-b-4 border-orange-500 rounded-full"
        variants={spinnerVariants}
        initial="initial"
        animate="animate"
      />
    </div>
  );
};

export default LoadingScreen;
