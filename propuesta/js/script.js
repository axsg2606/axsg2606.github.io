document.addEventListener('DOMContentLoaded', () => {
    // ======================= ELEMENTOS =======================
    const welcomeOverlay = document.getElementById('welcome-overlay');
    const section1 = document.getElementById('section-1');
    const section2 = document.getElementById('section-2');
    const section3 = document.getElementById('section-3');
    const btnNext1 = document.getElementById('btn-next-1');
    const btnNext2 = document.getElementById('btn-next-2');
    const btnSi = document.getElementById('btn-si');
    const btnNo = document.getElementById('btn-no');
    const celebration = document.getElementById('celebration');
    const bgMusic = document.getElementById('bg-music');
    const tensionMusic = document.getElementById('tension-music');
    const musicToggle = document.getElementById('music-toggle');
    const cinematicMessages = document.getElementById('cinematic-messages');
    const floatingElements1 = document.getElementById('floating-elements-1');
    const floatingElements3 = document.getElementById('floating-elements-3');

    // ======================= VARIABLES =======================
    let activeMusic = bgMusic;
    let musicPlaying = false;
    let messageTimeouts = [];
    let messageIndex = 0;

    const cinematicMessageTexts = [
        'Lucía Abigail Ruiz Diaz Robles...',
        'Hay algo muy importante que quiero decirte...',
        'Esto es bastante serio...',
        'No sabía cómo decírtelo...',
        'Pero hoy encontré el valor...',
        'Y quisiera saber si...'
    ];

    // ======================= FUNCIONES =======================
    function createFloatingElements(container, count = 20) {
        const icons = ['#icon-heart', '#icon-sunflower', '#icon-tulip'];
        for (let i = 0; i < count; i++) {
            const div = document.createElement('div');
            div.className = 'float-icon';
            const iconIndex = Math.floor(Math.random() * icons.length);
            div.innerHTML = `<svg><use href="${icons[iconIndex]}"/></svg>`;
            const size = Math.random() * 25 + 15;
            div.style.width = `${size}px`;
            div.style.height = `${size}px`;
            div.style.left = `${Math.random() * 100}%`;
            div.style.animationDuration = `${Math.random() * 8 + 6}s`;
            div.style.animationDelay = `${Math.random() * 5}s`;
            div.style.color = Math.random() > 0.5 ? '#ff6b81' : '#f7a8b8';
            container.appendChild(div);
        }
    }

    createFloatingElements(floatingElements1, 25);
    createFloatingElements(floatingElements3, 25);

    function showSection(section) {
        [section1, section2, section3].forEach(s => s.classList.remove('active'));
        section.classList.add('active');
        if (section.classList.contains('scrollable')) {
            section.scrollTop = 0;
        }
    }

    function playMusic(audioElement) {
        audioElement.play().then(() => {
            activeMusic = audioElement;
            musicPlaying = true;
            musicToggle.classList.remove('muted');
        }).catch(err => {
            console.log('Autoplay bloqueado, esperando interacción del usuario');
            musicPlaying = false;
            musicToggle.classList.add('muted');
        });
    }

    function pauseMusic(audioElement) {
        audioElement.pause();
        if (activeMusic === audioElement) {
            musicPlaying = false;
            musicToggle.classList.add('muted');
        }
    }

    musicToggle.addEventListener('click', () => {
        if (musicPlaying) {
            pauseMusic(activeMusic);
        } else {
            playMusic(activeMusic);
        }
    });

    // ======================= AUTOPLAY =======================
    playMusic(bgMusic);

    document.addEventListener('click', () => {
        if (!musicPlaying && !section2.classList.contains('active')) {
            playMusic(bgMusic);
        }
    });

    document.addEventListener('touchstart', () => {
        if (!musicPlaying && !section2.classList.contains('active')) {
            playMusic(bgMusic);
        }
    });

    // ======================= ANIMACIÓN DE BIENVENIDA =======================
    setTimeout(() => {
        welcomeOverlay.classList.add('fade-out');
        showSection(section1);
    }, 4000);

    // ======================= BOTÓN NEXT 1 =======================
    btnNext1.addEventListener('click', () => {
        pauseMusic(bgMusic);
        playMusic(tensionMusic);
        showSection(section2);
        startCinematicSequence();
    });

    // ======================= SECUENCIA CINEMATOGRÁFICA (LETRA POR LETRA) =======================
    function startCinematicSequence() {
        cinematicMessages.innerHTML = '';
        messageIndex = 0;
        showNextCinematicMessage();
    }

    function showNextCinematicMessage() {
        if (messageIndex >= cinematicMessageTexts.length) {
            btnNext2.classList.remove('hidden');
            return;
        }

        const text = cinematicMessageTexts[messageIndex];
        const msgContainer = document.createElement('div');
        msgContainer.className = 'cinematic-message';
        cinematicMessages.appendChild(msgContainer);

        // Convertir el texto en letras (caracteres) individuales
        const characters = text.split('');
        let charIndex = 0;

        function showNextCharacter() {
            if (charIndex >= characters.length) {
                // Todas las letras mostradas: pausa dramática antes de desvanecer
                const exitTimeout = setTimeout(() => {
                    msgContainer.classList.add('exit');
                    const removeTimeout = setTimeout(() => {
                        msgContainer.remove();
                        messageIndex++;
                        showNextCinematicMessage();
                    }, 2000); // Tiempo de salida lento (2 segundos)
                    messageTimeouts.push(removeTimeout);
                }, 3000); // Pausa de 3 segundos con el mensaje completo
                messageTimeouts.push(exitTimeout);
                return;
            }

            // Crear span para cada letra
            const letterSpan = document.createElement('span');
            letterSpan.className = 'cinematic-letter';
            letterSpan.textContent = characters[charIndex];
            msgContainer.appendChild(letterSpan);

            // Forzar reflow y activar la animación
            void letterSpan.offsetWidth;
            letterSpan.classList.add('visible');

            charIndex++;
            // Intervalo entre letras: 150 ms (más lento para mayor suspenso)
            const letterTimeout = setTimeout(showNextCharacter, 150);
            messageTimeouts.push(letterTimeout);
        }

        // Pequeño retraso antes de comenzar a revelar las letras (1 segundo)
        const startTimeout = setTimeout(showNextCharacter, 1000);
        messageTimeouts.push(startTimeout);
    }

    // ======================= BOTÓN NEXT 2 =======================
    btnNext2.addEventListener('click', () => {
        pauseMusic(tensionMusic);
        playMusic(bgMusic);
        showSection(section3);
    });

    // ======================= BOTONES SÍ/NO =======================
    btnSi.addEventListener('click', () => {
        // Restablecer escala
        btnSi.style.transform = 'scale(1)';

        celebration.classList.remove('hidden');
        createCelebrationHearts();
        btnSi.textContent = '¡Te amo! 💖';
        btnSi.disabled = true;
        btnNo.style.display = 'none';
        if (!musicPlaying) playMusic(bgMusic);
    });

    let noClickCount = 0;
    const noMessages = [
        'No',
        '¿Segura? 😏',
        'Piénsalo bien... 💭',
        'No es una opción 😉',
        'El botón correcto es el otro 😅',
        '¡Di que sí! 💖',
        'Estás a punto de decir que sí...'
    ];

    btnNo.addEventListener('click', () => {
        noClickCount++;
        if (noClickCount < noMessages.length) {
            btnNo.textContent = noMessages[noClickCount];
        } else {
            btnNo.textContent = '¡Ya di que sí! 😡';
        }
        if (noClickCount > 2) {
            const x = Math.random() * (window.innerWidth - btnNo.offsetWidth - 40);
            const y = Math.random() * (window.innerHeight - btnNo.offsetHeight - 40);
            btnNo.style.position = 'fixed';
            btnNo.style.left = `${x}px`;
            btnNo.style.top = `${y}px`;
        }
        const scale = 1 + noClickCount * 0.2;
        btnSi.style.transform = `scale(${scale})`;
    });

    function createCelebrationHearts() {
        const container = document.getElementById('celebration-hearts');
        for (let i = 0; i < 50; i++) {
            const heart = document.createElement('div');
            heart.className = 'float-icon';
            heart.innerHTML = `<svg><use href="#icon-heart"/></svg>`;
            const size = Math.random() * 30 + 10;
            heart.style.width = `${size}px`;
            heart.style.height = `${size}px`;
            heart.style.left = `${Math.random() * 100}%`;
            heart.style.animationDuration = `${Math.random() * 3 + 2}s`;
            heart.style.animationDelay = `${Math.random() * 2}s`;
            heart.style.color = '#ff6b81';
            container.appendChild(heart);
        }
    }

    // ======================= LIMPIEZA DE TIMERS =======================
    window.addEventListener('beforeunload', () => {
        messageTimeouts.forEach(t => clearTimeout(t));
    });
});
