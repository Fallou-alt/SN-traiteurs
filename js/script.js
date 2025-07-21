// Global Variables
let products = [];
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let currentSlide = 0;

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// Initialize Application
function initializeApp() {
    loadProducts();
    initializeSlider();
    initializeNavigation();
    initializeCartCounter();
    initializePageSpecificFeatures();
}

// Load Products Data
async function loadProducts() {
    try {
        const response = await fetch('data/produits.json');
        products = await response.json();
        console.log('Products loaded:', products.length);
    } catch (error) {
        console.error('Error loading products:', error);
        // Fallback to sample data if JSON fails to load
        products = getSampleProducts();
    }
}

// Get Sample Products (fallback)
function getSampleProducts() {
    return [
        {
            id: 1,
            name: "Panier Artisanal Traditionnel",
            price: 35,
            category: "artisanat",
            vendor: "Artisan Mamadou",
            image: "https://pixabay.com/get/gbb597c745c93291a6a1f74dd7ddd7a31d94c204449053392d51a072b220b012b8128e402dfeef930f6af0ea5389d6da121c36d460b21d66a54550724ba27e050_1280.jpg",
            description: "Panier traditionnel tissé à la main par des artisans locaux. Parfait pour le marché ou la décoration intérieure.",
            featured: true
        },
        {
            id: 2,
            name: "Épices du Marché",
            price: 15,
            category: "alimentation",
            vendor: "Coopérative des Épices",
            image: "https://pixabay.com/get/g19a90690303c5216367d5690e55f34055f0e45dc9c0dab3733bd81349dc7c93526e7c6bf6828a456ae6afc2301e82c77f160406ef33c717cceef55f0848c3d07_1280.jpg",
            description: "Mélange d'épices authentiques du marché local. Saveurs traditionnelles pour vos plats.",
            featured: true
        },
        {
            id: 3,
            name: "Textile Coloré Bogolan",
            price: 65,
            category: "textile",
            vendor: "Atelier Textile Khadija",
            image: "https://pixabay.com/get/gd013c0aab393bf8f146c39c75fb5187209a23352c25c6448020dd9ef73149122c3c8f8afa2a91a7fe1e938ab1657b2fc448632e223548ee1d51905d97f616e98_1280.jpg",
            description: "Tissu bogolan traditionnel aux motifs géométriques. Teinture naturelle à base de boue.",
            featured: false
        },
        {
            id: 4,
            name: "Bijoux en Perles",
            price: 25,
            category: "bijoux",
            vendor: "Bijouterie Fatou",
            image: "https://pixabay.com/get/g4c07197f1b4eef18085c6fd2258331219676241bd360a247849ec6e79f08d8b62a0a7d8408d9dd0d6aa73a739e98ab676d6033036f75b89f91fb4a7bdcf920ef_1280.jpg",
            description: "Collier en perles traditionnelles africaines. Fait main avec des matériaux naturels.",
            featured: true
        },
        {
            id: 5,
            name: "Sculpture Décorative",
            price: 45,
            category: "decoration",
            vendor: "Sculpteur Ousmane",
            image: "https://pixabay.com/get/gf723469fee323f263b591169e49db4b13a1d89d2ab28130e6850422ff1926d4363380dcb8f909a7ee1210d501d7bf194217a3c56f8659697f2dbb5b5e9edbe6a_1280.jpg",
            description: "Sculpture en bois sculptée à la main représentant un masque traditionnel.",
            featured: false
        },
        {
            id: 6,
            name: "Poterie Artisanale",
            price: 30,
            category: "artisanat",
            vendor: "Potier Amadou",
            image: "https://pixabay.com/get/g0657d2f6cf5a28cdb31d03378b9bb7a8496169e8be6ae84a8fdff35f71bb3e051221deb0afcb02c21985f08c77ffd1a0_1280.jpg",
            description: "Vase en terre cuite fait selon les techniques ancestrales. Décoration unique.",
            featured: true
        },
        {
            id: 7,
            name: "Fruits Tropicaux",
            price: 12,
            category: "alimentation",
            vendor: "Marché Central",
            image: "https://pixabay.com/get/g0c3ea55984b14d344e595c58d2fcad054513674ee92c8543ac9aea016ffd986a63378430a13defab6e0fcf688a8a43e9ca325437c5a29e7d3f31cdc59726037a_1280.jpg",
            description: "Sélection de fruits tropicaux frais du marché local. Saveurs authentiques.",
            featured: false
        },
        {
            id: 8,
            name: "Instruments de Musique",
            price: 85,
            category: "artisanat",
            vendor: "Musicien Ibrahima",
            image: "https://pixabay.com/get/ge12a0f83617964f09133a58b950111eff3df5b5637ecbe7da9d91129e9dd8acfd1c649b19e488f2f2276ba59670ce8adde4077417e9a70ef9aeea4b6a821a22c_1280.jpg",
            description: "Djembé traditionnel fait main. Son authentique pour vos célébrations.",
            featured: true
        }
    ];
}

// Initialize Slider
function initializeSlider() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    if (slides.length === 0) return;

    // Auto-play slider
    setInterval(() => {
        nextSlide();
    }, 5000);

    // Navigation buttons
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);

    // Dots navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => goToSlide(index));
    });

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlider();
    }

    function prevSlide() {
        currentSlide = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
        updateSlider();
    }

    function goToSlide(index) {
        currentSlide = index;
        updateSlider();
    }

    function updateSlider() {
        slides.forEach((slide, index) => {
            slide.classList.toggle('active', index === currentSlide);
        });
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }
}

// Initialize Navigation
function initializeNavigation() {
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const navList = document.querySelector('.nav-list');

    if (mobileToggle && navList) {
        mobileToggle.addEventListener('click', () => {
            navList.classList.toggle('show');
        });
    }

    // Category navigation
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        card.addEventListener('click', () => {
            const category = card.dataset.category;
            if (category) {
                window.location.href = `catalogue.html?category=${category}`;
            }
        });
    });
}

// Initialize Cart Counter
function initializeCartCounter() {
    updateCartCounter();
}

// Update Cart Counter
function updateCartCounter() {
    const cartCounters = document.querySelectorAll('.cart-count');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    cartCounters.forEach(counter => {
        counter.textContent = totalItems;
    });
}

// Initialize Page Specific Features
function initializePageSpecificFeatures() {
    const currentPage = getCurrentPage();
    
    switch (currentPage) {
        case 'index':
            initializeHomePage();
            break;
        case 'catalogue':
            initializeCatalogPage();
            break;
        case 'produit':
            initializeProductPage();
            break;
        case 'panier':
            initializeCartPage();
            break;
        case 'login':
            initializeLoginPage();
            break;
        case 'register':
            initializeRegisterPage();
            break;
    }
}

// Get Current Page
function getCurrentPage() {
    const path = window.location.pathname;
    if (path.includes('catalogue')) return 'catalogue';
    if (path.includes('produit')) return 'produit';
    if (path.includes('panier')) return 'panier';
    if (path.includes('login')) return 'login';
    if (path.includes('register')) return 'register';
    return 'index';
}

// Initialize Home Page
function initializeHomePage() {
    setTimeout(() => {
        displayFeaturedProducts();
    }, 100);
}

// Display Featured Products
function displayFeaturedProducts() {
    const container = document.getElementById('featured-products');
    if (!container) return;

    const featuredProducts = products.filter(product => product.featured);
    
    if (featuredProducts.length === 0) {
        container.innerHTML = '<p class="no-products">Aucun produit en vedette pour le moment.</p>';
        return;
    }

    container.innerHTML = featuredProducts.map(product => createProductCard(product)).join('');
    
    // Add event listeners to product cards
    container.querySelectorAll('.product-card').forEach(card => {
        const productId = parseInt(card.dataset.productId);
        
        // View product button
        const viewBtn = card.querySelector('.btn-secondary');
        if (viewBtn) {
            viewBtn.addEventListener('click', (e) => {
                e.preventDefault();
                viewProduct(productId);
            });
        }
        
        // Add to cart button
        const addBtn = card.querySelector('.btn-primary');
        if (addBtn) {
            addBtn.addEventListener('click', (e) => {
                e.preventDefault();
                addToCart(productId);
            });
        }
    });
}

// Initialize Catalog Page
function initializeCatalogPage() {
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    const categoryFilter = document.getElementById('category-filter');
    const priceFilter = document.getElementById('price-filter');
    const clearBtn = document.getElementById('clear-filters');

    // Load products with filters
    setTimeout(() => {
        displayProducts();
        applyUrlFilters();
    }, 100);

    // Search functionality
    if (searchInput && searchBtn) {
        searchBtn.addEventListener('click', performSearch);
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') performSearch();
        });
    }

    // Filter functionality
    if (categoryFilter) {
        categoryFilter.addEventListener('change', displayProducts);
    }
    
    if (priceFilter) {
        priceFilter.addEventListener('change', displayProducts);
    }

    // Clear filters
    if (clearBtn) {
        clearBtn.addEventListener('click', clearFilters);
    }
}

// Apply URL Filters
function applyUrlFilters() {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    
    if (category) {
        const categoryFilter = document.getElementById('category-filter');
        if (categoryFilter) {
            categoryFilter.value = category;
            displayProducts();
        }
    }
}

// Perform Search
function performSearch() {
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        displayProducts();
    }
}

// Clear Filters
function clearFilters() {
    const searchInput = document.getElementById('search-input');
    const categoryFilter = document.getElementById('category-filter');
    const priceFilter = document.getElementById('price-filter');

    if (searchInput) searchInput.value = '';
    if (categoryFilter) categoryFilter.value = '';
    if (priceFilter) priceFilter.value = '';

    displayProducts();
}

// Display Products
function displayProducts() {
    const container = document.getElementById('products-grid');
    const noResults = document.getElementById('no-results');
    
    if (!container) return;

    const filteredProducts = getFilteredProducts();
    
    if (filteredProducts.length === 0) {
        container.style.display = 'none';
        if (noResults) noResults.style.display = 'block';
        return;
    }

    if (noResults) noResults.style.display = 'none';
    container.style.display = 'grid';
    
    container.innerHTML = filteredProducts.map(product => createProductCard(product)).join('');
    
    // Add event listeners
    container.querySelectorAll('.product-card').forEach(card => {
        const productId = parseInt(card.dataset.productId);
        
        const viewBtn = card.querySelector('.btn-secondary');
        if (viewBtn) {
            viewBtn.addEventListener('click', (e) => {
                e.preventDefault();
                viewProduct(productId);
            });
        }
        
        const addBtn = card.querySelector('.btn-primary');
        if (addBtn) {
            addBtn.addEventListener('click', (e) => {
                e.preventDefault();
                addToCart(productId);
            });
        }
    });
}

// Get Filtered Products
function getFilteredProducts() {
    let filtered = [...products];
    
    // Search filter
    const searchInput = document.getElementById('search-input');
    if (searchInput && searchInput.value.trim()) {
        const searchTerm = searchInput.value.trim().toLowerCase();
        filtered = filtered.filter(product => 
            product.name.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm) ||
            product.vendor.toLowerCase().includes(searchTerm)
        );
    }
    
    // Category filter
    const categoryFilter = document.getElementById('category-filter');
    if (categoryFilter && categoryFilter.value) {
        filtered = filtered.filter(product => product.category === categoryFilter.value);
    }
    
    // Price filter
    const priceFilter = document.getElementById('price-filter');
    if (priceFilter && priceFilter.value) {
        const priceRange = priceFilter.value;
        filtered = filtered.filter(product => {
            if (priceRange === '0-25') return product.price <= 25;
            if (priceRange === '25-50') return product.price > 25 && product.price <= 50;
            if (priceRange === '50-100') return product.price > 50 && product.price <= 100;
            if (priceRange === '100+') return product.price > 100;
            return true;
        });
    }
    
    return filtered;
}

// Create Product Card
function createProductCard(product) {
    return `
        <div class="product-card fade-in" data-product-id="${product.id}">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-price">${product.price}€</p>
                <p class="product-vendor">Par ${product.vendor}</p>
                <div class="product-actions">
                    <button class="btn btn-primary">
                        <i class="fas fa-cart-plus"></i> Ajouter
                    </button>
                    <a href="#" class="btn btn-secondary">
                        <i class="fas fa-eye"></i> Voir
                    </a>
                </div>
            </div>
        </div>
    `;
}

// Initialize Product Page
function initializeProductPage() {
    setTimeout(() => {
        displayProductDetails();
        displayRelatedProducts();
    }, 100);
}

// Display Product Details
function displayProductDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    
    const product = products.find(p => p.id === productId);
    const container = document.getElementById('product-content');
    const notFound = document.getElementById('product-not-found');
    const breadcrumb = document.getElementById('product-breadcrumb');
    
    if (!product) {
        if (container) container.style.display = 'none';
        if (notFound) notFound.style.display = 'block';
        return;
    }
    
    if (breadcrumb) breadcrumb.textContent = product.name;
    if (notFound) notFound.style.display = 'none';
    
    if (container) {
        container.innerHTML = `
            <div class="product-detail-grid">
                <div class="product-image-main">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="product-detail-info">
                    <h1>${product.name}</h1>
                    <p class="product-detail-price">${product.price}€</p>
                    <p class="product-detail-vendor">Vendu par ${product.vendor}</p>
                    <div class="product-description">
                        <p>${product.description}</p>
                    </div>
                    <div class="product-actions-detail">
                        <button class="btn btn-primary" id="add-to-cart-detail">
                            <i class="fas fa-cart-plus"></i> Ajouter au panier
                        </button>
                        <a href="catalogue.html" class="btn btn-secondary">
                            <i class="fas fa-arrow-left"></i> Retour au catalogue
                        </a>
                    </div>
                    <a href="catalogue.html" class="back-link">
                        <i class="fas fa-arrow-left"></i> Retour au catalogue
                    </a>
                </div>
            </div>
        `;
        
        // Add event listener for add to cart
        const addBtn = document.getElementById('add-to-cart-detail');
        if (addBtn) {
            addBtn.addEventListener('click', () => addToCart(productId));
        }
    }
}

// Display Related Products
function displayRelatedProducts() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    const container = document.getElementById('related-products');
    
    if (!container) return;
    
    const currentProduct = products.find(p => p.id === productId);
    if (!currentProduct) return;
    
    const relatedProducts = products
        .filter(p => p.id !== productId && p.category === currentProduct.category)
        .slice(0, 4);
    
    if (relatedProducts.length === 0) {
        container.innerHTML = '<p class="no-products">Aucun produit similaire trouvé.</p>';
        return;
    }
    
    container.innerHTML = relatedProducts.map(product => createProductCard(product)).join('');
    
    // Add event listeners
    container.querySelectorAll('.product-card').forEach(card => {
        const productId = parseInt(card.dataset.productId);
        
        const viewBtn = card.querySelector('.btn-secondary');
        if (viewBtn) {
            viewBtn.addEventListener('click', (e) => {
                e.preventDefault();
                viewProduct(productId);
            });
        }
        
        const addBtn = card.querySelector('.btn-primary');
        if (addBtn) {
            addBtn.addEventListener('click', (e) => {
                e.preventDefault();
                addToCart(productId);
            });
        }
    });
}

// Initialize Cart Page
function initializeCartPage() {
    displayCartItems();
    
    const checkoutBtn = document.getElementById('checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', checkout);
    }
}

// Display Cart Items
function displayCartItems() {
    const container = document.getElementById('cart-items');
    const emptyCart = document.getElementById('empty-cart');
    const cartSummary = document.getElementById('cart-summary');
    
    if (!container) return;
    
    if (cart.length === 0) {
        container.style.display = 'none';
        if (emptyCart) emptyCart.style.display = 'block';
        if (cartSummary) cartSummary.style.display = 'none';
        return;
    }
    
    if (emptyCart) emptyCart.style.display = 'none';
    if (cartSummary) cartSummary.style.display = 'block';
    container.style.display = 'block';
    
    container.innerHTML = cart.map(item => {
        const product = products.find(p => p.id === item.productId);
        if (!product) return '';
        
        return `
            <div class="cart-item" data-product-id="${item.productId}">
                <img src="${product.image}" alt="${product.name}">
                <div class="cart-item-info">
                    <h3>${product.name}</h3>
                    <p>Par ${product.vendor}</p>
                </div>
                <div class="cart-item-price">${product.price}€</div>
                <div class="quantity-controls">
                    <button class="quantity-decrease">-</button>
                    <input type="number" value="${item.quantity}" min="1" class="quantity-input">
                    <button class="quantity-increase">+</button>
                </div>
                <button class="remove-btn" data-product-id="${item.productId}">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
    }).join('');
    
    // Add event listeners
    container.querySelectorAll('.quantity-decrease').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const productId = parseInt(e.target.closest('.cart-item').dataset.productId);
            updateCartQuantity(productId, -1);
        });
    });
    
    container.querySelectorAll('.quantity-increase').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const productId = parseInt(e.target.closest('.cart-item').dataset.productId);
            updateCartQuantity(productId, 1);
        });
    });
    
    container.querySelectorAll('.quantity-input').forEach(input => {
        input.addEventListener('change', (e) => {
            const productId = parseInt(e.target.closest('.cart-item').dataset.productId);
            const newQuantity = parseInt(e.target.value);
            setCartQuantity(productId, newQuantity);
        });
    });
    
    container.querySelectorAll('.remove-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const productId = parseInt(e.target.dataset.productId);
            removeFromCart(productId);
        });
    });
    
    updateCartSummary();
}

// Update Cart Summary
function updateCartSummary() {
    const subtotalEl = document.getElementById('subtotal');
    const totalEl = document.getElementById('total');
    
    const subtotal = cart.reduce((sum, item) => {
        const product = products.find(p => p.id === item.productId);
        return sum + (product ? product.price * item.quantity : 0);
    }, 0);
    
    const shipping = subtotal > 0 ? 5 : 0;
    const total = subtotal + shipping;
    
    if (subtotalEl) subtotalEl.textContent = `${subtotal}€`;
    if (totalEl) totalEl.textContent = `${total}€`;
}

// Initialize Login Page
function initializeLoginPage() {
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
}

// Handle Login
function handleLogin(e) {
    e.preventDefault();
    
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    
    // Simple validation
    if (!email || !password) {
        alert('Veuillez remplir tous les champs.');
        return;
    }
    
    if (!isValidEmail(email)) {
        alert('Veuillez entrer une adresse email valide.');
        return;
    }
    
    // Simulate login (in real app, this would be an API call)
    alert('Connexion réussie! Bienvenue sur PETERSENBAZZAR.');
    localStorage.setItem('user', JSON.stringify({ email, loginTime: Date.now() }));
    window.location.href = 'index.html';
}

// Initialize Register Page
function initializeRegisterPage() {
    const registerForm = document.getElementById('register-form');
    if (registerForm) {
        registerForm.addEventListener('submit', handleRegister);
    }
}

// Handle Register
function handleRegister(e) {
    e.preventDefault();
    
    const firstname = document.getElementById('register-firstname').value;
    const lastname = document.getElementById('register-lastname').value;
    const email = document.getElementById('register-email').value;
    const phone = document.getElementById('register-phone').value;
    const password = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('register-confirm-password').value;
    const acceptTerms = document.getElementById('accept-terms').checked;
    
    // Validation
    if (!firstname || !lastname || !email || !phone || !password || !confirmPassword) {
        alert('Veuillez remplir tous les champs.');
        return;
    }
    
    if (!isValidEmail(email)) {
        alert('Veuillez entrer une adresse email valide.');
        return;
    }
    
    if (password !== confirmPassword) {
        alert('Les mots de passe ne correspondent pas.');
        return;
    }
    
    if (password.length < 6) {
        alert('Le mot de passe doit contenir au moins 6 caractères.');
        return;
    }
    
    if (!acceptTerms) {
        alert('Veuillez accepter les conditions d\'utilisation.');
        return;
    }
    
    // Simulate registration
    alert('Inscription réussie! Bienvenue sur PETERSENBAZZAR.');
    localStorage.setItem('user', JSON.stringify({ 
        firstname, 
        lastname, 
        email, 
        phone, 
        registerTime: Date.now() 
    }));
    window.location.href = 'index.html';
}

// Utility Functions

// View Product
function viewProduct(productId) {
    window.location.href = `produit.html?id=${productId}`;
}

// Add to Cart
function addToCart(productId) {
    const existingItem = cart.find(item => item.productId === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ productId, quantity: 1 });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCounter();
    
    // Show feedback
    const product = products.find(p => p.id === productId);
    if (product) {
        showNotification(`${product.name} ajouté au panier!`);
    }
}

// Update Cart Quantity
function updateCartQuantity(productId, change) {
    const item = cart.find(item => item.productId === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartCounter();
            displayCartItems();
        }
    }
}

// Set Cart Quantity
function setCartQuantity(productId, quantity) {
    const item = cart.find(item => item.productId === productId);
    if (item) {
        if (quantity <= 0) {
            removeFromCart(productId);
        } else {
            item.quantity = quantity;
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartCounter();
            displayCartItems();
        }
    }
}

// Remove from Cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.productId !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCounter();
    displayCartItems();
    
    const product = products.find(p => p.id === productId);
    if (product) {
        showNotification(`${product.name} retiré du panier.`);
    }
}

// Checkout
function checkout() {
    if (cart.length === 0) {
        alert('Votre panier est vide.');
        return;
    }
    
    const total = cart.reduce((sum, item) => {
        const product = products.find(p => p.id === item.productId);
        return sum + (product ? product.price * item.quantity : 0);
    }, 0) + 5; // Add shipping
    
    if (confirm(`Confirmer la commande pour un total de ${total}€?`)) {
        // Simulate order processing
        alert('Commande validée! Merci pour votre achat. Vous recevrez un email de confirmation.');
        cart = [];
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCounter();
        displayCartItems();
    }
}

// Show Notification
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification fade-in';
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--primary-orange);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 5px 20px rgba(0,0,0,0.2);
        z-index: 9999;
        font-weight: 500;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Validate Email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Loading State
function showLoading(container) {
    if (container) {
        container.innerHTML = `
            <div class="loading">
                <div class="spinner"></div>
            </div>
        `;
    }
}

// Error State
function showError(container, message) {
    if (container) {
        container.innerHTML = `
            <div class="error-state">
                <i class="fas fa-exclamation-triangle"></i>
                <h3>Erreur</h3>
                <p>${message}</p>
            </div>
        `;
    }
}
