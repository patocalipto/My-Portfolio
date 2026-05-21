import './style.css';
import { initThreeScene } from './three-scene.js';

// --- Dark Mode Logic ---
const themeToggleBtn = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');

// Set initial theme
if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);
  themeToggleBtn.textContent = currentTheme === 'dark' ? '☀️' : '🌙';
} else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.documentElement.setAttribute('data-theme', 'dark');
  themeToggleBtn.textContent = '☀️';
}

themeToggleBtn.addEventListener('click', () => {
  let theme = document.documentElement.getAttribute('data-theme');
  if (theme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    themeToggleBtn.textContent = '🌙';
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    themeToggleBtn.textContent = '☀️';
  }
});

// Initialize the 3D scene once the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  initThreeScene();
});

// --- Copy to Clipboard Logic ---
const copyEmailBtn = document.getElementById('copy-email-btn');
if (copyEmailBtn) {
  copyEmailBtn.addEventListener('click', () => {
    const emailText = document.getElementById('email-text').textContent;
    navigator.clipboard.writeText(emailText).then(() => {
      copyEmailBtn.textContent = 'Copied! ✅';
      setTimeout(() => {
        copyEmailBtn.textContent = '📋 Copy';
      }, 2000);
    }).catch(err => {
      console.error('Failed to copy email: ', err);
    });
  });
}
