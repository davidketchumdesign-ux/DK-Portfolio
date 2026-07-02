export const animationConfig = {
  ease: [0.16, 1, 0.3, 1],
  easeOut: [0.33, 1, 0.68, 1],
};

export const revealVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.06,
      ease: animationConfig.easeOut,
    },
  }),
};

export const cardHoverVariants = {
  initial: { y: 0 },
  hover: {
    y: -6,
    transition: {
      duration: 0.4,
      ease: animationConfig.ease,
    },
  },
};

export const imageZoomVariants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.06,
    transition: {
      duration: 0.6,
      ease: animationConfig.ease,
    },
  },
};
