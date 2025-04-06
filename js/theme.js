/**
 * Theme switcher for RecoverThisFile.com
 * Enables dark/light mode functionality
 */
(function() {
    'use strict';
    
    // DOM elements
    const themeSwitch = document.getElementById('theme-switch');
    const htmlElement = document.documentElement;
    
    // Theme constants
    const THEMES = {
        LIGHT: 'light-theme',
        DARK: 'dark-theme'
    };
    
    // Storage key for theme preference
    const STORAGE_KEY = 'recoverthisfile-theme-preference';
    
    // Initialize theme
    function initTheme() {
        // Check for saved preference
        let storedTheme = localStorage.getItem(STORAGE_KEY);
        
        // If no saved preference, check system preference
        if (!storedTheme) {
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            storedTheme = prefersDark ? THEMES.DARK : THEMES.LIGHT;
        }
        
        // Apply the theme
        applyTheme(storedTheme);
        
        // Update the toggle button
        updateToggleButton(storedTheme);
    }
    
    // Apply theme to the page
    function applyTheme(theme) {
        if (theme === THEMES.DARK) {
            htmlElement.classList.add('dark-theme');
        } else {
            htmlElement.classList.remove('dark-theme');
        }
    }
    
    // Update the toggle button appearance
    function updateToggleButton(theme) {
        if (themeSwitch) {
            themeSwitch.textContent = theme === THEMES.DARK ? '🌞' : '🌙';
            themeSwitch.setAttribute('aria-label', 
                theme === THEMES.DARK ? 'Switch to light mode' : 'Switch to dark mode');
        }
    }
    
    // Toggle between themes
    function toggleTheme() {
        const currentTheme = htmlElement.classList.contains('dark-theme') ? 
            THEMES.DARK : THEMES.LIGHT;
        const newTheme = currentTheme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK;
        
        // Apply and save the new theme
        applyTheme(newTheme);
        localStorage.setItem(STORAGE_KEY, newTheme);
        
        // Update toggle button
        updateToggleButton(newTheme);
        
        // Add a little animation to theme switch
        animateThemeSwitch();
    }
    
    // Add a small animation when switching themes
    function animateThemeSwitch() {
        // Create a ripple effect div
        const ripple = document.createElement('div');
        ripple.className = 'theme-switch-ripple';
        document.body.appendChild(ripple);
        
        // Trigger animation
        setTimeout(() => {
            ripple.style.transform = 'scale(100)';
            ripple.style.opacity = '0';
            
            // Remove after animation completes
            setTimeout(() => {
                document.body.removeChild(ripple);
            }, 500);
        }, 10);
    }
    
    // Attach event listener to theme toggle button
    if (themeSwitch) {
        themeSwitch.addEventListener('click', toggleTheme);
    }
    
    // Initialize theme on page load
    document.addEventListener('DOMContentLoaded', initTheme);
})(); 