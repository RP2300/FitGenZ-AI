# FitGenZ AI - Copilot Agent Instructions

## Project Overview

**FitGenZ AI** is a teen-focused fitness guidance platform that combines AI with personalized workout plans and meal suggestions. The codebase is a vanilla JavaScript frontend with no build tools or frameworks—pure HTML5, CSS3, and ES6+ JavaScript.

**Key Problem Solved:** Teenagers (13-19) are overwhelmed by fitness information online and need age-appropriate, personalized guidance they can trust.

---

## Architecture & Data Flow

### Core Components

```
index.html (semantic structure)
    ↓
css/styles.css (CSS variables, responsive grid)
    ↓
js/app.js (DOM manipulation, form handling, plan generation)
    ↓
localStorage (user data persistence)
```

### Key Flow

1. **User Assessment** → Form collects: age, fitness level, goal, time availability
2. **Plan Generation** → JS object `fitnessPlans` maps (level + goal) → customized plan
3. **Display Results** → DOM manipulation shows workouts, meals, tips
4. **Persistence** → localStorage stores user data for return visits

### Data Structure

```javascript
// Assessment form data stored as:
{
  age: 16,
  fitnessLevel: "beginner|intermediate|advanced",
  goal: "lose-weight|gain-muscle|general-health|sports-performance|confidence",
  time: "30min|30-60min|60-90min|90plus"
}

// Plans are objects with: title, duration, frequency, workouts[], meals[], tips[]
```

---

## Design System & Styling Architecture

### Color Palette (Teen-Focused)

| Role | Color | Hex | Purpose |
|------|-------|-----|---------|
| Primary | Teal | #00BCD4 | Trust, energy, modern |
| Accent | Electric Purple | #7C3AED | Bold, creative, fun |
| Success | Lime Green | #84CC16 | Motivation, achievement |
| Dark | Navy | #1E293B | Readability, contrast |
| Background | Soft White | #F8FAFC | Clean, minimal |

### CSS Architecture

- **CSS Variables** for all theme colors (see `:root`)
- **Mobile-first responsive** with breakpoints at 768px, 480px
- **Flexbox/Grid** for layouts (no frameworks)
- **BEM-lite naming**: `.hero`, `.hero-title`, `.feature-card`
- **Animations:** Subtle transitions for engagement, reduced-motion support

**Key Styling Decisions:**
- Gradient backgrounds for visual pop (appeal to teens)
- Rounded corners (12px) for modern feel
- Box shadows for depth and hierarchy
- Hamburger menu for mobile (<768px)

---

## JavaScript Patterns & Conventions

### File Organization (js/app.js)

1. **DOM Elements** - All selectors cached at top
2. **Data Layer** - `fitnessPlans` object (fitness database)
3. **Utility Functions** - Debounce, validation, scroll helpers
4. **Mobile Nav** - Toggle logic, accessibility
5. **Form Handling** - Submission, validation, plan generation
6. **Analytics** - Event tracking stubs
7. **Performance** - Lazy loading, intersection observer setup
8. **Accessibility** - Skip links, keyboard navigation
9. **Initialization** - App startup logic
10. **Error Handling** - Global error/rejection handlers

### Key Functions

| Function | Purpose | Notes |
|----------|---------|-------|
| `generatePlanKey()` | Maps form data to plan | Uses goal map for key format |
| `getPlan()` | Retrieves plan, fallback to general health | Graceful degradation |
| `generatePersonalizedPlan()` | Creates HTML from plan data | Uses template literals |
| `handleFormSubmit()` | Processes assessment | Validates age (13-19), stores in localStorage |
| `debounce()` | Performance optimization | Prevents scroll thrashing |

### Important Patterns

```javascript
// Use 'use strict' at file top
'use strict';

// Cache DOM elements upfront
const element = document.getElementById('id');

// Event delegation where possible
element.addEventListener('click', handleClick);

// LocalStorage for persistence
localStorage.setItem('key', JSON.stringify(data));
const data = JSON.parse(localStorage.getItem('key'));

// Template literals for HTML generation
const html = `<div>${variable}</div>`;

// Ternary for simple conditionals
const result = condition ? trueVal : falseVal;
```

---

## Common Development Workflows

### Adding a New Fitness Plan

1. Add plan object to `fitnessPlans` in js/app.js:
   ```javascript
   advanced_lose_weight: {
     title: '🔥 Advanced Weight Loss',
     duration: '16 weeks',
     frequency: '5 days/week',
     workouts: [...],
     meals: [...],
     tips: [...]
   }
   ```

2. Plan key format: `{fitnessLevel}_{goalKey}`
   - fitnessLevel: beginner, intermediate, advanced
   - goalKey: lose_weight, gain_muscle, general_health, sports_performance, confidence

3. Test by selecting form options that map to that plan

### Modifying the Quiz/Assessment

1. Add new field to `index.html` form
2. Extract value in `handleFormSubmit()`: `const newField = document.getElementById('id').value;`
3. Add to `formData` object passed to `generatePersonalizedPlan()`
4. Update plan generation logic or plan data if needed

### Styling Tweaks

- **Colors:** Edit CSS variables in `:root`
- **Spacing:** Modify `--spacing-*` variables
- **Fonts:** Edit `--font-primary` or `--font-secondary`
- **Responsive:** Add new breakpoint in `@media` at bottom

### Mobile Navigation Issues

- Hamburger menu uses `navMenu.classList.toggle('active')`
- Ensure `z-index: 1000` on navbar for overlay
- Test with real mobile devices or DevTools device emulation

---

## Quality & Performance Standards

### Accessibility (WCAG AA)

- ✅ Semantic HTML5 (nav, header, section, footer)
- ✅ ARIA labels on interactive elements (`aria-expanded` on hamburger)
- ✅ Color contrast ≥ 4.5:1 for text
- ✅ Keyboard navigation throughout
- ✅ Skip-to-main link for screen readers
- ✅ Reduced motion support with `@media (prefers-reduced-motion)`

### Performance

- ✅ No render-blocking resources
- ✅ CSS variables instead of inline styles (faster updates)
- ✅ Debounced scroll handlers
- ✅ LocalStorage instead of server calls
- ✅ Minimal JS (no frameworks) = ~15KB gzipped
- ✅ Lazy loading support via IntersectionObserver

### Browser Support

| Browser | Support | Notes |
|---------|---------|-------|
| Chrome/Edge | ✅ Full | Modern CSS features OK |
| Firefox | ✅ Full | Fully compatible |
| Safari | ✅ Full | Check -webkit prefixes |
| IE 11 | ⚠️ Partial | No CSS Variables |

---

## Common Pitfalls & Solutions

| Issue | Root Cause | Solution |
|-------|-----------|----------|
| Form doesn't submit | Event listener not attached | Ensure `assessmentForm` is queried before DOMContentLoaded |
| Mobile menu doesn't close | Missing `navMenu.classList.remove()` | Check `closeMobileMenu()` is called on link click |
| Plan doesn't generate | Wrong plan key format | Verify `goalMap` in `generatePlanKey()` matches HTML select values |
| localStorage not persisting | Private browsing or quota exceeded | Check browser settings, test data size |
| Slow scroll performance | No debouncing | Ensure debounce() is used for scroll handlers |
| Styles not updating | CSS specificity conflict | Use `:root` variables, avoid `!important` |

---

## Testing Checklist

Before committing changes:

- [ ] **Responsive:** Test at 320px (mobile), 768px (tablet), 1024px+ (desktop)
- [ ] **Accessibility:** Keyboard-only navigation, screen reader test
- [ ] **Forms:** Submit with valid/invalid data, check localStorage
- [ ] **Plans:** Verify all 6 plan combinations generate correctly
- [ ] **Cross-browser:** Chrome, Firefox, Safari
- [ ] **Performance:** Dev Tools Lighthouse score ≥ 90
- [ ] **Console:** No errors or warnings in DevTools Console

---

## Key Files Reference

| File | Purpose | Key Elements |
|------|---------|--------------|
| index.html | Structure & form | Assessment form, results container, semantic markup |
| css/styles.css | Design system | CSS variables, responsive grid, animations |
| js/app.js | Logic & interaction | fitnessPlans object, form handling, DOM manipulation |
| .gitignore | Git rules | node_modules, .DS_Store, logs |
| README.md | Documentation | Setup, structure, conventions |
| package.json | Dependencies | live-server for development |

---

## Future Extension Points

These areas are designed for easy expansion:

1. **Backend Integration:** Replace `fitnessPlans` object with API calls
2. **Authentication:** Add login/signup flow
3. **Progress Tracking:** Store workout logs, track progress over time
4. **Video Content:** Add exercise video links to plan.workouts
5. **Social Features:** Share plans, challenges, leaderboards
6. **Meal Prep:** Link to recipe details, grocery lists
7. **Push Notifications:** Browser notifications for motivation
8. **Analytics:** Connect to Google Analytics or similar

---

## Resources & Documentation

- **CSS Variables:** https://developer.mozilla.org/en-US/docs/Web/CSS/--*
- **LocalStorage:** https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
- **Accessibility:** https://www.w3.org/WAI/WCAG21/quickref/
- **Performance:** https://web.dev/performance/
- **Responsive Design:** https://www.smashingmagazine.com/2011/01/guidelines-for-responsive-web-design/

---

## Contact & Contribution

Built as part of **Republic Polytechnic C240 Course**

For modifications or feature requests, follow the README guidelines for contributing.

**Last Updated:** December 2025
