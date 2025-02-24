import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  wave: {
    animationName: "$waveAnimation",
    animationDuration: "2.5s",
    animationIterationCount: "infinite",
    transformOrigin: "70% 70%",
    display: "inline-block",

    "@media (max-width: 768px)": {
      animationName: "$waveAnimationMobile",
    },
  },
  "@keyframes waveAnimation": {
    "0%": { transform: "rotate(0.0deg)" },
    "10%": { transform: "rotate(14.0deg)" },
    "20%": { transform: "rotate(-8.0deg)" },
    "30%": { transform: "rotate(14.0deg)" },
    "40%": { transform: "rotate(-4.0deg)" },
    "50%": { transform: "rotate(10.0deg)" },
    "60%": { transform: "rotate(0.0deg)" },
    "100%": { transform: "rotate(0.0deg)" },
  },
  "@keyframes waveAnimationMobile": {
    "0%": { transform: "rotate(0.0deg)" },
    "10%": { transform: "rotate(6.0deg)" },  // Reduced angles
    "20%": { transform: "rotate(-4.0deg)" },
    "30%": { transform: "rotate(6.0deg)" },
    "40%": { transform: "rotate(-2.0deg)" },
    "50%": { transform: "rotate(4.0deg)" },
    "60%": { transform: "rotate(0.0deg)" },
    "100%": { transform: "rotate(0.0deg)" },
  },
});

const WaveEmoji = ({ emoji = "👋" }) => {
  const classes = useStyles();
  return <span className={classes.wave}>{emoji}</span>;
};

export default WaveEmoji;
