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
        const pagePath = (path) => `${basePath}/${path}`;
        const homePath = isSpanish ? 'index.html' : 'ca/index.html';
        const servicesAnchor = isSpanish ? 'servicios' : 'serveis';
        const currentPath = window.location.pathname;
        const isHome = currentPath === '/' || currentPath === '/ca/' ||
            currentPath.endsWith('/index.html') &&
            !currentPath.includes('/blog-limpiezas-badalona/');

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
            home: pagePath(homePath),
            services: `${pagePath(homePath)}#${servicesAnchor}`,
            about: `${pagePath(homePath)}#${isSpanish ? 'nosotros' : 'nosaltres'}`,
            blog: pagePath(isSpanish
                ? 'blog-limpiezas-badalona/index.html'
                : 'ca/blog-limpiezas-badalona/index.html'),
            rates: pagePath(isSpanish ? 'tarifas.html' : 'ca/tarifes.html'),
            contact: pagePath(isSpanish ? 'contacto.html' : 'ca/contacte.html'),
        };

        this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="${basePath}/styles.css">
            <header>
                <a href="${links.home}" class="logo-link" aria-label="${t.home}">
                    <img src="${basePath}/img/logo.jpg" alt="${t.logoAlt}" class="logo">
                </a>
                <input type="checkbox" id="menu-checkbox" aria-hidden="true">
                <label for="menu-checkbox" class="menu-toggle" aria-label="${t.openMenu}">
                    <span class="hamburger-line"></span>
                    <span class="hamburger-line"></span>
                    <span class="hamburger-line"></span>
                </label>
                <nav role="navigation" aria-label="Navegación principal">
                    <ul>
                        <li><a href="${links.home}" ${isHome ? 'aria-current="page"' : ''}>${t.home}</a></li>
                        <li><a href="${links.services}">${t.services}</a></li>
                        <li><a href="${links.about}">${t.about}</a></li>
                        <li><a href="${links.blog}" ${currentPath.includes('/blog-limpiezas-badalona/') ? 'aria-current="page"' : ''}>${t.blog}</a></li>
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
        const pagePath = (path) => `${basePath}/${path}`;

        const i18n = {
            es: {
                companyName: 'Fernet Limpiezas',
                companyDescription: 'Empresa de limpieza en Badalona. Servicios para comunidades, negocios y viviendas.',
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
                companyDescription: 'Empresa de neteja a Badalona. Serveis per a comunitats, negocis i habitatges.',
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
        const pageLinks = isSpanish ? {
            rates: 'tarifas.html',
            budget: 'presupuesto.html',
            howToArrive: 'como-llegar.html',
            contact: 'contacto.html',
            gallery: 'galeria.html',
            employment: 'empleo.html',
            serviceRoot: 'servicios'
        } : {
            rates: 'ca/tarifes.html',
            budget: 'ca/pressupost.html',
            howToArrive: 'ca/com-arribar.html',
            contact: 'ca/contacte.html',
            gallery: 'ca/galeria.html',
            employment: 'ca/feina.html',
            serviceRoot: 'ca/serveis'
        };
        const servicePages = {
            comunidades: isSpanish ? 'limpieza-comunidades-badalona.html' : 'neteja-comunitats-badalona.html',
            oficinas: isSpanish ? 'limpieza-oficinas-badalona.html' : 'neteja-oficines-badalona.html',
            comercios: isSpanish ? 'limpieza-comercios-badalona.html' : 'neteja-comercos-badalona.html',
            docentes: isSpanish ? 'limpieza-centros-docentes-badalona.html' : 'neteja-centres-docents-badalona.html',
            grafitis: isSpanish ? 'limpieza-grafitis-badalona.html' : 'neteja-grafitis-badalona.html',
            abrillantado: isSpanish ? 'abrillantado-suelos-badalona.html' : 'abrillantat-terres-badalona.html',
            particulares: isSpanish ? 'limpieza-particulares-badalona.html' : 'neteja-particulars-badalona.html',
            fondo: isSpanish ? 'limpieza-fondo-badalona.html' : 'neteja-fons-badalona.html',
            obra: isSpanish ? 'limpieza-finales-obra-badalona.html' : 'neteja-finals-obra-badalona.html',
            cristales: isSpanish ? 'limpieza-cristales-badalona.html' : 'neteja-vidres-badalona.html',
            parkings: isSpanish ? 'limpieza-parkings-badalona.html' : 'neteja-parkings-badalona.html',
            industrial: isSpanish ? 'limpieza-industrial-badalona.html' : 'neteja-industrial-badalona.html'
        };

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
                                <li><a href="${pagePath(pageLinks.rates)}">${t.rates}</a></li>
                                <li><a href="${pagePath(pageLinks.budget)}">${t.budget}</a></li>
                                <li><a href="${pagePath(pageLinks.howToArrive)}">${t.howToArrive}</a></li>
                                <li><a href="${pagePath(pageLinks.contact)}">${t.contact}</a></li>
                                <li><a href="${pagePath(pageLinks.gallery)}">${t.gallery}</a></li>
                                <li><a href="${pagePath(pageLinks.employment)}">${t.employment}</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="footer-links">
                        <h4>${t.servicesTitle}</h4>
                        <ul>
                            <li><a href="${pagePath(`${pageLinks.serviceRoot}/${servicePages.comunidades}`)}">${t.services.comunidades}</a></li>
                            <li><a href="${pagePath(`${pageLinks.serviceRoot}/${servicePages.oficinas}`)}">${t.services.oficinas}</a></li>
                            <li><a href="${pagePath(`${pageLinks.serviceRoot}/${servicePages.comercios}`)}">${t.services.comercios}</a></li>
                            <li><a href="${pagePath(`${pageLinks.serviceRoot}/${servicePages.docentes}`)}">${t.services.docentes}</a></li>
                            <li><a href="${pagePath(`${pageLinks.serviceRoot}/${servicePages.grafitis}`)}">${t.services.grafitis}</a></li>
                            <li><a href="${pagePath(`${pageLinks.serviceRoot}/${servicePages.abrillantado}`)}">${t.services.abrillantado}</a></li>
                            <li><a href="${pagePath(`${pageLinks.serviceRoot}/${servicePages.particulares}`)}">${t.services.particulares}</a></li>
                            <li><a href="${pagePath(`${pageLinks.serviceRoot}/${servicePages.fondo}`)}">${t.services.fondo}</a></li>
                            <li><a href="${pagePath(`${pageLinks.serviceRoot}/${servicePages.obra}`)}">${t.services.obra}</a></li>
                            <li><a href="${pagePath(`${pageLinks.serviceRoot}/${servicePages.cristales}`)}">${t.services.cristales}</a></li>
                            <li><a href="${pagePath(`${pageLinks.serviceRoot}/${servicePages.parkings}`)}">${t.services.parkings}</a></li>
                            <li><a href="${pagePath(`${pageLinks.serviceRoot}/${servicePages.industrial}`)}">${t.services.industrial}</a></li>
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