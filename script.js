// ================================
// ACTIVE NAV ON SCROLL
// ================================

window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href').slice(1) === current) {
            item.classList.add('active');
        }
    });
});

// ================================
// LANGUAGE TOGGLE
// ================================

const translations = {
    pt: {
        'logo-text': 'Karen Brasil',
        'logo-badge': 'Data • IA • Automação',
        'hero-label': 'Bem-vindo',
        'hero-title': 'Karen Brasil',
        'hero-subtitle': 'Transformo dados em estratégia e automatizzo processos com IA',
        'hero-description': 'Especialista em SQL, Python e automação. 2+ anos construindo soluções de dados e infraestrutura que impactam.',
        'contact-cta': 'Vamos Conversar',
        'about-title': 'Sobre Mim',
        'about-subtitle': 'Profissional em transformação digital',
        'skills-title': 'Stack Técnico',
        'skills-subtitle': 'Ferramentas que domino',
        'exp-title': 'Trajetória Profissional',
        'exp-subtitle': 'Experiências que me formaram',
        'projects-title': 'Projetos em Destaque',
        'projects-subtitle': 'Trabalhos que realizei',
    },
    en: {
        'logo-text': 'Karen Brasil',
        'logo-badge': 'Data • AI • Automation',
        'hero-label': 'Welcome',
        'hero-title': 'Karen Brasil',
        'hero-subtitle': 'I transform data into strategy and automate processes with AI',
        'hero-description': 'Specialist in SQL, Python and automation. 2+ years building data and infrastructure solutions that impact.',
        'contact-cta': 'Let\'s Talk',
        'about-title': 'About Me',
        'about-subtitle': 'Digital transformation professional',
        'skills-title': 'Tech Stack',
        'skills-subtitle': 'Tools I master',
        'exp-title': 'Professional Journey',
        'exp-subtitle': 'Experiences that shaped me',
        'projects-title': 'Featured Projects',
        'projects-subtitle': 'Work I\'ve done',
    }
};

let currentLang = 'pt';

document.getElementById('langBtn').addEventListener('click', function() {
    currentLang = currentLang === 'pt' ? 'en' : 'pt';
    this.textContent = currentLang === 'pt' ? 'EN' : 'PT';
    updateLanguage();
});

function updateLanguage() {
    Object.keys(translations[currentLang]).forEach(key => {
        const element = document.getElementById(key);
        if (element) {
            element.textContent = translations[currentLang][key];
        }
    });
}
