document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-links a');

    // Smooth scroll behavior
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            window.scrollTo({
                top: target.offsetTop,
                behavior: 'smooth'
            });
        });
    });
});

// Typing effect text
const dynamicText = "Front-End Developer";

// Function to start typing effect
function typeText() {
    const dynamicTextElement = document.getElementById('dynamic-text');
    let index = 0;

    // Typing out the text
    function type() {
        if (index < dynamicText.length) {
            dynamicTextElement.textContent += dynamicText.charAt(index);
            dynamicTextElement.style.color='white'
            index++;
            setInterval(type, 100); // Adjust speed by changing the timeout
        }
    }

    type();
}

// Start the typing effect when the page loads
window.onload = typeText;
