
// Modern Portfolio JavaScript - All Functionality

// Global Variables
let currentSkillTab = 0;
let isMobileMenuOpen = false;
let currentRole = 0;
const roles = ["Full-Stack Developer", "Problem Solver", "Tech Explorer"];

// Projects Data
const projectsData = [
    {
        id: 1,
        title: "ScanServe - QR Restaurant Ordering",
        shortDescription: "Full-stack SaaS platform with QR-based ordering and role-based dashboards",
        fullDescription: "Built a comprehensive full-stack SaaS platform where customers can scan table-specific QR codes to order food. Implemented role-based dashboards for customers, managers, and chefs with real-time order flow and admin control. Features include table management, menu customization, order tracking, and payment integration ready.",
        technologies: ["HTML", "CSS", "JavaScript", "TypeScript", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
        features: [
            "QR code scanning for table-based ordering",
            "Real-time order tracking and notifications",
            "Role-based dashboards (Customer, Staff, Admin, Chef)",
            "Dynamic menu management system",
            "Payment integration ready architecture",
            "Mobile-responsive design with PWA features",
            "Order analytics and reporting",
            "Multi-restaurant support"
        ],
        gradient: "from-emerald-500 to-teal-600",
        bgGradient: "from-emerald-500/20 to-teal-600/20",
        demoUrl: "#",
        githubUrl: "https://github.com/abhishekdwivedi2022",
        image: "photo-1498050108023-c5249f4df085"
    },
    {
        id: 2,
        title: "WhatsApp Order Form",
        shortDescription: "Responsive form sending food orders directly to vendors via WhatsApp",
        fullDescription: "Created a streamlined responsive form that sends food order details directly to vendors via WhatsApp. Specifically targeted for local food vendors serving college students. Features automatic message formatting, order validation, and vendor management system.",
        technologies: ["HTML", "CSS", "JavaScript", "DOM Manipulation", "WhatsApp API"],
        features: [
            "Interactive order form with real-time validation",
            "Automatic WhatsApp message formatting",
            "Real-time order summary and pricing",
            "Mobile-optimized interface for students",
            "Multiple vendor support system",
            "Order history tracking and management",
            "Custom vendor profiles",
            "Bulk order handling"
        ],
        gradient: "from-blue-500 to-cyan-600",
        bgGradient: "from-blue-500/20 to-cyan-600/20",
        demoUrl: "#",
        githubUrl: "https://github.com/abhishekdwivedi2022",
        image: "photo-1486312338219-ce68d2c6f44d"
    },
    {
        id: 3,
        title: "PG Finder Web App",
        shortDescription: "Full-stack app with real-time filtering and dynamic AJAX search",
        fullDescription: "Developed a comprehensive full-stack application with real-time filtering and dynamic search using AJAX. Designed specifically for students to find PG accommodations efficiently. Built during internship at Internshala, reduced user search time by 30% and improved overall responsiveness.",
        technologies: ["React.js", "Node.js", "MySQL", "AJAX", "CSS3", "Express.js"],
        features: [
            "Advanced search with real-time AJAX filtering",
            "Dynamic location-based search with maps",
            "User reviews and ratings system",
            "Booking management and calendar integration",
            "Responsive design for all devices",
            "Owner dashboard for property management",
            "Photo gallery and virtual tours",
            "Price comparison and analytics"
        ],
        gradient: "from-purple-500 to-pink-600",
        bgGradient: "from-purple-500/20 to-pink-600/20",
        demoUrl: "#",
        githubUrl: "https://github.com/abhishekdwivedi2022",
        image: "photo-1581091226825-a6a2a5aee158"
    }
];

// Utility Functions
function scrollToSection(selector) {
    const element = document.querySelector(selector);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Navigation Functions
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    
    isMobileMenuOpen = !isMobileMenuOpen;
    
    if (isMobileMenuOpen) {
        mobileMenu.classList.add('active');
        menuIcon.textContent = '✕';
    } else {
        mobileMenu.classList.remove('active');
        menuIcon.textContent = '☰';
    }
}

function closeMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    
    isMobileMenuOpen = false;
    mobileMenu.classList.remove('active');
    menuIcon.textContent = '☰';
}

function updateProgressBar() {
    const progressFill = document.getElementById('progress-fill');
    const scrollTop = window.pageYOffset;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    progressFill.style.width = scrollPercent + '%';
}

function handleNavbarScroll() {
    const navbar = document.getElementById('navbar');
    const navLogoText = document.getElementById('nav-logo-text');
    
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

// Hero Section Functions
function createParticles() {
    const container = document.getElementById('particles-container');
    const particleCount = 20;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.width = Math.random() * 6 + 2 + 'px';
        particle.style.height = particle.style.width;
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (6 + Math.random() * 4) + 's';
        
        const colors = [
            'rgba(147, 51, 234, 0.8)',
            'rgba(139, 92, 246, 0.8)',
            'rgba(59, 130, 246, 0.8)',
            'rgba(168, 85, 247, 0.8)'
        ];
        
        particle.style.background = `radial-gradient(circle, ${colors[i % 4]} 0%, transparent 70%)`;
        container.appendChild(particle);
    }
}

function animateRoleText() {
    const roleTextElement = document.getElementById('role-text');
    if (roleTextElement) {
        roleTextElement.textContent = roles[currentRole];
        currentRole = (currentRole + 1) % roles.length;
    }
}

// Skills Section Functions
function switchSkillTab(tabIndex) {
    currentSkillTab = tabIndex;
    
    // Update tab buttons
    const tabs = document.querySelectorAll('.skill-tab');
    tabs.forEach((tab, index) => {
        if (index === tabIndex) {
            tab.classList.add('skill-tab-active');
        } else {
            tab.classList.remove('skill-tab-active');
        }
    });
    
    // Update content
    const skillsGrids = document.querySelectorAll('.skills-grid');
    skillsGrids.forEach((grid, index) => {
        if (index === tabIndex) {
            grid.classList.remove('hidden');
        } else {
            grid.classList.add('hidden');
        }
    });
}

// Projects Section Functions
function openProjectModal(projectIndex) {
    const project = projectsData[projectIndex];
    const modal = document.getElementById('project-modal');
    
    // Update modal content
    document.getElementById('modal-title').textContent = project.title;
    document.getElementById('modal-description').textContent = project.fullDescription;
    
    // Update modal image
    const modalImage = document.getElementById('modal-image');
    modalImage.className = `modal-image project-image-${projectIndex + 1}`;
    
    // Update technologies
    const techGrid = document.getElementById('modal-technologies');
    techGrid.innerHTML = '';
    project.technologies.forEach(tech => {
        const badge = document.createElement('span');
        badge.className = 'tech-badge';
        badge.textContent = tech;
        techGrid.appendChild(badge);
    });
    
    // Update features
    const featuresList = document.getElementById('modal-features');
    featuresList.innerHTML = '';
    project.features.slice(0, 4).forEach(feature => {
        const li = document.createElement('li');
        li.textContent = feature;
        featuresList.appendChild(li);
    });
    
    // Update links
    document.getElementById('modal-demo-link').href = project.demoUrl;
    document.getElementById('modal-github-link').href = project.githubUrl;
    
    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
    const modal = document.getElementById('project-modal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Contact Form Functions
function handleContactForm(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        subject: formData.get('subject'),
        message: formData.get('message')
    };
    
    // Simulate form submission
    alert('Thank you for your message! I will get back to you soon.');
    event.target.reset();
}

// Scroll Functions
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function handleScroll() {
    updateProgressBar();
    handleNavbarScroll();
    
    // Add scroll animations
    const elements = document.querySelectorAll('.animate-fade-in');
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Animation Functions
function initializeAnimations() {
    // Set initial styles for fade-in elements
    const fadeElements = document.querySelectorAll('.animate-fade-in');
    fadeElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'all 0.6s ease-out';
    });
    
    // Set initial styles for slide elements
    const slideElements = document.querySelectorAll('.animate-slide-in-right');
    slideElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateX(20px)';
        element.style.transition = 'all 0.6s ease-out';
    });
    
    // Trigger animations on page load
    setTimeout(() => {
        fadeElements.forEach(element => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        });
        
        slideElements.forEach(element => {
            element.style.opacity = '1';
            element.style.transform = 'translateX(0)';
        });
    }, 100);
}

// Event Listeners
function setupEventListeners() {
    // Navigation
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    }
    
    // Scroll events
    window.addEventListener('scroll', debounce(handleScroll, 10));
    
    // Modal events
    const closeModalBtn = document.getElementById('close-modal');
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeProjectModal);
    }
    
    const modal = document.getElementById('project-modal');
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeProjectModal();
            }
        });
    }
    
    // Contact form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }
    
    // Scroll to top button
    const scrollToTopBtn = document.getElementById('scroll-to-top');
    if (scrollToTopBtn) {
        scrollToTopBtn.addEventListener('click', scrollToTop);
    }
    
    // Keyboard events
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (document.getElementById('project-modal').classList.contains('active')) {
                closeProjectModal();
            }
            if (isMobileMenuOpen) {
                closeMobileMenu();
            }
        }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// Intersection Observer for animations
function setupIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all animated elements
    document.querySelectorAll('.animate-fade-in, .animate-slide-in-right').forEach(el => {
        observer.observe(el);
    });
}

// Resize handler
function handleResize() {
    // Close mobile menu on desktop
    if (window.innerWidth >= 768 && isMobileMenuOpen) {
        closeMobileMenu();
    }
}

// Performance optimization
function optimizePerformance() {
    // Lazy load images
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
    
    // Preload critical resources
    const criticalResources = [
        'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap',
        'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap'
    ];
    
    criticalResources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'style';
        link.href = resource;
        document.head.appendChild(link);
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Portfolio website loaded successfully!');
    
    // Initialize all components
    setupEventListeners();
    initializeAnimations();
    setupIntersectionObserver();
    createParticles();
    optimizePerformance();
    
    // Start role animation
    setInterval(animateRoleText, 3000);
    
    // Handle window resize
    window.addEventListener('resize', debounce(handleResize, 250));
    
    // Initial scroll handler call
    handleScroll();
    
    // Set up skill tabs
    switchSkillTab(0);
    
    // Add loading complete class
    document.body.classList.add('loaded');
});

// Global functions for inline event handlers
window.scrollToSection = scrollToSection;
window.switchSkillTab = switchSkillTab;
window.openProjectModal = openProjectModal;
window.closeMobileMenu = closeMobileMenu;

// Service Worker Registration (for PWA capabilities)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then((registration) => {
                console.log('SW registered: ', registration);
            })
            .catch((registrationError) => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// Error handling
window.addEventListener('error', (e) => {
    console.error('Global error caught:', e.error);
});

window.addEventListener('unhandledrejection', (e) => {
    console.error('Unhandled promise rejection:', e.reason);
});

// Performance monitoring
window.addEventListener('load', () => {
    setTimeout(() => {
        const perfData = performance.getEntriesByType('navigation')[0];
        console.log('Page load time:', perfData.loadEventEnd - perfData.fetchStart, 'ms');
    }, 0);
});

// Accessibility improvements
document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-navigation');
});

// Theme detection (respects user's system preference)
if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    // Disable animations for users who prefer reduced motion
    document.documentElement.style.setProperty('--animation-duration', '0s');
}

// Console welcome message
console.log(`
🚀 Welcome to Abhishek Dwivedi's Portfolio!
📧 Contact: abhishek.dwivedi2022@glbajajgroup.org
🔗 GitHub: https://github.com/abhishekdwivedi2022
💻 Built with HTML, CSS, and JavaScript
`);
