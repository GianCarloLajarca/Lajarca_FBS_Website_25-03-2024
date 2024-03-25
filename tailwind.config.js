module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      
      backgroundImage: {
        hero: "url('/dist/img/hero-pattern.svg')",
        services: "url(/dist/img/what-we-offer-bg-scaled.jpg)",
      },

      colors:{
        dark:"#2b2b2b",
        light:"#ffffff",
        clrLightGray: "#f5f5f5",
        clrMagentaPurple: "#7c2d56",
        clrLightMagenta: "#be2a76",
        clrAccent: "#6a103f"
      },
      listStyleType: {
        none: "none",
        disc: "disc",
        decimal: "decimal",
        square: "square",
        circle: "circle",
        roman: "upper-roman",
      },
      animation: {
        'gradient': 'Gradient 15s ease forwards',
        'fadeInUp': 'fadeInUp 1s ease-out',
        'slideDown': 'slideDown 0.5s linear',
        'fadeInLeft': 'fadeInLeft 1s ease-out',
        'fadeInRight': 'fadeInRight 1s ease-out',
        'tagAnimation': 'tagAnimation 1s ease-out',
      },
    },
  },
  plugins: [],
}
