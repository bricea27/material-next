import { createMuiTheme } from "@material-ui/core/styles";

// See https://material-ui.com/customization/themes/

export default createMuiTheme({
  typography: {
    fontFamily: ["Rubik", "sans-serif"].join(","),
    h1: {
      fontWeight: 900,
      fontSize: "96px",
      lineHeight: "normal",
      letterSpacing: "-1.5px"
    },
    h2: {
      fontWeight: 900,
      fontSize: "60px",
      lineHeight: "normal",
      letterSpacing: "-0.5px"
    },
    h3: {
      fontWeight: 900,
      fontSize: "48px",
      lineHeight: "64px",
      letterSpacing: "0px"
    },
    h4: {
      fontWeight: 900,
      fontSize: "36px",
      lineHeight: "48px",
      letterSpacing: "0.25px"
    },
    h5: {
      fontWeight: 900,
      fontSize: "24px",
      lineHeight: "32px",
      letterSpacing: "0px"
    },
    h6: {
      fontWeight: 900,
      fontSize: "20px",
      lineHeight: "28px",
      letterSpacing: "0.15px"
    },
    subtitle1: {
      fontWeight: 900,
      fontSize: "16px",
      lineHeight: "24px",
      letterSpacing: "0.15px"
    },
    subtitle2: {
      fontWeight: 900,
      fontSize: "14px",
      lineHeight: "20px",
      letterSpacing: "0.1px"
    },
    body1: {
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "24px",
      letterSpacing: "0.44px"
    },
    body2: {
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "20px",
      letterSpacing: "0.25px"
    },
    button: {
      fontWeight: 700,
      fontSize: "14px",
      lineHeight: "20px",
      letterSpacing: "1.35%"
    },
    caption1: {
      fontWeight: 900,
      fontSize: "12px",
      lineHeight: "16px",
      letterSpacing: "0.4px"
    },
    caption2: {
      fontWeight: 400,
      fontSize: "12px",
      lineHeight: "16px",
      letterSpacing: "0.5px"
    },
    overline: {
      fontWeight: 900,
      fontSize: "10px",
      lineHeight: "14px",
      letterSpacing: "0.5px"
    }
  },
  palette: {
    type: "light",
    primary: {
      light: "#9BBFFA",
      main: "#367FF5",
      100: { opaque: "#367FF5", transparent: "rgba(54, 127, 245, 1)" },
      50: { opaque: "#9BBFFA", transparent: "rgba(54, 127, 245, 0.5)" },
      25: { opaque: "#CCDFFC", transparent: "rgba(54, 127, 245, 0.25)" },
      6: { opaque: "#F3F8FF", transparent: "rgba(54, 127, 245, 0.06)" }
    },
    secondary: {
      light: "#FD8CB9",
      main: "#FA1872",
      100: { opaque: "#FA1872", transparent: "rgba(250, 24, 114, 1)" },
      50: { opaque: "#FD8CB9", transparent: "rgba(250, 24, 114, 0.5)" },
      25: { opaque: "#FDC5BD", transparent: "rgba(250, 24, 114, 0.25)" },
      6: { opaque: "#FFF1F7", transparent: "rgba(250, 24, 114, 0.06)" }
    },
    error: {
      light: "#FD8CB9",
      main: "#FA1872",
      100: { opaque: "#FA1872", transparent: "rgba(250, 24, 114, 1)" },
      50: { opaque: "#FD8CB9", transparent: "rgba(250, 24, 114, 0.5)" },
      25: { opaque: "#FDC5BD", transparent: "rgba(250, 24, 114, 0.25)" },
      6: { opaque: "#FFF1F7", transparent: "rgba(250, 24, 114, 0.06)" }
    },
    warning: {
      light: "#FCE39B",
      main: "#F8C737",
      100: { opaque: "#F8C737", transparent: "rgba(248, 199, 55, 1)" },
      50: { opaque: "#FCE39B", transparent: "rgba(248, 199, 55, 0.5)" },
      25: { opaque: "#FDF1CD", transparent: "rgba(248, 199, 55, 0.25)" },
      6: { opaque: "#FFFCF3", transparent: "rgba(248, 199, 55, 0.06)" }
    },
    info: {
      light: "#A3DDFE",
      main: "#46BAFC",
      100: { opaque: "#46BAFC", transparent: "rgba(70, 186, 252, 1)" },
      50: { opaque: "#A3DDFE", transparent: "rgba(70, 186, 252, 0.5)" },
      25: { opaque: "#D0EDFE", transparent: "rgba(70, 186, 252, 0.25)" },
      6: { opaque: "#F4FBFF", transparent: "rgba(70, 186, 252, 0.06)" }
    },
    success: {
      light: "#95E8CE",
      main: "#2AD19D",
      100: { opaque: "#2AD19D", transparent: "rgba(42, 209, 157, 1)" },
      50: { opaque: "#95E8CE", transparent: "rgba(42, 209, 157, 0.5)" },
      25: { opaque: "#C9F3E6", transparent: "rgba(42, 209, 157, 0.25)" },
      6: { opaque: "#F2FDF9", transparent: "rgba(42, 209, 157, 0.06)" }
    },
    grey: {
      100: "#353535",
      50: "rgba(53, 53, 53, 0.5)",
      25: "rgba(53, 53, 53, 0.25)",
      6: "rgba(53, 53, 53, 0.06)",
      3: "rgba(53, 53, 53, 0.03)"
    },
    white: {
      100: "#FFFFFF",
      50: "rgba(255, 255, 255, 0.5)",
      25: "rgba(255, 255, 255, 0.25)",
      6: "rgba(255, 255, 255, 0.06)"
    },
    text: {
      primary: "rgba(53, 53, 53, 1)",
      secondary: "rgba(53, 53, 53, 0.5)"
    },
    divider: "rgba(53, 53, 53, 0.06)"
  }
});
