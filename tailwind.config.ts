import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        "hero-bg": "url('/images/portait/portait2.jpg')",
        "seconde-bg": "url('/images/portait/portait6.jpg')",
        "three-bg": "url('/images/portait/portait4.jpg')",
        "maefah-bg": "url('/images/Countdown/wow.jpg')",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["cupcake"],
  },
} satisfies Config;
