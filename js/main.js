class HeaderComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    static get observedAttributes() {
        return ['base-path', 'es-link', 'ca-link', 'current-page'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.render();
    }

    render() {
        const basePath = this.getAttribute('base-path') || '.';
        const esLink = this.getAttribute('es-link') || 'index.html';
        const caLink = this.getAttribute('ca-link') || 'ca/index.html';
        const currentPage = this.getAttribute('current-page') || 'index.html';
        const lang = document.documentElement.lang || 'es';
        const isSpanish = lang === 'es';

        const i18n = {
            es: {
                home: 'Inicio',
                services: 'Servicios',
                about: 'Nosotros',
                blog: 'Blog',
                rates: 'Tarifas',
                contact: 'Contacto',
                openMenu: 'Abrir menú de navegación',
                logoAlt: 'Fernet Limpiezas - Servicios de Limpieza Profesional en Badalona'
            },
            ca: {
                home: 'Inici',
                services: 'Serveis',
                about: 'Nosaltres',
                blog: 'Blog',
                rates: 'Tarifes',
                contact: 'Contacte',
                openMenu: 'Obrir menú de navegació',
                logoAlt: 'Fernet Neteges - Serveis de Neteja Professional a Badalona'
            }
        };

        const t = i18n[lang];

        const links = {
            home: `${basePath}/index.html`,
            services: `${basePath}/index.html#servicios`,
            about: `${basePath}/index.html#nosotros`,
            blog: `${basePath}/blog-limpiezas-badalona/index.html`,
            rates: isSpanish ? `${basePath}/tarifas.html` : `${basePath}/tarifes.html`,
            contact: isSpanish ? `${basePath}/contacto.html` : `${basePath}/contacte.html`,
        };

        if (!isSpanish) {
            links.services = `${basePath}/index.html#serveis`;
            links.about = `${basePath}/index.html#nosaltres`;
        }

        this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="${basePath}/styles.css">
            <header>
                <img src="${basePath}/img/logo.jpg" alt="${t.logoAlt}" class="logo">
                <input type="checkbox" id="menu-checkbox" aria-hidden="true">
                <label for="menu-checkbox" class="menu-toggle" aria-label="${t.openMenu}">
                    <span class="hamburger-line"></span>
                    <span class="hamburger-line"></span>
                    <span class="hamburger-line"></span>
                </label>
                <nav role="navigation" aria-label="Navegación principal">
                    <ul>
                        <li><a href="${links.home}" ${currentPage === 'index.html' ? 'aria-current="page"' : ''}>${t.home}</a></li>
                        <li><a href="${links.services}">${t.services}</a></li>
                        <li><a href="${links.about}">${t.about}</a></li>
                        <li><a href="${links.blog}" ${currentPage.includes('blog') ? 'aria-current="page"' : ''}>${t.blog}</a></li>
                        <li><a href="${links.rates}" ${currentPage.includes('tarifas') || currentPage.includes('tarifes') ? 'aria-current="page"' : ''}>${t.rates}</a></li>
                        <li><a href="${links.contact}" ${currentPage.includes('contacto') || currentPage.includes('contacte') ? 'aria-current="page"' : ''}>${t.contact}</a></li>
                        <li class="language-switcher">
                            <a href="${esLink}" hreflang="es" lang="es">ES</a>
                            <span>|</span>
                            <a href="${caLink}" hreflang="ca" lang="ca">CA</a>
                        </li>
                    </ul>
                </nav>
            </header>
        `;
    }
}

customElements.define('header-component', HeaderComponent);

class FooterComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    static get observedAttributes() {
        return ['base-path'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.render();
    }

    render() {
        const basePath = this.getAttribute('base-path') || '.';
        const lang = document.documentElement.lang || 'es';
        const isSpanish = lang === 'es';

        const i18n = {
            es: {
                companyName: 'Fernet Limpiezas',
                companyDescription: 'Empresa de limpieza profesional en Badalona con más de 20 años de experiencia. Ofrecemos servicios de limpieza para empresas, comunidades y particulares.',
                contactTitle: 'Contacto',
                address: 'Avenida Alfonso XIII nº 107-109, Badalona, Barcelona',
                linksTitle: 'Enlaces de interes',
                rates: 'Tarifas',
                budget: 'Presupuesto',
                howToArrive: 'Cómo llegar',
                contact: 'Contacto',
                gallery: 'Galería',
                employment: 'Empleo',
                servicesTitle: 'Servicios en Badalona',
                copyright: `&copy; ${new Date().getFullYear()} Fernet Limpiezas. Todos los derechos reservados. | Servicios de Limpieza Profesional en Badalona`,
                copyrightDescription: 'Empresa de limpieza especializada en comunidades, oficinas, comercios, escuelas, fábricas y centros clínicos',
                ratesLink: 'tarifas.html',
                budgetLink: 'presupuesto.html',
                howToArriveLink: 'como-llegar.html',
                contactLink: 'contacto.html',
                galleryLink: 'galeria.html',
                employmentLink: 'empleo.html',
                services: {
                    comunidades: 'Comunidades de Vecinos',
                    oficinas: 'Oficinas',
                    comercios: 'Comercios',
                    docentes: 'Centros Docentes',
                    grafitis: 'Eliminación de Grafitis',
                    abrillantado: 'Abrillantado y Cristalizado',
                    particulares: 'Particulares',
                    fondo: 'Limpiezas a Fondo',
                    obra: 'Finales de Obra',
                    cristales: 'Cristales',
                    parkings: 'Parkings',
                    industrial: 'Limpieza Industrial'
                }
            },
            ca: {
                companyName: 'Fernet Neteges',
                companyDescription: "Empresa de neteja professional a Badalona amb més de 20 anys d'experiència. Oferim serveis de neteja per a empreses, comunitats i particulars.",
                contactTitle: 'Contacte',
                address: 'Avinguda Alfons XIII núm. 107-109, Badalona, Barcelona',
                linksTitle: "Enllaços d'interès",
                rates: 'Tarifes',
                budget: 'Pressupost',
                howToArrive: 'Com arribar',
                contact: 'Contacte',
                gallery: 'Galeria',
                employment: 'Feina',
                servicesTitle: 'Serveis a Badalona',
                copyright: `&copy; ${new Date().getFullYear()} Fernet Neteges. Tots els drets reservats. | Serveis de Neteja Professional a Badalona`,
                copyrightDescription: 'Empresa de neteja especialitzada en comunitats, oficines, comerços, escoles, fàbriques i centres clínics',
                ratesLink: 'tarifes.html',
                budgetLink: 'pressupost.html',
                howToArriveLink: 'com-arribar.html',
                contactLink: 'contacte.html',
                galleryLink: 'galeria.html',
                employmentLink: 'feina.html',
                services: {
                    comunidades: 'Comunitats de Veïns',
                    oficinas: 'Oficines',
                    comercios: 'Comerços',
                    docentes: 'Centres Docents',
                    grafitis: 'Eliminació de Grafitis',
                    abrillantado: 'Abrillantat i Cristal·litzat',
                    particulares: 'Particulars',
                    fondo: 'Neteges a Fons',
                    obra: "Finals d'Obra",
                    cristales: 'Vidres',
                    parkings: 'Pàrquings',
                    industrial: 'Neteja Industrial'
                }
            }
        };

        const t = i18n[lang];

        this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="${basePath}/styles.css">
            <footer>
                <div class="footer-container">
                    <div class="footer-contact">
                        <h4>${t.companyName}</h4>
                        <p>${t.companyDescription}</p>
                        <br>
                        <br>
                        <h4>${t.contactTitle}</h4>
                        <p>📍 ${t.address}</p>
                        <p>📞 <a href="tel:+34931050338">931 050 338</a></p>
                        <p>📧 <a href="mailto:info@limpiezasfernet.com">info@limpiezasfernet.com</a></p>
                    </div>
                    <div class="footer-about">
                        <div class="footer-links-secondary">
                            <h4>${t.linksTitle}</h4>
                            <ul>
                                <li><a href="${basePath}/${t.ratesLink}">${t.rates}</a></li>
                                <li><a href="${basePath}/${t.budgetLink}">${t.budget}</a></li>
                                <li><a href="${basePath}/${t.howToArriveLink}">${t.howToArrive}</a></li>
                                <li><a href="${basePath}/${t.contactLink}">${t.contact}</a></li>
                                <li><a href="${basePath}/${t.galleryLink}">${t.gallery}</a></li>
                                <li><a href="${basePath}/${t.employmentLink}">${t.employment}</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="footer-links">
                        <h4>${t.servicesTitle}</h4>
                        <ul>
                            <li><a href="${basePath}/servicios/limpieza-comunidades-badalona.html">${t.services.comunidades}</a></li>
                            <li><a href="${basePath}/servicios/limpieza-oficinas-badalona.html">${t.services.oficinas}</a></li>
                            <li><a href="${basePath}/servicios/limpieza-comercios-badalona.html">${t.services.comercios}</a></li>
                            <li><a href="${basePath}/servicios/limpieza-centros-docentes-badalona.html">${t.services.docentes}</a></li>
                            <li><a href="${basePath}/servicios/limpieza-grafitis-badalona.html">${t.services.grafitis}</a></li>
                            <li><a href="${basePath}/servicios/abrillantado-suelos-badalona.html">${t.services.abrillantado}</a></li>
                            <li><a href="${basePath}/servicios/limpieza-particulares-badalona.html">${t.services.particulares}</a></li>
                            <li><a href="${basePath}/servicios/limpieza-fondo-badalona.html">${t.services.fondo}</a></li>
                            <li><a href="${basePath}/servicios/limpieza-finales-obra-badalona.html">${t.services.obra}</a></li>
                            <li><a href="${basePath}/servicios/limpieza-cristales-badalona.html">${t.services.cristales}</a></li>
                            <li><a href="${basePath}/servicios/limpieza-parkings-badalona.html">${t.services.parkings}</a></li>
                            <li><a href="${basePath}/servicios/limpieza-industrial-badalona.html">${t.services.industrial}</a></li>
                        </ul>
                    </div>
                </div>
                <div class="footer-bottom">
                    <p>${t.copyright}</p>
                    <p>${t.copyrightDescription}</p>
                </div>
            </footer>
        `;
    }
}

customElements.define('footer-component', FooterComponent);