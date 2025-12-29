// Basic “startup” interactions: theme toggle + dynamic footer year + deploy timestamp.

const yearEl = document.getElementById("year");
yearEl.textContent = new Date().getFullYear();

const deployTimeEl = document.getElementById("deployTime");
deployTimeEl.textContent = new Date().toLocaleString();

const themeBtn = document.getElementById("themeBtn");
const saved = localStorage.getItem("theme");
if (saved) document.documentElement.setAttribute("data-theme", saved);

themeBtn.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme") || "dark";
  const next = current === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
});
