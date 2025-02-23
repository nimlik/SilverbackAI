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
        sora: {
          bg: "#FFE5EC", // Lighter Pink (Background)
          primary: "#89B4E5", // Deeper Sky Blue
          secondary: "#FF9BB3", // Deeper Pink
          accent: "#B8A3D1", // Deeper Lavender
          light: "#BDE0FE", // Light Blue
          neutral: "#f0e9e9", // Light warm gray (for navbar/footer)
        },
      },
      fontFamily: {
        "sf-pro": ["var(--font-sf-pro-display)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
