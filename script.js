// ================================
// NAVEGAÇÃO ATIVA
// ================================

document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', function() {
        document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
        this.classList.add('active');
    });
});

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
// EXPANDIR/RETRAIR SEÇÕES
// ================================

function toggleSection(sectionId) {
    const content = document.getElementById(sectionId + '-content');

    if (content.classList.contains('collapsed')) {
        content.classList.remove('collapsed');
        content.classList.add('expanded');
    } else {
        content.classList.add('collapsed');
        content.classList.remove('expanded');
    }
}

// Expandir automaticamente "Sobre"
document.addEventListener('DOMContentLoaded', function() {
    const sobreContent = document.getElementById('sobre-content');
    if (sobreContent) {
        sobreContent.classList.remove('collapsed');
        sobreContent.classList.add('expanded');
    }
});

// ================================
// IDIOMAS
// ================================

const translations = {
    pt: {
        'hero-title': 'Karen Brasil',
        'hero-subtitle': 'Analista de Dados & Automação',
        'hero-desc': 'Transformo dados em decisões estratégicas e automatizzo processos complexos com IA e Python.',
        'cta-btn': 'Conectar',
        'sobre-title': 'Sobre',
        'sobre-text': 'Analista de dados com 2+ anos de experiência em infraestrutura e suporte técnico. Especializada em SQL, Python, automação com n8n e integração com IA (Claude, Gemini). Graduanda em Análise e Desenvolvimento de Sistemas e Data Analytics.',
        'skills-title': 'Habilidades',
        'exp-title': 'Experiência Profissional',
        'exp1-title': 'Analista N1 - NOC',
        'exp1-company': 'How be - Tecnologia e Soluções',
        'exp1-date': '2024 - 2025 • 10 meses',
        'exp1-desc': 'Monitoramento de infraestrutura com ZABBIX e GRAFANA. Gestão de câmeras IP, WiFi e dispositivos IoT.',
        'exp2-title': 'Suporte Técnico - Field Service',
        'exp2-company': 'Mobwire - Serviços de Telecomunicação',
        'exp2-date': '2023 - 2024 • 1 ano',
        'exp2-desc': 'Suporte remoto via AnyDesk. Gestão de máquinas com Active Directory. Instalação e configuração de sistemas.',
        'exp3-title': 'Estagiária - Suporte de TI',
        'exp3-company': 'Hapvida Assistência Médica S.A.',
        'exp3-date': '2020 - 2023 • 2 anos 8 meses',
        'exp3-desc': 'Suporte biométrico. Análise de solicitações e autorizações de procedimentos. Treinamento de prestadores.',
        'edu-title': 'Formação',
        'proj-title': 'Projetos',
        'contact-title': 'Contato',
        'contact-desc': 'Vamos conversar sobre oportunidades!',
        'footer-text': '© 2025 Karen Brasil. Todos os direitos reservados.'
    },
    en: {
        'hero-title': 'Karen Brasil',
        'hero-subtitle': 'Data Analyst & Automation',
        'hero-desc': 'I transform data into strategic decisions and automate complex processes with AI and Python.',
        'cta-btn': 'Connect',
        'sobre-title': 'About',
        'sobre-text': 'Data analyst with 2+ years of experience in infrastructure and technical support. Specialized in SQL, Python, automation with n8n and AI integration (Claude, Gemini). Graduating in Systems Analysis and Development and Data Analytics.',
        'skills-title': 'Skills',
        'exp-title': 'Professional Experience',
        'exp1-title': 'Analyst Level 1 - NOC',
        'exp1-company': 'How be - Technology and Solutions',
        'exp1-date': '2024 - 2025 • 10 months',
        'exp1-desc': 'Infrastructure monitoring with ZABBIX and GRAFANA. Management of IP cameras, WiFi and IoT devices.',
        'exp2-title': 'Technical Support - Field Service',
        'exp2-company': 'Mobwire - Telecommunications Services',
        'exp2-date': '2023 - 2024 • 1 year',
        'exp2-desc': 'Remote support via AnyDesk. Machine management with Active Directory. System installation and configuration.',
        'exp3-title': 'Intern - IT Support',
        'exp3-company': 'Hapvida Medical Assistance S.A.',
        'exp3-date': '2020 - 2023 • 2 years 8 months',
        'exp3-desc': 'Biometric support. Request analysis and procedure authorizations. Training of providers.',
        'edu-title': 'Education',
        'proj-title': 'Projects',
        'contact-title': 'Contact',
        'contact-desc': 'Let\'s talk about opportunities!',
        'footer-text': '© 2025 Karen Brasil. All rights reserved.'
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
