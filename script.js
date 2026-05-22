document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const storedThemeSetting = localStorage.getItem('site-theme-configuration');
    
    if (storedThemeSetting === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggleBtn.textContent = 'Light View';
    }

    themeToggleBtn.addEventListener('click', () => {
        const activeTheme = document.documentElement.getAttribute('data-theme');
        if (activeTheme === 'dark') {
            document.documentElement.removeAttribute('data-theme');
            localStorage.setItem('site-theme-configuration', 'light');
            themeToggleBtn.textContent = 'Dark View';
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('site-theme-configuration', 'dark');
            themeToggleBtn.textContent = 'Light View';
        }
    });
});
