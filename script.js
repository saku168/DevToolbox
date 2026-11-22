
// DevToolbox - Main JavaScript

// Theme switcher
const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
});

// JSON Formatter
document.getElementById("json-format").addEventListener("click", () => {
  const input = document.getElementById("json-input").value;
  const output = document.getElementById("json-output");

  try {
    output.textContent = JSON.stringify(JSON.parse(input), null, 2);
  } catch {
    output.textContent = "Invalid JSON. Please check your input.";
  }
});

// Base64 Converter
document.getElementById("base64-encode").addEventListener("click", () => {
  const input = document.getElementById("base64-input").value;
  document.getElementById("base64-output").textContent =
    btoa(unescape(encodeURIComponent(input)));
});

document.getElementById("base64-decode").addEventListener("click", () => {
  const input = document.getElementById("base64-input").value;

  try {
    document.getElementById("base64-output").textContent =
      decodeURIComponent(escape(atob(input)));
  } catch {
    document.getElementById("base64-output").textContent =
      "Invalid Base64 text.";
  }
});

// Password Generator
document.getElementById("password-generate").addEventListener("click", () => {
  const lengthInput = document.getElementById("password-length");
  const length = Math.min(64, Math.max(8, Number(lengthInput.value) || 16));
  lengthInput.value = length;

  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
  const randomValues = new Uint32Array(length);
  crypto.getRandomValues(randomValues);

  let password = "";

  for (let i = 0; i < length; i++) {
    password += characters[randomValues[i] % characters.length];
  }

  document.getElementById("password-output").textContent = password;
});

// Color Picker
const colorInput = document.getElementById("color-input");

colorInput.addEventListener("input", () => {
  document.getElementById("color-output").textContent =
    colorInput.value.toUpperCase();
});

// Text Counter
const counterInput = document.getElementById("counter-input");

counterInput.addEventListener("input", () => {
  const text = counterInput.value;

  document.getElementById("char-count").textContent = text.length;

  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  document.getElementById("word-count").textContent = words;
});

// Case Converter
const caseInput = document.getElementById("case-input");

document.getElementById("uppercase").addEventListener("click", () => {
  caseInput.value = caseInput.value.toUpperCase();
});

document.getElementById("lowercase").addEventListener("click", () => {
  caseInput.value = caseInput.value.toLowerCase();
});

// Tool Search
const searchInput = document.getElementById("search");
const toolCards = document.querySelectorAll(".tool-card");
const toolCount = document.getElementById("tool-count");
const noResults = document.getElementById("no-results");

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase().trim();
  let visibleCount = 0;

  toolCards.forEach((card) => {
    const matches = card.dataset.tool.includes(query);
    card.hidden = !matches;

    if (matches) visibleCount++;
  });

  toolCount.textContent = `${visibleCount} tools`;
  noResults.hidden = visibleCount !== 0;
});
