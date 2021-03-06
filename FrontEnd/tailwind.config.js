const defaultTheme = require("tailwindcss/defaultTheme");
const windmill = require("@windmill/react-ui/config");

module.exports = windmill({
  purge: ["src/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        business: ["Montserrat", "sans-serif"],
      },
      height: {
        "h-80": "20rem",
        "h-70": "15rem",
        "h-75": "18rem",
        "h-85": "22rem",
        "h-86": "22rem",
        "h-87": "23rem",
        "h-88": "24rem",
        "h-96": "200px",
        "h-128": "300px",
        "h-150": "25rem",
        "h-151": "26rem",
        "h-152": "27rem",
        "h-153": "28rem",
        "h-154": "29rem",
        "h-155": "30rem",
        "h-156": "31rem",
        "h-157": "32rem",
        "h-158": "33rem",
        "h-159": "34rem",
        "h-160": "35rem",
        "h-161": "36rem",
        "h-162": "37rem",
        "h-163": "38rem",
        "h-164": "39rem",
        "h-165": "40rem",
        "h-166": "41rem",
        "h-167": "42rem",
        "h-168": "43rem",
        "h-169": "44rem",
        "h-170": "45rem",
      },
      width: {
        80: "20rem",
        70: "15rem",
        75: "18rem",
        85: "22rem",
        86: "22rem",
        87: "23rem",
        88: "24rem",
        96: "200px",
        128: "300px",
        150: "25rem",
        151: "26rem",
        152: "27rem",
        153: "28rem",
        154: "29rem",
        155: "30rem",
        156: "31rem",
        157: "32rem",
        158: "33rem",
        159: "34rem",
        160: "35rem",
        161: "36rem",
        162: "37rem",
        163: "38rem",
        164: "39rem",
        165: "40rem",
        166: "41rem",
        167: "42rem",
        168: "43rem",
        169: "44rem",
        170: "45rem",
        200: "55rem",
        205: "65rem",
        210: "75rem",
      },
      backgroundImage: (theme) => ({
        "hero-bg":
          "url(https://unsplash.com/photos/3fPXt37X6UQ/download?force=true&w=1920)",
      }),
      boxShadow: {
        bottom:
          "0 5px 6px -7px rgba(0, 0, 0, 0.6), 0 2px 4px -5px rgba(0, 0, 0, 0.06)",
      },
      minWidth: {
        10: "2.5rem",
        48: "12rem",
      },
      opacity: {
        90: "0.9",
      },
      scale: {
        98: ".98",
      },
      animation: {
        float: "float 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5%)" },
        },
      },
      inset: {
        "1/2": "50%",
        full: "100%",
      },
      letterSpacing: {
        tighter: "-0.02em",
        tight: "-0.01em",
        normal: "0",
        wide: "0.01em",
        wider: "0.02em",
        widest: "0.4em",
      },
      lineHeight: {
        none: "1",
        tighter: "1.125",
        tight: "1.25",
        snug: "1.375",
        normal: "1.5",
        relaxed: "1.625",
        loose: "2",
        3: ".75rem",
        4: "1rem",
        5: "1.2rem",
        6: "1.5rem",
        7: "1.75rem",
        8: "2rem",
        9: "2.25rem",
        10: "2.5rem",
      },

      customForms: (theme) => ({
        default: {
          "input, textarea, multiselect, select, checkbox, radio": {
            backgroundColor: theme("colors.white"),
            borderColor: theme("colors.gray.300"),
            borderRadius: theme("borderRadius.default"),
            "&:focus": {
              outline: undefined,
              boxShadow: undefined,
              borderColor: theme("colors.gray.500"),
            },
          },
          "input, textarea, multiselect, select": {
            backgroundColor: theme("colors.white"),
            fontSize: undefined,
            lineHeight: undefined,
            paddingTop: theme("spacing.3"),
            paddingRight: theme("spacing.4"),
            paddingBottom: theme("spacing.3"),
            paddingLeft: theme("spacing.4"),
          },
          "input, textarea": {
            "&::placeholder": {
              color: theme("colors.gray.500"),
            },
          },
          select: {
            paddingRight: theme("spacing.10"),
            iconColor: theme("colors.gray.400"),
          },
          "checkbox, radio": {
            color: theme("colors.gray.800"),
            backgroundColor: theme("colors.white"),
            borderRadius: theme("borderRadius.sm"),
          },
        },
      }),
    },
  },
  variants: {
    backgroundColor: ["responsive", "hover", "focus", "group-hover"],
    textColor: ["responsive", "hover", "focus", "group-hover"],
    translate: ["responsive", "hover", "focus", "group-hover"],
    boxShadow: ["responsive", "hover", "focus", "focus-within"],
    opacity: ["responsive", "hover", "focus", "group-hover"],
  },
  plugins: [require("@tailwindcss/custom-forms")],
});
