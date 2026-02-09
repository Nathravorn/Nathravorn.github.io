window.MathJax = window.MathJax || {};
window.MathJax.tex = window.MathJax.tex || {};
window.MathJax.options = window.MathJax.options || {};

// Merge in the default configuration
Object.assign(window.MathJax.tex, {
  tags: "ams",
  inlineMath: [
    ["$", "$"],
    ["\\(", "\\)"],
  ],
});

Object.assign(window.MathJax.options, {
  renderActions: {
    addCss: [
      200,
      function (doc) {
        const style = document.createElement("style");
        style.innerHTML = `
          .mjx-container {
            color: inherit;
          }
        `;
        document.head.appendChild(style);
      },
      "",
    ],
  },
});
