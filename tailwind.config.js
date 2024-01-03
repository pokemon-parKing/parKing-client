/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "black-p": "var(--pk-black)",
        "black-s": "var(--pk-black-secondary)",
        "burgundy-p": "var(--pk-burgundy)",
        "burgundy-s": "var(--pk-burgundy-secondary)",
        "white-p": "var(--pk-white)",
        "white-s": "var(--pk-white-secondary)",
        "beige-p": "var(--pk-beige)",
        "beige-s": "var(--pk-beige-secondary)",
      },
      height: {
<<<<<<< HEAD
        'slider-max-height': '53rem', 
=======
        'slider-max-height': '61.375rem', 
>>>>>>> 57a1c18b9c1ff542d531b5f3a272b33da49df71d
      }
    },
  },
  plugins: [require("daisyui")],
};
