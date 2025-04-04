document.addEventListener('DOMContentLoaded', function() {
    // Example: Change color of section when clicked
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.addEventListener('click', () => {
            section.style.backgroundColor = '#e0e0e0';
        });
    });
});
