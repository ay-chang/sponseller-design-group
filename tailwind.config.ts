import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "light-grey": "#ededed",
        "dark-grey": "#1d1d1b",
      },
      spacing: {
        // Custom height and width options
        "0.5": "2px",
        "1.5": "6px",
        "2.5": "10px",
        "4.5": "18px",
        "7": "28px",
        "9": "36px",
        "15": "60px",
        "18": "72px",
        "22": "88px",
        "36": "144px",
        "42": "168px",
        "60": "240px",
        "72": "288px",
        "80": "320px",
        "96": "384px",
        "120": "480px",
        "140": "560px",
        "150": "600px",
        "160": "640px",
        "200": "800px",
        "240": "960px",
        "300": "1200px",
        "400": "1600px",
        "6/10": "60%",
        "8/10": "80%",
      },
      fontSize: {
        super: "7rem",
      },
    },
  },
  plugins: [],
} satisfies Config;
