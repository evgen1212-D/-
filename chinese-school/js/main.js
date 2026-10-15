/* ============================================================
   ГЛАВНЫЙ МОДУЛЬ
   ============================================================ */
(function () {
    'use strict';

    /* ---------- Данные курсов ---------- */
    const coursesData = {
        beginner: [
            {
                level: 'A0 → A1',
                title: 'Китайский с нуля',
                desc: 'Первый шаг в Поднебесную',
                hanzi: '初',
                lessons: 24,
                duration: '3 месяца',
                price: 4990,
                features: ['Пиньинь и тоны', '200 базовых иероглифов', 'Простые диалоги', 'Знакомство с культурой']
            },
            {
                level: 'A1',
                title: 'Основы HSK 1',
                desc: 'Готовимся к первому экзамену',
                hanzi: '基',
                lessons: 32,
                duration: '4 месяца',
                price: 5990,
                features: ['150 слов HSK 1', 'Базовая грамматика', 'Аудирование', 'Письмо иероглифов']
            },
            {
                level: 'A1+',
                title: 'Разговорный старт',
                desc: 'Говорим с первого урока',
                hanzi: '说',
                lessons: 28,
                duration: '3.5 месяца',
                price: 5490,
                features: ['Разговорная практика', 'Ситуативные диалоги', 'Произношение', 'Работа с носителем']
            }
        ],
        intermediate: [
            {
                level: 'A2 → B1',
                title: 'HSK 2-3 интенсив',
                desc: 'Уверенный средний уровень',
                hanzi: '中',
                lessons: 48,
                duration: '6 месяцев',
                price: 7990,
                features: ['600+ слов', 'Сложная грамматика', 'Чтение текстов', 'Письмо эссе']
            },
            {
                level: 'B1',
                title: 'Бизнес-китайский',
                desc: 'Для работы и переговоров',
                hanzi: '商',
                lessons: 36,
                duration: '4.5 месяца',
                price: 8990,
                features: ['Деловая лексика', 'Переговоры', 'Деловая переписка', 'Культура бизнеса']
            },
            {
                level: 'B1+',
                title: 'Китайский для путешествий',
                desc: 'Свободно по Китаю',
                hanzi: '游',
                lessons: 20,
                duration: '2.5 месяца',
                price: 4990,
                features: ['Аэропорт, отель, еда', 'Экстренные ситуации', 'Сленг и идиомы', 'Культурные нюансы']
            }
        ],
        advanced: [
            {
                level: 'B2 → C1',
                title: 'HSK 4-5 Pro',
                desc: 'Профессиональное владение',
                hanzi: '高',
                lessons: 60,
                duration: '8 месяцев',
                price: 10990,
                features: ['2500+ слов', 'Классическая литература', 'Сложные тексты', 'Академическое письмо']
            },
            {
                level: 'C1',
                title: 'Синхронный перевод',
                desc: 'Для переводчиков',
                hanzi: '译',
                lessons: 48,
                duration: '7 месяцев',
                price: 14990,
                features: ['Техника перевода', 'Скоропись', 'Терминология', 'Практика с носителем']
            },
            {
                level: 'C1+',
                title: 'Древнекитайский',
                desc: 'Вэньянь и классика',
                hanzi: '古',
                lessons: 40,
                duration: '6 месяцев',
                price: 12990,
                features: ['Вэньянь', 'Конфуций, Лао-цзы', 'Каллиграфия', 'Философия']
            }
        ],
        hsk: [
            {
                level: 'HSK 1-2',
                title: 'HSK старт',
                desc: 'Гарантия сдачи',
                hanzi: '一',
                lessons: 40,
                duration: '5 месяцев',
                price: 6990,
                features: ['Все разделы экзамена', 'Пробные тесты', 'Стратегия сдачи', 'Гарантия результата']
            },
            {
                level: 'HSK 3-4',
                title: 'HSK средний',
                desc: 'Уверенный результат',
                hanzi: '二',
                lessons: 56,
                duration: '7 месяцев',
                price: 9990,
                features: ['1200+ слов', 'Аудирование Pro', 'Сочинение', 'Пробные экзамены']
            },
            {
                level: 'HSK 5-6',
                title: 'HSK Pro',
                desc: 'Максимальный балл',
                hanzi: '三',
                lessons: 72,
                duration: '9 месяцев',
                price: 13990,
                features: ['5000+ слов', 'Научные тексты', 'Синхронный перевод', 'Ментор-носитель']
            }
        ]
    };

    /* ---------- Преподаватели ---------- */
    const teachersData = [
        { name: 'Ли Вэй', role: 'Носитель языка · HSK Pro', bio: 'Пекинский университет. 8 лет преподавания, специалист по фонетике и тонам.', emoji: '👨‍🏫', tags: ['HSK 5-6', 'Фонетика', 'Пекинский диалект'] },
        { name: 'Чжан Мин', role: 'Старший преподаватель', bio: 'Шанхайский университет. Автор методики «Говори с первого дня».', emoji: '👩‍🏫', tags: ['Разговорный', 'Бизнес', 'Носитель'] },
        { name: 'Ван Сяо', role: 'Преподаватель HSK', bio: 'Специалист по подготовке к HSK 1-4. 500+ учеников сдали экзамен.', emoji: '👨‍🎓', tags: ['HSK 1-4', 'Грамматика', 'Экзамены'] },
        { name: 'Лю Ян', role: 'Культуролог · Каллиграф', bio: 'Магистр синологии. Учит не только языку, но и культуре Китая.', emoji: '👩‍🎨', tags: ['Культура', 'Каллиграфия', 'История'] },
        { name: 'Чэнь Хао', role: 'AI-лингвист', bio: 'Разрабатывает интерактивные уроки на платформе. Эксперт по геймификации.', emoji: '🧑‍💻', tags: ['Интерактив', 'Технологии', 'Игры'] },
        { name: 'Сунь Ли', role: 'Преподаватель с нуля', bio: 'Специалист по работе с новичками. Терпеливый и вдохновляющий наставник.', emoji: '👩‍🏫', tags: ['С нуля', 'Дети', 'Новички'] }
    ];

    /* ---------- Отзывы ---------- */
    const reviewsData = [
        { name: 'Анна К.', role: 'HSK 4 сдала на 280', text: 'За 8 месяцев прошла путь от полного нуля до HSK 4! Преподаватели — огонь, платформа удобная, а разговорный клуб — это отдельная любовь.', avatar: 'А', stars: 5 },
        { name: 'Дмитрий М.', role: 'Живёт и работает в Шанхае', text: 'Переехал в Китай по работе, начал учить с нуля. Через год уже свободно общался с коллегами. Спасибо школе «Дракон»!', avatar: 'Д', stars: 5 },
        { name: 'Елена В.', role: 'Переводчик', text: 'Прошла курс синхронного перевода. Уровень преподавания — университетский. Отдельное спасибо за индивидуальный подход.', avatar: 'Е', stars: 5 },
        { name: 'Игорь С.', role: 'Бизнесмен', text: 'Бизнес-китайский — топ! Теперь веду переговоры с китайскими партнёрами без переводчика. Окупилось в первый же месяц.', avatar: 'И', stars: 5 },
        { name: 'Мария Л.', role: 'Студентка', text: 'Учусь на востоковеда, школа помогла подтянуть язык для универа. Геймификация реально мотивирует — не пропускаю ни дня!', avatar: 'М', stars: 5 },
        { name: 'Павел Н.', role: 'Путешественник', text: 'Год учился, теперь свободно путешествую по Китаю. Местные удивляются, что иностранец так говорит. Это бесценно!', avatar: 'П', stars: 5 }
    ];

    /* ---------- FAQ ---------- */
    const faqData = [
        { q: 'Сколько времени нужно, чтобы заговорить на китайском?', a: 'При занятиях 3-4 раза в неделю первые простые диалоги вы сможете вести уже через 1-2 месяца. Для свободного общения на бытовые темы потребуется около 6-12 месяцев регулярной практики.' },
        { q: 'Нужно ли знать китайский для начала?', a: 'Абсолютно нет! Наш курс «С нуля» создан специально для тех, кто никогда не сталкивался с китайским. Мы начинаем с пиньиня и тонов, постепенно добавляя иероглифы.' },
        { q: 'Как проходят уроки?', a: 'Занятия проходят на нашей интерактивной платформе в формате живых онлайн-встреч с преподавателем. Все уроки записываются, вы можете пересмотреть их в любое время.' },
        { q: 'Что если я пропущу занятие?', a: 'Все уроки записываются и доступны в вашем личном кабинете. Также вы можете посмотреть запись или перенести занятие, предупредив куратора за 24 часа.' },
        { q: 'Есть ли гарантия результата?', a: 'Да! Если вы посещали 90% занятий и выполняли домашние задания, но не сдали HSK — мы вернём деньги или проведём дополнительный курс бесплатно.' },
        { q: 'Можно ли оплатить в рассрочку?', a: 'Да, мы предоставляем беспроцентную рассрочку на 6 или 12 месяцев от наших банков-партнёров. Оформление занимает 5 минут онлайн.' },
        { q: 'Преподаватели — носители языка?', a: 'У нас работают как носители (из Пекина, Шанхая, Тайваня), так и русскоязычные преподаватели с уровнем HSK 5-6 и опытом преподавания от 5 лет.' },
        { q: 'Есть ли занятия для детей?', a: 'Да, у нас есть отдельное направление для детей от 7 до 14 лет. Занятия проходят в игровой форме с элементами мультиков и интерактивных игр.' }
    ];

    /* ============================================================
       ИНИЦИАЛИЗАЦИЯ
       ============================================================ */
    document.addEventListener('DOMContentLoaded', function () {
        initPreloader();
        initCursor();
        initHeader();
        initScrollProgress();
        initParticles();
        initReveal();
        initCounters();
        initCourses();
        initTabs();
        initTeachers();
        initReviews();
        initFaq();
        initPricing();
        initScrollTop();
        initMobileMenu();
        initThemeToggle();
        initToast();
        initTrialForm();
        initLevelTest();
        initTilt();
        initKeyboardShortcuts();
    });

    /* ---------- Прелоадер ---------- */
    function initPreloader() {
        const preloader = document.getElementById('preloader');
        window.addEventListener('load', () => {
            setTimeout(() => preloader.classList.add('hide'), 800);
        });
        setTimeout(() => preloader.classList.add('hide'), 4000);
    }

    /* ---------- Кастомный курсор ---------- */
    function initCursor() {
        const cursor = document.getElementById('cursor');
        const follower = document.getElementById('cursorFollower');
        if (!cursor || !follower) return;
        if (window.matchMedia('(max-width: 968px)').matches) return;

        let mx = 0, my = 0, fx = 0, fy = 0;

        document.addEventListener('mousemove', (e) => {
            mx = e.clientX;
            my = e.clientY;
            cursor.style.transform = `translate(${mx - 4}px, ${my - 4}px)`;
        });

        function animateFollower() {
            fx += (mx - fx) * 0.15;
            fy += (my - fy) * 0.15;
            follower.style.transform = `translate(${fx}px, ${fy}px) translate(-50%, -50%)`;
            requestAnimationFrame(animateFollower);
        }
        animateFollower();

        const hoverElements = document.querySelectorAll('a, button, .feature-card, .course-card, .price-card, input, select');
        hoverElements.forEach(el => {
            el.addEventListener('mouseenter', () => follower.classList.add('hover'));
            el.addEventListener('mouseleave', () => follower.classList.remove('hover'));
        });
    }

    /* ---------- Хедер ---------- */
    function initHeader() {
        const header = document.getElementById('header');
        window.addEventListener('scroll', () => {
            header.classList.toggle('scrolled', window.scrollY > 50);
        });
    }

    /* ---------- Прогресс скролла ---------- */
    function initScrollProgress() {
        const bar = document.getElementById('scrollProgress');
        window.addEventListener('scroll', () => {
            const h = document.documentElement.scrollHeight - window.innerHeight;
            bar.style.width = (window.scrollY / h) * 100 + '%';
        });
    }

    /* ---------- Частицы на фоне ---------- */
    function initParticles() {
        const canvas = document.getElementById('particles-canvas');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let particles = [];
        let w, h;

        function resize() {
            w = canvas.width = window.innerWidth;
            h = canvas.height = window.innerHeight;
        }
        resize();
        window.addEventListener('resize', resize);

        const hanziChars = ['龙', '中', '文', '学', '汉', '语', '书', '道', '和', '天'];

        class Particle {
            constructor() {
                this.reset();
            }
            reset() {
                this.x = Math.random() * w;
                this.y = Math.random() * h;
                this.size = Math.random() * 18 + 8;
                this.speedY = Math.random() * 0.5 + 0.2;
                this.speedX = (Math.random() - 0.5) * 0.3;
                this.opacity = Math.random() * 0.15 + 0.05;
                this.char = hanziChars[Math.floor(Math.random() * hanziChars.length)];
                this.rotation = Math.random() * Math.PI * 2;
                this.rotSpeed = (Math.random() - 0.5) * 0.01;
            }
            update() {
                this.y -= this.speedY;
                this.x += this.speedX;
                this.rotation += this.rotSpeed;
                if (this.y < -50) this.reset();
            }
            draw() {
                ctx.save();
                ctx.globalAlpha = this.opacity;
                ctx.translate(this.x, this.y);
                ctx.rotate(this.rotation);
                ctx.font = `${this.size}px 'Noto Serif SC', serif`;
                ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim();
                ctx.textAlign = 'center';
                ctx.fillText(this.char, 0, 0);
                ctx.restore();
            }
        }

        const count = window.innerWidth < 768 ? 15 : 35;
        for (let i = 0; i < count; i++) particles.push(new Particle());

        function loop() {
            ctx.clearRect(0, 0, w, h);
            particles.forEach(p => { p.update(); p.draw(); });
            requestAnimationFrame(loop);
        }
        loop();
    }

    /* ---------- Reveal при скролле ---------- */
    function initReveal() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    }

    /* ---------- Анимированные счётчики ---------- */
    function initCounters() {
        const counters = document.querySelectorAll('.stat-num');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    const target = parseInt(el.dataset.count);
                    animateCounter(el, target);
                    observer.unobserve(el);
                }
            });
        }, { threshold: 0.5 });
        counters.forEach(c => observer.observe(c));
    }

    function animateCounter(el, target) {
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;
        const timer = setInterval(() => {
            current += step;
            if (current >= target) {
                el.textContent = target;
                clearInterval(timer);
            } else {
                el.textContent = Math.floor(current);
            }
        }, 16);
    }

    /* ---------- Курсы ---------- */
    function initCourses() {
        const grid = document.getElementById('coursesGrid');
        if (!grid) return;
        renderCourses('beginner');
    }

    function renderCourses(category) {
        const grid = document.getElementById('coursesGrid');
        const data = coursesData[category] || [];
        grid.innerHTML = '';
        data.forEach((course, i) => {
            const card = document.createElement('div');
            card.className = 'course-card reveal';
            card.style.transitionDelay = (i * 0.1) + 's';
            card.innerHTML = `
                <div class="course-head" data-hanzi="${course.hanzi}">
                    <span class="course-level">${course.level}</span>
                    <h3>${course.title}</h3>
                    <p>${course.desc}</p>
                </div>
                <div class="course-body">
                    <div class="course-meta">
                        <span><i class="fas fa-book"></i> ${course.lessons} уроков</span>
                        <span><i class="fas fa-clock"></i> ${course.duration}</span>
                    </div>
                    <ul class="course-list">
                        ${course.features.map(f => `<li><i class="fas fa-check"></i>${f}</li>`).join('')}
                    </ul>
                    <div class="course-foot">
                        <div class="course-price">${course.price.toLocaleString()} ₽<small>/мес</small></div>
                        <a href="#trial" class="btn btn-primary">Записаться</a>
                    </div>
                </div>
            `;
            grid.appendChild(card);
        });
        setTimeout(() => {
            document.querySelectorAll('#coursesGrid .reveal').forEach(el => el.classList.add('visible'));
        }, 50);
    }

    function initTabs() {
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                renderCourses(btn.dataset.tab);
            });
        });
    }

    /* ---------- Преподаватели ---------- */
    function initTeachers() {
        const slider = document.getElementById('teachersSlider');
        if (!slider) return;
        teachersData.forEach(t => {
            const card = document.createElement('div');
            card.className = 'teacher-card';
            card.innerHTML = `
                <div class="teacher-avatar"><span class="emoji">${t.emoji}</span></div>
                <div class="teacher-info">
                    <h3>${t.name}</h3>
                    <span class="teacher-role">${t.role}</span>
                    <p class="teacher-bio">${t.bio}</p>
                    <div class="teacher-tags">
                        ${t.tags.map(tag => `<span class="teacher-tag">${tag}</span>`).join('')}
                    </div>
                </div>
            `;
            slider.appendChild(card);
        });

        const prev = document.getElementById('prevTeacher');
        const next = document.getElementById('nextTeacher');
        if (prev && next) {
            const scrollAmount = 340;
            prev.addEventListener('click', () => slider.scrollBy({ left: -scrollAmount, behavior: 'smooth' }));
            next.addEventListener('click', () => slider.scrollBy({ left: scrollAmount, behavior: 'smooth' }));
        }
    }

    /* ---------- Отзывы ---------- */
    function initReviews() {
        const grid = document.getElementById('reviewsGrid');
        if (!grid) return;
        reviewsData.forEach(r => {
            const card = document.createElement('div');
            card.className = 'review-card reveal';
            card.innerHTML = `
                <div class="review-stars">${'★'.repeat(r.stars)}</div>
                <p class="review-text">«${r.text}»</p>
                <div class="review-author">
                    <div class="review-avatar">${r.avatar}</div>
                    <div class="review-author-info">
                        <strong>${r.name}</strong>
                        <small>${r.role}</small>
                    </div>
                </div>
            `;
            grid.appendChild(card);
        });
    }

    /* ---------- FAQ ---------- */
    function initFaq() {
        const list = document.getElementById('faqList');
        if (!list) return;
        faqData.forEach((item, i) => {
            const el = document.createElement('div');
            el.className = 'faq-item';
            el.innerHTML = `
                <div class="faq-question">
                    <span>${item.q}</span>
                    <span class="faq-icon"><i class="fas fa-plus"></i></span>
                </div>
                <div class="faq-answer">
                    <div class="faq-answer-inner">${item.a}</div>
                </div>
            `;
            el.querySelector('.faq-question').addEventListener('click', () => {
                const isActive = el.classList.contains('active');
                document.querySelectorAll('.faq-item').forEach(item => {
                    item.classList.remove('active');
                    item.querySelector('.faq-answer').style.maxHeight = null;
                });
                if (!isActive) {
                    el.classList.add('active');
                    const answer = el.querySelector('.faq-answer');
                    answer.style.maxHeight = answer.scrollHeight + 'px';
                }
            });
            list.appendChild(el);
        });
    }

    /* ---------- Цены ---------- */
    function initPricing() {
        const toggle = document.getElementById('pricingToggle');
        if (!toggle) return;
        let isYear = false;
        toggle.addEventListener('click', () => {
            isYear = !isYear;
            toggle.classList.toggle('active', isYear);
            document.querySelectorAll('.price-value').forEach(el => {
                const val = isYear ? el.dataset.year : el.dataset.month;
                el.textContent = Number(val).toLocaleString();
            });
            showToast(isYear ? '🎉 Годовая подписка — скидка 30%!' : 'Месячная подписка');
        });
    }

    /* ---------- Scroll top ---------- */
    function initScrollTop() {
        const btn = document.getElementById('scrollTop');
        window.addEventListener('scroll', () => {
            btn.classList.toggle('visible', window.scrollY > 600);
        });
        btn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    /* ---------- Мобильное меню ---------- */
    function initMobileMenu() {
        const burger = document.getElementById('burger');
        const menu = document.getElementById('mobileMenu');
        burger.addEventListener('click', () => {
            burger.classList.toggle('active');
            menu.classList.toggle('open');
        });
        menu.querySelectorAll('a').forEach(a => {
            a.addEventListener('click', () => {
                burger.classList.remove('active');
                menu.classList.remove('open');
            });
        });
    }

    /* ---------- Смена темы ---------- */
    function initThemeToggle() {
        const btn = document.getElementById('themeToggle');
        const themes = ['dark-red', 'light-gold', 'dark-jade', 'dark-night'];
        const names = { 'dark-red': '🔴 Красно-чёрная', 'light-gold': '🟡 Императорская', 'dark-jade': '🟢 Нефритовая', 'dark-night': '🔵 Императорская ночь' };
        let idx = 0;

        const saved = localStorage.getItem('theme');
        if (saved) {
            idx = themes.indexOf(saved);
            if (idx === -1) idx = 0;
        }
        document.documentElement.setAttribute('data-theme', themes[idx]);

        btn.addEventListener('click', () => {
            idx = (idx + 1) % themes.length;
            document.documentElement.setAttribute('data-theme', themes[idx]);
            localStorage.setItem('theme', themes[idx]);
            showToast(`Тема: ${names[themes[idx]]}`);
        });
    }

    /* ---------- Уведомления ---------- */
    function showToast(text, duration = 3500) {
        const container = document.getElementById('toastContainer');
        if (!container) return;
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.innerHTML = `<i class="fas fa-sparkles"></i><span>${text}</span>`;
        container.appendChild(toast);
        setTimeout(() => {
            toast.classList.add('hide');
            setTimeout(() => toast.remove(), 400);
        }, duration);
    }

    /* ---------- Форма ---------- */
    function initTrialForm() {
        const form = document.getElementById('trialForm');
        if (!form) return;
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = form.querySelector('button');
            const original = btn.innerHTML;
            btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Отправляем...';
            setTimeout(() => {
                btn.innerHTML = '<i class="fas fa-check"></i> Готово!';
                showToast('🎉 Заявка принята! Мы свяжемся с вами в течение 15 минут.');
                setTimeout(() => {
                    btn.innerHTML = original;
                    form.reset();
                }, 2000);
            }, 1200);
        });
    }

    /* ---------- Тест уровня ---------- */
    function initLevelTest() {
        const startBtn = document.getElementById('startTest');
        const modal = document.getElementById('testModal');
        const closeBtn = document.getElementById('modalClose');
        const body = document.getElementById('modalBody');
        const circle = document.getElementById('ltProgress');
        const percent = document.getElementById('ltPercent');

        if (!startBtn) return;

        const questions = [
            { q: 'Как будет «привет» по-китайски?', a: ['你好 (nǐ hǎo)', '谢谢 (xiè xie)', '再见 (zài jiàn)', '对不起 (duì bu qǐ)'], correct: 0 },
            { q: 'Сколько тонов в путунхуа?', a: ['2', '3', '4', '5'], correct: 2 },
            { q: 'Какой иероглиф означает «Китай»?', a: ['日', '中', '大', '人'], correct: 1 },
            { q: 'Что означает «谢谢»?', a: ['Привет', 'Пока', 'Спасибо', 'Извините'], correct: 2 },
            { q: 'Как сказать «я тебя люблю»?', a: ['我喜欢你', '我爱你', '你好吗', '谢谢你'], correct: 1 },
            { q: 'Сколько иероглифов в HSK 1?', a: ['100', '150', '200', '300'], correct: 1 },
            { q: 'Какой тон самый сложный для новичков?', a: ['1-й', '2-й', '3-й', '4-й'], correct: 2 },
            { q: 'Что означает «中国»?', a: ['Япония', 'Корея', 'Китай', 'Тайвань'], correct: 2 }
        ];

        let current = 0;
        let score = 0;

        startBtn.addEventListener('click', () => {
            current = 0;
            score = 0;
            modal.classList.add('open');
            renderQuestion();
        });

        closeBtn.addEventListener('click', () => {
            modal.classList.remove('open');
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.classList.remove('open');
        });

        function renderQuestion() {
            if (current >= questions.length) {
                finishTest();
                return;
            }
            const q = questions[current];
            body.innerHTML = `
                <div class="test-progress">
                    <div class="test-progress-fill" style="width: ${((current) / questions.length) * 100}%"></div>
                </div>
                <p style="font-size: 13px; color: var(--text-muted); margin-bottom: 12px;">Вопрос ${current + 1} из ${questions.length}</p>
                <h3 class="test-question">${q.q}</h3>
                <div class="test-options">
                    ${q.a.map((opt, i) => `<button class="test-option" data-idx="${i}">${opt}</button>`).join('')}
                </div>
            `;
            body.querySelectorAll('.test-option').forEach(btn => {
                btn.addEventListener('click', () => {
                    const idx = parseInt(btn.dataset.idx);
                    if (idx === q.correct) {
                        score++;
                        btn.style.borderColor = '#22c55e';
                        btn.style.background = 'rgba(34, 197, 94, 0.1)';
                    } else {
                        btn.style.borderColor = '#ef4444';
                        btn.style.background = 'rgba(239, 68, 68, 0.1)';
                    }
                    setTimeout(() => {
                        current++;
                        renderQuestion();
                    }, 600);
                });
            });
        }

        function finishTest() {
            const percentScore = Math.round((score / questions.length) * 100);
            let level = 'С нуля';
            let course = 'Китайский с нуля';
            if (percentScore >= 80) { level = 'Средний'; course = 'HSK 3-4'; }
            else if (percentScore >= 50) { level = 'Начальный'; course = 'Основы HSK 1'; }
            else if (percentScore >= 25) { level = 'A0+'; course = 'Разговорный старт'; }

            body.innerHTML = `
                <div style="text-align: center;">
                    <div style="font-size: 64px; margin-bottom: 16px;">🎉</div>
                    <h3 style="font-size: 24px; margin-bottom: 8px;">Тест пройден!</h3>
                    <p style="color: var(--text-muted); margin-bottom: 24px;">Ваш уровень: <strong style="color: var(--accent);">${level}</strong></p>
                    <div style="padding: 24px; background: var(--bg); border-radius: var(--radius); margin-bottom: 24px;">
                        <p style="font-size: 14px; color: var(--text-muted); margin-bottom: 8px;">Рекомендуем курс:</p>
                        <p style="font-size: 20px; font-weight: 700; color: var(--accent);">${course}</p>
                    </div>
                    <a href="#trial" class="btn btn-primary btn-full" onclick="document.getElementById('testModal').classList.remove('open')">Записаться на пробный урок</a>
                </div>
            `;
            updateProgress(percentScore);
            showToast(`🎯 Уровень определён: ${level}`);
        }

        function updateProgress(p) {
            if (circle) {
                const offset = 534 - (534 * p / 100);
                circle.style.strokeDashoffset = offset;
            }
            if (percent) percent.textContent = p + '%';
        }

        // Демо-анимация прогресса
        setTimeout(() => updateProgress(75), 1500);
    }

    /* ---------- Tilt эффект ---------- */
    function initTilt() {
        if (window.matchMedia('(max-width: 968px)').matches) return;
        document.querySelectorAll('[data-tilt]').forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const cx = rect.width / 2;
                const cy = rect.height / 2;
                const rotX = ((y - cy) / cy) * -6;
                const rotY = ((x - cx) / cx) * 6;
                card.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-8px)`;
            });
            card.addEventListener('mouseleave', () => {
                card.style.transform = '';
            });
        });
    }

    /* ---------- Горячие клавиши ---------- */
    function initKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            // Ctrl/Cmd + K — поиск
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                showToast('🔍 Поиск скоро будет доступен!');
            }
            // Esc — закрыть модалку
            if (e.key === 'Escape') {
                document.getElementById('testModal')?.classList.remove('open');
            }
        });

        document.getElementById('searchBtn')?.addEventListener('click', () => {
            showToast('🔍 Поиск скоро будет доступен!');
        });
    }

    // Глобальный доступ
    window.DragonSchool = { showToast };
})();