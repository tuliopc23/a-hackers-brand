export const terminalEffects = {
  bootSequence: {
    hidden: { opacity: 0, scale: 0.95, filter: 'blur(10px)' },
    visible: {
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 25,
        staggerChildren: 0.1
      }
    }
  },
  commandBlock: {
    hidden: { opacity: 0, x: -20, filter: 'blur(4px)' },
    visible: {
      opacity: 1,
      x: 0,
      filter: 'blur(0px)',
      transition: { type: 'spring', stiffness: 400, damping: 20 }
    },
    hover: {
      scale: 1.01,
      backgroundColor: 'rgba(0, 212, 170, 0.05)',
      boxShadow: '0 8px 32px rgba(0, 212, 170, 0.15)',
      transition: { duration: 0.15, ease: 'easeOut' }
    }
  },
  liquidFlow: {
    animate: {
      background: [
        'radial-gradient(circle at 20% 20%, rgba(0, 212, 170, 0.1) 0%, transparent 50%)',
        'radial-gradient(circle at 80% 80%, rgba(0, 212, 170, 0.1) 0%, transparent 50%)',
        'radial-gradient(circle at 20% 20%, rgba(0, 212, 170, 0.1) 0%, transparent 50%)'
      ],
      transition: { duration: 10, repeat: Infinity, ease: 'easeInOut' }
    }
  },
  cursor: {
    blink: {
      opacity: [1, 0],
      transition: { duration: 1, repeat: Infinity, ease: 'steps(1, end)' }
    }
  }
};
