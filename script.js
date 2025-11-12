/**
 * JavaScript for Guerra Laser Landing Page
 * Handles countdown timer functionality
 */

// ================================
// COUNTDOWN TIMER FUNCTIONALITY
// ================================

/**
 * Set the target launch date
 * Current date + 30 days (approximately 1 month from now)
 */
function getTargetDate() {
    const now = new Date();
    const target = new Date(now.getTime() + (30 * 24 * 60 * 60 * 1000)); // 30 days from now
    return target;
}

// You can also set a specific date by uncommenting and modifying this line:
// const targetDate = new Date('2024-12-15T23:59:59').getTime();

/**
 * Update the countdown timer display
 */
function updateCountdown() {
    // Get current time
    const now = new Date().getTime();
    
    // Get target time
    const targetDate = getTargetDate().getTime();
    
    // Calculate time difference
    const difference = targetDate - now;
    
    // If countdown is finished
    if (difference < 0) {
        document.getElementById('days').textContent = '00';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
        return;
    }
    
    // Calculate days, hours, minutes, seconds
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    
    // Update the display with leading zeros
    document.getElementById('days').textContent = padZero(days);
    document.getElementById('hours').textContent = padZero(hours);
    document.getElementById('minutes').textContent = padZero(minutes);
    document.getElementById('seconds').textContent = padZero(seconds);
}

/**
 * Add leading zero to numbers less than 10
 * @param {number} num - The number to pad
 * @returns {string} - The padded number as a string
 */
function padZero(num) {
    return num < 10 ? '0' + num : num.toString();
}

// ================================
// INITIALIZATION
// ================================

/**
 * Initialize the countdown when the page loads
 */
document.addEventListener('DOMContentLoaded', function() {
    // Update countdown immediately
    updateCountdown();
    
    // Update countdown every second
    setInterval(updateCountdown, 1000);
    
    // Add smooth scroll behavior for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// ================================
// OPTIONAL: PARTICLE EFFECT
// ================================

/**
 * Optional: Add floating particles effect
 * Uncomment the code below to enable particle animation
 */

/*
function createParticles() {
    const particleContainer = document.querySelector('.background-animation');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 5 + 2}px;
            height: ${Math.random() * 5 + 2}px;
            background: rgba(255, 255, 255, 0.5);
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float ${Math.random() * 10 + 10}s linear infinite;
            animation-delay: ${Math.random() * 5}s;
        `;
        particleContainer.appendChild(particle);
    }
}

// Add this CSS for particles animation
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) translateX(${Math.random() * 100 - 50}px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Initialize particles on page load
document.addEventListener('DOMContentLoaded', createParticles);
*/

// ================================
// CONSOLE MESSAGE
// ================================

console.log('%c¡Bienvenido a Guerra Laser! 🚀', 'color: #667eea; font-size: 20px; font-weight: bold;');
console.log('%cEstamos trabajando en algo increíble...', 'color: #764ba2; font-size: 14px;');
