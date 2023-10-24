module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        black: {
          900: "#000000",
          "900_7f": "#0000007f",
          "900_0c": "#0000000c",
          "900_19": "#00000019",
          "900_a8": "#000000a8",
          "900_a3": "#000000a3",
          "900_3f": "#0000003f",
          "900_4c": "#0000004c",
          "900_23": "#00000023",
          "900_33": "#00000033",
        },
        blue: {
          50: "#e1eeff",
          300: "#6ab2f2",
          A400: "#0e73f6",
          A200_99: "#3f94f799",
          A200: "#3f94f7",
          A200_35: "#3f94f735",
          A200_33: "#3f94f733",
          "100_26": "#b7d8ff26",
        },
        gray: {
          50: "#f6f8f9",
          100: "#f6f7f8",
          200: "#e9e7e7",
          300: "#dde1e3",
          400: "#b7b5b5",
          500: "#aaaaaa",
          600: "#ac5d72",
          700: "#666666",
          800: "#444444",
          900: "#212121",
          "800_03": "#4e4e4e",
          "800_02": "#383737",
          "800_01": "#474646",
          "300_4c": "#dddddd4c",
          "50_66": "#f6f8f966",
          "600_4c": "#6f6d6d4c",
          "500_01": "#a6a7a8",
          "500_02": "#adabab",
          "300_2d": "#dddddd2d",
          "100_d1": "#f4f4f4d1",
          "200_a5": "#e8e8e8a5",
          "900_51": "#1a202451",
          "400_0c": "#b7b5b50c",
          "200_01": "#e8e8e8",
          "200_02": "#e5e8ea",
          "100_70": "#f4f4f470",
          "200_03": "#e5e9eb",
          "100_02": "#f4f7f9",
          "100_01": "#f4f4f4",
          "800_4c": "#4e4e4e4c",
          "400_a0": "#b4b4b4a0",
          "900_02": "#1a1f23",
          "900_03": "#1e1e1e",
          "900_04": "#262020",
          "600_02": "#6f6d6d",
          "900_05": "#262121",
          "600_01": "#757373",
          "900_01": "#16192c",
          "900_06": "#222222",
          "300_03": "#e6e6e6",
          "300_02": "#e1e1e1",
          "900_07": "#20004a",
          "300_01": "#dddddd",
          "300_7f": "#dddddd7f",
        },
        red: { 400: "#c84a5c", "400_02": "#f76659", "400_01": "#c74a5b" },
        green: { 400: "#47d16c", 600: "#4b8954", A100: "#b2f2bb" },
        deep_purple: { 200: "#aa9fc7", A200: "#9747ff", A200_01: "#8864ed" },
        indigo: {
          50: "#e4ecf7",
          400: "#4275b0",
          900: "#0b1354",
          "50_01": "#e4ebf3",
          "200_2b": "#9daec32b",
          A700: "#0046fc",
          "900_e0": "#0b1354e0",
          A200: "#4c6fff",
        },
        light_blue: {
          50: "#d7edff",
          100: "#a5d8ff",
          A700: "#0b95ff",
          "50_01": "#d6edfe",
        },
        blue_gray: {
          50: "#edf0f3",
          100: "#d5dadd",
          200: "#b0b9be",
          300: "#9aa6ac",
          400: "#84859e",
          500: "#6e7c87",
          600: "#5a6771",
          700: "#425466",
          900: "#363636",
          "900_02": "#27272e",
          "900_01": "#21293c",
          "100_33": "#d9d9d933",
          "100_01": "#cfcfcf",
          "100_02": "#d4dadc",
          "100_03": "#caced1",
          "100_04": "#d0cfcf",
          "600_51": "#5b687151",
          "500_01": "#6e7c86",
          "100_6c": "#d7d4d46c",
          "100_3f": "#cfcfcf3f",
          "50_01": "#ecf1f7",
          "900_04": "#252c32",
          "900_03": "#242c31",
          "600_01": "#4b587c",
          "300_01": "#9ba2b0",
          "300_7f": "#9ba2b07f",
        },
        pink: { 100: "#f2b2bb", 300: "#f765a3" },
        lime: { 700: "#d0992f", 900: "#835101", "700_01": "#d0992e" },
        amber: { 100: "#f2efb2", 300: "#f8dd4e" },
        orange: { A100: "#e7cf78" },
        purple: { 100: "#dcc1ff" },
        deep_orange: { 300: "#ef9266" },
        cyan: { "900_0f": "#0c45680f" },
        white: { A700: "#ffffff" },
        teal: { A400: "#19ff9e" },
      },
      boxShadow: {
        bs3: "0px -1px  1px 0px #e4ebf3",
        bs9: "0px 1px  2px 0px #9daec32b",
        bs7: "0px 2px  2px 0px #e1e1e1",
        bs6: "0px 0px  1px 0px #1a202451",
        bs8: "0px 1px  2px 0px #5b687151",
        bs: "0px 2px  4px 0px #0000003f",
        bs5: "0px 4px  42px 0px #0c45680f",
        bs1: "-1px 1px  4px 0px #0000003f",
        bs4: "0px 2px  10px 0px #00000033",
        bs2: "0px 32px  64px -12px #00000023",
        bs10: "12px 12px  12px 12px #0000003f",
      },
      fontFamily: {
        inter: "Inter",
        plusjakartasans: "Plus Jakarta Sans",
        grifter: "GRIFTER",
        liberationsans: "Liberation Sans",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};