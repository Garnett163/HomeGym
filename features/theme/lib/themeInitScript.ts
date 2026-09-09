export const THEME_INIT_SCRIPT = `
(function () {
  try {
    var savedTheme = localStorage.getItem('theme');

    var theme =
      savedTheme === 'light' || savedTheme === 'dark'
        ? savedTheme
        : 'dark';

    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
  } catch (_) {
    document.documentElement.dataset.theme = 'dark';
    document.documentElement.style.colorScheme = 'dark';
  }
})();
`;
