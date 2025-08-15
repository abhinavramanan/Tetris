<div align="center">

# 🎮 CYBERPUNK TETRIS

### *The classic puzzle game, reimagined with a futuristic cyberpunk aesthetic*

**🚀 [Play Now](https://abhinavramanan.github.io/Tetris/) | 📖 [Documentation](#-features) | 🤝 [Contribute](#-contributing)**

[![Tetris Game](https://img.shields.io/badge/🎮_Game-Live_Demo-00ff88?style=for-the-badge&logoColor=white)](https://abhinavramanan.github.io/Tetris/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

![License](https://img.shields.io/badge/License-MIT-cyan?style=flat-square)
![Size](https://img.shields.io/github/repo-size/abhinavramanan/Tetris?style=flat-square&color=purple)
![Last Commit](https://img.shields.io/github/last-commit/abhinavramanan/Tetris?style=flat-square&color=orange)

</div>

---

## 📸 Game Preview

<div align="center">

| 🌙 **Dark Theme** | ☀️ **Light Theme** | 📋 **Rules Screen** |
|:---:|:---:|:---:|
| ![Dark Theme](https://github.com/user-attachments/assets/1681bf47-bda3-40c8-a2b2-1399a98b1621) | ![Light Theme](https://github.com/user-attachments/assets/6184f890-4464-4d08-b67d-24bbdfa42dc2) | ![Rules Screen](https://github.com/user-attachments/assets/aad1d55c-c4a0-405d-8758-dbd2d77269cc) |
| *Cyberpunk neon aesthetic* | *Clean minimalist design* | *Interactive tutorial* |

</div>

---

## 📑 Table of Contents

<details>
<summary>📖 Click to expand navigation</summary>

- [✨ Features](#-features)
- [🚀 Quick Start](#-quick-start)
- [🎮 How to Play](#-how-to-play)
- [⌨️ Controls](#️-controls)
- [🎯 Game Mechanics](#-game-mechanics)
- [🔧 Technical Details](#-technical-details)
- [📁 Project Structure](#-project-structure)
- [🌐 Browser Support](#-browser-support)
- [💻 Development](#-development)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

</details>

---

## ✨ Features

<div align="center">

### 🎯 **Core Game**
| Feature | Description |
|---------|-------------|
| 🔷 **Classic Gameplay** | All 7 traditional Tetromino pieces (I, O, T, S, Z, J, L) |
| 📈 **20 Levels** | Progressive difficulty with increasing speed |
| 🏆 **Scoring System** | Classic Tetris scoring with line clear bonuses |
| 👻 **Ghost Piece** | Preview landing position for strategic planning |

### 🎨 **Visual Experience**
| Feature | Description |
|---------|-------------|
| 🌙 **Dual Themes** | Cyberpunk dark mode & clean light mode |
| ✨ **Particle Effects** | Floating background particles for immersion |
| 💥 **Line Clear Effects** | Animated feedback for Single/Double/Triple/Tetris |
| 🎬 **Smooth Animations** | 60fps fluid piece movement and transitions |

### 📱 **Modern Features**
| Feature | Description |
|---------|-------------|
| 📱 **Responsive Design** | Optimized for desktop, tablet, and mobile |
| ⏸️ **Pause System** | ESC to pause with elegant overlay |
| 🎵 **Sound Effects** | Audio feedback for moves, clears, and events |
| 🖥️ **Fullscreen Mode** | Immersive fullscreen gaming experience |

</div>

---

## 🚀 Quick Start

<div align="center">

### 🎮 **Instant Play**
**[Click here to play now!](https://abhinavramanan.github.io/Tetris/)**

*No downloads, no installation - just pure Tetris fun in your browser*

</div>

### 💻 **Local Setup**

```bash
# 1️⃣ Clone the repository
git clone https://github.com/abhinavramanan/Tetris.git
cd Tetris

# 2️⃣ Start a local server (choose one)
python3 -m http.server 8000    # Python
npx http-server                # Node.js  
php -S localhost:8000          # PHP

# 3️⃣ Open in browser
open http://localhost:8000
```

### 📦 **Download & Play**
1. Download the repository as ZIP
2. Extract the files
3. Double-click `index.html`
4. Start playing!

---

## 🎮 How to Play

### 🎯 **Objective**
Arrange falling Tetromino pieces to create complete horizontal lines. When a line is filled, it disappears and you score points. The game ends when pieces reach the top of the playing field.

### 📋 **Game Flow**
```
🚀 Start Game → 📦 Pieces Fall → 🧩 Arrange Blocks → 💥 Clear Lines → 📈 Level Up → 🔄 Repeat
```

### 🏆 **Scoring System**

| Line Clear Type | Base Points | Multiplier | Special Effect |
|----------------|-------------|------------|---------------|
| **Single** 🎯 | 100 | × Level | Standard clear |
| **Double** 🎯🎯 | 300 | × Level | Nice combo! |
| **Triple** 🎯🎯🎯 | 500 | × Level | Great move! |
| **Tetris** 🎯🎯🎯🎯 | 800 | × Level | ✨ **Bonus animation!** |

> **💡 Pro Tip:** Save up for Tetris clears (4 lines at once) for maximum points!

---

## ⌨️ Controls

<div align="center">

### 🎮 **Keyboard Controls**

| Key | Action | Visual |
|-----|--------|--------|
| ⬅️ `Left Arrow` | Move piece left | `◀️` |
| ➡️ `Right Arrow` | Move piece right | `▶️` |
| ⬇️ `Down Arrow` | Soft drop (faster fall) | `🔽` |
| ⬆️ `Up Arrow` | Rotate piece clockwise | `🔄` |
| `ESC` | Pause/Resume game | `⏸️` |
| `SPACE` | Hard drop (instant fall) | `⚡` |

### 🖱️ **UI Controls**

| Button | Function | Location |
|--------|----------|----------|
| **🌙/☀️ Theme** | Toggle dark/light mode | Top-right |
| **🔊 Sound** | Toggle audio on/off | Top-right |
| **📺 Fullscreen** | Enter/exit fullscreen | Top-right |
| **▶️ Start** | Begin new game | Game panel |

</div>

---

## 🎯 Game Mechanics

### 🧩 **Tetromino Pieces**

<div align="center">

| Shape | Name | Color | Pattern |
|-------|------|-------|---------|
| 🟦🟦🟦🟦 | **I-Piece** | Cyan | `████` |
| 🟨🟨<br/>🟨🟨 | **O-Piece** | Yellow | `██`<br/>`██` |
| 🟪🟪🟪<br/>⬜🟪⬜ | **T-Piece** | Purple | `███`<br/>` █ ` |
| 🟩🟩⬜<br/>⬜🟩🟩 | **S-Piece** | Green | `██ `<br/>` ██` |
| ⬜🟥🟥<br/>🟥🟥⬜ | **Z-Piece** | Red | ` ██`<br/>`██ ` |
| 🟧🟧🟧<br/>🟧⬜⬜ | **L-Piece** | Orange | `███`<br/>`█  ` |
| 🔵🔵🔵<br/>⬜⬜🔵 | **J-Piece** | Blue | `███`<br/>`  █` |

</div>

### 📊 **Level Progression**

- **Level 1-9**: Gradual speed increase for learning
- **Level 10-15**: Moderate challenge for intermediate players  
- **Level 16-20**: Expert speed for Tetris masters
- **Speed Formula**: Each level increases fall speed exponentially

### 🎨 **Visual Effects**

- **👻 Ghost Piece**: Semi-transparent preview of landing position
- **💥 Line Clear**: Screen flash and animation when clearing lines
- **✨ Particle System**: Floating cyberpunk particles in background
- **🌊 Smooth Movement**: 60fps animations for fluid gameplay

---

## 🔧 Technical Details

### 🛠️ **Technology Stack**

<div align="center">

| Technology | Purpose | Version |
|------------|---------|---------|
| ![HTML5](https://img.shields.io/badge/-HTML5-E34F26?style=flat-square&logo=html5&logoColor=white) | Structure & Markup | HTML5 |
| ![CSS3](https://img.shields.io/badge/-CSS3-1572B6?style=flat-square&logo=css3&logoColor=white) | Styling & Animations | CSS3 |
| ![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black) | Game Logic & Interactivity | ES6+ |

</div>

### ⚡ **Performance Features**

- **🎯 Zero Dependencies**: Pure vanilla JavaScript for minimal footprint
- **📱 Responsive Design**: CSS Grid and Flexbox for all screen sizes
- **🎬 Hardware Acceleration**: CSS transforms for smooth animations
- **⚡ Optimized Rendering**: Efficient DOM manipulation and event handling

### 🏗️ **Architecture**

```javascript
🎮 Game Engine
├── 🧩 Piece Management (Creation, Rotation, Movement)
├── 🎯 Board Logic (Collision Detection, Line Clearing)
├── 📊 Scoring System (Points, Levels, Statistics)
├── 🎨 Visual Effects (Animations, Particles, Themes)
├── 🎵 Audio System (Sound Effects, Feedback)
└── ⌨️ Input Handling (Keyboard, UI Controls)
```

### 🔧 **Browser APIs Used**

- **DOM Manipulation**: Dynamic element creation and styling
- **Event System**: Keyboard and mouse input handling  
- **CSS Animations**: Hardware-accelerated transitions
- **Web Audio API**: Sound effects and audio feedback
- **Fullscreen API**: Immersive gaming experience

---

## 📁 Project Structure

```
🎮 Tetris/
├── 📄 index.html          # Main game interface & HTML structure
├── 🎯 script.js           # Complete game engine & logic  
├── 🎨 styles.css          # Cyberpunk styling & animations
└── 📖 README.md           # Project documentation
```

<details>
<summary>📂 Detailed File Breakdown</summary>

### 📄 **index.html**
```html
🏗️ Core Structure
├── 🎮 Game canvas and playing field
├── 📊 Statistics panel (score, level, lines, time)
├── 👀 Next piece preview area
├── 🎛️ Control panels and UI buttons
├── 📱 Modal dialogs (pause, level-up, game over)
└── 🔧 Settings controls (theme, sound, fullscreen)
```

### 🎯 **script.js** *(~1000 lines)*
```javascript
🎮 Game Engine
├── 🧩 Tetromino piece management
├── 🎯 Game board & collision detection
├── 📈 Scoring & level progression system
├── ⌨️ Input handling & controls
├── 🎨 Visual effects & animations
├── 🎵 Sound system & audio feedback
├── 💾 Game state management
└── 🎛️ UI controls & modal systems
```

### 🎨 **styles.css** *(~700 lines)*
```css
🎨 Visual Design
├── 🌙 Cyberpunk dark theme
├── ☀️ Clean light theme  
├── 📱 Responsive layouts
├── ✨ CSS animations & transitions
├── 💫 Particle system styling
├── 🎮 Game piece styling
└── 🎛️ UI component styling
```

</details>

---

## 🌐 Browser Support

<div align="center">

### ✅ **Fully Supported**

| Browser | Desktop | Mobile | Version |
|---------|---------|--------|---------|
| ![Chrome](https://img.shields.io/badge/-Chrome-4285F4?style=flat-square&logo=googlechrome&logoColor=white) | ✅ | ✅ | 60+ |
| ![Firefox](https://img.shields.io/badge/-Firefox-FF7139?style=flat-square&logo=firefox&logoColor=white) | ✅ | ✅ | 55+ |
| ![Safari](https://img.shields.io/badge/-Safari-000000?style=flat-square&logo=safari&logoColor=white) | ✅ | ✅ | 11+ |
| ![Edge](https://img.shields.io/badge/-Edge-0078D7?style=flat-square&logo=microsoftedge&logoColor=white) | ✅ | ✅ | 79+ |
| ![Opera](https://img.shields.io/badge/-Opera-FF1B2D?style=flat-square&logo=opera&logoColor=white) | ✅ | ✅ | 47+ |

### 📋 **Requirements**
- ✅ JavaScript enabled
- ✅ CSS3 support for animations
- ✅ HTML5 compatibility
- ❌ No plugins required
- ❌ No internet connection needed (after initial load)

</div>

---

## 💻 Development

### 🛠️ **Local Development Setup**

```bash
# 📥 Clone repository
git clone https://github.com/abhinavramanan/Tetris.git
cd Tetris

# 🚀 Start development server (choose one)
python3 -m http.server 8000    # Python 3
python -m SimpleHTTPServer 8000 # Python 2
npx http-server                 # Node.js
php -S localhost:8000           # PHP

# 🌐 Open in browser
open http://localhost:8000
```

### 🎯 **Development Guidelines**

<details>
<summary>📋 Code Style & Standards</summary>

- **🎯 ES6+ JavaScript**: Modern syntax with backward compatibility
- **📱 Mobile-First**: Responsive design approach
- **♿ Accessibility**: ARIA labels and keyboard navigation
- **🎨 CSS Custom Properties**: For easy theming
- **📦 Modular Code**: Organized, reusable functions
- **💬 Documentation**: Comprehensive code comments

</details>

### 🎨 **Customization Options**

```javascript
// 🎮 Game Settings (script.js)
const gameConfig = {
    boardWidth: 10,        // Playing field width
    boardHeight: 20,       // Playing field height
    dropSpeed: 1000,       // Initial drop speed (ms)
    speedIncrease: 0.1     // Speed increase per level
};

// 🎨 Theme Colors (styles.css)
:root {
    --neon-cyan: #00ffff;
    --neon-pink: #ff006e;
    --neon-purple: #8338ec;
    --neon-green: #06ffa5;
}
```

---

## 🤝 Contributing

<div align="center">

**We welcome contributions from developers of all skill levels!**

[![Contributions Welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat-square)](https://github.com/abhinavramanan/Tetris/issues)
[![Good First Issues](https://img.shields.io/github/issues/abhinavramanan/Tetris/good%20first%20issue?style=flat-square&color=7057ff)](https://github.com/abhinavramanan/Tetris/labels/good%20first%20issue)

</div>

### 🎯 **Ways to Contribute**

<details>
<summary>💡 Feature Ideas & Enhancements</summary>

- 🎵 **Audio System**: Enhanced sound effects and background music
- 🏆 **Leaderboards**: Local storage high scores with statistics
- 🎮 **Touch Controls**: Swipe gestures for mobile gameplay
- 🎨 **More Themes**: Additional visual themes and color schemes
- 📊 **Analytics**: Detailed gameplay statistics and charts
- 🌐 **Multiplayer**: Real-time competitive or cooperative play
- 🎯 **Game Modes**: Sprint, Marathon, Zen, and Challenge modes
- 🎨 **Particle Effects**: Enhanced visual effects and animations
- 💾 **Save System**: Game state persistence across sessions

</details>

### 🛠️ **How to Contribute**

```bash
# 1️⃣ Fork the repository on GitHub
# 2️⃣ Clone your fork locally
git clone https://github.com/YOUR_USERNAME/Tetris.git
cd Tetris

# 3️⃣ Create a feature branch
git checkout -b feature/amazing-new-feature

# 4️⃣ Make your changes
# ... code, test, iterate ...

# 5️⃣ Commit your changes
git add .
git commit -m "✨ Add amazing new feature"

# 6️⃣ Push to your fork
git push origin feature/amazing-new-feature

# 7️⃣ Open a Pull Request on GitHub
```

### 📋 **Contribution Guidelines**

- ✅ **Test your changes** on multiple browsers and devices
- ✅ **Follow existing code style** and patterns
- ✅ **Add comments** for new functionality
- ✅ **Update documentation** if needed
- ✅ **Keep changes focused** and atomic
- ✅ **Write descriptive commit messages**

---

## 📄 License

<div align="center">

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)

**Free to use, modify, and distribute** ✨

</div>

---

<div align="center">

## 🎉 **Ready to Play?**

### **[🚀 Start Playing Now!](https://abhinavramanan.github.io/Tetris/)**

*Experience the classic puzzle game with a modern cyberpunk twist*

[![Play Now](https://img.shields.io/badge/🎮_Play_Now-Live_Demo-00ff88?style=for-the-badge&logoColor=white)](https://abhinavramanan.github.io/Tetris/)

---

### ⭐ **Enjoyed the game? Give us a star!**

[![GitHub stars](https://img.shields.io/github/stars/abhinavramanan/Tetris?style=social)](https://github.com/abhinavramanan/Tetris/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/abhinavramanan/Tetris?style=social)](https://github.com/abhinavramanan/Tetris/network/members)

---

*Built with ❤️ using vanilla web technologies*

**Made for gamers, by gamers** 🎮

</div>
