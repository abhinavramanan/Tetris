(function () {
    var isStart = false;
    var tetris = {
        board: [],
        boardDiv: null,
        canvas: null,
        pSize: 20,
        canvasHeight: 440,
        canvasWidth: 200,
        boardHeight: 0,
        boardWidth: 0,
        spawnX: 4,
        spawnY: 1,
        shapes: [
            [
                [-1, 1],
                [0, 1],
                [1, 1],
                [0, 0], //TEE
            ],
            [
                [-1, 0],
                [0, 0],
                [1, 0],
                [2, 0], //line
            ],
            [
                [-1, -1],
                [-1, 0],
                [0, 0],
                [1, 0], //L EL
            ],
            [
                [1, -1],
                [-1, 0],
                [0, 0],
                [1, 0], //R EL
            ],
            [
                [0, -1],
                [1, -1],
                [-1, 0],
                [0, 0], // R ess
            ],
            [
                [-1, -1],
                [0, -1],
                [0, 0],
                [1, 0], //L ess
            ],
            [
                [0, -1],
                [1, -1],
                [0, 0],
                [1, 0], //square
            ],
        ],
        tempShapes: null,
        curShape: null,
        curShapeIndex: null,
        curX: 0,
        curY: 0,
        curSqs: [],
        nextShape: null,
        nextShapeDisplay: null,
        nextShapeIndex: null,
        sqs: [],
        score: 0,
        scoreDisplay: null,
        level: 1,
        levelDisplay: null,
        numLevels: 20,
        time: 0,
        maxTime: 1000,
        timeDisplay: null,
        isActive: 0,
        curComplete: false,
        timer: null,
        sTimer: null,
        speed: 700,
        lines: 0,

        init: function () {
            isStart = true;
            this.canvas = document.getElementById('canvas');
            this.initBoard();
            this.initInfo();
            this.initLevelScores();
            this.initShapes();
            this.bindKeyEvents();
            this.play();
        },
        initBoard: function () {
            this.boardHeight = this.canvasHeight / this.pSize;
            this.boardWidth = this.canvasWidth / this.pSize;
            var s = this.boardHeight * this.boardWidth;
            for (var i = 0; i < s; i++) {
                this.board.push(0);
            }
            //this.boardDiv = document.getElementById('board); //for debugging
        },
        initInfo: function () {
            this.nextShapeDisplay = document.getElementById('next_shape');
            this.levelDisplay = document
                .getElementById('level')
                .getElementsByTagName('span')[0];
            this.timeDisplay = document
                .getElementById('time')
                .getElementsByTagName('span')[0];
            this.scoreDisplay = document
                .getElementById('score')
                .getElementsByTagName('span')[0];
            this.linesDisplay = document
                .getElementById('lines')
                .getElementsByTagName('span')[0];
            this.setInfo('time');
            this.setInfo('score');
            this.setInfo('level');
            this.setInfo('lines');
        },
        initShapes: function () {
            this.curSqs = [];
            this.curComplete = false;
            this.shiftTempShapes();
            this.curShapeIndex = this.tempShapes[0];
            this.curShape = this.shapes[this.curShapeIndex];
            this.initNextShape();
            this.setCurCoords(this.spawnX, this.spawnY);
            this.drawShape(this.curX, this.curY, this.curShape);
            this.drawGhost();
        },
        initNextShape: function () {
            if (typeof this.tempShapes[1] === 'undefined') {
                this.initTempShapes();
            }
            try {
                this.nextShapeIndex = this.tempShapes[1];
                this.nextShape = this.shapes[this.nextShapeIndex];
                this.drawNextShape();
            } catch (e) {
                throw new Error('Could not create next shape. ' + e);
            }
        },
        initTempShapes: function () {
            this.tempShapes = [];
            for (var i = 0; i < this.shapes.length; i++) {
                this.tempShapes.push(i);
            }
            var k = this.tempShapes.length;
            while (--k) {
                //Fisher Yates Shuffle
                var j = Math.floor(Math.random() * (k + 1));
                var tempk = this.tempShapes[k];
                var tempj = this.tempShapes[j];
                this.tempShapes[k] = tempj;
                this.tempShapes[j] = tempk;
            }
        },
        shiftTempShapes: function () {
            try {
                if (
                    typeof this.tempShapes === 'undefined' ||
                    this.tempShapes === null
                ) {
                    this.initTempShapes();
                } else {
                    this.tempShapes.shift();
                }
            } catch (e) {
                throw new Error('Could not shift or init tempShapes: ' + e);
            }
        },
        initTimer: function () {
            var me = this;
            var tLoop = function () {
                me.incTime();
                me.timer = setTimeout(tLoop, 2000);
            };
            this.timer = setTimeout(tLoop, 2000);
        },
        initLevelScores: function () {
            var c = 1;
            for (var i = 1; i <= this.numLevels; i++) {
                this['level' + i] = [c * 1000, 40 * i, 5 * i]; //for nxt level, row score, p sore,
                c = c + c;
            }
        },
        setInfo: function (el) {
            this[el + 'Display'].innerHTML = this[el];
        },
        drawNextShape: function () {
            var ns = [];
            for (var i = 0; i < this.nextShape.length; i++) {
                ns[i] = this.createSquare(
                    this.nextShape[i][0] + 2,
                    this.nextShape[i][1] + 2,
                    this.nextShapeIndex
                );
            }
            this.nextShapeDisplay.innerHTML = '';
            for (var k = 0; k < ns.length; k++) {
                this.nextShapeDisplay.appendChild(ns[k]);
            }
        },
        drawShape: function (x, y, p) {
            for (var i = 0; i < p.length; i++) {
                var newX = p[i][0] + x;
                var newY = p[i][1] + y;
                this.curSqs[i] = this.createSquare(newX, newY, this.curShapeIndex);
            }
            for (var k = 0; k < this.curSqs.length; k++) {
                this.canvas.appendChild(this.curSqs[k]);
            }
            this.drawGhost();
        },
        createSquare: function (x, y, type) {
            var el = document.createElement('div');
            el.className = 'square type' + type;
            el.style.left = x * this.pSize + 'px';
            el.style.top = y * this.pSize + 'px';
            return el;
        },
        removeCur: function () {
            var me = this;
            this.curSqs.eachdo(function () {
                me.canvas.removeChild(this);
            });
            this.curSqs = [];
        },
        setCurCoords: function (x, y) {
            this.curX = x;
            this.curY = y;
        },
        bindKeyEvents: function () {
            var me = this;
            var event = 'keypress';
            if (this.isSafari() || this.isIE()) {
                event = 'keydown';
            }
            var cb = function (e) {
                me.handleKey(e);
            };
            if (window.addEventListener) {
                document.addEventListener(event, cb, false);
            } else {
                document.attachEvent('on' + event, cb);
            }
        },
        handleKey: function (e) {
            var c = this.whichKey(e);
            var dir = '';
            switch (c) {
                case 37:
                    this.move('L');
                    break;
                case 38:
                    this.move('RT');
                    break;
                case 39:
                    this.move('R');
                    break;
                case 40:
                    this.move('D');
                    break;
                case 27: //esc: pause
                    this.togglePause();
                    break;
                default:
                    break;
            }
        },
        whichKey: function (e) {
            var c;
            if (window.event) {
                c = window.event.keyCode;
            } else if (e) {
                c = e.keyCode;
            }
            return c;
        },
        incTime: function () {
            this.time++;
            this.setInfo('time');
        },
        incScore: function (amount) {
            this.score = this.score + amount;
            this.setInfo('score');
        },
        incLevel: function () {
            this.level++;
            this.speed = this.speed - 75;
            this.setInfo('level');
        },
        incLines: function (num) {
            this.lines += num;
            this.setInfo('lines');
        },
        calcScore: function (args) {
            var lines = args.lines || 0;
            var shape = args.shape || false;
            var speed = args.speed || 0;
            var score = 0;

            if (lines > 0) {
                score += lines * this['level' + this.level][1];
                this.incLines(lines);
            }
            if (shape === true) {
                score += shape * this['level' + this.level][2];
            }
            /*if (speed > 0){ score += speed * this["level" +this .level[3]];}*/
            this.incScore(score);
        },
        checkScore: function () {
            if (this.score >= this['level' + this.level][0]) {
                if (typeof this.pauseForLevelUp === 'function') {
                    this.pauseForLevelUp();
                } else {
                    this.incLevel();
                }
            }
        },
        gameOver: function () {
            this.clearTimers();
            isStart = false;
            this.canvas.innerHTML = '<h1>GAME OVER</h1>';
        },
        play: function () {
            var me = this;
            if (this.timer === null) {
                this.initTimer();
            }
            var gameLoop = function () {
                me.move('D');
                if (me.curComplete) {
                    me.markBoardShape(me.curX, me.curY, me.curShape);
                    me.curSqs.eachdo(function () {
                        me.sqs.push(this);
                    });
                    me.calcScore({ shape: true });
                    me.checkRows();
                    me.checkScore();
                    me.initShapes();
                    me.play();
                } else {
                    me.pTimer = setTimeout(gameLoop, me.speed);
                }
            };
            this.pTimer = setTimeout(gameLoop, me.speed);
            this.isActive = 1;
        },
        togglePause: function () {
            if (this.isActive === 1) {
                this.clearTimers();
                this.isActive = 0;
            } else {
                this.play();
            }
        },
        clearTimers: function () {
            clearTimeout(this.timer);
            clearTimeout(this.pTimer);
            this.timer = null;
            this.pTimer = null;
        },
        move: function (dir) {
            var s = '';
            var me = this;
            var tempX = this.curX;
            var tempY = this.curY;
            switch (dir) {
                case 'L':
                    s = 'left';
                    tempX -= 1;
                    break;
                case 'R':
                    s = 'left';
                    tempX += 1;
                    break;
                case 'D':
                    s = 'top';
                    tempY += 1;
                    break;
                case 'RT':
                    this.rotate();
                    return true;
                    break;
                default:
                    throw new Error('wtf');
                    break;
            }
            if (this.checkMove(tempX, tempY, this.curShape)) {
                this.curSqs.eachdo(function (i) {
                    var l = parseInt(this.style[s], 10);
                    dir === 'L' ? (l -= me.pSize) : (l += me.pSize);
                    this.style[s] = l + 'px';
                });
                this.curX = tempX;
                this.curY = tempY;
            } else if (dir === 'D') {
                if (this.curY === 1 || this.time === this.maxTime) {
                    this.gameOver();
                    return false;
                }
                this.curComplete = true;
            }
            this.drawGhost();
        },
        rotate: function () {
            if (this.curShapeIndex !== 6) {
                //square
                var temp = [];
                this.curShape.eachdo(function () {
                    temp.push([this[1] * -1, this[0]]);
                });
                if (this.checkMove(this.curX, this.curY, temp)) {
                    this.curShape = temp;
                    this.removeCur();
                    this.drawShape(this.curX, this.curY, this.curShape);
                } else {
                    throw new Error('Could not rotate!');
                }
            }
            this.drawGhost();
        },
        checkMove: function (x, y, p) {
            if (this.isOB(x, y, p) || this.isCollision(x, y, p)) {
                return false;
            }
            return true;
        },
        isCollision: function (x, y, p) {
            var me = this;
            var bool = false;
            p.eachdo(function () {
                var newX = this[0] + x;
                var newY = this[1] + y;
                if (me.boardPos(newX, newY) === 1) {
                    bool = true;
                }
            });
            return bool;
        },
        isOB: function (x, y, p) {
            var w = this.boardWidth - 1;
            var h = this.boardHeight - 1;
            var bool = false;
            p.eachdo(function () {
                var newX = this[0] + x;
                var newY = this[1] + y;
                if (newX < 0 || newX > w || newY < 0 || newY > h) {
                    bool = true;
                }
            });
            return bool;
        },
        getRowState: function (y) {
            var c = 0;
            for (var x = 0; x < this.boardWidth; x++) {
                if (this.boardPos(x, y) === 1) {
                    c = c + 1;
                }
            }
            if (c === 0) {
                return 'E';
            }
            if (c === this.boardWidth) {
                return 'F';
            }
            return 'U';
        },
        checkRows: function () {
            var me = this;
            var start = this.boardHeight;
            this.curShape.eachdo(function () {
                var n = this[1] + me.curY;
                console.log(n);
                if (n < start) {
                    start = n;
                }
            });
            console.log(start);

            var c = 0;
            var stopCheck = false;
            for (var y = this.boardHeight - 1; y >= 0; y--) {
                switch (this.getRowState(y)) {
                    case 'F':
                        this.removeRow(y);
                        c++;
                        break;
                    case 'E':
                        if (c === 0) {
                            stopCheck = true;
                        }
                        break;
                    case 'U':
                        if (c > 0) {
                            this.shiftRow(y, c);
                        }
                        break;
                    default:
                        break;
                }
                if (stopCheck === true) {
                    break;
                }
            }
            if (c > 0) {
                this.calcScore({ lines: c });
            }
        },
        shiftRow: function (y, amount) {
            var me = this;
            for (var x = 0; x < this.boardWidth; x++) {
                this.sqs.eachdo(function () {
                    if (me.isAt(x, y, this)) {
                        me.setBlock(x, y + amount, this);
                    }
                });
            }
            me.emptyBoardRow(y);
        },
        emptyBoardRow: function (y) {
            for (var x = 0; x < this.boardWidth; x++) {
                this.markBoardAt(x, y, 0);
            }
        },
        removeRow: function (y) {
            for (var x = 0; x < this.boardWidth; x++) {
                this.removeBlock(x, y);
            }
        },
        removeBlock: function (x, y) {
            var me = this;
            this.markBoardAt(x, y, 0);
            this.sqs.eachdo(function (i) {
                if (me.getPos(this)[0] === x && me.getPos(this)[1] === y) {
                    me.canvas.removeChild(this);
                    me.sqs.splice(i, 1);
                }
            });
        },
        setBlock: function (x, y, block) {
            this.markBoardAt(x, y, 1);
            var newX = x * this.pSize;
            var newY = y * this.pSize;
            block.style.left = newX + 'px';
            block.style.top = newY + 'px';
        },
        isAt: function (x, y, block) {
            if (this.getPos(block)[0] === x && this.getPos(block)[1] === y) {
                return true;
            }
            return false;
        },
        getPos: function (block) {
            var p = [];
            p.push(parseInt(block.style.left, 10) / this.pSize);
            p.push(parseInt(block.style.top, 10) / this.pSize);
            return p;
        },
        getBoardIdx: function (x, y) {
            return x + y * this.boardWidth;
        },
        boardPos: function (x, y) {
            return this.board[x + y * this.boardWidth];
        },
        markBoardAt: function (x, y, val) {
            this.board[this.getBoardIdx(x, y)] = val;
        },
        markBoardShape: function (x, y, p) {
            var me = this;
            p.eachdo(function (i) {
                var newX = p[i][0] + x;
                var newY = p[i][1] + y;
                me.markBoardAt(newX, newY, 1);
            });
        },
        isIE: function () {
            return this.bTest(/IE/);
        },
        isFirefox: function () {
            return this.bTest(/Firefox/);
        },
        isSafari: function () {
            return this.bTest(/Safari/);
        },
        bTest: function (rgx) {
            return rgx.test(navigator.userAgent);
        },
        drawGhost: function () {
            // Remove any existing ghost
            const oldGhosts = Array.from(this.canvas.querySelectorAll('.ghost'));
            oldGhosts.forEach(g => g.parentNode.removeChild(g));
            // Find where the current piece would land
            let ghostY = this.curY;
            while (this.checkMove(this.curX, ghostY + 1, this.curShape)) {
                ghostY++;
            }
            // Draw ghost piece
            for (let i = 0; i < this.curShape.length; i++) {
                const newX = this.curShape[i][0] + this.curX;
                const newY = this.curShape[i][1] + ghostY;
                const el = document.createElement('div');
                el.className = 'square ghost type' + this.curShapeIndex;
                el.style.left = newX * this.pSize + 'px';
                el.style.top = newY * this.pSize + 'px';
                this.canvas.appendChild(el);
            }
        },
    };
    const btn = document.querySelector('#start');
    btn.addEventListener('click', function () {
        btn.style.display = 'none';
        if (!isStart) {
            tetris.init();
        }
    });

    // === UI/UX ENHANCEMENTS ===
    (function () {
        // Theme toggle
        const themeBtn = document.getElementById('toggle-theme');
        const themeIcon = document.getElementById('theme-icon');
        const sunSVG = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="5" fill="#FFC107"/><g stroke="#FFC107" stroke-width="2"><line x1="12" y1="1" x2="12" y2="4"/><line x1="12" y1="20" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="4" y2="12"/><line x1="20" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></g></svg>`;
        const moonSVG = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" fill="#FFC107"/></svg>`;
        themeBtn.addEventListener('click', function () {
            document.body.classList.toggle('dark');
            themeIcon.innerHTML = document.body.classList.contains('dark') ? moonSVG : sunSVG;
        });
        themeIcon.innerHTML = sunSVG;

        // Sound/music
        let isMuted = false;
        const soundBtn = document.getElementById('toggle-sound');
        const soundIcon = document.getElementById('sound-icon');
        const speakerSVG = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="9" width="4" height="6" fill="#8bc34a"/><polygon points="7,9 14,4 14,20 7,15" fill="#8bc34a"/><path d="M16 8C17.6569 9.65685 17.6569 14.3431 16 16" stroke="#8bc34a" stroke-width="2" fill="none"/></svg>`;
        const muteSVG = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="9" width="4" height="6" fill="#8bc34a"/><polygon points="7,9 14,4 14,20 7,15" fill="#8bc34a"/><line x1="17" y1="7" x2="21" y2="17" stroke="#e53935" stroke-width="2"/><line x1="21" y1="7" x2="17" y2="17" stroke="#e53935" stroke-width="2"/></svg>`;
        soundBtn.addEventListener('click', function () {
            isMuted = !isMuted;
            soundIcon.innerHTML = isMuted ? muteSVG : speakerSVG;
            bgm.muted = isMuted;
        });
        soundIcon.innerHTML = speakerSVG;

        // Pause overlay
        const pauseOverlay = document.getElementById('pause-overlay');
        const resumeBtn = document.getElementById('resume');
        function showPause() {
            pauseOverlay.style.display = 'flex';
            bgm.pause();
        }
        function hidePause() {
            pauseOverlay.style.display = 'none';
            if (!isMuted) bgm.play();
        }
        resumeBtn.addEventListener('click', hidePause);
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') {
                if (pauseOverlay.style.display === 'flex') {
                    hidePause();
                } else {
                    showPause();
                }
            }
        });

        // Accessibility: focus trap for modal
        pauseOverlay.addEventListener('keydown', function (e) {
            if (e.key === 'Tab') {
                e.preventDefault();
                resumeBtn.focus();
            }
        });

        // Animated background
        const bgDiv = document.createElement('div');
        bgDiv.className = 'animated-bg';
        document.body.prepend(bgDiv);

        // Sound effects
        const sfx = {
            line: new Audio('https://cdn.pixabay.com/audio/2022/03/15/audio_115b9b2b2b.mp3'),
            drop: new Audio('https://cdn.pixabay.com/audio/2022/03/15/audio_115b9b2b2b.mp3'),
            gameover: new Audio('https://cdn.pixabay.com/audio/2022/03/15/audio_115b9b2b2b.mp3'),
        };
        Object.values(sfx).forEach(a => { a.volume = 0.5; });

        // Patch tetris object for sound and animation
        if (window.tetris) {
            const origRemoveRow = tetris.removeRow;
            tetris.removeRow = function (y) {
                origRemoveRow.call(this, y);
                if (!isMuted) sfx.line.currentTime = 0, sfx.line.play();
                // Animate line clear
                for (let x = 0; x < this.boardWidth; x++) {
                    const idx = this.sqs.findIndex(sq => this.getPos(sq)[0] === x && this.getPos(sq)[1] === y);
                    if (idx !== -1) {
                        const sq = this.sqs[idx];
                        sq.style.transition = 'opacity 0.3s, transform 0.3s';
                        sq.style.opacity = '0';
                        sq.style.transform = 'scale(1.3)';
                        setTimeout(() => {
                            if (sq.parentNode) sq.parentNode.removeChild(sq);
                        }, 300);
                    }
                }
            };
            const origDrawShape = tetris.drawShape;
            tetris.drawShape = function (x, y, p) {
                origDrawShape.call(this, x, y, p);
                if (!isMuted) sfx.drop.currentTime = 0, sfx.drop.play();
                // Animate drop
                this.curSqs.forEach(sq => {
                    sq.style.transition = 'box-shadow 0.2s, transform 0.2s';
                    sq.style.boxShadow = '0 0 16px var(--accent2)';
                    sq.style.transform = 'scale(1.1)';
                    setTimeout(() => {
                        sq.style.boxShadow = '';
                        sq.style.transform = '';
                    }, 200);
                });
            };
            const origGameOver = tetris.gameOver;
            tetris.gameOver = function () {
                origGameOver.call(this);
                if (!isMuted) sfx.gameover.currentTime = 0, sfx.gameover.play();
                bgm.pause();
            };
        }

        // Touch controls (swipe left/right/down, tap to rotate)
        let touchStartX = 0, touchStartY = 0;
        document.getElementById('canvas').addEventListener('touchstart', function (e) {
            if (e.touches.length === 1) {
                touchStartX = e.touches[0].clientX;
                touchStartY = e.touches[0].clientY;
            }
        });
        document.getElementById('canvas').addEventListener('touchend', function (e) {
            if (!window.tetris || !window.tetris.isActive) return;
            const dx = e.changedTouches[0].clientX - touchStartX;
            const dy = e.changedTouches[0].clientY - touchStartY;
            if (Math.abs(dx) > Math.abs(dy)) {
                if (dx > 30) window.tetris.move('R');
                else if (dx < -30) window.tetris.move('L');
            } else {
                if (dy > 30) window.tetris.move('D');
                else if (dy < -30) window.tetris.rotate();
            }
        });

        // Next Level Modal logic
        const nextLevelModal = document.getElementById('next-level-modal');
        const nextLevelBtn = document.getElementById('next-level-btn');
        if (window.tetris) {
            tetris.pauseForLevelUp = function () {
                this.clearTimers();
                this.isActive = 0;
                nextLevelModal.style.display = 'flex';
                nextLevelBtn.focus();
            };
        }
        nextLevelBtn.addEventListener('click', function () {
            nextLevelModal.style.display = 'none';
            if (window.tetris) {
                tetris.incLevel();
                tetris.play();
            }
        });
    })();

    // Add rules modal logic
    const rulesModal = document.getElementById('rules-modal');
    const rulesContinue = document.getElementById('rules-continue');
    const startBtn = document.getElementById('start');
    let gameStarted = false;

    function showRules() {
        rulesModal.style.display = 'flex';
    }
    function hideRules() {
        rulesModal.style.display = 'none';
    }
    showRules();

    rulesContinue.addEventListener('click', function () {
        hideRules();
        startBtn.click();
        gameStarted = true;
    });

    // Ghost (halo) piece logic
    (function () {
        if (!window.tetris) return;
        // Add a new method to draw the ghost piece
        tetris.drawGhost = function () {
            // Remove any existing ghost
            const oldGhosts = Array.from(this.canvas.querySelectorAll('.ghost'));
            oldGhosts.forEach(g => g.parentNode.removeChild(g));
            // Find where the current piece would land
            let ghostY = this.curY;
            while (this.checkMove(this.curX, ghostY + 1, this.curShape)) {
                ghostY++;
            }
            // Draw ghost piece
            for (let i = 0; i < this.curShape.length; i++) {
                const newX = this.curShape[i][0] + this.curX;
                const newY = this.curShape[i][1] + ghostY;
                const el = document.createElement('div');
                el.className = 'square ghost type' + this.curShapeIndex;
                el.style.left = newX * this.pSize + 'px';
                el.style.top = newY * this.pSize + 'px';
                this.canvas.appendChild(el);
            }
        };
        // Patch drawShape and move/rotate to always update the ghost
        const origDrawShape = tetris.drawShape;
        tetris.drawShape = function (x, y, p) {
            origDrawShape.call(this, x, y, p);
            this.drawGhost();
        };
        const origMove = tetris.move;
        tetris.move = function (dir) {
            const result = origMove.call(this, dir);
            this.drawGhost();
            return result;
        };
        const origRotate = tetris.rotate;
        tetris.rotate = function () {
            origRotate.call(this);
            this.drawGhost();
        };
        // Also update ghost on new piece
        const origInitShapes = tetris.initShapes;
        tetris.initShapes = function () {
            origInitShapes.call(this);
            this.drawGhost();
        };
    })();
})();

if (!Array.prototype.eachdo) {
    Array.prototype.eachdo = function (fn) {
        for (var i = 0; i < this.length; i++) {
            fn.call(this[i], i);
        }
    };
}
if (!Array.prototype.remDup) {
    Array.prototype.remDup = function () {
        var temp = [];
        for (var i = 0; i < this.length; i++) {
            var bool = true;
            for (var j = i + 1; j < this.length; j++) {
                if (this[i] === this[j]) {
                    bool = false;
                }
            }
            if (bool === true) {
                temp.push(this[i]);
            }
        }
        return temp;
    };
}