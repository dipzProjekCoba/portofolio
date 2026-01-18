/**
 * PORTFOLIO SCRIPT - DIPZKYY
 * Enhanced with PDF Viewer, External Projects, and Additional Features
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // =========================================
    // 1. GLOBAL VARIABLES & SELECTORS - ENHANCED
    // =========================================
    const dom = {
        html: document.documentElement,
        body: document.body,
        loader: document.getElementById('loadingScreen'),
        header: document.getElementById('header'),
        hamburger: document.getElementById('hamburgerMenu'),
        mobileMenu: document.getElementById('mobileMenuOverlay'),
        themeToggles: document.querySelectorAll('#themeToggle, #mobileThemeToggle'),
        typingText: document.getElementById('typingText'),
        runningText: document.getElementById('runningText'),
        projectsGrid: document.getElementById('projectsGrid'),
        accountBtns: document.querySelectorAll('.account-btn'),
        contactForm: document.getElementById('contactForm'),
        notification: document.getElementById('notification'),
        backToTop: document.getElementById('backToTop'),
        skillOrbit3D: document.getElementById('skillOrbit3D'),
        progressBar: document.querySelector('.progress-bar'),
        navLinks: document.querySelectorAll('.nav-links a'),
        mobileLinks: document.querySelectorAll('.mobile-link'),
        
        // PDF Viewer Elements
        pdfModal: document.getElementById('pdfModal'),
        pdfModalOverlay: document.getElementById('pdfModalOverlay'),
        pdfModalClose: document.getElementById('pdfModalClose'),
        pdfCanvas: document.getElementById('pdfCanvas'),
        pdfPrevPage: document.getElementById('pdfPrevPage'),
        pdfNextPage: document.getElementById('pdfNextPage'),
        pdfCurrentPage: document.getElementById('pdfCurrentPage'),
        pdfTotalPages: document.getElementById('pdfTotalPages'),
        pdfZoomOut: document.getElementById('pdfZoomOut'),
        pdfZoomIn: document.getElementById('pdfZoomIn'),
        pdfZoomLevel: document.querySelector('.pdf-zoom-level'),
        pdfDownloadBtn: document.getElementById('pdfDownloadBtn'),
        pdfPrintBtn: document.getElementById('pdfPrintBtn'),
        pdfModalTitle: document.getElementById('pdfModalTitle'),
        
        // CV View Buttons
        viewCvBtn: document.getElementById('viewCvBtn'),
        viewCvBtnMobile: document.getElementById('viewCvBtnMobile'),
        
        // Email & Share Elements
        emailLink: document.getElementById('emailLink'),
        shareBtn: document.getElementById('shareBtn'),
        
        // Stats elements
        totalRepos: document.getElementById('totalRepos'),
        totalStars: document.getElementById('totalStars'),
        totalFollowers: document.getElementById('totalFollowers'),
        
        // Form elements
        submitBtn: document.getElementById('submitBtn'),
        btnText: document.getElementById('btnText'),
        btnLoader: document.getElementById('btnLoader'),
        notificationText: document.getElementById('notificationText')
    };

    // GitHub Configuration
    const githubConfig = {
        usernames: ['dipaanakmbarep', 'dipzkyy'],
        apiBase: 'https://api.github.com/users',
        reposPerPage: 100
    };

    // Skill Matrix Data
    const skillMatrixData = {
        languages: [
            { name: 'PHP', icon: 'fab fa-php', color: '#777bb4', category: 'language' },
            { name: 'JavaScript', icon: 'fab fa-js', color: '#f7df1e', category: 'language' },
            { name: 'TypeScript', icon: 'fab fa-js-square', color: '#007acc', category: 'language' },
            { name: 'Python', icon: 'fab fa-python', color: '#3776ab', category: 'language' },
            { name: 'Java', icon: 'fab fa-java', color: '#007396', category: 'language' },
            { name: 'C++', icon: 'fas fa-code', color: '#00599c', category: 'language' },
            { name: 'Kotlin', icon: 'fab fa-android', color: '#0095d5', category: 'language' },
            { name: 'Dart', icon: 'fab fa-dart', color: '#00b4ab', category: 'language' }
        ],
        backend: [
            { name: 'Laravel', icon: 'fab fa-laravel', color: '#ff2d20', category: 'backend' },
            { name: 'CI4', icon: 'fas fa-fire', color: '#dd4814', category: 'backend' },
            { name: 'Node.js', icon: 'fab fa-node-js', color: '#339933', category: 'backend' },
            { name: 'Express', icon: 'fas fa-server', color: '#000000', category: 'backend' },
            { name: 'Flask', icon: 'fas fa-flask', color: '#000000', category: 'backend' }
        ],
        frontend: [
            { name: 'React', icon: 'fab fa-react', color: '#61dafb', category: 'frontend' },
            { name: 'Vue', icon: 'fab fa-vuejs', color: '#42b883', category: 'frontend' },
            { name: 'Angular', icon: 'fab fa-angular', color: '#dd0031', category: 'frontend' },
            { name: 'Svelte', icon: 'fas fa-code', color: '#ff3e00', category: 'frontend' },
            { name: 'Tailwind', icon: 'fas fa-wind', color: '#06b6d4', category: 'frontend' },
            { name: 'Vite', icon: 'fas fa-bolt', color: '#646cff', category: 'frontend' },
            { name: 'Three.js', icon: 'fas fa-cube', color: '#000000', category: 'frontend' }
        ],
        mobile: [
            { name: 'Flutter', icon: 'fab fa-mobile-alt', color: '#02569b', category: 'mobile' },
            { name: 'Android', icon: 'fab fa-android', color: '#3ddc84', category: 'mobile' },
            { name: 'MVVM', icon: 'fas fa-layer-group', color: '#ff4081', category: 'mobile' }
        ],
        database: [
            { name: 'MySQL', icon: 'fas fa-database', color: '#4479a1', category: 'database' },
            { name: 'PostgreSQL', icon: 'fas fa-database', color: '#336791', category: 'database' }
        ],
        tools: [
            { name: 'Git', icon: 'fab fa-git-alt', color: '#f05032', category: 'tool' },
            { name: 'Postman', icon: 'fas fa-rocket', color: '#ff6c37', category: 'tool' },
            { name: 'Android Studio', icon: 'fab fa-android', color: '#3ddc84', category: 'tool' },
            { name: 'VS Code', icon: 'fas fa-code', color: '#007acc', category: 'tool' },
            { name: 'Visual Studio', icon: 'fas fa-code', color: '#5c2d91', category: 'tool' },
            { name: 'IntelliJ', icon: 'fas fa-jet', color: '#000000', category: 'tool' },
            { name: 'NetBeans', icon: 'fas fa-coffee', color: '#1b6ac6', category: 'tool' },
            { name: 'Canva', icon: 'fas fa-palette', color: '#00c4cc', category: 'tool' },
            { name: 'GitHub', icon: 'fab fa-github', color: '#181717', category: 'tool' }
        ]
    };

    // PDF Viewer State
    const pdfState = {
        pdfDoc: null,
        currentPage: 1,
        totalPages: 1,
        zoomLevel: 1.0,
        maxZoom: 3.0,
        minZoom: 0.5,
        zoomStep: 0.1,
        currentPdfUrl: '',
        currentPdfTitle: '',
        renderTask: null
    };

    // Animation State
    let animationState = {
        isTyping: true,
        isOrbitDragging: false,
        orbitRotation: { x: 10, y: 20 },
        orbitStart: { x: 0, y: 0 }
    };

    // Project Data
    let allProjects = [];
    let currentFilter = 'all';

    // =========================================
    // 2. INITIALIZATION & LOADER
    // =========================================
    
    // Initialize on window load
    window.addEventListener('load', () => {
        // Simulate loading progress
        simulateLoading();
        
        setTimeout(() => {
            dom.loader.style.opacity = '0';
            dom.loader.style.visibility = 'hidden';
            
            // Initialize all components
            initHeroAnimations();
            initSkillMatrix3D();
            initTheme();
            initNavigation();
            initTypingAnimation();
            initScrollAnimations();
            initGitHubIntegration();
            initContactForm();
            initParticles();
            initBackToTop();
            initPDFViewer();
            initEmailCopy();
            initShareFunctionality();
            initCertificatePreview();
            
            // Lazy load images
            lazyLoadImages();
            
            // Add loaded class to body
            dom.body.classList.add('loaded');
        }, 1500);
    });

    function simulateLoading() {
        let progress = 0;
        const interval = setInterval(() => {
            progress += Math.random() * 15;
            if (progress >= 100) {
                progress = 100;
                clearInterval(interval);
            }
            if (dom.progressBar) {
                dom.progressBar.style.width = `${progress}%`;
            }
        }, 50);
    }

    function initHeroAnimations() {
        // Animate coding sphere icons
        const icons = document.querySelectorAll('.tech-icon');
        icons.forEach((icon, index) => {
            const delay = icon.getAttribute('data-delay') || 0;
            setTimeout(() => {
                icon.classList.add('animate-in');
            }, parseFloat(delay) * 1000 + 500);
        });

        // Animate description lines
        const descLines = document.querySelectorAll('.desc-line');
        descLines.forEach((line, index) => {
            setTimeout(() => {
                line.style.animationDelay = `${0.5 + index * 0.2}s`;
            }, 100);
        });

        // Animate hero buttons
        const heroButtons = document.querySelector('.hero-buttons');
        setTimeout(() => {
            heroButtons.style.animationDelay = '1.2s';
        }, 100);
    }

    // =========================================
    // 3. SKILL MATRIX 3D ORBIT
    // =========================================
    function initSkillMatrix3D() {
        if (!dom.skillOrbit3D) return;

        const connectionContainer = dom.skillOrbit3D.querySelector('.orbit-connections');
        const layers = dom.skillOrbit3D.querySelectorAll('.orbit-layer');
        
        // Define layer properties
        const layerConfigs = [
            { category: 'languages', className: 'language', radius: 75, items: skillMatrixData.languages },
            { category: 'backend', className: 'backend', radius: 100, items: skillMatrixData.backend },
            { category: 'frontend', className: 'frontend', radius: 125, items: skillMatrixData.frontend },
            { category: 'mobile', className: 'mobile', radius: 150, items: skillMatrixData.mobile },
            { category: 'database', className: 'database', radius: 175, items: skillMatrixData.database },
            { category: 'tools', className: 'tool', radius: 200, items: skillMatrixData.tools }
        ];

        // Create skill nodes for each layer
        layers.forEach((layer, layerIndex) => {
            if (layerIndex >= layerConfigs.length) return;
            
            const config = layerConfigs[layerIndex];
            layer.innerHTML = '';
            
            config.items.forEach((skill, skillIndex) => {
                const angle = (skillIndex / config.items.length) * Math.PI * 2;
                const x = Math.cos(angle) * config.radius;
                const y = Math.sin(angle) * config.radius;
                const z = (layerIndex - 2.5) * 30;
                
                // Create skill node
                const skillNode = createSkillNode(skill, x, y, z, layerIndex, skillIndex);
                layer.appendChild(skillNode);
                
                // Add mouse events for connections
                skillNode.addEventListener('mouseenter', () => {
                    createConnectionLine(x, y, connectionContainer);
                    highlightLayer(layerIndex);
                });
                
                skillNode.addEventListener('mouseleave', () => {
                    removeConnectionLines(connectionContainer);
                    unhighlightLayers();
                });
            });
        });

        // Initialize orbit interaction
        initOrbitInteraction();
    }

    function createSkillNode(skill, x, y, z, layerIndex, skillIndex) {
        const node = document.createElement('div');
        node.className = `skill-node ${skill.category}`;
        node.title = skill.name;
        
        // Set styles
        node.style.cssText = `
            transform: translate3d(${x}px, ${y}px, ${z}px);
            color: ${skill.color};
            animation-delay: ${skillIndex * 0.2}s;
            border-color: ${skill.color};
        `;
        
        // Create icon
        const icon = document.createElement('i');
        icon.className = skill.icon;
        node.appendChild(icon);
        
        // Add tooltip
        const tooltip = document.createElement('div');
        tooltip.className = 'skill-tooltip';
        tooltip.textContent = skill.name;
        node.appendChild(tooltip);
        
        return node;
    }

    function createConnectionLine(x, y, container) {
        const line = document.createElement('div');
        line.className = 'connection-line';
        
        const length = Math.sqrt(x * x + y * y);
        const angle = Math.atan2(y, x) * (180 / Math.PI);
        
        line.style.cssText = `
            width: ${length}px;
            transform: rotate(${angle}deg);
            top: 50%;
            left: 50%;
            background: linear-gradient(90deg, 
                rgba(59, 130, 246, 0.1), 
                rgba(59, 130, 246, 0.6),
                rgba(59, 130, 246, 0.1)
            );
        `;
        
        container.appendChild(line);
    }

    function removeConnectionLines(container) {
        container.innerHTML = '';
    }

    function highlightLayer(layerIndex) {
        const layers = document.querySelectorAll('.orbit-layer');
        layers.forEach((layer, index) => {
            if (index === layerIndex) {
                layer.style.opacity = '1';
                layer.style.filter = 'brightness(1.2)';
            } else {
                layer.style.opacity = '0.6';
                layer.style.filter = 'brightness(0.8)';
            }
        });
    }

    function unhighlightLayers() {
        const layers = document.querySelectorAll('.orbit-layer');
        layers.forEach(layer => {
            layer.style.opacity = '0.9';
            layer.style.filter = 'brightness(1)';
        });
    }

    function initOrbitInteraction() {
        if (!dom.skillOrbit3D) return;

        // Mouse events
        dom.skillOrbit3D.addEventListener('mousedown', startOrbitDrag);
        document.addEventListener('mousemove', dragOrbit);
        document.addEventListener('mouseup', stopOrbitDrag);
        
        // Touch events
        dom.skillOrbit3D.addEventListener('touchstart', startOrbitDrag);
        document.addEventListener('touchmove', dragOrbit);
        document.addEventListener('touchend', stopOrbitDrag);
    }

    function startOrbitDrag(e) {
        e.preventDefault();
        animationState.isOrbitDragging = true;
        
        const clientX = e.clientX || e.touches[0].clientX;
        const clientY = e.clientY || e.touches[0].clientY;
        
        animationState.orbitStart = { x: clientX, y: clientY };
        dom.skillOrbit3D.style.cursor = 'grabbing';
        dom.skillOrbit3D.style.transition = 'none';
    }

    function dragOrbit(e) {
        if (!animationState.isOrbitDragging) return;
        e.preventDefault();
        
        const clientX = e.clientX || e.touches[0].clientX;
        const clientY = e.clientY || e.touches[0].clientY;
        
        const deltaX = clientX - animationState.orbitStart.x;
        const deltaY = clientY - animationState.orbitStart.y;
        
        animationState.orbitRotation.y += deltaX * 0.5;
        animationState.orbitRotation.x -= deltaY * 0.5;
        
        // Limit vertical rotation
        animationState.orbitRotation.x = Math.max(-60, Math.min(60, animationState.orbitRotation.x));
        
        updateOrbitRotation();
        
        animationState.orbitStart = { x: clientX, y: clientY };
    }

    function stopOrbitDrag() {
        if (!animationState.isOrbitDragging) return;
        
        animationState.isOrbitDragging = false;
        dom.skillOrbit3D.style.cursor = 'grab';
        dom.skillOrbit3D.style.transition = 'transform 0.5s ease-out';
        
        // Return to auto-rotation with smoothing
        setTimeout(() => {
            const targetY = Math.round(animationState.orbitRotation.y / 360) * 360;
            const targetX = 10;
            
            animationState.orbitRotation.y = targetY;
            animationState.orbitRotation.x = targetX;
            
            updateOrbitRotation();
            
            setTimeout(() => {
                dom.skillOrbit3D.style.transition = '';
            }, 500);
        }, 100);
    }

    function updateOrbitRotation() {
        if (dom.skillOrbit3D) {
            dom.skillOrbit3D.style.transform = `
                rotateY(${animationState.orbitRotation.y}deg) 
                rotateX(${animationState.orbitRotation.x}deg)
            `;
        }
    }

    // =========================================
    // 4. THEME MANAGEMENT
    // =========================================
    function initTheme() {
        // Check for saved theme or system preference
        const savedTheme = localStorage.getItem('portfolio-theme');
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        if (savedTheme) {
            setTheme(savedTheme);
        } else {
            setTheme(systemPrefersDark ? 'dark' : 'light');
        }
        
        // Add event listeners to theme toggles
        dom.themeToggles.forEach(toggle => {
            toggle.addEventListener('click', toggleTheme);
        });
        
        // Listen for system theme changes
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            if (!localStorage.getItem('portfolio-theme')) {
                setTheme(e.matches ? 'dark' : 'light');
            }
        });
    }

    function setTheme(theme) {
        dom.html.setAttribute('data-theme', theme);
        localStorage.setItem('portfolio-theme', theme);
        updateThemeIcons(theme);
    }

    function toggleTheme() {
        const currentTheme = dom.html.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        
        // Show notification
        showNotification(`Mode ${newTheme === 'dark' ? 'Gelap' : 'Terang'} diaktifkan`, 'info');
    }

    function updateThemeIcons(theme) {
        const iconClass = theme === 'dark' ? 'fa-moon' : 'fa-sun';
        dom.themeToggles.forEach(toggle => {
            const icon = toggle.querySelector('i');
            if (icon) {
                icon.className = `fas ${iconClass}`;
            }
        });
    }

    // =========================================
    // 5. NAVIGATION
    // =========================================
    function initNavigation() {
        // Mobile menu toggle
        dom.hamburger.addEventListener('click', toggleMobileMenu);
        
        // Close mobile menu when clicking links
        dom.mobileLinks.forEach(link => {
            link.addEventListener('click', closeMobileMenu);
        });
        
        // Close mobile menu when clicking outside
        dom.mobileMenu.addEventListener('click', (e) => {
            if (e.target === dom.mobileMenu) {
                closeMobileMenu();
            }
        });
        
        // Active nav link on scroll
        window.addEventListener('scroll', updateActiveNavLink);
        
        // Smooth scroll for nav links
        dom.navLinks.forEach(link => {
            link.addEventListener('click', smoothScroll);
        });
    }

    function toggleMobileMenu() {
        dom.hamburger.classList.toggle('active');
        dom.mobileMenu.classList.toggle('active');
        dom.body.style.overflow = dom.mobileMenu.classList.contains('active') ? 'hidden' : '';
    }

    function closeMobileMenu() {
        dom.hamburger.classList.remove('active');
        dom.mobileMenu.classList.remove('active');
        dom.body.style.overflow = '';
    }

    function smoothScroll(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const headerHeight = 70;
            const targetPosition = targetElement.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            
            // Update active nav link
            updateActiveNavLink();
        }
    }

    function updateActiveNavLink() {
        const scrollPosition = window.scrollY + 100;
        const sections = ['home', 'about', 'skills', 'certificates', 'github', 'projects', 'contact'];
        
        sections.forEach(section => {
            const element = document.getElementById(section);
            if (element) {
                const offsetTop = element.offsetTop;
                const offsetBottom = offsetTop + element.offsetHeight;
                
                if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
                    // Remove active class from all links
                    dom.navLinks.forEach(link => link.classList.remove('active'));
                    dom.mobileLinks.forEach(link => link.classList.remove('active'));
                    
                    // Add active class to current link
                    const selector = `a[href="#${section}"]`;
                    document.querySelector(selector)?.classList.add('active');
                    document.querySelector(`.mobile-link[href="#${section}"]`)?.classList.add('active');
                }
            }
        });
        
        // Update header background on scroll
        if (window.scrollY > 50) {
            dom.header.classList.add('scrolled');
        } else {
            dom.header.classList.remove('scrolled');
        }
    }

    // =========================================
    // 6. TYPING ANIMATION
    // =========================================
    function initTypingAnimation() {
        const roles = [
            "Fullstack Developer",
            "Backend Engineer",
            "Database Administrator",
            "Laravel & Node.js Enthusiast"
        ];
        
        let roleIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typingSpeed = 100;

        function type() {
            const currentRole = roles[roleIndex];
            
            if (isDeleting) {
                dom.typingText.textContent = currentRole.substring(0, charIndex - 1);
                charIndex--;
                typingSpeed = 50;
            } else {
                dom.typingText.textContent = currentRole.substring(0, charIndex + 1);
                charIndex++;
                typingSpeed = 100;
            }

            if (!isDeleting && charIndex === currentRole.length) {
                isDeleting = true;
                typingSpeed = 2000; // Pause at end
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
                typingSpeed = 500; // Pause before new word
            }

            setTimeout(type, typingSpeed);
        }

        // Start typing animation
        setTimeout(type, 1000);
    }

    // =========================================
    // 7. SCROLL ANIMATIONS
    // =========================================
    function initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-visible');
                    
                    // Add animation delay based on data attribute
                    const delay = entry.target.getAttribute('data-delay');
                    if (delay) {
                        entry.target.style.transitionDelay = `${delay}s`;
                    }
                }
            });
        }, observerOptions);

        // Observe all scroll-animate elements
        document.querySelectorAll('.scroll-animate').forEach(el => {
            observer.observe(el);
        });

        // Parallax effect for background
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const gridBg = document.querySelector('.grid-bg');
            if (gridBg) {
                gridBg.style.transform = `perspective(500px) rotateX(60deg) translateY(${scrolled * 0.3}px)`;
            }
        });
    }

    // =========================================
    // 8. GITHUB INTEGRATION
    // =========================================
    async function initGitHubIntegration() {
        try {
            const stats = await fetchGitHubStats();
            updateGitHubStats(stats);
            
            const projects = await fetchGitHubProjects();
            allProjects = projects;
            renderProjects('all');
            
            // Add event listeners to filter buttons
            dom.accountBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    const target = btn.getAttribute('data-target');
                    currentFilter = target;
                    
                    // Update active button
                    dom.accountBtns.forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    
                    // Render filtered projects
                    renderProjects(target);
                });
            });
            
        } catch (error) {
            console.error('GitHub API Error:', error);
            showGitHubError();
        }
    }

    async function fetchGitHubStats() {
        let totalRepos = 0;
        let totalStars = 0;
        let totalFollowers = 0;

        for (const username of githubConfig.usernames) {
            try {
                const response = await fetch(`${githubConfig.apiBase}/${username}`);
                if (!response.ok) throw new Error(`API Error: ${response.status}`);
                
                const data = await response.json();
                totalRepos += data.public_repos || 0;
                totalFollowers += data.followers || 0;
                
                // Fetch repos for star count
                const reposResponse = await fetch(
                    `${githubConfig.apiBase}/${username}/repos?per_page=${githubConfig.reposPerPage}`
                );
                if (reposResponse.ok) {
                    const repos = await reposResponse.json();
                    const userStars = repos.reduce((sum, repo) => sum + (repo.stargazers_count || 0), 0);
                    totalStars += userStars;
                }
                
            } catch (error) {
                console.warn(`Failed to fetch stats for ${username}:`, error);
            }
        }

        return { totalRepos, totalStars, totalFollowers };
    }

    async function fetchGitHubProjects() {
        let allRepos = [];
        
        for (const username of githubConfig.usernames) {
            try {
                const response = await fetch(
                    `${githubConfig.apiBase}/${username}/repos?sort=updated&per_page=${githubConfig.reposPerPage}`
                );
                
                if (response.ok) {
                    const repos = await response.json();
                    const userRepos = repos.map(repo => ({
                        ...repo,
                        owner_login: username,
                        owner_type: username === 'dipzkyy' ? 'dev' : 'personal'
                    }));
                    allRepos = [...allRepos, ...userRepos];
                }
            } catch (error) {
                console.warn(`Failed to fetch repos for ${username}:`, error);
            }
        }
        
        // Sort by update date and filter out forks if needed
        return allRepos
            .filter(repo => !repo.fork)
            .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
    }

    function updateGitHubStats(stats) {
        animateCounter(dom.totalRepos, stats.totalRepos);
        animateCounter(dom.totalStars, stats.totalStars);
        animateCounter(dom.totalFollowers, stats.totalFollowers);
    }

    function animateCounter(element, target) {
        if (!element || target === 0) return;
        
        const duration = 2000;
        const steps = 60;
        const stepTime = duration / steps;
        const increment = target / steps;
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            element.textContent = Math.floor(current);
        }, stepTime);
    }

    function renderProjects(filter) {
        if (!dom.projectsGrid) return;
        
        // Clear current projects
        dom.projectsGrid.innerHTML = '';
        
        // Filter projects
        let filteredProjects = allProjects;
        if (filter !== 'all') {
            filteredProjects = allProjects.filter(repo => 
                repo.owner_login === filter || repo.owner_type === filter
            );
        }
        
        // Take only 6 projects for display
        const displayProjects = filteredProjects.slice(0, 6);
        
        if (displayProjects.length === 0) {
            dom.projectsGrid.innerHTML = `
                <div class="no-projects">
                    <i class="fas fa-code-branch"></i>
                    <p>Tidak ada proyek yang ditemukan</p>
                </div>
            `;
            return;
        }
        
        // Create project cards
        displayProjects.forEach((repo, index) => {
            const card = createProjectCard(repo, index);
            dom.projectsGrid.appendChild(card);
            
            // Add animation with delay
            setTimeout(() => {
                card.classList.add('animate-visible');
            }, index * 100);
        });
    }

    function createProjectCard(repo, index) {
        const card = document.createElement('div');
        card.className = 'project-card scroll-animate';
        card.style.animationDelay = `${index * 0.1}s`;
        
        const languageColor = getLanguageColor(repo.language);
        const description = repo.description || 'Tidak ada deskripsi.';
        const updated = formatDate(repo.updated_at);
        
        card.innerHTML = `
            <div class="project-header">
                <h3>
                    <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer">
                        ${repo.name}
                    </a>
                </h3>
                <span class="project-owner">@${repo.owner_login}</span>
            </div>
            <p class="project-desc">${description}</p>
            <div class="project-meta">
                <div class="project-language">
                    <span class="language-dot" style="background: ${languageColor}"></span>
                    <span>${repo.language || 'Text'}</span>
                </div>
                <div class="project-stats">
                    <span class="project-stat">
                        <i class="far fa-star"></i>
                        ${repo.stargazers_count || 0}
                    </span>
                    <span class="project-stat">
                        <i class="fas fa-code-branch"></i>
                        ${repo.forks_count || 0}
                    </span>
                </div>
            </div>
            <div class="project-footer">
                <small>Terakhir update: ${updated}</small>
            </div>
        `;
        
        return card;
    }

    function getLanguageColor(language) {
        const colors = {
            'JavaScript': '#f1e05a',
            'TypeScript': '#2b7489',
            'HTML': '#e34c26',
            'CSS': '#563d7c',
            'PHP': '#4F5D95',
            'Python': '#3572A5',
            'Java': '#b07219',
            'Vue': '#2c3e50',
            'React': '#61dafb',
            'Kotlin': '#F18E33',
            'Dart': '#00B4AB',
            'C++': '#f34b7d'
        };
        return colors[language] || '#8b949e';
    }

    function formatDate(dateString) {
        const date = new Date(dateString);
        const now = new Date();
        const diffTime = Math.abs(now - date);
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
        
        if (diffDays === 0) return 'Hari ini';
        if (diffDays === 1) return 'Kemarin';
        if (diffDays < 7) return `${diffDays} hari lalu`;
        if (diffDays < 30) return `${Math.floor(diffDays / 7)} minggu lalu`;
        if (diffDays < 365) return `${Math.floor(diffDays / 30)} bulan lalu`;
        return `${Math.floor(diffDays / 365)} tahun lalu`;
    }

    function showGitHubError() {
        if (dom.projectsGrid) {
            dom.projectsGrid.innerHTML = `
                <div class="github-error">
                    <i class="fas fa-exclamation-triangle"></i>
                    <p>Gagal memuat data dari GitHub</p>
                    <small>Silakan coba lagi nanti</small>
                </div>
            `;
        }
    }

    // =========================================
    // 9. PDF VIEWER IMPLEMENTATION
    // =========================================
    function initPDFViewer() {
        // CV View Buttons
        if (dom.viewCvBtn) {
            dom.viewCvBtn.addEventListener('click', () => {
                openPDFViewer('assets/pdf/CV_Diva Islamy Rizky Akbar_.pdf', 'Curriculum Vitae - Diva Islamy Rizky Akbar');
            });
        }
        
        if (dom.viewCvBtnMobile) {
            dom.viewCvBtnMobile.addEventListener('click', () => {
                openPDFViewer('assets/pdf/CV_Diva Islamy Rizky Akbar_.pdf', 'Curriculum Vitae - Diva Islamy Rizky Akbar');
            });
        }
        
        // PDF Modal Controls
        if (dom.pdfModalClose) {
            dom.pdfModalClose.addEventListener('click', closePDFViewer);
        }
        
        if (dom.pdfModalOverlay) {
            dom.pdfModalOverlay.addEventListener('click', closePDFViewer);
        }
        
        // PDF Navigation
        if (dom.pdfPrevPage) {
            dom.pdfPrevPage.addEventListener('click', goToPrevPage);
        }
        
        if (dom.pdfNextPage) {
            dom.pdfNextPage.addEventListener('click', goToNextPage);
        }
        
        // PDF Zoom Controls
        if (dom.pdfZoomOut) {
            dom.pdfZoomOut.addEventListener('click', zoomOut);
        }
        
        if (dom.pdfZoomIn) {
            dom.pdfZoomIn.addEventListener('click', zoomIn);
        }
        
        // PDF Actions
        if (dom.pdfPrintBtn) {
            dom.pdfPrintBtn.addEventListener('click', printPDF);
        }
        
        // Keyboard shortcuts
        document.addEventListener('keydown', handlePDFKeyboardShortcuts);
        
        // Close modal on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && dom.pdfModal.classList.contains('show')) {
                closePDFViewer();
            }
        });
    }

    function initCertificatePreview() {
        // Add click event to all preview buttons
        document.querySelectorAll('.btn-preview, .pdf-thumbnail').forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const pdfUrl = button.getAttribute('data-pdf');
                const pdfTitle = button.getAttribute('data-title') || 'Preview Dokumen';
                
                if (pdfUrl) {
                    openPDFViewer(pdfUrl, pdfTitle);
                }
            });
        });
    }

    async function openPDFViewer(pdfUrl, title = 'Preview Dokumen') {
        try {
            // Set loading state
            dom.pdfModalTitle.textContent = title;
            dom.pdfDownloadBtn.href = pdfUrl;
            dom.pdfDownloadBtn.download = pdfUrl.split('/').pop();
            
            // Show modal
            dom.pdfModal.classList.add('show');
            dom.body.style.overflow = 'hidden';
            
            // Reset PDF state
            pdfState.currentPage = 1;
            pdfState.zoomLevel = 1.0;
            pdfState.currentPdfUrl = pdfUrl;
            pdfState.currentPdfTitle = title;
            
            // Load PDF document
            pdfState.pdfDoc = await pdfjsLib.getDocument(pdfUrl).promise;
            pdfState.totalPages = pdfState.pdfDoc.numPages;
            
            // Update UI
            updatePDFControls();
            
            // Render first page
            await renderPDFPage();
            
        } catch (error) {
            console.error('Error loading PDF:', error);
            showNotification('Gagal memuat dokumen PDF', 'error');
            closePDFViewer();
        }
    }

    function closePDFViewer() {
        dom.pdfModal.classList.remove('show');
        dom.body.style.overflow = '';
        
        // Clean up
        if (pdfState.renderTask) {
            pdfState.renderTask.cancel();
        }
        
        // Clear canvas
        const ctx = dom.pdfCanvas.getContext('2d');
        ctx.clearRect(0, 0, dom.pdfCanvas.width, dom.pdfCanvas.height);
        
        // Reset state
        pdfState.pdfDoc = null;
        pdfState.currentPage = 1;
    }

    async function renderPDFPage() {
        if (!pdfState.pdfDoc || !dom.pdfCanvas) return;
        
        try {
            // Cancel any ongoing render
            if (pdfState.renderTask) {
                pdfState.renderTask.cancel();
            }
            
            // Get page
            const page = await pdfState.pdfDoc.getPage(pdfState.currentPage);
            
            // Set canvas dimensions
            const viewport = page.getViewport({ scale: pdfState.zoomLevel });
            dom.pdfCanvas.width = viewport.width;
            dom.pdfCanvas.height = viewport.height;
            
            // Render page
            const renderContext = {
                canvasContext: dom.pdfCanvas.getContext('2d'),
                viewport: viewport
            };
            
            pdfState.renderTask = page.render(renderContext);
            await pdfState.renderTask.promise;
            
            // Update controls
            updatePDFControls();
            
        } catch (error) {
            if (error.name !== 'RenderingCancelled') {
                console.error('Error rendering PDF page:', error);
            }
        }
    }

    function updatePDFControls() {
        // Update page info
        dom.pdfCurrentPage.textContent = pdfState.currentPage;
        dom.pdfTotalPages.textContent = pdfState.totalPages;
        
        // Update zoom level
        dom.pdfZoomLevel.textContent = `${Math.round(pdfState.zoomLevel * 100)}%`;
        
        // Update button states
        dom.pdfPrevPage.disabled = pdfState.currentPage <= 1;
        dom.pdfNextPage.disabled = pdfState.currentPage >= pdfState.totalPages;
        dom.pdfZoomOut.disabled = pdfState.zoomLevel <= pdfState.minZoom;
        dom.pdfZoomIn.disabled = pdfState.zoomLevel >= pdfState.maxZoom;
        
        // Update PDF title
        if (dom.pdfModalTitle) {
            dom.pdfModalTitle.textContent = pdfState.currentPdfTitle;
        }
    }

    async function goToPrevPage() {
        if (pdfState.currentPage > 1) {
            pdfState.currentPage--;
            await renderPDFPage();
        }
    }

    async function goToNextPage() {
        if (pdfState.currentPage < pdfState.totalPages) {
            pdfState.currentPage++;
            await renderPDFPage();
        }
    }

    function zoomOut() {
        if (pdfState.zoomLevel > pdfState.minZoom) {
            pdfState.zoomLevel = Math.max(pdfState.minZoom, pdfState.zoomLevel - pdfState.zoomStep);
            renderPDFPage();
        }
    }

    function zoomIn() {
        if (pdfState.zoomLevel < pdfState.maxZoom) {
            pdfState.zoomLevel = Math.min(pdfState.maxZoom, pdfState.zoomLevel + pdfState.zoomStep);
            renderPDFPage();
        }
    }

    function printPDF() {
        if (pdfState.currentPdfUrl) {
            const printWindow = window.open(pdfState.currentPdfUrl, '_blank');
            if (printWindow) {
                printWindow.addEventListener('load', () => {
                    printWindow.print();
                });
            }
        }
    }

    function handlePDFKeyboardShortcuts(e) {
        if (!dom.pdfModal.classList.contains('show')) return;
        
        switch(e.key) {
            case 'ArrowLeft':
            case 'PageUp':
                e.preventDefault();
                goToPrevPage();
                break;
            case 'ArrowRight':
            case 'PageDown':
                e.preventDefault();
                goToNextPage();
                break;
            case '-':
                e.preventDefault();
                zoomOut();
                break;
            case '+':
            case '=':
                e.preventDefault();
                zoomIn();
                break;
            case '0':
                e.preventDefault();
                pdfState.zoomLevel = 1.0;
                renderPDFPage();
                break;
        }
    }

    // =========================================
    // 10. EMAIL COPY FUNCTIONALITY
    // =========================================
    function initEmailCopy() {
        if (!dom.emailLink) return;
        
        dom.emailLink.addEventListener('click', async (e) => {
            e.preventDefault();
            
            const email = 'mzdp12@gmail.com';
            
            try {
                await navigator.clipboard.writeText(email);
                showNotification('Email berhasil disalin ke clipboard!', 'success');
                
                // Visual feedback
                const originalText = dom.emailLink.innerHTML;
                dom.emailLink.innerHTML = '<i class="fas fa-check"></i> Email Disalin!';
                dom.emailLink.style.color = '#10b981';
                
                setTimeout(() => {
                    dom.emailLink.innerHTML = originalText;
                    dom.emailLink.style.color = '';
                }, 2000);
                
            } catch (error) {
                console.error('Failed to copy email:', error);
                showNotification('Gagal menyalin email. Silakan copy secara manual.', 'error');
            }
        });
    }

    // =========================================
    // 11. SHARE FUNCTIONALITY
    // =========================================
    function initShareFunctionality() {
        if (!dom.shareBtn) return;
        
        dom.shareBtn.addEventListener('click', async () => {
            const shareData = {
                title: 'Portfolio Dipzkyy | Fullstack Developer',
                text: 'Lihat portfolio Diva Islamy Rizky Akbar - Fullstack Developer spesialis PHP & JavaScript',
                url: window.location.href
            };
            
            try {
                if (navigator.share) {
                    await navigator.share(shareData);
                } else {
                    // Fallback: Copy URL to clipboard
                    await navigator.clipboard.writeText(window.location.href);
                    showNotification('Link portfolio berhasil disalin ke clipboard!', 'success');
                }
            } catch (error) {
                if (error.name !== 'AbortError') {
                    console.error('Error sharing:', error);
                    showNotification('Gagal membagikan portfolio', 'error');
                }
            }
        });
    }

    // =========================================
    // 12. CONTACT FORM
    // =========================================
    function initContactForm() {
        if (!dom.contactForm) return;
        
        // Form validation
        const formInputs = dom.contactForm.querySelectorAll('input, textarea');
        formInputs.forEach(input => {
            input.addEventListener('blur', validateField);
            input.addEventListener('input', clearError);
        });
        
        // Form submission
        dom.contactForm.addEventListener('submit', handleFormSubmit);
    }

    function validateField(e) {
        const field = e.target;
        const value = field.value.trim();
        const errorElement = field.nextElementSibling?.nextElementSibling;
        
        if (!errorElement) return;
        
        // Clear previous error
        clearError(e);
        
        // Validate based on field type
        if (field.required && !value) {
            showError(field, 'Field ini wajib diisi');
            return false;
        }
        
        if (field.type === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                showError(field, 'Email tidak valid');
                return false;
            }
        }
        
        return true;
    }

    function showError(field, message) {
        const errorElement = field.nextElementSibling?.nextElementSibling;
        if (errorElement) {
            errorElement.textContent = message;
            field.classList.add('error');
        }
    }

    function clearError(e) {
        const field = e.target;
        const errorElement = field.nextElementSibling?.nextElementSibling;
        if (errorElement) {
            errorElement.textContent = '';
            field.classList.remove('error');
        }
    }

    async function handleFormSubmit(e) {
        e.preventDefault();
        
        // Validate all fields
        const fields = dom.contactForm.querySelectorAll('input, textarea');
        let isValid = true;
        
        fields.forEach(field => {
            const event = new Event('blur');
            field.dispatchEvent(event);
            if (field.classList.contains('error')) {
                isValid = false;
            }
        });
        
        if (!isValid) {
            showNotification('Harap perbaiki error di form', 'error');
            return;
        }
        
        // Show loading state
        dom.submitBtn.disabled = true;
        dom.btnText.style.display = 'none';
        dom.btnLoader.style.display = 'inline-block';
        
        try {
            const formData = new FormData(dom.contactForm);
            const response = await fetch(dom.contactForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });
            
            if (response.ok) {
                showNotification('Pesan berhasil dikirim! Saya akan membalas segera.', 'success');
                dom.contactForm.reset();
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            showNotification('Gagal mengirim pesan. Silakan coba lagi atau email langsung ke mzdp12@gmail.com.', 'error');
        } finally {
            // Reset button state
            dom.submitBtn.disabled = false;
            dom.btnText.style.display = 'inline-block';
            dom.btnLoader.style.display = 'none';
        }
    }

    // =========================================
    // 13. NOTIFICATION SYSTEM
    // =========================================
    function showNotification(message, type = 'info') {
        if (!dom.notification || !dom.notificationText) return;
        
        // Set message and type
        dom.notificationText.textContent = message;
        
        // Set icon and color based on type
        const icon = dom.notification.querySelector('.notification-icon i');
        if (icon) {
            switch (type) {
                case 'success':
                    icon.className = 'fas fa-check-circle';
                    dom.notification.style.borderLeftColor = '#10b981';
                    break;
                case 'error':
                    icon.className = 'fas fa-times-circle';
                    dom.notification.style.borderLeftColor = '#ef4444';
                    break;
                case 'warning':
                    icon.className = 'fas fa-exclamation-triangle';
                    dom.notification.style.borderLeftColor = '#f59e0b';
                    break;
                default:
                    icon.className = 'fas fa-info-circle';
                    dom.notification.style.borderLeftColor = '#3b82f6';
            }
        }
        
        // Show notification
        dom.notification.classList.add('show');
        
        // Auto hide after 4 seconds
        const hideTimeout = setTimeout(() => {
            dom.notification.classList.remove('show');
        }, 4000);
        
        // Clear timeout if notification is clicked
        dom.notification.addEventListener('click', () => {
            clearTimeout(hideTimeout);
            dom.notification.classList.remove('show');
        });
    }

    // =========================================
    // 14. BACKGROUND PARTICLES
    // =========================================
    function initParticles() {
        const container = document.getElementById('bgParticles');
        if (!container) return;
        
        const particleCount = 30;
        const colors = ['#3b82f6', '#06b6d4', '#8b5cf6'];
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            const size = Math.random() * 5 + 2;
            const color = colors[Math.floor(Math.random() * colors.length)];
            
            particle.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                background: ${color};
                border-radius: 50%;
                opacity: ${Math.random() * 0.3 + 0.1};
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                animation: floatParticle ${Math.random() * 20 + 10}s linear infinite;
                animation-delay: ${Math.random() * 5}s;
                pointer-events: none;
                z-index: 1;
            `;
            
            container.appendChild(particle);
        }
        
        // Add CSS for particle animation
        if (!document.querySelector('#particle-styles')) {
            const style = document.createElement('style');
            style.id = 'particle-styles';
            style.textContent = `
                @keyframes floatParticle {
                    0% {
                        transform: translate(0, 0) rotate(0deg);
                        opacity: 0;
                    }
                    10% {
                        opacity: 0.5;
                    }
                    90% {
                        opacity: 0.5;
                    }
                    100% {
                        transform: translate(${Math.random() * 200 - 100}px, -100vh) rotate(${Math.random() * 360}deg);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(style);
        }
    }

    // =========================================
    // 15. BACK TO TOP BUTTON
    // =========================================
    function initBackToTop() {
        if (!dom.backToTop) return;
        
        // Show/hide button on scroll
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                dom.backToTop.classList.add('visible');
            } else {
                dom.backToTop.classList.remove('visible');
            }
        });
        
        // Scroll to top on click
        dom.backToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // =========================================
    // 16. LAZY LOAD IMAGES
    // =========================================
    function lazyLoadImages() {
        const images = document.querySelectorAll('img[loading="lazy"]');
        
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.classList.add('loaded');
                        imageObserver.unobserve(img);
                    }
                });
            });
            
            images.forEach(img => imageObserver.observe(img));
        } else {
            // Fallback for older browsers
            images.forEach(img => {
                img.classList.add('loaded');
            });
        }
    }

    // =========================================
    // 17. UTILITY FUNCTIONS
    // =========================================
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

    function throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }

    // =========================================
    // 18. ERROR HANDLING & SAFE FETCH
    // =========================================
    const safeFetch = async (url, options = {}) => {
        try {
            const response = await fetch(url, {
                ...options,
                headers: {
                    'Accept': 'application/vnd.github.v3+json',
                    ...options.headers
                }
            });
            
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }
            
            return await response.json();
        } catch (error) {
            console.error('Fetch error:', error);
            return null;
        }
    };

    // =========================================
    // 19. SERVICE WORKER REGISTRATION (PWA)
    // =========================================
    if ('serviceWorker' in navigator && window.location.protocol === 'https:') {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/sw.js').catch(error => {
                console.log('ServiceWorker registration failed:', error);
            });
        });
    }

    // =========================================
    // 20. INITIALIZE EVERYTHING & GLOBAL EXPORTS
    // =========================================
    
    // Add CSS for dynamic elements
    addDynamicStyles();
    
    // Expose some functions to global scope for debugging
    window.portfolio = {
        reloadProjects: () => renderProjects(currentFilter),
        showNotification,
        toggleTheme,
        openPDFViewer: (url, title) => openPDFViewer(url, title),
        closePDFViewer
    };
});

// Add dynamic CSS styles
function addDynamicStyles() {
    const styles = `
        /* Skill Tooltip */
        .skill-tooltip {
            position: absolute;
            bottom: -30px;
            left: 50%;
            transform: translateX(-50%);
            background: var(--bg-card);
            color: var(--text-main);
            padding: 4px 8px;
            border-radius: 4px;
            font-size: 0.7rem;
            white-space: nowrap;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            z-index: 1000;
            border: 1px solid var(--primary);
            box-shadow: 0 2px 10px rgba(0,0,0,0.3);
        }
        
        .skill-node:hover .skill-tooltip {
            opacity: 1;
            visibility: visible;
            bottom: -35px;
        }
        
        /* Project Card Styles */
        .project-owner {
            font-size: 0.8rem;
            color: var(--text-muted);
        }
        
        .project-language {
            display: flex;
            align-items: center;
            gap: 5px;
        }
        
        .language-dot {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            display: inline-block;
        }
        
        .project-stats {
            display: flex;
            gap: 15px;
        }
        
        .project-stat {
            display: flex;
            align-items: center;
            gap: 5px;
            font-size: 0.85rem;
            color: var(--text-muted);
        }
        
        .project-footer {
            margin-top: 10px;
            padding-top: 10px;
            border-top: 1px solid rgba(255,255,255,0.1);
            color: var(--text-muted);
            font-size: 0.8rem;
        }
        
        /* Error States */
        .github-error, .no-projects {
            grid-column: 1 / -1;
            text-align: center;
            padding: 3rem;
            color: var(--text-muted);
        }
        
        .github-error i, .no-projects i {
            font-size: 3rem;
            margin-bottom: 1rem;
            color: var(--color-laravel);
        }
        
        .github-error p, .no-projects p {
            margin-bottom: 0.5rem;
            font-weight: 500;
        }
        
        /* Form Error States */
        .form-group input.error,
        .form-group textarea.error {
            border-color: #ef4444 !important;
        }
        
        .error-msg {
            display: block;
            color: #ef4444;
            font-size: 0.8rem;
            margin-top: 5px;
            min-height: 20px;
        }
        
        /* CV Button Animation */
        @keyframes cvWave {
            0% { left: -100%; }
            100% { left: 100%; }
        }
        
        /* PDF Canvas Loading State */
        .pdf-viewer-container.loading {
            position: relative;
        }
        
        .pdf-viewer-container.loading::after {
            content: 'Memuat dokumen...';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: var(--text-muted);
            font-size: 0.9rem;
        }
        
        /* Responsive Skill Matrix */
        @media (max-width: 768px) {
            .skill-tooltip {
                display: none;
            }
            
            .skill-node:hover .skill-tooltip {
                display: block;
                font-size: 0.6rem;
                padding: 2px 6px;
                bottom: -25px;
            }
            
            /* PDF Modal Mobile Fixes */
            .pdf-modal-content {
                width: 95% !important;
                height: 85vh !important;
            }
            
            #pdfCanvas {
                max-height: 50vh !important;
            }
        }
        
        @media (max-width: 480px) {
            .pdf-modal-content {
                width: 100% !important;
                height: 100vh !important;
                border-radius: 0 !important;
            }
            
            .pdf-controls {
                flex-wrap: wrap;
                justify-content: center;
                gap: 10px;
            }
            
            .pdf-actions {
                flex-direction: column;
            }
            
            .pdf-actions .btn {
                width: 100%;
            }
        }
        
        /* Animation for Certificate Cards */
        .certificate-card {
            animation: slideInUp 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
            opacity: 0;
        }
        
        /* External Project Cards */
        .external-project-card {
            animation: slideInUp 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
            opacity: 0;
        }
        
        /* Loading Animation for PDF */
        @keyframes pdfLoading {
            0% { opacity: 0.5; }
            50% { opacity: 1; }
            100% { opacity: 0.5; }
        }
        
        .pdf-loading {
            animation: pdfLoading 1.5s ease-in-out infinite;
        }
        
        /* Print Styles for PDF */
        @media print {
            .pdf-modal-overlay,
            .pdf-modal-close,
            .pdf-controls,
            .pdf-zoom-controls,
            .pdf-actions {
                display: none !important;
            }
            
            .pdf-modal-content {
                position: static !important;
                transform: none !important;
                width: 100% !important;
                height: auto !important;
                box-shadow: none !important;
                border: none !important;
            }
            
            #pdfCanvas {
                max-width: 100% !important;
                max-height: none !important;
            }
        }
        
        /* Accessibility Improvements */
        @media (prefers-reduced-motion: reduce) {
            .skill-node,
            .certificate-card,
            .external-project-card,
            .tech-icon,
            .coding-sphere,
            .skill-orbit-3d {
                animation: none !important;
                transition: none !important;
            }
            
            .pdf-modal-content {
                animation: none !important;
            }
        }
        
        /* High Contrast Mode Support */
        @media (prefers-contrast: high) {
            :root {
                --primary: #0066cc;
                --text-main: #000000;
                --text-muted: #333333;
            }
            
            [data-theme="dark"] {
                --text-main: #ffffff;
                --text-muted: #cccccc;
            }
            
            .skill-node,
            .certificate-card,
            .project-card,
            .service-card,
            .info-card {
                border: 2px solid var(--primary) !important;
            }
        }
    `;
    
    const styleSheet = document.createElement('style');
    styleSheet.textContent = styles;
    document.head.appendChild(styleSheet);
}

// Performance Monitoring
if (typeof PerformanceObserver !== 'undefined') {
    const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
            console.log(`[Performance] ${entry.name}: ${entry.duration.toFixed(2)}ms`);
        }
    });
    
    observer.observe({ entryTypes: ['measure', 'paint'] });
}

// Error Tracking
window.addEventListener('error', (event) => {
    console.error('JavaScript Error:', {
        message: event.message,
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno
    });
});

// Unhandled Promise Rejection
window.addEventListener('unhandledrejection', (event) => {
    console.error('Unhandled Promise Rejection:', event.reason);
});

// Page Visibility API
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        console.log('Page is now hidden');
    } else {
        console.log('Page is now visible');
    }
});

// Offline/Online Detection
window.addEventListener('offline', () => {
    console.log('You are now offline');
    if (typeof showNotification === 'function') {
        showNotification('Anda sedang offline. Beberapa fitur mungkin tidak tersedia.', 'warning');
    }
});

window.addEventListener('online', () => {
    console.log('You are now online');
    if (typeof showNotification === 'function') {
        showNotification('Koneksi internet telah pulih.', 'success');
    }
});

// Memory Leak Prevention
window.addEventListener('beforeunload', () => {
    // Clean up any intervals or timeouts
    const highestId = setTimeout(() => {}, 0);
    for (let i = 0; i < highestId; i++) {
        clearTimeout(i);
        clearInterval(i);
    }
});