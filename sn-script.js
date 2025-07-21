// Données des traiteurs
const caterersData = [
    {
        id: 1,
        name: "Chez Fatou",
        specialty: "traditionnelle",
        city: "dakar",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
        location: "Plateau, Dakar",
        description: "Spécialiste de la cuisine traditionnelle sénégalaise authentique."
    },
    {
        id: 2,
        name: "Délices d'Afrique",
        specialty: "moderne",
        city: "dakar",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop",
        location: "Almadies, Dakar",
        description: "Cuisine moderne avec une touche africaine contemporaine."
    },
    {
        id: 3,
        name: "Saveurs du Terroir",
        specialty: "grillades",
        city: "dakar",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop",
        location: "Parcelles, Dakar",
        description: "Expert en grillades et barbecues pour tous vos événements."
    },
    {
        id: 4,
        name: "Maman Aïcha",
        specialty: "traditionnelle",
        city: "thies",
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop",
        location: "Centre-ville, Thiès",
        description: "Cuisine familiale traditionnelle avec des recettes ancestrales."
    },
    {
        id: 5,
        name: "Le Gourmet",
        specialty: "internationale",
        city: "dakar",
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop",
        location: "Point E, Dakar",
        description: "Cuisine internationale raffinée pour vos événements d'exception."
    },
    {
        id: 6,
        name: "Douceurs de Ndèye",
        specialty: "patisserie",
        city: "dakar",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop",
        location: "Mermoz, Dakar",
        description: "Pâtisseries fines et gâteaux personnalisés pour mariages."
    },
    {
        id: 7,
        name: "Tam-Tam Cuisine",
        specialty: "moderne",
        city: "saint-louis",
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1555244162-803834f70033?w=400&h=300&fit=crop",
        location: "Île de Saint-Louis",
        description: "Fusion créative entre traditions locales et tendances modernes."
    },
    {
        id: 8,
        name: "Festin Royal",
        specialty: "traditionnelle",
        city: "kaolack",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop",
        location: "Médina, Kaolack",
        description: "Spécialités royales du royaume du Saloum."
    },
    {
        id: 9,
        name: "Braise & Saveurs",
        specialty: "grillades",
        city: "thies",
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=400&h=300&fit=crop",
        location: "Quartier Rail, Thiès",
        description: "Maîtres grilleurs avec des techniques traditionnelles au feu de bois."
    },
    {
        id: 10,
        name: "Sweet Dreams",
        specialty: "patisserie",
        city: "saint-louis",
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=400&h=300&fit=crop",
        location: "Sor, Saint-Louis",
        description: "Créations sucrées et pièces montées spectaculaires."
    },
    {
        id: 11,
        name: "L'Art Culinaire",
        specialty: "internationale",
        city: "dakar",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?w=400&h=300&fit=crop",
        location: "Fann Résidence, Dakar",
        description: "Haute gastronomie internationale adaptée aux goûts locaux."
    },
    {
        id: 12,
        name: "Terranga Délices",
        specialty: "traditionnelle",
        city: "dakar",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400&h=300&fit=crop",
        location: "Ouakam, Dakar",
        description: "L'hospitalité sénégalaise dans chaque plat, spécialité thieboudienne."
    }
];

// Variables globales
let currentCaterers = [...caterersData];

// Initialisation au chargement
document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    initAnimations();
    
    // Initialisation spécifique selon la page
    if (window.location.pathname.includes('index') || window.location.pathname === '/' || window.location.pathname.includes('sn-index')) {
        initHomepage();
    }
    
    if (window.location.pathname.includes('traiteurs') || window.location.pathname.includes('sn-traiteurs')) {
        initCaterersPage();
    }
    
    if (window.location.pathname.includes('contact') || window.location.pathname.includes('sn-contact')) {
        initContactForm();
    }
    
    // Scroll animé pour les liens d'ancrage
    initSmoothScroll();
    
    // Initialiser les compteurs animés
    initCounters();
    
    // Newsletter
    initNewsletter();
});

// Navigation mobile
function initNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
        
        // Fermer le menu mobile lors du clic sur un lien
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });
    }
}

// Animations au scroll
function initAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // Animation spéciale pour les cartes
                if (entry.target.classList.contains('caterer-card')) {
                    entry.target.style.transform = 'scale(1)';
                }
            }
        });
    }, observerOptions);
    
    // Observer tous les éléments avec data-aos
    const animatedElements = document.querySelectorAll('[data-aos]');
    animatedElements.forEach(el => {
        observer.observe(el);
    });
    
    // Observer les cartes de service et traiteurs
    const cards = document.querySelectorAll('.service-card, .caterer-card');
    cards.forEach(card => {
        observer.observe(card);
    });
}

// Page d'accueil
function initHomepage() {
    initHeroSlider();
    initTestimonialsSlider();
}

// Slider hero
function initHeroSlider() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.hero-dots .dot');
    const prevBtn = document.querySelector('.hero-prev');
    const nextBtn = document.querySelector('.hero-next');
    let currentSlide = 0;
    let slideInterval;

    if (!slides.length) return;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
            // Set background image
            if (i === index) {
                slide.style.backgroundImage = `url('${slide.dataset.bg}')`;
            }
        });
        
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
        
        currentSlide = index;
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    function startAutoSlide() {
        slideInterval = setInterval(nextSlide, 5000);
    }

    function stopAutoSlide() {
        clearInterval(slideInterval);
    }

    // Événements
    if (nextBtn) nextBtn.addEventListener('click', () => {
        nextSlide();
        stopAutoSlide();
        setTimeout(startAutoSlide, 10000);
    });

    if (prevBtn) prevBtn.addEventListener('click', () => {
        prevSlide();
        stopAutoSlide();
        setTimeout(startAutoSlide, 10000);
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
            stopAutoSlide();
            setTimeout(startAutoSlide, 10000);
        });
    });

    // Initialiser le premier slide
    showSlide(0);
    startAutoSlide();

    // Pause au survol
    const heroSlider = document.querySelector('.hero-slider');
    if (heroSlider) {
        heroSlider.addEventListener('mouseenter', stopAutoSlide);
        heroSlider.addEventListener('mouseleave', startAutoSlide);
    }
}

// Slider témoignages
function initTestimonialsSlider() {
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    const testimonialDots = document.querySelectorAll('.testimonial-dots .dot');
    const testimonialPrev = document.querySelector('.testimonial-prev');
    const testimonialNext = document.querySelector('.testimonial-next');
    let currentTestimonial = 0;

    if (!testimonialCards.length) return;

    function showTestimonial(index) {
        testimonialCards.forEach((card, i) => {
            card.classList.toggle('active', i === index);
        });
        
        testimonialDots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
        
        currentTestimonial = index;
    }

    function nextTestimonial() {
        currentTestimonial = (currentTestimonial + 1) % testimonialCards.length;
        showTestimonial(currentTestimonial);
    }

    function prevTestimonial() {
        currentTestimonial = (currentTestimonial - 1 + testimonialCards.length) % testimonialCards.length;
        showTestimonial(currentTestimonial);
    }

    // Événements
    if (testimonialNext) testimonialNext.addEventListener('click', nextTestimonial);
    if (testimonialPrev) testimonialPrev.addEventListener('click', prevTestimonial);

    testimonialDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showTestimonial(index);
        });
    });

    // Auto-rotation
    setInterval(nextTestimonial, 6000);
}

// Compteurs animés
function initCounters() {
    const counters = document.querySelectorAll('.stat-number[data-target]');
    
    const observerOptions = {
        threshold: 0.7,
        rootMargin: '0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.dataset.target);
                animateCounter(counter, target);
                observer.unobserve(counter);
            }
        });
    }, observerOptions);
    
    counters.forEach(counter => observer.observe(counter));
}

// Newsletter
function initNewsletter() {
    const newsletterForm = document.getElementById('newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleNewsletterSubmit(this);
        });
    }
}

function handleNewsletterSubmit(form) {
    const button = form.querySelector('button');
    const input = form.querySelector('input');
    const email = input.value.trim();
    
    if (!email || !validateEmail(email)) {
        showNotification('Veuillez entrer une adresse email valide.', 'error');
        return;
    }
    
    // Animation loading
    button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Inscription...';
    button.disabled = true;
    
    // Simulation d'inscription
    setTimeout(() => {
        form.reset();
        button.innerHTML = '<i class="fas fa-paper-plane"></i> S\'abonner';
        button.disabled = false;
        showNotification('Merci pour votre inscription !', 'success');
    }, 2000);
}

// Scroll fluide
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Ignorer les liens vides
            if (href === '#' || href === '#!') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Page des traiteurs
function initCaterersPage() {
    const caterersGrid = document.getElementById('caterers-grid');
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    const specialtyFilter = document.getElementById('specialty-filter');
    const cityFilter = document.getElementById('city-filter');
    const ratingFilter = document.getElementById('rating-filter');
    const sortFilter = document.getElementById('sort-filter');
    const clearFilters = document.getElementById('clear-filters');
    const noResults = document.getElementById('no-results');
    const viewBtns = document.querySelectorAll('.view-btn');
    const resultsNumber = document.getElementById('results-number');
    
    if (!caterersGrid) return;
    
    // Affichage initial
    displayCaterers(currentCaterers);
    updateResultsCount();
    
    // Recherche
    if (searchInput) {
        searchInput.addEventListener('input', debounce(filterCaterers, 300));
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                filterCaterers();
            }
        });
    }
    
    if (searchBtn) {
        searchBtn.addEventListener('click', filterCaterers);
    }
    
    // Événements des filtres
    if (specialtyFilter) specialtyFilter.addEventListener('change', filterCaterers);
    if (cityFilter) cityFilter.addEventListener('change', filterCaterers);
    if (ratingFilter) ratingFilter.addEventListener('change', filterCaterers);
    if (sortFilter) sortFilter.addEventListener('change', applySorting);
    
    // Vue grille/liste
    viewBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const view = this.dataset.view;
            switchView(view);
        });
    });
    
    // Effacer filtres
    if (clearFilters) {
        clearFilters.addEventListener('click', function() {
            searchInput.value = '';
            specialtyFilter.value = '';
            cityFilter.value = '';
            ratingFilter.value = '';
            sortFilter.value = 'rating';
            currentCaterers = [...caterersData];
            applySorting();
            displayCaterers(currentCaterers);
            updateResultsCount();
            noResults.style.display = 'none';
        });
    }
    
    // Gérer les paramètres URL
    handleURLParams();
}

function filterCaterers() {
    const searchValue = document.getElementById('search-input')?.value.toLowerCase().trim() || '';
    const specialtyValue = document.getElementById('specialty-filter')?.value || '';
    const cityValue = document.getElementById('city-filter')?.value || '';
    const ratingValue = parseFloat(document.getElementById('rating-filter')?.value) || 0;
    
    currentCaterers = caterersData.filter(caterer => {
        // Recherche textuelle
        const searchMatch = !searchValue || 
            caterer.name.toLowerCase().includes(searchValue) ||
            caterer.description.toLowerCase().includes(searchValue) ||
            caterer.location.toLowerCase().includes(searchValue) ||
            getSpecialtyLabel(caterer.specialty).toLowerCase().includes(searchValue);
        
        // Filtres
        const matchSpecialty = !specialtyValue || caterer.specialty === specialtyValue;
        const matchCity = !cityValue || caterer.city === cityValue;
        const matchRating = !ratingValue || caterer.rating >= ratingValue;
        
        return searchMatch && matchSpecialty && matchCity && matchRating;
    });
    
    applySorting();
    displayCaterers(currentCaterers);
    updateResultsCount();
    
    // Afficher/masquer le message "aucun résultat"
    const noResults = document.getElementById('no-results');
    if (noResults) {
        noResults.style.display = currentCaterers.length === 0 ? 'block' : 'none';
    }
}

function applySorting() {
    const sortValue = document.getElementById('sort-filter')?.value || 'rating';
    
    currentCaterers.sort((a, b) => {
        switch (sortValue) {
            case 'name':
                return a.name.localeCompare(b.name);
            case 'city':
                return a.location.localeCompare(b.location);
            case 'specialty':
                return getSpecialtyLabel(a.specialty).localeCompare(getSpecialtyLabel(b.specialty));
            case 'rating':
            default:
                return b.rating - a.rating;
        }
    });
}

function switchView(view) {
    const caterersGrid = document.getElementById('caterers-grid');
    const viewBtns = document.querySelectorAll('.view-btn');
    
    if (!caterersGrid) return;
    
    // Mettre à jour les boutons
    viewBtns.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.view === view);
    });
    
    // Appliquer la vue
    if (view === 'list') {
        caterersGrid.classList.add('list-view');
    } else {
        caterersGrid.classList.remove('list-view');
    }
    
    // Sauvegarder la préférence
    localStorage.setItem('catering-view', view);
}

function updateResultsCount() {
    const resultsNumber = document.getElementById('results-number');
    if (resultsNumber) {
        resultsNumber.textContent = currentCaterers.length;
    }
}

function handleURLParams() {
    const urlParams = new URLSearchParams(window.location.search);
    const filter = urlParams.get('filter');
    
    if (filter === 'mariage') {
        // Sélectionner automatiquement les traiteurs pour mariage
        const specialtyFilter = document.getElementById('specialty-filter');
        if (specialtyFilter) {
            specialtyFilter.value = 'traditionnelle';
            filterCaterers();
        }
    }
}

function getSpecialtyLabel(specialty) {
    const labels = {
        'traditionnelle': 'Cuisine traditionnelle',
        'moderne': 'Fusion moderne',
        'grillades': 'Grillades & BBQ',
        'patisserie': 'Pâtisserie',
        'internationale': 'Cuisine internationale'
    };
    return labels[specialty] || specialty;
}

// Fonction de debounce pour optimiser les performances de recherche
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

function displayCaterers(caterers) {
    const caterersGrid = document.getElementById('caterers-grid');
    if (!caterersGrid) return;
    
    caterersGrid.innerHTML = '';
    
    caterers.forEach((caterer, index) => {
        const catererCard = createCatererCard(caterer, index);
        caterersGrid.appendChild(catererCard);
    });
    
    // Réinitialiser les animations pour les nouvelles cartes
    setTimeout(() => {
        initAnimations();
    }, 100);
}

function createCatererCard(caterer, index) {
    const card = document.createElement('div');
    card.className = 'caterer-card';
    card.setAttribute('data-aos', 'zoom-in');
    card.setAttribute('data-aos-delay', (index * 100).toString());
    
    const specialtyLabels = {
        'traditionnelle': 'Cuisine traditionnelle',
        'moderne': 'Fusion moderne',
        'grillades': 'Grillades & BBQ',
        'patisserie': 'Pâtisserie',
        'internationale': 'Cuisine internationale'
    };
    
    card.innerHTML = `
        <div class="caterer-image">
            <img src="${caterer.image}" alt="${caterer.name}" loading="lazy">
            <div class="rating">
                <i class="fas fa-star"></i>
                <span>${caterer.rating}</span>
            </div>
        </div>
        <div class="caterer-info">
            <h3>${caterer.name}</h3>
            <p class="specialty">Spécialité: ${specialtyLabels[caterer.specialty]}</p>
            <p class="location"><i class="fas fa-map-marker-alt"></i> ${caterer.location}</p>
            <p class="description">${caterer.description}</p>
            <button class="btn btn-primary btn-small" onclick="orderFromCaterer('${caterer.name}')">
                <i class="fas fa-utensils"></i> Commander
            </button>
        </div>
    `;
    
    return card;
}

function orderFromCaterer(catererName) {
    // Animation du bouton
    event.target.style.transform = 'scale(0.95)';
    setTimeout(() => {
        event.target.style.transform = 'scale(1)';
    }, 150);
    
    // Simulation de commande (dans une vraie app, rediriger vers la page de commande)
    setTimeout(() => {
        alert(`Commande initée chez ${catererName}!\n\nVous allez être redirigé vers le formulaire de commande.`);
    }, 200);
}

// Formulaire de contact
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    const messageTextarea = document.getElementById('message');
    const charCounter = document.getElementById('char-counter');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            if (validateContactForm()) {
                handleContactSubmit();
            }
        });
        
        // Validation en temps réel
        const inputs = contactForm.querySelectorAll('input, select, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                validateField(this);
            });
            
            input.addEventListener('input', function() {
                if (this.classList.contains('error')) {
                    validateField(this);
                }
            });
        });
    }
    
    // Compteur de caractères pour le message
    if (messageTextarea && charCounter) {
        messageTextarea.addEventListener('input', function() {
            const count = this.value.length;
            const maxLength = 500;
            charCounter.textContent = count;
            
            const charCountDiv = charCounter.parentElement;
            charCountDiv.classList.remove('warning', 'error');
            
            if (count > maxLength) {
                charCountDiv.classList.add('error');
                this.value = this.value.substring(0, maxLength);
                charCounter.textContent = maxLength;
            } else if (count > maxLength * 0.8) {
                charCountDiv.classList.add('warning');
            }
        });
    }
    
    // Gestion des paramètres URL (pré-remplir le formulaire)
    handleContactURLParams();
}

function validateContactForm() {
    const form = document.getElementById('contact-form');
    const requiredFields = form.querySelectorAll('input[required], select[required], textarea[required]');
    let isValid = true;
    
    // Réinitialiser les erreurs
    form.querySelectorAll('.form-group').forEach(group => {
        group.classList.remove('error');
    });
    form.querySelectorAll('.field-error').forEach(error => {
        error.classList.remove('show');
    });
    
    requiredFields.forEach(field => {
        if (!validateField(field)) {
            isValid = false;
        }
    });
    
    return isValid;
}

function validateField(field) {
    const fieldGroup = field.closest('.form-group');
    const errorDiv = fieldGroup.querySelector('.field-error');
    let isValid = true;
    let errorMessage = '';
    
    // Réinitialiser
    fieldGroup.classList.remove('error');
    if (errorDiv) errorDiv.classList.remove('show');
    
    // Validation selon le type de champ
    if (field.hasAttribute('required') && !field.value.trim()) {
        isValid = false;
        errorMessage = 'Ce champ est obligatoire.';
    } else if (field.type === 'email' && field.value.trim()) {
        if (!validateEmail(field.value.trim())) {
            isValid = false;
            errorMessage = 'Veuillez entrer une adresse email valide.';
        }
    } else if (field.type === 'tel' && field.value.trim()) {
        if (!validateSenegalPhone(field.value.trim())) {
            isValid = false;
            errorMessage = 'Format: +221 XX XXX XX XX';
        }
    } else if (field.name === 'terms' && field.type === 'checkbox') {
        if (!field.checked) {
            isValid = false;
            errorMessage = 'Vous devez accepter les conditions d\'utilisation.';
        }
    }
    
    // Afficher l'erreur si nécessaire
    if (!isValid) {
        fieldGroup.classList.add('error');
        if (errorDiv) {
            errorDiv.textContent = errorMessage;
            errorDiv.classList.add('show');
        }
    }
    
    return isValid;
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validateSenegalPhone(phone) {
    const phoneRegex = /^(\+221\s?)?[0-9]{2}\s?[0-9]{3}\s?[0-9]{2}\s?[0-9]{2}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
}

function handleContactURLParams() {
    const urlParams = new URLSearchParams(window.location.search);
    const subject = urlParams.get('subject');
    
    if (subject) {
        const subjectSelect = document.getElementById('subject');
        if (subjectSelect) {
            subjectSelect.value = subject;
        }
    }
}

function handleContactSubmit() {
    // Vérifier la protection anti-spam
    if (!canSubmitForm()) {
        return;
    }
    
    const form = document.getElementById('contact-form');
    const formData = new FormData(form);
    
    // Animation du bouton
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalContent = submitBtn.innerHTML;
    
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Envoi en cours...';
    submitBtn.disabled = true;
    
    // Simulation d'envoi (remplacer par un vrai appel API)
    setTimeout(() => {
        // Réinitialiser le formulaire
        form.reset();
        document.getElementById('char-counter').textContent = '0';
        
        // Restaurer le bouton
        submitBtn.innerHTML = originalContent;
        submitBtn.disabled = false;
        
        // Afficher le popup de confirmation
        showSuccessPopup();
        
        // Notification supplémentaire
        showNotification('Votre demande a été envoyée avec succès !', 'success');
        
        // Log des données (pour démo)
        console.log('Données du formulaire:', Object.fromEntries(formData));
        
    }, 2000);
}

function showSuccessPopup() {
    const popup = document.getElementById('success-popup');
    if (popup) {
        popup.style.display = 'flex';
        
        // Animation d'entrée
        const content = popup.querySelector('.popup-content');
        content.style.transform = 'scale(0.8)';
        content.style.opacity = '0';
        
        setTimeout(() => {
            content.style.transform = 'scale(1)';
            content.style.opacity = '1';
        }, 10);
    }
}

function closePopup() {
    const popup = document.getElementById('success-popup');
    if (popup) {
        const content = popup.querySelector('.popup-content');
        
        // Animation de sortie
        content.style.transform = 'scale(0.8)';
        content.style.opacity = '0';
        
        setTimeout(() => {
            popup.style.display = 'none';
        }, 300);
    }
}

// Fermer le popup en cliquant à l'extérieur
document.addEventListener('click', function(e) {
    const popup = document.getElementById('success-popup');
    if (popup && e.target === popup) {
        closePopup();
    }
});

// Gérer la navigation active
function setActiveNavLink() {
    const currentPage = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        
        const href = link.getAttribute('href');
        
        // Page d'accueil
        if ((currentPage.includes('index') || currentPage === '/') && href.includes('index')) {
            link.classList.add('active');
        }
        // Page traiteurs
        else if (currentPage.includes('traiteurs') && href.includes('traiteurs')) {
            link.classList.add('active');
        }
        // Page contact
        else if (currentPage.includes('contact') && href.includes('contact')) {
            link.classList.add('active');
        }
    });
}

// Initialiser la navigation active au chargement
document.addEventListener('DOMContentLoaded', setActiveNavLink);

// Animation des compteurs (si nécessaire pour des statistiques)
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        element.textContent = Math.floor(start);
        
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        }
    }, 16);
}

// Effet de parallaxe léger pour le hero
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    
    if (hero && scrolled < hero.offsetHeight) {
        const speed = scrolled * 0.5;
        hero.style.transform = `translateY(${speed}px)`;
    }
});

// Système de notifications
function showNotification(message, type = 'info', duration = 5000) {
    // Créer le conteneur de notifications s'il n'existe pas
    let container = document.getElementById('notification-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'notification-container';
        container.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 10000;
            display: flex;
            flex-direction: column;
            gap: 10px;
        `;
        document.body.appendChild(container);
    }
    
    // Créer la notification
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    
    const colors = {
        success: '#28a745',
        error: '#d90429', 
        warning: '#c59d5f',
        info: '#17a2b8'
    };
    
    const icons = {
        success: 'fas fa-check-circle',
        error: 'fas fa-exclamation-circle',
        warning: 'fas fa-exclamation-triangle',
        info: 'fas fa-info-circle'
    };
    
    notification.style.cssText = `
        background: ${colors[type]};
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        display: flex;
        align-items: center;
        gap: 10px;
        min-width: 300px;
        transform: translateX(100%);
        opacity: 0;
        transition: all 0.3s ease;
        cursor: pointer;
        font-family: 'Poppins', sans-serif;
        font-size: 14px;
    `;
    
    notification.innerHTML = `
        <i class="${icons[type]}"></i>
        <span>${message}</span>
        <i class="fas fa-times" style="margin-left: auto; cursor: pointer;"></i>
    `;
    
    // Ajouter au conteneur
    container.appendChild(notification);
    
    // Animation d'entrée
    requestAnimationFrame(() => {
        notification.style.transform = 'translateX(0)';
        notification.style.opacity = '1';
    });
    
    // Fermeture automatique
    const autoClose = setTimeout(() => {
        closeNotification(notification);
    }, duration);
    
    // Fermeture manuelle
    notification.addEventListener('click', () => {
        clearTimeout(autoClose);
        closeNotification(notification);
    });
    
    return notification;
}

function closeNotification(notification) {
    notification.style.transform = 'translateX(100%)';
    notification.style.opacity = '0';
    
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 300);
}

// Gestion du mode sombre (bonus)
function initDarkMode() {
    const darkModeToggle = document.createElement('button');
    darkModeToggle.id = 'dark-mode-toggle';
    darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    darkModeToggle.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: var(--primary-red);
        color: white;
        border: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.2rem;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        transition: all 0.3s ease;
        z-index: 1000;
    `;
    
    // Vérifier la préférence sauvegardée
    const isDarkMode = localStorage.getItem('dark-mode') === 'true';
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
    
    darkModeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        const isNowDark = document.body.classList.contains('dark-mode');
        
        this.innerHTML = isNowDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
        localStorage.setItem('dark-mode', isNowDark);
        
        showNotification(
            `Mode ${isNowDark ? 'sombre' : 'clair'} activé`,
            'info',
            2000
        );
    });
    
    document.body.appendChild(darkModeToggle);
}

// Lazy loading des images optimisé
function initLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    
                    // Fade in effect
                    img.style.opacity = '0';
                    img.style.transition = 'opacity 0.3s ease';
                    
                    img.src = img.dataset.src || img.src;
                    
                    img.onload = () => {
                        img.style.opacity = '1';
                        img.classList.remove('lazy');
                    };
                    
                    observer.unobserve(img);
                }
            });
        }, {
            rootMargin: '50px'
        });
        
        document.addEventListener('DOMContentLoaded', () => {
            const lazyImages = document.querySelectorAll('img[loading="lazy"], img[data-src]');
            lazyImages.forEach(img => imageObserver.observe(img));
        });
    }
}

// Détection de la connexion internet
function initConnectionStatus() {
    function updateConnectionStatus() {
        if (!navigator.onLine) {
            showNotification('Connexion internet perdue', 'warning', 0);
        }
    }
    
    window.addEventListener('offline', updateConnectionStatus);
    window.addEventListener('online', () => {
        showNotification('Connexion internet rétablie', 'success', 3000);
    });
}

// Performance monitoring
function initPerformanceMonitoring() {
    if ('PerformanceObserver' in window) {
        // Monitor des métriques Web Vitals
        const observer = new PerformanceObserver((list) => {
            list.getEntries().forEach((entry) => {
                if (entry.entryType === 'navigation') {
                    console.log('Page Load Time:', entry.loadEventEnd - entry.fetchStart, 'ms');
                }
            });
        });
        
        observer.observe({entryTypes: ['navigation', 'paint']});
    }
}

// Sécurité - Protection contre le spam de formulaires
let lastSubmissionTime = 0;
const SUBMISSION_COOLDOWN = 30000; // 30 secondes

function canSubmitForm() {
    const now = Date.now();
    if (now - lastSubmissionTime < SUBMISSION_COOLDOWN) {
        const remainingTime = Math.ceil((SUBMISSION_COOLDOWN - (now - lastSubmissionTime)) / 1000);
        showNotification(`Veuillez attendre ${remainingTime} secondes avant de renvoyer`, 'warning');
        return false;
    }
    lastSubmissionTime = now;
    return true;
}

// Initialiser toutes les fonctionnalités bonus
document.addEventListener('DOMContentLoaded', function() {
    initLazyLoading();
    initConnectionStatus();
    initPerformanceMonitoring();
    initDarkMode();
});