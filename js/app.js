/**
 * FitGenZ AI - JavaScript Application
 * ===================================
 * Main app logic for interactivity and dynamic features
 * 
 * Features:
 * - Mobile navigation toggle
 * - Form validation and processing
 * - Dynamic personalized recommendations
 * - Smooth scrolling and animations
 * - Performance optimization (lazy loading, debouncing)
 * - Accessibility enhancements
 */

'use strict';

// ======================== DOM Elements ========================
const hamburgerBtn = document.getElementById('hamburgerBtn');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const assessmentForm = document.getElementById('assessmentForm');
const ctaBtn = document.getElementById('ctaBtn');
const restartBtn = document.getElementById('restartBtn');
const resultsSection = document.getElementById('results');
const resultsContent = document.getElementById('resultsContent');

// ======================== Fitness Plans Database ========================
const fitnessPlans = {
    beginner_lose_weight: {
        title: '🏃 Weight Loss Foundation Program',
        duration: '12 weeks',
        frequency: '3 days per week',
        workouts: [
            { day: 'Monday', exercise: 'Brisk Walking', duration: '30 minutes', intensity: 'Moderate' },
            { day: 'Wednesday', exercise: 'Swimming or Light Cycling', duration: '30 minutes', intensity: 'Light to Moderate' },
            { day: 'Friday', exercise: 'Bodyweight Circuit (squats, push-ups, planks)', duration: '25 minutes', intensity: 'Moderate' }
        ],
        meals: [
            'Breakfast: Oatmeal with berries and almonds',
            'Lunch: Grilled chicken with quinoa and vegetables',
            'Dinner: Baked salmon with sweet potato and broccoli',
            'Snacks: Apple, Greek yogurt, or mixed nuts'
        ],
        tips: [
            '✅ Start slow and build consistency',
            '✅ Stay hydrated - drink 8-10 glasses of water daily',
            '✅ Get 7-9 hours of sleep',
            '✅ Track your progress weekly'
        ]
    },
    beginner_gain_muscle: {
        title: '💪 Muscle Building Starter Pack',
        duration: '12 weeks',
        frequency: '3-4 days per week',
        workouts: [
            { day: 'Monday', exercise: 'Upper Body (push-ups, rows, shoulder presses)', duration: '40 minutes', intensity: 'Moderate' },
            { day: 'Wednesday', exercise: 'Lower Body (squats, lunges, calf raises)', duration: '40 minutes', intensity: 'Moderate' },
            { day: 'Friday', exercise: 'Full Body Compound (deadlifts, bench press, pull-ups)', duration: '45 minutes', intensity: 'Moderate to High' }
        ],
        meals: [
            'Breakfast: Eggs with whole wheat toast and avocado',
            'Lunch: Turkey and brown rice with vegetables',
            'Dinner: Lean beef with sweet potato and asparagus',
            'Snacks: Protein shake, banana with peanut butter'
        ],
        tips: [
            '✅ Eat 1.6g protein per kg of body weight',
            '✅ Focus on compound movements',
            '✅ Progressive overload - increase weight gradually',
            '✅ Rest days are when muscles grow'
        ]
    },
    beginner_general_health: {
        title: '🌟 Overall Wellness Program',
        duration: '8 weeks',
        frequency: '3-4 days per week',
        workouts: [
            { day: 'Monday', exercise: 'Running/Jogging', duration: '30 minutes', intensity: 'Light to Moderate' },
            { day: 'Wednesday', exercise: 'Yoga or Stretching', duration: '30 minutes', intensity: 'Light' },
            { day: 'Friday', exercise: 'Mixed Cardio & Strength', duration: '35 minutes', intensity: 'Moderate' }
        ],
        meals: [
            'Breakfast: Greek yogurt with granola and honey',
            'Lunch: Whole grain wrap with lean protein and veggies',
            'Dinner: Grilled fish with brown rice and green beans',
            'Snacks: Fresh fruits, nuts, or vegetable sticks'
        ],
        tips: [
            '✅ Balance cardio and strength training',
            '✅ Include daily stretching',
            '✅ Eat a colorful variety of fruits and vegetables',
            '✅ Find activities you actually enjoy'
        ]
    },
    intermediate_gain_muscle: {
        title: '🔥 Advanced Muscle Building',
        duration: '16 weeks',
        frequency: '4-5 days per week',
        workouts: [
            { day: 'Monday', exercise: 'Chest & Triceps', duration: '50 minutes', intensity: 'High' },
            { day: 'Tuesday', exercise: 'Back & Biceps', duration: '50 minutes', intensity: 'High' },
            { day: 'Thursday', exercise: 'Legs', duration: '60 minutes', intensity: 'High' },
            { day: 'Saturday', exercise: 'Shoulders & Core', duration: '45 minutes', intensity: 'Moderate to High' }
        ],
        meals: [
            'Breakfast: Pancakes with protein powder, berries, and almond butter',
            'Lunch: Pasta with ground turkey and marinara sauce',
            'Dinner: Grilled chicken breast with basmati rice and roasted vegetables',
            'Snacks: Multiple protein shakes and carb sources throughout day'
        ],
        tips: [
            '✅ Consume 2g protein per kg of body weight',
            '✅ Track macros (protein, carbs, fats)',
            '✅ Progressive overload is critical',
            '✅ Aim for 8-10 reps per set for hypertrophy'
        ]
    },
    intermediate_sports_performance: {
        title: '⚽ Sports Performance Enhancer',
        duration: '12 weeks',
        frequency: '4-5 days per week',
        workouts: [
            { day: 'Monday', exercise: 'Speed & Agility Drills', duration: '40 minutes', intensity: 'High' },
            { day: 'Tuesday', exercise: 'Sport-Specific Practice', duration: '60 minutes', intensity: 'High' },
            { day: 'Thursday', exercise: 'Strength & Power', duration: '45 minutes', intensity: 'High' },
            { day: 'Saturday', exercise: 'Conditioning & Endurance', duration: '50 minutes', intensity: 'High' }
        ],
        meals: [
            'Breakfast: Eggs, oatmeal, and fruit',
            'Pre-Workout: Banana with honey 30 mins before',
            'Lunch: Lean protein with complex carbs',
            'Post-Workout: Protein shake within 30 minutes',
            'Dinner: Balanced macros with fresh vegetables'
        ],
        tips: [
            '✅ Sport-specific training is key',
            '✅ Include dynamic stretching and mobility work',
            '✅ Periodize your training (build, peak, recover)',
            '✅ Focus on explosive movements'
        ]
    },
    advanced_confidence: {
        title: '✨ Ultimate Confidence & Transformation',
        duration: '20 weeks',
        frequency: '5-6 days per week',
        workouts: [
            { day: 'Monday', exercise: 'Heavy Strength (Lower Body Focus)', duration: '60 minutes', intensity: 'High' },
            { day: 'Tuesday', exercise: 'Hypertrophy (Upper Body)', duration: '55 minutes', intensity: 'High' },
            { day: 'Wednesday', exercise: 'Conditioning & HIIT', duration: '40 minutes', intensity: 'Very High' },
            { day: 'Thursday', exercise: 'Functional Strength & Movement', duration: '50 minutes', intensity: 'High' },
            { day: 'Friday', exercise: 'Accessory Work & Core', duration: '45 minutes', intensity: 'Moderate to High' },
            { day: 'Saturday', exercise: 'Active Recovery or Sports', duration: 'Flexible', intensity: 'Low to Moderate' }
        ],
        meals: [
            'Detailed macro-tracking plan (consult nutritionist)',
            'Multiple meals throughout day (5-6 eating occasions)',
            'Focus on whole foods, minimal processed items',
            'Strategic carb and fat timing around workouts'
        ],
        tips: [
            '✅ This is a lifestyle commitment',
            '✅ Consider working with a trainer',
            '✅ Mental health and sleep are crucial',
            '✅ Take progress photos and measurements',
            '✅ Celebrate non-scale victories'
        ]
    }
};

// ======================== Utility Functions ========================

/**
 * Debounce function for performance optimization
 * Prevents excessive function calls during scroll/resize
 */
function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}

/**
 * Smooth scroll to element
 */
function smoothScroll(element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/**
 * Validate user age (13-19 range)
 */
function isValidAge(age) {
    return age >= 13 && age <= 19;
}

/**
 * Get personalized message based on age
 */
function getAgeGroupMessage(age) {
    if (age >= 13 && age <= 15) return 'Young Teen';
    if (age >= 16 && age <= 17) return 'Mid Teen';
    return 'Older Teen';
}

/**
 * Generate plan key from form data
 */
function generatePlanKey(fitnessLevel, goal) {
    const goalMap = {
        'lose-weight': 'lose_weight',
        'gain-muscle': 'gain_muscle',
        'general-health': 'general_health',
        'sports-performance': 'sports_performance',
        'confidence': 'confidence'
    };
    
    return `${fitnessLevel}_${goalMap[goal]}`;
}

/**
 * Fetch plan with fallback to general health if not found
 */
function getPlan(key) {
    return fitnessPlans[key] || fitnessPlans['beginner_general_health'];
}

// ======================== Mobile Navigation ========================

/**
 * Toggle mobile menu
 */
function toggleMobileMenu() {
    navMenu.classList.toggle('active');
    hamburgerBtn.setAttribute('aria-expanded', navMenu.classList.contains('active'));
}

/**
 * Close mobile menu when link is clicked
 */
function closeMobileMenu() {
    navMenu.classList.remove('active');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
}

// Add click listeners to nav links
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        closeMobileMenu();
        
        // Update active link
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});

// Hamburger menu click listener
hamburgerBtn.addEventListener('click', toggleMobileMenu);

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.navbar')) {
        closeMobileMenu();
    }
});

// ======================== Form Handling ========================

/**
 * Render workout HTML
 */
function renderWorkouts(workouts) {
    return workouts.map(w => `
        <div class="workout-item">
            <strong>${w.day}:</strong> ${w.exercise} (${w.duration}, ${w.intensity})
        </div>
    `).join('');
}

/**
 * Render meal HTML
 */
function renderMeals(meals) {
    return meals.map(m => `<li>${m}</li>`).join('');
}

/**
 * Render tips HTML
 */
function renderTips(tips) {
    return tips.map(t => `<li>${t}</li>`).join('');
}

/**
 * Generate and display personalized plan
 */
function generatePersonalizedPlan(formData) {
    const planKey = generatePlanKey(formData.fitnessLevel, formData.goal);
    const plan = getPlan(planKey);
    const ageGroup = getAgeGroupMessage(formData.age);
    
    const html = `
        <div class="plan-header">
            <h3>${plan.title}</h3>
            <p><strong>Age Group:</strong> ${ageGroup} (${formData.age} years) | <strong>Duration:</strong> ${plan.duration}</p>
        </div>
        
        <div class="plan-section">
            <h4>📅 Workout Schedule</h4>
            <p><strong>Frequency:</strong> ${plan.frequency}</p>
            <div class="workouts-list">
                ${renderWorkouts(plan.workouts)}
            </div>
        </div>
        
        <div class="plan-section">
            <h4>🍎 Meal Suggestions</h4>
            <ul>
                ${renderMeals(plan.meals)}
            </ul>
        </div>
        
        <div class="plan-section">
            <h4>💡 Success Tips</h4>
            <ul>
                ${renderTips(plan.tips)}
            </ul>
        </div>
        
        <div class="plan-disclaimer">
            <p><strong>⚠️ Important:</strong> Always consult with your doctor or a certified fitness professional before starting any new exercise program.</p>
        </div>
    `;
    
    return html;
}

/**
 * Handle form submission
 */
function handleFormSubmit(e) {
    e.preventDefault();
    
    const age = parseInt(document.getElementById('age').value);
    const fitnessLevel = document.querySelector('input[name="fitnessLevel"]:checked').value;
    const goal = document.getElementById('goal').value;
    const time = document.getElementById('time').value;
    
    // Validate age
    if (!isValidAge(age)) {
        alert('❌ Please enter an age between 13 and 19.');
        return;
    }
    
    // Create form data object
    const formData = { age, fitnessLevel, goal, time };
    
    // Store in localStorage for persistence
    localStorage.setItem('fitgenzia_userData', JSON.stringify(formData));
    
    // Generate plan
    const planHTML = generatePersonalizedPlan(formData);
    resultsContent.innerHTML = planHTML;
    
    // Hide form section, show results
    assessmentForm.closest('.quiz-section').classList.add('hidden');
    resultsSection.classList.remove('hidden');
    
    // Smooth scroll to results
    setTimeout(() => smoothScroll(resultsSection), 100);
    
    // Track event (optional: for analytics)
    trackEvent('plan_generated', formData);
}

/**
 * Handle restart button
 */
function handleRestart() {
    assessmentForm.reset();
    assessmentForm.closest('.quiz-section').classList.remove('hidden');
    resultsSection.classList.add('hidden');
    smoothScroll(document.getElementById('quiz'));
}

// Add event listeners
assessmentForm.addEventListener('submit', handleFormSubmit);
ctaBtn.addEventListener('click', () => smoothScroll(document.getElementById('quiz')));
restartBtn.addEventListener('click', handleRestart);

// ======================== Analytics & Tracking ========================

/**
 * Simple event tracking (can be replaced with Google Analytics, etc.)
 */
function trackEvent(eventName, data = {}) {
    console.log(`📊 Event: ${eventName}`, data);
    
    // Example: Send to analytics service
    // fetch('/api/analytics', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ eventName, data, timestamp: new Date() })
    // });
}

// ======================== Performance Optimization ========================

/**
 * Lazy load images (future enhancement)
 */
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                imageObserver.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}

// ======================== Accessibility Enhancements ========================

/**
 * Add keyboard navigation for buttons
 */
document.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            btn.click();
        }
    });
});

/**
 * Skip to main content link (for screen readers)
 */
const skipLink = document.createElement('a');
skipLink.href = '#quiz';
skipLink.textContent = 'Skip to main content';
skipLink.className = 'skip-link';
skipLink.style.cssText = `
    position: absolute;
    top: -40px;
    left: 0;
    background: #00BCD4;
    color: white;
    padding: 8px;
    z-index: 100;
`;
skipLink.addEventListener('focus', () => {
    skipLink.style.top = '0';
});
skipLink.addEventListener('blur', () => {
    skipLink.style.top = '-40px';
});
document.body.prepend(skipLink);

// ======================== Initialization ========================

/**
 * Initialize app on page load
 */
function initApp() {
    console.log('🚀 FitGenZ AI App Initialized');
    
    // Check if user has previous data
    const savedData = localStorage.getItem('fitgenzia_userData');
    if (savedData) {
        console.log('📦 Found saved user data');
    }
    
    // Set initial hamburger state
    hamburgerBtn.setAttribute('aria-expanded', 'false');
}

// Run initialization when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}

// ======================== Error Handling ========================

/**
 * Global error handler
 */
window.addEventListener('error', (e) => {
    console.error('❌ An error occurred:', e.error);
    // Could send to error tracking service
});

// Handle unhandled promise rejections
window.addEventListener('unhandledrejection', (event) => {
    console.error('❌ Unhandled promise rejection:', event.reason);
});
