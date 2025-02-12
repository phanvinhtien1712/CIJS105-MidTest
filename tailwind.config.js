/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"], // Sẽ dùng font Poppins cho class font-sans
      // Nếu có các font khác, bạn có thể thêm ở đây...
    },
  },
  plugins: [],
};
