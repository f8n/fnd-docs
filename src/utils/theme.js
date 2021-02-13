const roobertFontStack = `"Roobert", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`;

const formularFontStack = `"Formular Mono", Consolas, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", Monaco, "Courier New", Courier, monospace`;

export const easing = {
  bouncy: {
    string: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
    array: [0.68, -0.55, 0.265, 1.55],
  },
  smooth: {
    string: "cubic-bezier(0.23, 1, 0.32, 1)",
    array: [0.23, 1, 0.32, 1],
  },
};

export const transitions = {
  smooth: {
    fast: `all 300ms ${easing.smooth.string}`,
    medium: `all 600ms ${easing.smooth.string}`,
    slow: `all 900ms ${easing.smooth.string}`,
    snail: `all 1200ms ${easing.smooth.string}`,
  },
};

export default {
  buttons: {
    primary: {
      backgroundColor: "transparent",
      fontFamily: formularFontStack,
      borderColor: "#666 !important",
      border: "solid 1px",
      color: "white.100",
      borderRadius: 999,
      minHeight: 60,
      paddingX: 40,
      textAlign: "center",
      fontSize: [1, null, 2],
      letterSpacing: 1.44,
      transition: transitions.smooth.fast,
      willChange: "borderColor, transform",
      cursor: "pointer",
      "@media (hover: hover)": {
        "&:hover": {
          transform: "translateY(-4px)",
          borderColor: "#fff !important",
        },
      },
    },
  },
  text: {
    heading: {
      fontSize: [20, null, 24],
      fontFamily: "monospace",
      fontWeight: "body",
      letterSpacing: 1.44,
      lineHeight: [1.6, null, 1.9],
    },
    display: {
      fontSize: [36, 48, 64, 86],
      letterSpacing: [-0.5, null, null, -2],
      lineHeight: [1, null, 0.95],
      maxWidth: 1080,
    },
  },
  colors: {
    text: "#000",
    background: "#fff",
    primary: "#07c",
    black: {
      100: "#000000",
      95: "#0D0D0D",
      90: "#1A1A1A",
      80: "#333333",
      70: "#4D4D4D",
      60: "#666666",
      50: "#7F7F7F",
      40: "#999999",
      30: "#B3B3B3",
      20: "#CCCCCC",
      10: "#E6E6E6",
      5: "#F2F2F2",
    },
    white: {
      100: "#FFFFFF",
    },
  },
  fonts: {
    body: roobertFontStack,
    monospace: formularFontStack,
    heading: roobertFontStack,
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  fontWeights: {
    body: 400,
    heading: 600,
    bold: 600,
  },
  lineHeights: {
    body: [1.7, null, 1.9],
    heading: 1.125,
  },
  letterSpacings: {
    body: "normal",
    caps: "0.2em",
  },
  styles: {
    root: {
      fontFamily: "monospace",
      fontWeight: "body",
      backgroundColor: "black.100",
      fontSize: [1, null, 2],
      lineHeight: [1.7, null, 1.9],
      color: "white.100",
    },
  },
};
