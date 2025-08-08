// --- Importa todos os dados de data.js ---
import { 
    yinYangData,
    qiData, 
    meridianData, 
    lifeCyclesFemaleData, 
    lifeCyclesMaleData, 
    anatomyData, 
    fiveElementsData, 
    glossaryData, 
    foodData, 
    zangFuPatternsData, 
    dezPerguntasData, 
    greatMastersData,
    therapiesData,
    linguaData,
    pulsePositionData,
    pulseTypeData
} from './data.js';

// --- Seleção de Elementos DOM ---
const loadingScreen = document.getElementById('loading-screen');
const openMenuBtn = document.getElementById('open-menu-btn');
const closeMenuBtn = document.getElementById('close-menu-btn');
const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
const mobileNavHub = document.getElementById('navigation-hub');
const desktopNavHub = document.getElementById('desktop-navigation-hub');
const currentSectionTitle = document.getElementById('current-section-title');
const contentArea = document.getElementById('main-content-area');
const mainContent = document.getElementById('main-content');
let contentSections = [];

const allNavHubs = [mobileNavHub, desktopNavHub];

// Elementos da Pesquisa Global
const openSearchMobileBtn = document.getElementById('open-search-btn-mobile');
const desktopSearchInput = document.getElementById('desktop-search-input');
const searchModalContainer = document.getElementById('search-modal-container');
const searchOverlay = document.getElementById('search-overlay');
const closeSearchBtn = document.getElementById('close-search-btn');
const globalSearchInput = document.getElementById('global-search-input');
const searchResultsContainer = document.getElementById('search-results-container');
let searchIndex = [];
let fuse; // Fuse.js instance

// Elementos do Modal de Conteúdo
const contentModal = document.getElementById('content-modal');
const contentModalContent = document.getElementById('content-modal-content');
const contentModalCloseBtn = document.getElementById('content-modal-close-btn');
const contentModalOverlay = document.getElementById('content-modal-overlay');
const contentModalFavoriteBtn = document.getElementById('content-modal-favorite-btn');

// --- LÓGICA DE FAVORITOS ---
let favorites = [];

function saveFavorites() {
    localStorage.setItem('mtcAppFavorites', JSON.stringify(favorites));
}

function loadFavorites() {
    const favs = localStorage.getItem('mtcAppFavorites');
    favorites = favs ? JSON.parse(favs) : [];
}

function isFavorite(itemId) {
    return favorites.some(fav => fav.id === itemId);
}

function toggleFavorite(itemData) {
    if (!itemData || !itemData.id) return;
    const index = favorites.findIndex(fav => fav.id === itemData.id);

    if (index > -1) {
        favorites.splice(index, 1); // Remove
    } else {
        favorites.push(itemData); // Adiciona
    }

    saveFavorites();
    renderFavoritesSection();

    // Atualiza o botão no modal se estiver aberto e for o mesmo item
    const currentModalItem = contentModalFavoriteBtn.dataset.item;
    if (currentModalItem) {
        if (JSON.parse(currentModalItem).id === itemData.id) {
            updateFavoriteButton(itemData.id);
        }
    }
    
    // Atualiza os botões na vista principal (pontos e alimentos)
    document.querySelectorAll(`.favorite-toggle-btn[data-id="${itemData.id}"]`).forEach(btn => {
        updateFavoriteIcon(btn, isFavorite(itemData.id));
    });
}

function updateFavoriteButton(itemId) {
    updateFavoriteIcon(contentModalFavoriteBtn, isFavorite(itemId));
    contentModalFavoriteBtn.title = isFavorite(itemId) ? "Remover dos Favoritos" : "Adicionar aos Favoritos";
}

function updateFavoriteIcon(buttonElement, isFav) {
    if (!buttonElement) return;
    const starIcon = buttonElement.querySelector('svg use');
    if (starIcon) {
        starIcon.setAttribute('href', isFav ? '#icon-star-filled' : '#icon-star-outline');
    }
    buttonElement.classList.toggle('active', isFav);
}


// --- LÓGICA DE NAVEGAÇÃO RESPONSIVA E PESQUISA ---
function openMobileMenu() { document.body.classList.add('mobile-menu-open'); }
function closeMobileMenu() { document.body.classList.remove('mobile-menu-open'); }
openMenuBtn.addEventListener('click', openMobileMenu);
closeMenuBtn.addEventListener('click', closeMobileMenu);
mobileMenuOverlay.addEventListener('click', (e) => {
    if (e.target === mobileMenuOverlay) {
        closeMobileMenu();
    }
});


function openSearchModal() {
    document.body.classList.add('search-modal-open');
    searchModalContainer.classList.remove('hidden');
    setTimeout(() => globalSearchInput.focus(), 50); 
}
function closeSearchModal() {
    document.body.classList.remove('search-modal-open');
    searchModalContainer.classList.add('hidden');
    globalSearchInput.value = ''; 
    searchResultsContainer.innerHTML = '<p class="text-center text-gray-500">Comece a escrever para ver os resultados.</p>';
}
openSearchMobileBtn.addEventListener('click', openSearchModal);
desktopSearchInput.addEventListener('focus', openSearchModal);
closeSearchBtn.addEventListener('click', closeSearchModal);
searchOverlay.addEventListener('click', closeSearchModal);

// --- LÓGICA DO MODAL DE CONTEÚDO ---
function openContentModal(htmlContent, itemData) {
    contentModalContent.innerHTML = htmlContent;
    
    if (itemData) {
        contentModalFavoriteBtn.dataset.item = JSON.stringify(itemData);
        updateFavoriteButton(itemData.id);
        contentModalFavoriteBtn.style.display = 'block';
    } else {
        contentModalFavoriteBtn.style.display = 'none';
    }

    document.body.classList.add('content-modal-open');
    
    const modalAccordions = contentModalContent.querySelectorAll('.accordion-container');
    modalAccordions.forEach(accordion => initializeAccordion(accordion));
}
function closeContentModal() {
    document.body.classList.remove('content-modal-open');
}
contentModalCloseBtn.addEventListener('click', closeContentModal);
contentModalOverlay.addEventListener('click', closeContentModal);
contentModalFavoriteBtn.addEventListener('click', () => {
    const itemDataString = contentModalFavoriteBtn.dataset.item;
    if (itemDataString) {
        toggleFavorite(JSON.parse(itemDataString));
    }
});


// --- LÓGICA DE NAVEGAÇÃO PRINCIPAL ---
function showSection(targetId, linkText) {
    contentSections.forEach(section => {
        section.classList.toggle('active', section.id === targetId);
    });
    if (contentArea) contentArea.scrollTop = 0;
    if (currentSectionTitle && linkText) currentSectionTitle.textContent = linkText;
}
function updateActiveLink(targetId) {
    allNavHubs.forEach(hub => {
        hub.querySelectorAll('.sidebar-link').forEach(link => {
            const href = link.getAttribute('href');
            const isActive = href === `#${targetId}`;
            link.classList.toggle('active', isActive);
            link.setAttribute('aria-current', isActive ? 'page' : 'false');
        });
    });
}

// *** FIX 4: Complete rewrite of the navigation event handling. ***
// Instead of a single delegated event listener, this function now attaches
// specific, individual listeners to each link and category header.
// This is a more robust method that avoids event bubbling conflicts on mobile devices.
function setupNavEventListeners() {
    allNavHubs.forEach(hub => {
        // Add listeners to category headers (buttons)
        const groupHeaders = hub.querySelectorAll('.nav-group-header');
        groupHeaders.forEach(header => {
            header.addEventListener('click', (e) => {
                e.preventDefault();
                header.classList.toggle('open');
                header.setAttribute('aria-expanded', header.classList.contains('open'));
            });
        });

        // Add listeners to navigation links (anchors)
        const links = hub.querySelectorAll('a.sidebar-link');
        links.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const linkText = link.querySelector('span').textContent;
                showSection(targetId, linkText);
                updateActiveLink(targetId);
                closeMobileMenu(); // This is key for mobile behavior
            });
        });
    });
}


// --- LÓGICA DE PESQUISA (COM FUSE.JS) ---
function createSearchIndex() {
    const rawIndex = [];
    meridianData.forEach(m => m.points.forEach(p => rawIndex.push({ title: `${p.id} - ${p.name}`, content: p.functions, type: 'Ponto', color: m.element, sectionId: 'meridianos' })));
    Object.values(glossaryData).forEach(i => rawIndex.push({ title: i.term, content: i.definition, type: 'Glossário', color: 'primary', sectionId: 'glossario' }));
    foodData.forEach(f => rawIndex.push({ title: f.name, content: `Ações: ${f.actions}`, type: 'Alimento', color: 'earth', sectionId: 'dietetica' }));
    zangFuPatternsData.forEach(o => o.patterns.forEach(p => rawIndex.push({ title: p.name, content: p.symptoms, type: 'Padrão Zang-Fu', color: o.color, sectionId: 'padroes-zang-fu' })));
    therapiesData.forEach(t => rawIndex.push({ title: t.title, content: t.content.replace(/<[^>]*>/g, ' ').substring(0, 150) + '...', type: 'Terapia', color: 'secondary', sectionId: 'terapias' }));
    greatMastersData.forEach(m => rawIndex.push({ title: m.name, content: m.content.replace(/<[^>]*>/g, ' ').substring(0, 150) + '...', type: 'Mestre', color: 'water', sectionId: 'grandes-mestres' }));
    
    const options = {
        includeScore: true,
        keys: ['title', 'content'],
        threshold: 0.4 // Adjust threshold for more/less fuzzy matching
    };
    fuse = new Fuse(rawIndex, options);
}

function performSearch(query) {
    if (query.length < 2) {
        searchResultsContainer.innerHTML = '<p class="text-center text-gray-500">Escreva pelo menos 2 letras para pesquisar.</p>';
        return;
    }
    const results = fuse.search(query);
    renderSearchResults(results);
}

function renderSearchResults(results) {
    if (results.length === 0) {
        searchResultsContainer.innerHTML = '<p class="text-center text-gray-500">Nenhum resultado encontrado.</p>';
        return;
    }
    searchResultsContainer.innerHTML = results.map(result => {
        const item = result.item;
        const badgeClass = item.type === 'Ponto' ? 'ponto-badge' : '';
        return `
        <div class="search-result-item" data-section-id="${item.sectionId}">
            <h4>${item.title}</h4>
            <p>${item.content}</p>
            <span class="result-type-badge ${badgeClass}" style="background-color: var(--el-${item.color}, var(--color-primary))">${item.type}</span>
        </div>
    `}).join('');
}

globalSearchInput.addEventListener('input', (e) => performSearch(e.target.value));
searchResultsContainer.addEventListener('click', (e) => {
    const resultItem = e.target.closest('.search-result-item');
    if (resultItem) {
        const sectionId = resultItem.dataset.sectionId;
        const link = document.querySelector(`#desktop-navigation-hub a[href="#${sectionId}"]`);
        if (link) {
            const linkText = link.querySelector('span').textContent;
            showSection(sectionId, linkText);
            updateActiveLink(sectionId);
            closeSearchModal();
        }
    }
});


// --- FUNÇÕES DE GERAÇÃO DE CONTEÚDO ---

function initializeAccordion(container) {
    if (!container) return;
    container.addEventListener('click', (e) => {
        const button = e.target.closest('.accordion-button');
        if (!button) return;

        const item = button.closest('.accordion-item');
        if (!item || item.parentElement !== container) return;
        
        const isExpanded = button.getAttribute('aria-expanded') === 'true';

        const siblingItems = Array.from(container.children).filter(child => child.classList.contains('accordion-item'));
        siblingItems.forEach(otherItem => {
            if (otherItem !== item) {
                const otherButton = otherItem.querySelector('.accordion-button');
                if (otherButton) otherButton.setAttribute('aria-expanded', 'false');
            }
        });
        
        button.setAttribute('aria-expanded', !isExpanded);
    });
}


function createAccordionHTML(data, containerIdPrefix = '') {
    return data.map((item, index) => {
        const uniqueId = `${containerIdPrefix}-item-${index}`;
        return `
        <div class="accordion-item" data-id="${item.id || ''}">
            <button class="accordion-button" aria-expanded="false" aria-controls="${uniqueId}-content" id="${uniqueId}-button">
                <span class="accordion-title-content">
                    ${item.color ? `<span class="w-3 h-3 rounded-full mr-3 shrink-0" style="background-color: var(--el-${item.color});"></span>` : ''}
                    <span class="text-left">${item.title}</span>
                </span>
                <svg class="w-5 h-5 shrink-0 text-gray-400 chevron transition-transform duration-300"><use href="#icon-chevron-down"></use></svg>
            </button>
            <div class="accordion-content" id="${uniqueId}-content" role="region" aria-labelledby="${uniqueId}-button">
                <div class="accordion-content-inner">${item.content || item.functions}</div>
            </div>
        </div>`;
    }).join('');
}

function setupYinYangSection() {
    const container = document.getElementById('yin-yang-container');
    if (!container) return;
    // SVG animado do ecrã de carregamento
    const animatedSvg = `
        <svg viewBox="0 0 200 200" class="w-full max-w-xs mx-auto yin-yang-svg">
             <defs>
                <linearGradient id="yin-grad-main" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#4a5568" /><stop offset="100%" stop-color="#1a202c" /></linearGradient>
                <linearGradient id="yang-grad-main" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#ffffff" /><stop offset="100%" stop-color="#e2e8f0" /></linearGradient>
            </defs>
            <g>
                <circle cx="100" cy="100" r="98" fill="url(#yang-grad-main)" stroke="#e2e8f0" stroke-width="2"/>
                <path fill="url(#yin-grad-main)" d="M100,2 a98,98 0 0,0 0,196 a49,49 0 0,1 0,-98 a49,49 0 0,0 0,-98 Z"/>
                <circle fill="url(#yin-grad-main)" cx="100" cy="149" r="18"/><circle fill="url(#yang-grad-main)" cx="100" cy="51" r="18"/>
            </g>
        </svg>
    `;
    container.innerHTML = `
        <div class="card-header"><h3>${yinYangData.title}</h3></div>
        <div class="card-content">
            <div class="grid lg:grid-cols-2 gap-8 items-center">
                <div class="p-4">${animatedSvg}</div>
                <div class="card-prose">${yinYangData.content}</div>
            </div>
            <div class="mt-8">${yinYangData.table}</div>
        </div>`;
}

function createLifeCycleTimeline(containerId, data, colorClass) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = data.map(item => `
        <div class="timeline-item">
            <div class="timeline-marker"><div class="w-8 h-8 rounded-full ${colorClass} text-white flex items-center justify-center font-bold text-sm shadow-md">${item.age}</div></div>
            <div class="pt-1"><p class="font-semibold text-gray-800">Idade ${item.age}</p><p class="text-sm text-gray-600">${item.content}</p></div>
        </div>`).join('');
}

// --- SISTEMA DE GRELHAS GENÉRICO ---

function setupZoomGrid(containerId, data, cardRenderer, modalContentRenderer, itemType) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = data.map(item => cardRenderer(item)).join('');

    container.addEventListener('click', (e) => {
        const card = e.target.closest('[data-id]');
        if (!card) return;

        const itemId = card.dataset.id;
        const itemInfo = data.find(d => d.id === itemId);

        if (itemInfo) {
            const contentHTML = modalContentRenderer(itemInfo);
            const itemDataForFavorite = {
                id: `${itemType}-${itemInfo.id}`,
                title: itemInfo.name || itemInfo.title,
                type: itemType,
                color: itemInfo.color || 'primary',
                sectionId: container.closest('.content-section').id
            };
            openContentModal(contentHTML, itemDataForFavorite);
        }
    });
}

function setupFlipGrid(containerId, data, cardRenderer, modalContentRenderer, itemType) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = data.map(item => cardRenderer(item)).join('');

    container.addEventListener('click', (e) => {
        const card = e.target.closest('.flip-card');
        const detailsButton = e.target.closest('.details-btn');

        if (detailsButton) {
            const masterId = detailsButton.dataset.id;
            const masterInfo = data.find(m => m.id === masterId);
            if (masterInfo) {
                const itemDataForFavorite = {
                    id: `${itemType}-${masterInfo.id}`,
                    title: masterInfo.name,
                    type: itemType,
                    color: 'water',
                    sectionId: container.closest('.content-section').id
                };
                openContentModal(modalContentRenderer(masterInfo), itemDataForFavorite);
            }
            return; 
        }
        
        if (card) {
            card.classList.toggle('flipped');
        }
    });
}


// --- RENDERERS PARA O SISTEMA DE GRELHAS ---

const renderMeridianCard = (item) => `
    <div class="meridian-card" data-id="${item.id}">
        <span class="meridian-card-color-bar" style="background-color: var(--el-${item.color});"></span>
        <div class="p-4">
            <h4 class="font-playfair font-bold text-lg text-primary">${item.name}</h4>
            <p class="text-xs text-gray-500">${item.element} / ${item.time}</p>
        </div>
    </div>`;

const renderMeridianModalContent = (item) => {
    const pointsHTML = item.points.map(p => {
        const itemData = {
            id: `point-${p.id}`,
            title: `${p.id} - ${p.name} (${p.pt_name})`,
            type: 'Ponto',
            color: item.color,
            parentId: item.id,
            parentTitle: item.name,
            sectionId: 'meridianos'
        };
        const isFav = isFavorite(itemData.id);
        return `
        <div class="point-item">
            <div class="point-info">
                <strong class="text-primary-dark">${p.id} - ${p.name} (${p.character}) - ${p.pt_name}</strong>
                <p class="!mb-0">${p.functions}</p>
            </div>
            <button class="favorite-toggle-btn ${isFav ? 'active' : ''}" title="Adicionar Ponto aos Favoritos" data-item='${JSON.stringify(itemData)}' data-id="${itemData.id}">
                <svg class="w-5 h-5"><use href="${isFav ? '#icon-star-filled' : '#icon-star-outline'}"></use></svg>
            </button>
        </div>`;
    }).join('');

    return `
    <div class="card-header">
        <span class="w-4 h-4 rounded-full mr-3 shrink-0" style="background-color: var(--el-${item.color});"></span>
        <h3>${item.name}</h3>
    </div>
    <div class="card-content card-prose structured-content text-sm">
        <div class="grid md:grid-cols-2 gap-x-8">
            <div><h4>Funções Principais</h4><p>${item.functions}</p></div>
            <div><h4>Sinais de Desequilíbrio</h4><p>${item.imbalances}</p></div>
        </div>
        <h4>Pontos Especiais</h4>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-2 text-xs p-3 bg-gray-50 rounded-md border">
            <div><strong>Fonte (Yuan):</strong> ${item.yuan_source}</div>
            <div><strong>Conexão (Luo):</strong> ${item.luo_connecting}</div>
            <div><strong>Fenda (Xi):</strong> ${item.xi_cleft}</div>
        </div>
        <h4>Pontos Shu Antigos</h4>
        <div class="overflow-x-auto"><table class="w-full text-left !text-xs"><thead class="bg-gray-100"><tr><th class="p-2 font-semibold">Tipo</th><th class="p-2 font-semibold">Elemento</th><th class="p-2 font-semibold">Ponto</th><th class="p-2 font-semibold">Funções</th></tr></thead><tbody>${item.five_shu.map(p => `<tr class="border-b"><td class="p-2">${p.type}</td><td class="p-2">${p.element}</td><td class="p-2 font-bold">${p.point}</td><td class="p-2">${p.functions}</td></tr>`).join('')}</tbody></table></div>
        <h4>Lista Completa de Pontos</h4>
        <div class="space-y-1 max-h-80 overflow-y-auto pr-2">${pointsHTML}</div>
    </div>`;
};

const renderTherapyCard = (item) => {
    const regex = /(.+?)\s\((.+?)(?:\s-\s(.+?))?\)/;
    const match = item.title.match(regex);
    let ptName = item.title, chName = '', pinyin = '';

    if (match) {
        ptName = match[1];
        chName = match[2];
        pinyin = match[3] || '';
    }

    return `
    <div class="meridian-card text-center p-4 flex flex-col justify-center items-center h-full" data-id="${item.id}">
        <h4 class="text-xl font-playfair my-1 text-primary">${ptName}</h4>
        ${chName ? `<p class="text-2xl font-chinese text-gray-600">${chName}</p>` : ''}
        ${pinyin ? `<p class="text-sm text-gray-500 font-mono">(${pinyin})</p>` : ''}
    </div>`;
};

const renderTherapyModalContent = (item) => `
    <div class="card-header"><h3>${item.title}</h3></div>
    <div class="card-content card-prose structured-content">${item.content}</div>`;

const renderZangFuCard = (item) => `
    <div class="meridian-card" data-id="${item.id}">
        <span class="meridian-card-color-bar" style="background-color: var(--el-${item.color});"></span>
        <div class="p-4">
            <h4 class="font-playfair font-bold text-lg" style="color: var(--el-${item.color});">Padrões de ${item.name}</h4>
        </div>
    </div>`;

const renderZangFuModalContent = (item) => {
    const patternsWithContent = item.patterns.map(p => ({
        title: p.name,
        content: `
            <div class="space-y-3 text-sm">
                <div><strong class="text-primary-dark">Sintomas Chave:</strong><p class="text-gray-600 !mb-0">${p.symptoms}</p></div>
                <div><strong class="text-primary-dark">Língua:</strong><p class="text-gray-600 !mb-0">${p.tongue}</p></div>
                <div><strong class="text-primary-dark">Pulso:</strong><p class="text-gray-600 !mb-0">${p.pulse}</p></div>
                <div><strong class="text-primary-dark">Princípio de Tratamento:</strong><p class="text-gray-600 !mb-0">${p.treatmentPrinciple}</p></div>
            </div>
        `
    }));

    return `
    <div class="card-header">
        <span class="w-4 h-4 rounded-full mr-3 shrink-0" style="background-color: var(--el-${item.color});"></span>
        <h3>Padrões de ${item.name}</h3>
    </div>
    <div class="card-content">
        <div class="accordion-container">${createAccordionHTML(patternsWithContent, `modal-zangfu-${item.id}`)}</div>
    </div>`;
};

const renderAnatomyCard = (item) => `
    <div class="meridian-card p-4 flex items-center justify-center text-center h-full" data-id="${item.id}">
        <h4 class="font-playfair font-bold text-lg text-primary">${item.title}</h4>
    </div>`;

const renderAnatomyModalContent = (item) => `
    <div class="card-header"><h3>${item.title}</h3></div>
    <div class="card-content card-prose structured-content">${item.content}</div>`;

const renderQiFlipCard = (item) => `
    <div class="flip-card">
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <h4 class="font-playfair font-bold text-lg text-primary">${item.title}</h4>
            </div>
            <div class="flip-card-back">
                <p class="text-sm">${item.content}</p>
            </div>
        </div>
    </div>`;

const renderMasterFlipCard = (item) => `
    <div class="flip-card">
        <div class="flip-card-inner">
            <div class="flip-card-front" style="background-image: url('${item.image_placeholder}')">
                <div class="master-card-overlay">
                    <h4 class="font-playfair font-bold text-lg text-white">${item.name}</h4>
                    <p class="text-xs text-gray-200">${item.dynasty}</p>
                </div>
            </div>
            <div class="flip-card-back">
                <p class="text-sm">${item.content.replace(/<[^>]*>/g, ' ').substring(0, 250)}...</p>
                <button class="details-btn" data-id="${item.id}">Ver Detalhes</button>
            </div>
        </div>
    </div>`;

const renderMasterModalContent = (item) => `
    <div class="card-header"><h3 class="text-2xl font-playfair font-bold">${item.name}</h3></div>
    <div class="card-content card-prose">
        <img src="${item.image_placeholder}" alt="Retrato de ${item.name}" class="w-full h-48 object-cover rounded-lg mb-4 shadow-md">
        <p class="font-semibold text-gray-500 text-sm !-mt-2 !mb-4">${item.dynasty}</p>
        ${item.content}
    </div>`;


// --- LÓGICA DE DIAGNÓSTICO (SVG MELHORADO) ---
function setupDiagnosisDiagrams() {
    const tongueSVG = document.getElementById('lingua-diagram-svg');
    const tongueInfoBox = document.getElementById('lingua-info-box');
    if (tongueSVG && tongueInfoBox) {
        const areas = tongueSVG.querySelectorAll('.diagram-area-svg');
        areas.forEach(area => {
            area.addEventListener('click', () => {
                areas.forEach(a => a.classList.remove('active'));
                const currentAreaId = area.dataset.area;
                tongueSVG.querySelectorAll(`[data-area="${currentAreaId}"]`).forEach(part => part.classList.add('active'));
                
                const info = linguaData[currentAreaId];
                if (info) {
                    tongueInfoBox.innerHTML = `
                        <div class="text-left">
                            <h4 class="font-playfair font-bold text-lg text-primary mb-2">${info.title}</h4>
                            <p class="text-sm text-gray-600">${info.info}</p>
                        </div>`;
                }
            });
        });
    }

    const pulseSVG = document.getElementById('pulso-diagram-svg');
    const pulseInfoBox = document.getElementById('pulso-info-box');
    if (pulseSVG && pulseInfoBox) {
        const positions = pulseSVG.querySelectorAll('.pulse-pos-circle');
        positions.forEach(pos => {
            pos.addEventListener('click', () => {
                positions.forEach(p => p.classList.remove('active'));
                pos.classList.add('active');
                const positionId = pos.dataset.pos;
                const info = pulsePositionData[positionId];
                 if (info) {
                    pulseInfoBox.innerHTML = `
                        <div class="text-left w-full">
                            <h4 class="font-playfair font-bold text-lg text-primary mb-3">${info.title}</h4>
                            <div class="text-sm">
                                <strong class="font-semibold text-gray-700">Órgãos:</strong>
                                <p class="text-gray-600">${info.organs}</p>
                            </div>
                        </div>`;
                }
            });
        });
    }
}

function setupDiagnosisAccordion() {
    const container = document.getElementById('diagnosis-accordion-container');
    if(!container) return;
    
    const perguntasContent = `<div id="perguntas-accordion-inner" class="accordion-container"></div>`;
    const pulseTypesContent = `<div id="pulse-list-container-inner" class="accordion-container"></div>`;
    
    const diagnosisData = [ 
        { title: 'As 10+1 Perguntas', content: perguntasContent }, 
        { title: 'Tipos de Pulso Comuns', content: pulseTypesContent } 
    ];
    
    container.innerHTML = createAccordionHTML(diagnosisData, 'diagnosis-sub');
    initializeAccordion(container);

    const perguntasContainer = document.getElementById('perguntas-accordion-inner');
    if(perguntasContainer) {
        perguntasContainer.innerHTML = createAccordionHTML(dezPerguntasData, 'perguntas');
        initializeAccordion(perguntasContainer);
    }
    
    const pulsoContainer = document.getElementById('pulse-list-container-inner');
    if(pulsoContainer) {
        const pulseTypes = pulseTypeData;
        pulsoContainer.innerHTML = createAccordionHTML(pulseTypes, 'pulse-list');
        initializeAccordion(pulsoContainer);
    }
}

// --- LÓGICA DOS 5 ELEMENTOS (SVG Interativo Profissional) ---
function initializeFiveElements() {
    const svg = document.getElementById('five-elements-svg');
    if (!svg) return;

    const elementDetailsContainer = document.getElementById('element-details-container');
    const cycleInfoBox = document.getElementById('cycle-info-box');
    const btnGeracao = document.getElementById('btn-geracao');
    const btnControlo = document.getElementById('btn-controlo');
    
    let currentCycle = 'geracao';
    let currentElement = 'madeira';

    const cycleInfo = {
        geracao: { title: 'Ciclo de Geração (Sheng)', description: 'Este ciclo representa a nutrição e o apoio. Cada elemento é a "mãe" do seguinte.', color: 'bg-green-100', textColor: 'text-green-800' },
        controlo: { title: 'Ciclo de Controlo (Ke)', description: 'Este ciclo representa o controlo e a restrição, mantendo o equilíbrio do sistema.', color: 'bg-red-100', textColor: 'text-red-800' }
    };
    
    function updateDetails(elementId) {
        currentElement = elementId;
        const elData = fiveElementsData[elementId];
        
        // Update text details
        elementDetailsContainer.innerHTML = `<div class="text-left p-6 rounded-lg border-2" style="border-color: var(--el-${elData.color}); background-color: #fafcff;">
            <h3 class="text-2xl font-playfair font-bold mb-4" style="color: var(--el-${elData.color});">${elData.name}</h3>
            <div class="card-prose">
                <p class="font-semibold text-gray-600 mb-2">Relações no Ciclo de ${currentCycle.charAt(0).toUpperCase() + currentCycle.slice(1)}:</p>
                <p class="text-sm">${elData.relations[currentCycle]}</p>
                <table class="w-full text-sm mt-4"><tbody>${elData.table}</tbody></table>
            </div>
        </div>`;
        
        // Update active element style
        svg.querySelectorAll('.element-node-svg').forEach(node => {
            node.classList.toggle('active', node.dataset.id === elementId);
        });

        // Update active path segment
        svg.querySelectorAll('.cycle-path').forEach(path => path.classList.remove('active'));
        const targetElementId = elData.target[currentCycle];
        const activePathId = `path-${currentCycle}-${elementId}-${targetElementId}`;
        const activePath = document.getElementById(activePathId);
        if (activePath) {
            activePath.classList.add('active');
        }
    }

    function switchCycle(newCycle) {
        currentCycle = newCycle;
        btnGeracao.classList.toggle('active', newCycle === 'geracao');
        btnControlo.classList.toggle('active', newCycle === 'controlo');
        
        const info = cycleInfo[newCycle];
        cycleInfoBox.className = `mb-6 p-4 rounded-lg text-center transition-colors duration-500 ${info.color} ${info.textColor}`;
        cycleInfoBox.innerHTML = `<h4 class="font-bold">${info.title}</h4><p class="text-sm">${info.description}</p>`;
        
        updateDetails(currentElement);
    }

    btnGeracao.addEventListener('click', () => switchCycle('geracao'));
    btnControlo.addEventListener('click', () => switchCycle('controlo'));

    svg.querySelectorAll('.element-node-svg').forEach(node => {
        node.addEventListener('click', () => updateDetails(node.dataset.id));
    });

    // Initial setup
    switchCycle('geracao');
    updateDetails('madeira');
}


function setupGlossary() { 
    const glossaryContainer = document.getElementById('glossary-container'); 
    if (!glossaryContainer) return; 
    const categories = Object.values(glossaryData).reduce((acc, item) => { 
        (acc[item.category] = acc[item.category] || []).push(item); 
        return acc; 
    }, {}); 
    const sortedCategories = Object.keys(categories).sort(); 
    glossaryContainer.innerHTML = sortedCategories.map(category => 
        `<div class="floating-card mb-8">
            <div class="card-header"><h3 class="text-gray-700">${category}</h3></div>
            <div class="card-content grid md:grid-cols-2 gap-x-8 gap-y-6">
                ${categories[category].sort((a, b) => a.term.localeCompare(b.term)).map(item => 
                    `<div><h4 class="font-bold text-lg text-primary-dark">${item.term}</h4><p class="text-gray-600">${item.definition}</p></div>`
                ).join('')}
            </div>
        </div>`
    ).join(''); 
}

function setupDietetics() {
    const foodResultsContainer = document.getElementById('food-results-container');
    const foodAlphaNav = document.getElementById('food-alpha-nav');
    const foodSearchInput = document.getElementById('food-search-input');

    function renderFoodList(foods) {
        const groupedFoods = foods.reduce((acc, food) => {
            const firstLetter = food.name.charAt(0).toUpperCase();
            if (!acc[firstLetter]) acc[firstLetter] = [];
            acc[firstLetter].push(food);
            return acc;
        }, {});
        const letters = Object.keys(groupedFoods).sort();

        if (foodAlphaNav) {
            foodAlphaNav.innerHTML = letters.map(letter => `<a href="#food-letter-${letter}">${letter}</a>`).join('');
        }

        if (foodResultsContainer) {
            foodResultsContainer.innerHTML = letters.map(letter => `
                <h3 id="food-letter-${letter}" class="food-group-header" tabindex="-1">${letter}</h3>
                <div class="food-group-items">
                    ${groupedFoods[letter].map(food => {
                        const itemData = {
                            id: `food-${food.name.replace(/\s+/g, '-')}`,
                            title: food.name,
                            type: 'Alimento',
                            sectionId: 'dietetica'
                        };
                        const isFav = isFavorite(itemData.id);
                        return `
                        <div class="food-item" id="${itemData.id}">
                            <div class="food-item-content">
                                <h4 class="font-bold text-lg text-green-800">${food.name}</h4>
                                <div class="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm mt-2">
                                    <div><strong>Temp:</strong> <span class="font-semibold">${food.temp}</span></div>
                                    <div><strong>Sabor:</strong> <span class="font-semibold">${food.flavor}</span></div>
                                    <div class="col-span-2"><strong>Órgãos:</strong> <span class="font-semibold">${food.organs}</span></div>
                                </div>
                                <p class="text-sm mt-2"><strong>Ações:</strong> ${food.actions}</p>
                            </div>
                            <button class="favorite-toggle-btn ${isFav ? 'active' : ''}" title="Adicionar Alimento aos Favoritos" data-item='${JSON.stringify(itemData)}' data-id="${itemData.id}">
                                <svg class="w-5 h-5"><use href="${isFav ? '#icon-star-filled' : '#icon-star-outline'}"></use></svg>
                            </button>
                        </div>`;
                    }).join('')}
                </div>
            `).join('');
        }
    }

    if (foodSearchInput) {
        renderFoodList(foodData);
        foodSearchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase().trim();
            const headers = foodResultsContainer.querySelectorAll('.food-group-header');
            headers.forEach(header => {
                const groupWrapper = header.nextElementSibling;
                if (!groupWrapper) return;
                const items = groupWrapper.querySelectorAll('.food-item');
                let groupHasVisibleItems = false;
                items.forEach(item => {
                    const foodName = item.querySelector('h4').textContent.toLowerCase();
                    const isVisible = foodName.includes(searchTerm);
                    item.classList.toggle('hidden', !isVisible);
                    if (isVisible) groupHasVisibleItems = true;
                });
                header.style.display = groupHasVisibleItems ? 'block' : 'none';
                groupWrapper.style.display = groupHasVisibleItems ? 'block' : 'none';
            });
        });
    }
}

function setupTabs() {
    const tabContainer = document.querySelector('#diagnostico .floating-card');
    if (!tabContainer) return;

    const tabButtons = tabContainer.querySelectorAll('.tab-button');
    const tabPanels = tabContainer.querySelectorAll('.tab-content-panel');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const targetTab = button.dataset.tab;
            
            tabPanels.forEach(panel => {
                panel.classList.toggle('active', panel.id === `tab-content-${targetTab}`);
            });
        });
    });
}

function generateNavLinks() {
    const navStructure = [
        { id: 'inicio', title: 'Início' },
        { id: 'favoritos', title: 'Favoritos', isBold: true },
        {
            title: 'Fundamentos',
            links: [
                { id: 'yin-yang', title: 'Teoria Yin-Yang' },
                { id: 'substancias-fundamentais', title: 'Substâncias Fundamentais' },
                { id: 'tipos-de-qi', title: 'Tipos de Qi' },
                { id: 'cinco-elementos', title: 'Os 5 Elementos' },
                { id: 'ciclos-de-vida', title: 'Ciclos de Vida' },
                { id: 'meridianos', title: 'Meridianos e Pontos' },
                { id: 'anatomia-energetica', title: 'Anatomia Energética' },
                { id: 'padroes-zang-fu', title: 'Padrões Zang-Fu' },
            ]
        },
        { title: 'Diagnóstico', links: [ { id: 'diagnostico', title: 'Métodos de Diagnóstico' } ] },
        { title: 'Terapêuticas', links: [ { id: 'terapias', title: 'Visão Geral' }, { id: 'dietetica', title: 'Dietética' } ] },
        { title: 'Sabedoria', links: [ { id: 'grandes-mestres', title: 'Grandes Mestres' } ] },
        { id: 'glossario', title: 'Glossário', isBold: true },
    ];

    const generateHtml = (item) => {
        if (item.links) {
            return `<div class="nav-group"><button class="nav-group-header flex items-center justify-between w-full" aria-expanded="false"><span class="flex items-center"><span class="font-semibold">${item.title}</span></span><svg class="w-5 h-5 shrink-0 text-gray-400 chevron"><use href="#icon-chevron-down"></use></svg></button><div class="nav-group-content pl-4 pt-1 space-y-1">${item.links.map(link => `<a href="#${link.id}" class="sidebar-link flex items-center p-2 rounded-lg"><span>${link.title}</span></a>`).join('')}</div></div>`;
        } else {
            const fontWeightClass = item.isBold ? 'font-bold' : '';
            return `<a href="#${item.id}" class="sidebar-link flex items-center p-2 rounded-lg"><span class="${fontWeightClass}">${item.title}</span></a>`;
        }
    };
    const navHtml = navStructure.map(generateHtml).join('');
    allNavHubs.forEach(hub => hub.innerHTML = navHtml);
}

function renderFavoritesSection() {
    const container = document.getElementById('favorites-container');
    if (!container) return;

    if (favorites.length === 0) {
        container.innerHTML = '<p class="text-center text-gray-500">Ainda não adicionou itens aos favoritos. Clique na estrela nos detalhes de um item para o guardar aqui.</p>';
        return;
    }

    container.innerHTML = favorites.map(item => `
        <div class="favorite-item">
            <div class="favorite-item-info" data-id="${item.id}" data-section-id="${item.sectionId}" data-parent-id="${item.parentId || ''}" data-type="${item.type}">
                <h4>${item.title}</h4>
                <span class="result-type-badge ${item.type === 'Ponto' ? 'ponto-badge' : ''}" style="background-color: var(--el-${item.color}, var(--color-primary))">${item.type}</span>
            </div>
            <button class="remove-favorite-btn" data-id="${item.id}" title="Remover dos Favoritos">
                <svg class="w-5 h-5"><use href="#icon-trash"></use></svg>
            </button>
        </div>
    `).join('');
}

const itemTypeMap = {
    'Meridiano': { data: meridianData, renderer: renderMeridianModalContent },
    'Terapia': { data: therapiesData, renderer: renderTherapyModalContent },
    'Anatomia': { data: anatomyData, renderer: renderAnatomyModalContent },
    'Mestre': { data: greatMastersData, renderer: renderMasterModalContent },
    'Padrão Zang-Fu': { data: zangFuPatternsData, renderer: renderZangFuModalContent }
};


// --- PONTO DE ENTRADA DA APLICAÇÃO ---
document.addEventListener('DOMContentLoaded', () => {
    loadFavorites();
    generateNavLinks(); 
    setupNavEventListeners(); // Call the new function to set up listeners
    
    // Setup das secções
    setupYinYangSection();
    setupFlipGrid('qi-cards-container', qiData, renderQiFlipCard);
    createLifeCycleTimeline('female-cycles-timeline', lifeCyclesFemaleData, 'bg-pink-500');
    createLifeCycleTimeline('male-cycles-timeline', lifeCyclesMaleData, 'bg-blue-500');
    setupGlossary();
    setupDietetics();
    renderFavoritesSection();
    
    // Setup das grelhas com zoom
    setupZoomGrid('therapies-grid-container', therapiesData, renderTherapyCard, renderTherapyModalContent, 'Terapia');
    setupZoomGrid('zangfu-grid-container', zangFuPatternsData, renderZangFuCard, renderZangFuModalContent, 'Padrão Zang-Fu');
    setupZoomGrid('anatomy-grid-container', anatomyData, renderAnatomyCard, renderAnatomyModalContent, 'Anatomia');
    setupZoomGrid('meridian-grid-container', meridianData, renderMeridianCard, renderMeridianModalContent, 'Meridiano');

    // Setup da grelha com flip para os Mestres
    setupFlipGrid('masters-grid-container', greatMastersData, renderMasterFlipCard, renderMasterModalContent, 'Mestre');
    
    // Setup do diagnóstico
    setupTabs();
    setupDiagnosisAccordion();
    setupDiagnosisDiagrams();
    
    // Setup dos 5 Elementos
    if (document.getElementById('cinco-elementos')) {
        initializeFiveElements();
    }

    // Animações e inicialização
    document.querySelectorAll('aside .sidebar-link, aside .nav-group').forEach((el, index) => {
        el.style.animationDelay = `${index * 0.07}s`;
    });

    createSearchIndex();
    contentSections = mainContent.querySelectorAll('.content-section');
    showSection('inicio', 'Início');
    updateActiveLink('inicio');
    
    if(loadingScreen) {
        setTimeout(() => {
            loadingScreen.classList.add('hidden');
        }, 1500);
    }

    // --- EVENT LISTENERS GLOBAIS PARA FAVORITOS ---
    document.body.addEventListener('click', (e) => {
        const favButton = e.target.closest('.favorite-toggle-btn');
        if (favButton) {
            const itemData = JSON.parse(favButton.dataset.item);
            toggleFavorite(itemData);
        }
    });

    const favoritesContainer = document.getElementById('favorites-container');
    if(favoritesContainer) {
        favoritesContainer.addEventListener('click', (e) => {
            const favInfoElement = e.target.closest('.favorite-item-info');
            const removeButton = e.target.closest('.remove-favorite-btn');

            if (removeButton) {
                const itemId = removeButton.dataset.id;
                const index = favorites.findIndex(fav => fav.id === itemId);
                if (index > -1) {
                    favorites.splice(index, 1);
                    saveFavorites();
                    renderFavoritesSection();
                }
                return;
            }

            if (favInfoElement) {
                const favItemData = favorites.find(fav => fav.id === favInfoElement.dataset.id);
                if (!favItemData) return;

                const { id, sectionId, parentId, type } = favItemData;
                
                showSection(sectionId, document.querySelector(`a[href="#${sectionId}"] span`).textContent);
                updateActiveLink(sectionId);
                closeMobileMenu();

                if (type === 'Alimento') {
                    setTimeout(() => {
                        const foodElement = document.getElementById(id);
                        if (foodElement) {
                            foodElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                            foodElement.classList.add('highlight');
                            setTimeout(() => foodElement.classList.remove('highlight'), 2000);
                        }
                    }, 100);
                } else if (type === 'Ponto') {
                    const parentMeridian = meridianData.find(m => m.id === parentId);
                    if (parentMeridian) {
                        const contentHTML = renderMeridianModalContent(parentMeridian);
                        const parentItemDataForFavorite = {
                            id: `Meridiano-${parentMeridian.id}`,
                            title: parentMeridian.name,
                            type: 'Meridiano',
                            color: parentMeridian.color,
                            sectionId: 'meridianos'
                        };
                        openContentModal(contentHTML, parentItemDataForFavorite);
                    }
                } else {
                    const mapping = itemTypeMap[type];
                    if (mapping) {
                        const realId = id.split('-').slice(1).join('-');
                        const itemInfo = mapping.data.find(d => d.id === realId);
                        if (itemInfo) {
                            const contentHTML = mapping.renderer(itemInfo);
                            openContentModal(contentHTML, favItemData);
                        }
                    }
                }
            }
        });
    }
});
