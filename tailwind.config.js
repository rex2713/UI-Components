/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // 主色 (Primary)
        primary: "#5D9CEC", // 馬卡龍淺藍色
        // 次色 (Secondary)
        secondary: "#4A90E2", // 鮮亮的藍色
        // 子色 (Tertiary)
        tertiary: "#003B6F", // 深藍色
        // 背景色 (Background)
        background: "#F5F7FA", // 淺藍灰色背景
        // 輸入框背景色 (Input Background)
        inputBackground: "#FFFFFF", // 白色背景
        // 輸入框淺色邊框顏色 (Input Border)
        inputBorder: "#D0E4F0", // 輕微藍色邊框
        // 輸入框邊框懸停顏色 (Input Border Hover)
        inputBorderHover: "#B3D1E3", // 較亮的藍色邊框
        // 輸入框邊框焦點顏色 (Input Border Focus)
        inputBorderFocus: "#5D9CEC", // 主藍色
        // 按鈕背景色 (Button Background)
        buttonBackground: "#F8C471", // 馬卡龍金色
        // 按鈕文字顏色 (Button Text)
        buttonText: "#003B6F", // 按鈕文字深藍色
        // 按鈕懸停背景色 (Button Hover)
        buttonHover: "#F7B731", // 較亮的金色
        // 按鈕禁用背景色 (Button Disabled)
        buttonDisabled: "#BFC9D6", // 禁用狀態的淺灰藍色
        // 標題顏色 (Heading)
        heading: "#003B6F", // 主標題深藍色
        // 副標題顏色 (Subheading)
        subheading: "#5D9CEC", // 副標題淺藍色
        // 文本顏色 (Text)
        text: "#4A4A4A", // 中性色文本
        // 鏈接顏色 (Link)
        link: "#5D9CEC", // 鏈接淺藍色
        // 鏈接懸停顏色 (Link Hover)
        linkHover: "#4A90E2", // 鏈接懸停時的藍色
      },
    },
  },
  plugins: [],
};
