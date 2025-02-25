import localFont from "next/font/local";

export const sfProDisplay = localFont({
  src: [
    {
      path: "../fonts/sf-pro-display/SFProDisplayRegular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/sf-pro-display/SFProDisplayMedium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/sf-pro-display/SFProDisplayBold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/sf-pro-display/SFProDisplayBlackItalic.otf",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-sf-pro-display",
  display: "swap",
  adjustFontFallback: "Arial"
});