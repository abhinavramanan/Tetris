# 🎮 Tetris Game

A classic Tetris game implementation built with vanilla HTML, CSS, and JavaScript. Experience the timeless puzzle game with modern web technologies, featuring smooth animations, visual effects, and responsive design.

![Tetris Game](https://img.shields.io/badge/Game-Tetris-blue?style=for-the-badge&logo=gamepad)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## 📸 Screenshots

| Dark Theme Gameplay | Light Theme Gameplay | Initial Rules Screen |
|:---:|:---:|:---:|
| ![Dark Theme](https://github.com/user-attachments/assets/1681bf47-bda3-40c8-a2b2-1399a98b1621) | ![Light Theme](https://github.com/user-attachments/assets/6184f890-4464-4d08-b67d-24bbdfa42dc2) | ![Rules Screen](https://github.com/user-attachments/assets/aad1d55c-c4a0-405d-8758-dbd2d77269cc) |

## 📖 Table of Contents

- [Features](#-features)
- [Quick Start](#-quick-start)
- [How to Play](#-how-to-play)
- [Game Controls](#-game-controls)
- [Game Features](#-game-features)
- [Technical Details](#-technical-details)
- [File Structure](#-file-structure)
- [Browser Compatibility](#-browser-compatibility)
- [Development](#-development)
- [Contributing](#-contributing)
- [License](#-license)

## ✨ Features

- **🎯 Classic Tetris Gameplay**: All 7 traditional Tetris pieces (I, O, T, S, Z, J, L)
- **📊 Progressive Difficulty**: 20 levels with increasing speed
- **🌟 Visual Effects**: Line clear animations (Single, Double, Triple, Tetris!)
- **👻 Ghost Piece**: Preview where your piece will land
- **⏸️ Pause/Resume**: Press ESC to pause anytime
- **🎨 Theme Toggle**: Switch between light and dark themes
- **📱 Mobile Responsive**: Optimized for desktop and mobile devices
- **🎵 Classic Scoring**: Traditional Tetris scoring system
- **⏱️ Time Tracking**: Monitor your play time
- **🔄 Restart Functionality**: Easy game restart after game over

## 🚀 Quick Start

### 🎮 Play Online
Simply open `index.html` or  `https://abhinavramanan.github.io/Tetris/` in your web browser to start playing immediately!

### Option 1: Direct File Opening
1. **Download** or **clone** this repository
2. **Open** `index.html` in your web browser
3. **Click** "Start Game" and enjoy!

### Option 2: Online (Recommended)
visit: ` https://abhinavramanan.github.io/Tetris/`

## 🎮 How to Play

1. **Start**: Click the "Start Game" button or press "Start Game" in the rules modal
2. **Objective**: Fill complete horizontal lines to clear them and score points
3. **Strategy**: Arrange falling Tetris pieces to create solid lines without gaps
4. **Progression**: Clear lines to advance levels and increase game speed
5. **End Game**: Game ends when pieces reach the top of the playing field

### Scoring System
- **Single Line**: Base points × level multiplier
- **Double Lines**: Higher bonus points
- **Triple Lines**: Even higher bonus points  
- **Tetris (4 lines)**: Maximum bonus points with special animation
- **Piece Placement**: Small bonus for each piece placed

## 🎯 Game Controls

| Key | Action |
|-----|--------|
| ⬅️ **Left Arrow** | Move piece left |
| ➡️ **Right Arrow** | Move piece right |
| ⬇️ **Down Arrow** | Move piece down (soft drop) |
| ⬆️ **Up Arrow** | Rotate piece clockwise |
| **ESC** | Pause/Resume game |

### Additional Controls
- **Theme Button**: Toggle between light and dark themes (top-right corner)
- **Start/Restart Button**: Begin new game or restart after game over
- **Resume Button**: Continue game after pause

## 🌟 Game Features

### Visual Effects
- **Line Clear Animations**: Different effects for Single, Double, Triple, and Tetris clears
- **Screen Flash**: Brief flash effect when clearing lines
- **Ghost Piece**: Semi-transparent preview showing landing position
- **Smooth Animations**: Fluid piece movement and transitions

### Game Mechanics
- **Level Progression**: 20 levels with increasing difficulty
- **Speed Increase**: Game speed increases with each level
- **Next Piece Preview**: See what piece is coming next
- **Classic Piece Colors**: 
  - T-piece (Cyan) - Type 0
  - I-piece (Red) - Type 1  
  - L-piece (Orange) - Type 2
  - J-piece (Purple) - Type 3
  - S-piece (Green) - Type 4
  - Z-piece (Yellow) - Type 5
  - O-piece (Blue) - Type 6

### Modern Enhancements
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Theme Support**: Light and dark mode toggle
- **Pause Functionality**: Pause overlay with resume option
- **Level Up Modals**: Celebration when advancing levels
- **Game Over Handling**: Clear indication and restart option

## 🔧 Technical Details

### Technologies Used
- **HTML5**: Semantic markup and game structure
- **CSS3**: Styling, animations, and responsive design
- **Vanilla JavaScript**: Game logic and DOM manipulation

### Browser APIs Used
- **DOM Manipulation**: Dynamic element creation and modification
- **Event Listeners**: Keyboard and mouse input handling
- **CSS Animations**: Smooth visual effects and transitions
- **Local Storage**: (Future enhancement for high scores)

### Code Architecture
- **Modular Design**: Game logic separated into logical functions
- **Object-Oriented**: Main game object with organized methods
- **Event-Driven**: Responsive to user input and game events
- **Cross-Browser**: Compatible with modern browsers

## 📁 File Structure

```
Tetris/
├── index.html          # Main HTML structure and game layout
├── script.js           # Complete game logic and functionality
├── styles.css          # Styling, animations, and responsive design
└── README.md          # This documentation file
```

### File Descriptions

**`index.html`**
- Game canvas and playing field
- Info panel with score, level, lines, time
- Next piece preview area
- Pause, level-up, and rules modals
- Control buttons and UI elements

**`script.js`**
- Core Tetris game engine
- Piece movement and rotation logic
- Line clearing and scoring system
- Level progression and speed control
- Visual effects and animations
- Input handling and game state management

**`styles.css`**
- Classic Tetris visual styling
- Responsive design for all devices
- CSS animations and transitions
- Theme system (light/dark modes)
- Mobile-optimized layouts

## 🌐 Browser Compatibility

### Supported Browsers
- ✅ **Chrome** 60+ (Recommended)
- ✅ **Firefox** 55+
- ✅ **Safari** 11+
- ✅ **Edge** 79+
- ✅ **Opera** 47+

### Mobile Support
- ✅ **iOS Safari** 11+
- ✅ **Chrome Mobile** 60+
- ✅ **Firefox Mobile** 55+
- ✅ **Samsung Internet** 7+

### Requirements
- **JavaScript**: Must be enabled
- **CSS3**: For animations and modern styling
- **HTML5**: For semantic structure
- **No plugins**: Runs entirely in the browser

## 💻 Development

### Local Development Setup
```bash
# Clone and navigate
git clone https://github.com/abhinavramanan/Tetris.git
cd Tetris

# Start development server
python3 -m http.server 8000
# or
npx http-server

# Open http://localhost:8000 in your browser
```

### Code Style
- **ES5/ES6 Compatible**: Works in older and modern browsers
- **Vanilla JavaScript**: No external dependencies
- **Modular Functions**: Easy to understand and modify
- **Comments**: Well-documented for easy maintenance

### Customization Options
- **Colors**: Modify piece colors in CSS (`.type0` - `.type6`)
- **Speed**: Adjust `speed` values in `script.js`
- **Board Size**: Change `canvasHeight` and `canvasWidth`
- **Scoring**: Modify scoring multipliers in `initLevelScores()`

## 🤝 Contributing

Contributions are welcome! Here are some ways you can help improve the game:

### Potential Enhancements
- 🎵 **Sound Effects**: Add audio for line clears, piece drops, and game events
- 🏆 **High Scores**: Local storage for best scores
- 🎮 **Touch Controls**: Swipe gestures for mobile devices
- 🎨 **More Themes**: Additional color schemes and visual styles
- 📊 **Statistics**: Detailed gameplay statistics tracking
- 🌐 **Multiplayer**: Real-time multiplayer functionality
- 🎯 **Game Modes**: Sprint, Marathon, and Challenge modes

### How to Contribute
1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Code Guidelines
- Maintain compatibility with supported browsers
- Follow existing code style and patterns
- Add comments for new functionality
- Test on multiple devices and browsers
- Update documentation for new features

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🎉 Have Fun!

Enjoy playing this classic Tetris game! Whether you're a casual player or a Tetris master, this implementation offers the authentic experience you love with modern web enhancements.

**Happy Gaming! 🎮**

---

*Built with ❤️ using vanilla web technologies*
