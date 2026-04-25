// ========================
// CONFIGURAÇÃO DE IDIOMAS
// ========================

const translations = {
    pt: {
        'hero-title': 'Karen Brasil',
        'hero-subtitle': 'Analista de Dados & Automação',
        'hero-description': 'Especializada em análise de dados, automação de processos e integração com IA. Transformo dados em insights.',
        'cta-button': 'Conectar',
        'about-title': 'Sobre',
        'about-intro': 'Olá! Sou Karen, analista de dados com 2+ anos de experiência em suporte técnico e infraestrutura.',
        'about-skills': 'Tenho conhecimento em SQL, Python, análise de dados, automação de processos e integração com IA. Atualmente estudo Análise e Desenvolvimento de Sistemas e Data Analytics.',
        'about-goal': 'Meu objetivo é transformar dados em decisões estratégicas e criar soluções que automatiazem processos complexos.',
        'location-label': 'Localização',
        'status-label': 'Disponibilidade',
        'availability': 'Remoto / Híbrido',
        'contract-label': 'Modalidade',
        'contract': 'CTL / PJ',
        'skills-title': 'Habilidades',
        'languages-title': 'Linguagens de Programação',
        'frameworks-title': 'Frameworks & IA',
        'tools-title': 'Ferramentas & Plataformas',
        'database-title': 'Banco de Dados',
        'other-title': 'Outras Competências',
        'exp-title': 'Experiência Profissional',
        'exp1-title': 'Analista N1 - NOC',
        'exp1-date': '2024 - 2025',
        'exp1-company': 'How be - Tecnologia e Soluções',
        'exp1-desc': 'Monitoramento de infraestrutura com ZABBIX e GRAFANA. Gestão de câmeras IP, WiFi e dispositivos IoT. Atendimento de chamados técnicos.',
        'exp2-title': 'Suporte Técnico - Field Service',
        'exp2-date': '2023 - 2024',
        'exp2-company': 'Mobwire - Serviços de Telecomunicação',
        'exp2-desc': 'Suporte remoto via AnyDesk. Gestão de máquinas e usuários com Active Directory. Instalação de softwares e configuração de sistemas.',
        'exp3-title': 'Estagiária - Suporte de TI',
        'exp3-date': '2020 - 2023',
        'exp3-company': 'Hapvida Assistência Médica S.A.',
        'exp3-desc': 'Suporte biométrico e análise de solicitações. Treinamento de prestadores. Autorizações de procedimentos e consultas.',
        'education-title': 'Formação',
        'contact-title': 'Contato',
        'contact-subtitle': 'Vamos conversar sobre oportunidades!',
        'label-linkedin': 'LinkedIn',
        'label-github': 'GitHub',
        'label-email': 'Email',
        'label-whatsapp': 'WhatsApp',
        'footer-text': '© 2025 Karen Brasil. Todos os direitos reservados.'
    },
    en: {
        'hero-title': 'Karen Brasil',
        'hero-subtitle': 'Data Analytics & Automation',
        'hero-description': 'Specialized in data analysis, process automation and AI integration. I transform data into insights.',
        'cta-button': 'Connect',
        'about-title': 'About',
        'about-intro': 'Hi! I\'m Karen, a data analyst with 2+ years of experience in technical support and infrastructure.',
        'about-skills': 'I have knowledge in SQL, Python, data analysis, process automation and AI integration. Currently studying Systems Analysis and Development and Data Analytics.',
        'about-goal': 'My goal is to transform data into strategic decisions and create solutions that automate complex processes.',
        'location-label': 'Location',
        'status-label': 'Availability',
        'availability': 'Remote / Hybrid',
        'contract-label': 'Contract Type',
        'contract': 'CLT / PJ',
        'skills-title': 'Skills',
        'languages-title': 'Programming Languages',
        'frameworks-title': 'Frameworks & AI',
        'tools-title': 'Tools & Platforms',
        'database-title': 'Databases',
        'other-title': 'Other Competencies',
        'exp-title': 'Professional Experience',
        'exp1-title': 'Analyst Level 1 - NOC',
        'exp1-date': '2024 - 2025',
        'exp1-company': 'How be - Technology and Solutions',
        'exp1-desc': 'Infrastructure monitoring with ZABBIX and GRAFANA. Management of IP cameras, WiFi and IoT devices. Technical support.',
        'exp2-title': 'Technical Support - Field Service',
        'exp2-date': '2023 - 2024',
        'exp2-company': 'Mobwire - Telecommunications Services',
        'exp2-desc': 'Remote support via AnyDesk. Machine and user management with Active Directory. Software installation and system configuration.',
        'exp3-title': 'Intern - IT Support',
        'exp3-date': '2020 - 2023',
        'exp3-company': 'Hapvida Medical Assistance S.A.',
        'exp3-desc': 'Biometric support and request analysis. Training of providers. Procedure and consultation authorizations.',
        'education-title': 'Education',
        'contact-title': 'Contact',
        'contact-subtitle': 'Let\'s talk about opportunities!',
        'label-linkedin': 'LinkedIn',
        'label-github': 'GitHub',
        'label-email': 'Email',
        'label-whatsapp': 'WhatsApp',
        'footer-text': '© 2025 Karen Brasil. All rights reserved.'
    }
};

// ========================
// VARIÁVEIS GLOBAIS
// ========================

let currentLanguage = 'pt';

// ========================
// FUNÇÕES DE NAVEGAÇÃO
// ========================

document.addEventListener('DOMContentLoaded', function() {
    // Inicializar
    updateActiveLink();

    // Event listeners para navegação
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            updateActiveLink(targetId);
            document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Botão de idioma
    document.getElementById('langToggle').addEventListener('click', toggleLanguage);

    // Scroll para atualizar nav links ativos
    window.addEventListener('scroll', updateActiveLink);
});

function updateActiveLink(targetId) {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });

    if (!targetId) {
        // Detectar seção atual baseada no scroll
        const sections = ['sobre', 'habilidades', 'experiencias', 'contato'];
        for (let section of sections) {
            const element = document.getElementById(section);
            if (element) {
                const rect = element.getBoundingClientRect();
                if (rect.top <= 200 && rect.bottom >= 200) {
                    targetId = section;
                    break;
                }
            }
        }
    }

    if (targetId) {
        const activeLink = document.querySelector(`a[href="#${targetId}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }
}

// ========================
// FUNÇÕES DE IDIOMA
// ========================

function toggleLanguage() {
    currentLanguage = currentLanguage === 'pt' ? 'en' : 'pt';
    updateLanguage();
    document.getElementById('langToggle').textContent = currentLanguage === 'pt' ? 'EN' : 'PT';
}

function updateLanguage() {
    const translation = translations[currentLanguage];

    for (const [key, value] of Object.entries(translation)) {
        const element = document.getElementById(key);
        if (element) {
            element.textContent = value;
        }
    }
}

// ========================
// EFEITOS DE SCROLL
// ========================

// Animação ao entrar na viewport
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.experience-item').forEach(item => {
    observer.observe(item);
});

// ========================
// EFEITOS DE PARALLAX SUAVE
// ========================

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.hero::before');

    if (parallax) {
        parallax.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

// ========================
// DARK MODE (já ativo por padrão)
// ========================

// Verificar preferência do usuário
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
if (prefersDark) {
    document.body.classList.add('dark-mode');
}
