# FitGenZ AI 🏋️

**Your Personal Fitness Coach for Teens**

An AI-powered fitness guidance platform designed for teenagers aged 13-19. Get personalized workout plans, meal suggestions, and motivation to build healthy habits.

## 🎯 Project Overview

FitGenZ AI helps young adults overcome fitness confusion by providing:
- **Personalized Workout Plans** tailored to age, fitness level, and goals
- **Smart Meal Suggestions** that match your preferences and lifestyle
- **Age-Appropriate Guidance** safe and suitable for teen development
- **Flexible Scheduling** that fits school, sports, and social life

### Target Audience
- Teenagers aged 13-19
- Students wanting to improve fitness and health
- Young people feeling overwhelmed by fitness information online

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Text editor or VS Code
- Live Server extension (optional, for local development)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd c240-fitness
   ```

2. **Open with Live Server** (Recommended)
   - Install "Live Server" extension in VS Code
   - Right-click `index.html` and select "Open with Live Server"
   - Site opens at `http://127.0.0.1:5500`

3. **Or open directly**
   - Double-click `index.html` in your file explorer

## 📁 Project Structure

```
c240-fitness/
├── index.html          # Main HTML5 boilerplate
├── css/
│   └── styles.css      # Brand design & responsive styles
├── js/
│   └── app.js          # Interactive features & logic
├── assets/             # Images, icons (to be added)
├── .github/
│   └── copilot-instructions.md  # AI agent guidance
├── .gitignore          # Git ignore rules
└── README.md           # This file
```

## 🎨 Design & Color Palette

**Brand Colors:**
- **Primary:** Teal (#00BCD4) - Modern, energetic, trustworthy
- **Accent:** Electric Purple (#7C3AED) - Bold, creative, fun
- **Success:** Lime Green (#84CC16) - Motivation and achievement
- **Neutral:** Navy (#1E293B) - Professional readability

**Typography:**
- Headlines: Poppins (bold, geometric)
- Body: Inter (clean, modern)

## ✨ Key Features

### 1. Quick Assessment Quiz (2 mins)
- Age verification (13-19)
- Fitness level (Beginner/Intermediate/Advanced)
- Goal selection (Lose weight, Build muscle, General health, Sports performance, Confidence)
- Time availability (30 mins - 90+ mins/week)

### 2. Personalized Plan Generation
- Age-group specific recommendations
- Customized workout schedules
- Simple meal suggestions
- Success tips and motivation

### 3. Responsive Design
- Mobile-first approach
- Accessible for all screen sizes
- Touch-friendly buttons and inputs
- Dark mode ready (future)

### 4. Performance Optimized
- Lazy loading support
- Debounced scroll handlers
- Efficient CSS with CSS Variables
- Minimal JavaScript bundle

## 🛠️ Technical Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | HTML5, CSS3, Vanilla JavaScript |
| **Styling** | Custom CSS with CSS Variables |
| **Interaction** | DOM manipulation, Event listeners |
| **Storage** | LocalStorage for user data persistence |
| **Fonts** | Google Fonts (Poppins, Inter) |

## ♿ Accessibility Features

- Semantic HTML5 structure
- ARIA labels for buttons and navigation
- Keyboard navigation support
- Focus management
- Reduced motion support
- High contrast colors (WCAG AA compliant)
- Screen reader friendly

## 📱 Browser Support

| Browser | Support |
|---------|---------|
| Chrome | ✅ Full |
| Firefox | ✅ Full |
| Safari | ✅ Full |
| Edge | ✅ Full |
| IE 11 | ⚠️ Partial (CSS Variables) |

## 🔄 Workflow & Commands

### Development with Live Server
1. Open `index.html` with Live Server
2. Edit CSS/JS - auto-refreshes
3. Test on mobile with network IP

### Testing
```bash
# Manual testing checklist
- [ ] Mobile responsiveness (320px, 768px, 1024px)
- [ ] Form validation
- [ ] Plan generation
- [ ] Accessibility with keyboard
- [ ] Cross-browser compatibility
```

### Git Workflow
```bash
git add .
git commit -m "feature: description"
git push origin main
```

## 🎓 Developer Conventions

### Naming Conventions
- **Classes:** kebab-case (e.g., `.hero-section`)
- **IDs:** camelCase (e.g., `#assessmentForm`)
- **CSS Variables:** kebab-case (e.g., `--primary-color`)
- **JS Functions:** camelCase (e.g., `generatePersonalizedPlan()`)

### Code Style
- Use `'use strict';` in JS files
- Prefer `const` over `let` over `var`
- Document complex functions with JSDoc
- Keep lines under 100 characters where possible

### Component Structure
Each feature follows this pattern:
```
1. HTML semantic markup
2. CSS with responsive breakpoints
3. JS event listeners and logic
4. Comments for clarity
```

## 📊 Form Data Structure

When users submit the assessment, data is stored as:
```javascript
{
  age: 16,
  fitnessLevel: "beginner",
  goal: "lose-weight",
  time: "30-60min"
}
```

Stored in `localStorage` as `fitgenzia_userData`.

## 🔐 Security Considerations

- No sensitive data stored (no passwords)
- Form validation on client-side
- LocalStorage only for user preferences
- Disclaimer about medical consultation

## 🚀 Future Enhancements

- [ ] Backend API for advanced personalization
- [ ] User accounts and progress tracking
- [ ] Video tutorials for exercises
- [ ] Integration with fitness trackers
- [ ] Push notifications for motivation
- [ ] Community features (challenges, leaderboards)
- [ ] Dark mode support
- [ ] Multi-language support
- [ ] Meal delivery integration

## 📝 Fitness Plans Included

### Beginner Plans
- Weight Loss Foundation Program
- Muscle Building Starter Pack
- Overall Wellness Program

### Intermediate Plans
- Advanced Muscle Building
- Sports Performance Enhancer

### Advanced Plans
- Ultimate Confidence & Transformation

Each plan includes workouts, meal suggestions, and success tips.

## 📞 Support & Contributing

For issues or feature requests, please open an issue on GitHub.

### Contributing Guidelines
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is part of the Republic Polytechnic C240 course.

## ⚖️ Disclaimer

**⚠️ IMPORTANT:** FitGenZ AI is an educational tool and NOT a replacement for professional medical advice. Always consult with a doctor or certified fitness professional before starting any new exercise program, especially for teenagers.

---

**Made with ❤️ for Generation Z's fitness journey**

*Last Updated: December 2025*
