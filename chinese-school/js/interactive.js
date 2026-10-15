/* ============================================================
   ИНТЕРАКТИВНЫЕ ЭЛЕМЕНТЫ
   ============================================================ */
(function () {
    'use strict';

    document.addEventListener('DOMContentLoaded', () => {

        // ===== Ежедневный стрик =====
        initStreak();

        // ===== Мини-игра «Угадай иероглиф» =====
        initMiniGame();

        // ===== Живой чат-помощник =====
        initChatHelper();

        // ===== Прогресс-бар чтения =====
        initReadingProgress();
    });

    /* ---------- Стрик (демо) ---------- */
    function initStreak() {
        const lastVisit = localStorage.getItem('lastVisit');
        const today = new Date().toDateString();
        let streak = parseInt(localStorage.getItem('streak') || '0');

        if (lastVisit !== today) {
            const yesterday = new Date(Date.now() - 86400000).toDateString();
            if (lastVisit === yesterday) {
                streak++;
            } else {
                streak = 1;
            }
            localStorage.setItem('streak', streak);
            localStorage.setItem('lastVisit', today);
        }

        setTimeout(() => {
            if (window.DragonSchool) {
                window.DragonSchool.showToast(`🔥 Твой стрик: ${streak} ${getDayWord(streak)} подряд!`, 4000);
            }
        }, 3000);
    }

    function getDayWord(n) {
        if (n % 10 === 1 && n % 100 !== 11) return 'день';
        if ([2,3,4].includes(n % 10) && ![12,13,14].includes(n % 100)) return 'дня';
        return 'дней';
    }

    /* ---------- Мини-игра ---------- */
    function initMiniGame() {
        // Добавляем плавающую кнопку игры
        const btn = document.createElement('button');
        btn.innerHTML = '🎮';
        btn.title = 'Мини-игра: Угадай иероглиф';
        btn.style.cssText = `
            position: fixed;
            bottom: 100px;
            right: 30px;
            width: 56px;
            height: 56px;
            border-radius: 50%;
            background: linear-gradient(135deg, var(--accent), var(--accent-2));
            color: #fff;
            font-size: 24px;
            z-index: 900;
            box-shadow: 0 10px 30px var(--accent-glow);
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
        `;
        btn.addEventListener('mouseenter', () => btn.style.transform = 'scale(1.15) rotate(10deg)');
        btn.addEventListener('mouseleave', () => btn.style.transform = '');
        document.body.appendChild(btn);

        btn.addEventListener('click', () => {
            if (window.DragonSchool) {
                window.DragonSchool.showToast('🎮 Игра «Угадай иероглиф» — скоро! А пока запишись на урок 😉', 5000);
            }
        });
    }

    /* ---------- Чат-помощник ---------- */
    function initChatHelper() {
        const chat = document.createElement('button');
        chat.innerHTML = '💬';
        chat.title = 'Чат с куратором';
        chat.style.cssText = `
            position: fixed;
            bottom: 30px;
            right: 100px;
            width: 56px;
            height: 56px;
            border-radius: 50%;
            background: linear-gradient(135deg, #22c55e, #16a34a);
            color: #fff;
            font-size: 24px;
            z-index: 900;
            box-shadow: 0 10px 30px rgba(34, 197, 94, 0.4);
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
            animation: pulse 2s infinite;
        `;
        const style = document.createElement('style');
        style.textContent = `
            @keyframes pulse {
                0%, 100% { box-shadow: 0 10px 30px rgba(34, 197, 94, 0.4); }
                50% { box-shadow: 0 10px 50px rgba(34, 197, 94, 0.7), 0 0 0 10px rgba(34, 197, 94, 0.1); }
            }
        `;
        document.head.appendChild(style);
        document.body.appendChild(chat);

        chat.addEventListener('click', () => {
            if (window.DragonSchool) {
                window.DragonSchool.showToast('💬 Куратор ответит вам в Telegram в течение 5 минут!', 4000);
            }
        });
    }

    /* ---------- Прогресс чтения ---------- */
    function initReadingProgress() {
        // Дополнительный индикатор — процент изучения страницы
        let notification = false;
        window.addEventListener('scroll', () => {
            const h = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (window.scrollY / h) * 100;
            if (progress > 60 && !notification) {
                notification = true;
                if (window.DragonSchool) {
                    window.DragonSchool.showToast('🎓 Понравилось? Запишись на бесплатный пробный урок!', 5000);
                }
            }
        });
    }
})();