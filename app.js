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
const mainContent = document.getElementById('main-content');
let contentSections = [];

// Elementos de Navegação Desktop
const desktopNavHub = document.getElementById('desktop-navigation-hub');

// Elementos de Navegação Móvel (Sidebar)
const openMenuBtn = document.getElementById('open-menu-btn');
const closeMenuBtn = document.getElementById('close-menu-btn');
const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
const mobileNavHub = document.getElementById('navigation-hub');

// Elementos Comuns
const currentSectionTitle = document.getElementById('current-section-title');
const contentArea = document.getElementById('main-content-area');
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

// Elementos do Modal de Conteúdo
const contentModal = document.getElementById('content-modal');
const contentModalContent = document.getElementById('content-modal-content');
const contentModalCloseBtn = document.getElementById('content-modal-close-btn');
const contentModalOverlay = document.getElementById('content-modal-overlay');

// --- LÓGICA DE NAVEGAÇÃO RESPONSIVA E PESQUISA ---
function openMobileMenu() { document.body.classList.add('mobile-menu-open'); }
function closeMobileMenu() { document.body.classList.remove('mobile-menu-open'); }
openMenuBtn.addEventListener('click', openMobileMenu);
closeMenuBtn.addEventListener('click', closeMobileMenu);
mobileMenuOverlay.addEventListener('click', closeMobileMenu);

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
function openContentModal(htmlContent) {
    contentModalContent.innerHTML = htmlContent;
    document.body.classList.add('content-modal-open');
    
    const modalAccordions = contentModalContent.querySelectorAll('.accordion-container');
    modalAccordions.forEach(accordion => initializeAccordion(accordion));
}
function closeContentModal() {
    document.body.classList.remove('content-modal-open');
}
contentModalCloseBtn.addEventListener('click', closeContentModal);
contentModalOverlay.addEventListener('click', closeContentModal);

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
allNavHubs.forEach(hub => {
    hub.addEventListener('click', (e) => {
        const link = e.target.closest('a.sidebar-link');
        const groupHeader = e.target.closest('.nav-group-header');
        if (link) {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const linkText = link.querySelector('span').textContent;
            showSection(targetId, linkText);
            updateActiveLink(targetId);
            closeMobileMenu();
        }
        if (groupHeader) {
            groupHeader.classList.toggle('open');
            groupHeader.setAttribute('aria-expanded', groupHeader.classList.contains('open'));
        }
    });
});

// --- LÓGICA DE PESQUISA ---
function createSearchIndex() {
    meridianData.forEach(m => m.points.forEach(p => searchIndex.push({ title: `${p.id} - ${p.name}`, content: p.functions, type: 'Ponto', color: m.element, sectionId: 'meridianos' })));
    Object.values(glossaryData).forEach(i => searchIndex.push({ title: i.term, content: i.definition, type: 'Glossário', color: 'primary', sectionId: 'glossario' }));
    foodData.forEach(f => searchIndex.push({ title: f.name, content: `Ações: ${f.actions}`, type: 'Alimento', color: 'earth', sectionId: 'dietetica' }));
    zangFuPatternsData.forEach(o => o.patterns.forEach(p => searchIndex.push({ title: p.name, content: p.symptoms, type: 'Padrão Zang-Fu', color: o.color, sectionId: 'padroes-zang-fu' })));
    therapiesData.forEach(t => searchIndex.push({ title: t.title, content: t.content.replace(/<[^>]*>/g, ' ').substring(0, 150) + '...', type: 'Terapia', color: 'secondary', sectionId: 'terapias' })));
    greatMastersData.forEach(m => searchIndex.push({ title: m.name, content: m.content.replace(/<[^>]*>/g, ' ').substring(0, 150) + '...', type: 'Mestre', color: 'water', sectionId: 'grandes-mestres' })));
}
function performSearch(query) {
    if (query.length < 2) {
        searchResultsContainer.innerHTML = '<p class="text-center text-gray-500">Escreva pelo menos 2 letras para pesquisar.</p>';
        return;
    }
    const lowerCaseQuery = query.toLowerCase();
    const results = searchIndex.filter(item => 
        item.title.toLowerCase().includes(lowerCaseQuery) || 
        item.content.toLowerCase().includes(lowerCaseQuery)
    );
    renderSearchResults(results);
}
function renderSearchResults(results) {
    if (results.length === 0) {
        searchResultsContainer.innerHTML = '<p class="text-center text-gray-500">Nenhum resultado encontrado.</p>';
        return;
    }
    searchResultsContainer.innerHTML = results.map(item => `
        <div class="search-result-item" data-section-id="${item.sectionId}" data-item-title="${item.title}">
            <h4>${item.title}</h4>
            <p>${item.content}</p>
            <span class="result-type-badge" style="background-color: var(--el-${item.color}, var(--color-primary))">${item.type}</span>
        </div>
    `).join('');
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

// *** FIX: Rewritten accordion logic to be more robust and prevent event loops. ***
function initializeAccordion(container) {
    if (!container) return;
    
    // Use :scope to select only direct children, preventing nested accordions from interfering.
    const items = container.querySelectorAll(':scope > .accordion-item');

    items.forEach(item => {
        const button = item.querySelector('.accordion-button');
        if (button) {
            // Remove any old listeners to be safe, though this shouldn't be necessary with the new structure.
            // This is a defensive programming measure.
            button.replaceWith(button.cloneNode(true));
            const newButton = item.querySelector('.accordion-button');

            // Add a direct event listener to each button. This avoids event delegation issues.
            newButton.addEventListener('click', () => {
                const isExpanded = newButton.getAttribute('aria-expanded') === 'true';

                // First, close all other items within this specific accordion container.
                items.forEach(otherItem => {
                    if (otherItem !== item) {
                        const otherButton = otherItem.querySelector('.accordion-button');
                        if (otherButton) {
                            otherButton.setAttribute('aria-expanded', 'false');
                        }
                    }
                });

                // Then, toggle the state of the button that was actually clicked.
                newButton.setAttribute('aria-expanded', String(!isExpanded));
            });
        }
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
    const svg = document.getElementById('yin-yang-loader-svg').innerHTML;
    container.innerHTML = `
        <div class="card-header"><h3>${yinYangData.title}</h3></div>
        <div class="card-content">
            <div class="grid lg:grid-cols-2 gap-8 items-center">
                <div class="p-4"><svg viewBox="0 0 200 200" class="w-full max-w-xs mx-auto yin-yang-svg">${svg}</svg></div>
                <div class="card-prose">${yinYangData.content}</div>
            </div>
            <div class="mt-8 grid md:grid-cols-2 gap-6">
                <div class="yin-card"><h4 class="font-bold text-xl mb-3 text-center text-gray-100">YIN (阴)</h4><ul class="list-disc list-inside space-y-2 text-gray-300"><li>Noite, Lua, Escuro, Frio</li><li>Repouso, Passivo, Interior, Baixo</li><li>Substância, Matéria, Estrutura</li></ul></div>
                <div class="yang-card"><h4 class="font-bold text-xl mb-3 text-center text-gray-800">YANG (阳)</h4><ul class="list-disc list-inside space-y-2 text-gray-600"><li>Dia, Sol, Luz, Calor</li><li>Atividade, Ativo, Exterior, Cima</li><li>Função, Energia, Movimento</li></ul></div>
            </div>
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

function setupZoomGrid(containerId, data, cardRenderer, modalContentRenderer) {
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
            openContentModal(contentHTML);
        }
    });
}

function setupFlipGrid(containerId, data, cardRenderer) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = data.map(item => cardRenderer(item)).join('');

    container.addEventListener('click', (e) => {
        const card = e.target.closest('.flip-card');
        if (!card) return;
        
        if (e.target.closest('.details-btn')) {
            const masterId = e.target.closest('.details-btn').dataset.id;
            const masterInfo = greatMastersData.find(m => m.id === masterId);
            if (masterInfo) {
                openContentModal(renderMasterModalContent(masterInfo));
            }
            return;
        }
        
        card.classList.toggle('flipped');
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

const renderMeridianModalContent = (item) => `
    <div class="card-header">
        <span class="w-4 h-4 rounded-full mr-3 shrink-0" style="background-color: var(--el-${item.color});"></span>
        <h3>${item.name}</h3>
    </div>
    <div class="card-content card-prose text-sm">
        <div class="grid md:grid-cols-2 gap-x-8">
            <div><h4 class="font-bold !text-base !mb-2 !mt-0">Funções Principais</h4><p class="text-gray-600">${item.functions}</p></div>
            <div><h4 class="font-bold !text-base !mb-2 !mt-0">Sinais de Desequilíbrio</h4><p class="text-gray-600">${item.imbalances}</p></div>
        </div>
        <h4 class="font-bold !text-base !mb-2">Pontos Especiais</h4>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-2 text-xs p-3 bg-gray-50 rounded-md">
            <div><strong>Fonte (Yuan):</strong> ${item.yuan_source}</div>
            <div><strong>Conexão (Luo):</strong> ${item.luo_connecting}</div>
            <div><strong>Fenda (Xi):</strong> ${item.xi_cleft}</div>
        </div>
        <h4 class="font-bold !text-base !mb-2">Pontos Shu Antigos</h4>
        <div class="overflow-x-auto"><table class="w-full text-left !text-xs"><thead class="bg-gray-100"><tr><th class="p-2 font-semibold">Tipo</th><th class="p-2 font-semibold">Elemento</th><th class="p-2 font-semibold">Ponto</th><th class="p-2 font-semibold">Funções</th></tr></thead><tbody>${item.five_shu.map(p => `<tr class="border-b"><td class="p-2">${p.type}</td><td class="p-2">${p.element}</td><td class="p-2 font-bold">${p.point}</td><td class="p-2">${p.functions}</td></tr>`).join('')}</tbody></table></div>
        <h4 class="font-bold !text-base !mb-2">Lista Completa de Pontos</h4>
        <div class="space-y-3 max-h-80 overflow-y-auto pr-2">${item.points.map(p => `<div class="p-2 border-l-2 border-gray-200 hover:bg-gray-50"><strong class="text-primary-dark">${p.id} - ${p.name} (${p.character}) - ${p.pt_name}</strong><p class="text-gray-600 !mb-0">${p.functions}</p></div>`).join('')}</div>
    </div>`;

const renderTherapyCard = (item) => {
    const regex = /(.+?)\s\((.+?)(?:\s-\s(.+?))?\)/;
    const match = item.title.match(regex);
    let titleHTML, pinyinHTML = '';
    if (match) {
        const [, pt, ch, pinyin] = match;
        titleHTML = `<div class="text-2xl font-chinese">${ch}</div><div class="text-xl font-playfair my-1">${pt}</div>`;
        if (pinyin) pinyinHTML = `<div class="text-sm text-gray-500 font-mono">(${pinyin})</div>`;
        else if (ch === '气功' || ch === '太极拳') pinyinHTML = `<div class="text-sm text-gray-500 font-mono">(${ch === '气功' ? 'Qìgōng' : 'Tàijí quán'})</div>`;
    } else {
        titleHTML = `<div class="text-xl font-playfair my-1">${item.title}</div>`;
    }
    return `
    <div class="meridian-card text-center p-4 flex flex-col justify-center items-center h-full" data-id="${item.id}">
        ${titleHTML}
        ${pinyinHTML}
    </div>`;
};

const renderTherapyModalContent = (item) => `
    <div class="card-header"><h3>${item.title}</h3></div>
    <div class="card-content card-prose">${item.content}</div>`;

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
    <div class="card-content card-prose">${item.content}</div>`;

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


// --- LÓGICA DE DIAGNÓSTICO ---
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
                            <div class="grid grid-cols-2 gap-4 text-sm">
                                <div>
                                    <strong class="font-semibold text-gray-700">Pulso Esquerdo:</strong>
                                    <p class="text-gray-600">${info.left}</p>
                                </div>
                                <div>
                                    <strong class="font-semibold text-gray-700">Pulso Direito:</strong>
                                    <p class="text-gray-600">${info.right}</p>
                                </div>
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

// --- LÓGICA DOS 5 ELEMENTOS (REFINADA) ---
const elementDiagramSVG = document.getElementById('element-diagram-svg');
const elementDetailsContainer = document.getElementById('element-details-container');
const pathsContainer = document.getElementById('cycle-paths-container');
const spheresContainer = document.getElementById('element-spheres-container');
const btnGeracao = document.getElementById('btn-geracao');
const btnControlo = document.getElementById('btn-controlo');
const cycleInfoBox = document.getElementById('cycle-info-box');
const defaultColor = '#a8a29e';
let currentCycle = 'geracao';
let selectedElementId = null;
const cycleInfo = { geracao: { title: 'Ciclo de Geração (Sheng)', description: 'Este ciclo representa a nutrição e o apoio. Cada elemento é a "mãe" do seguinte, nutrindo-o e promovendo o seu crescimento.', color: 'bg-green-100', textColor: 'text-green-800' }, controlo: { title: 'Ciclo de Controlo (Ke)', description: 'Este ciclo representa o controlo e a restrição, garantindo que nenhum elemento se torna excessivo e mantendo o equilíbrio do sistema.', color: 'bg-red-100', textColor: 'text-red-800' } };
const elementCoords = { madeira: { x: 150, y: 45 }, fogo: { x: 255, y: 125 }, terra: { x: 208, y: 255 }, metal: { x: 92, y: 255 }, agua: { x: 45, y: 125 } };
const SPHERE_RADIUS = 32;

function getArrowPoints(el1, el2, radius) {
    const p1 = elementCoords[el1];
    const p2 = elementCoords[el2];
    const angle = Math.atan2(p2.y - p1.y, p2.x - p1.x);
    return {
        start: {
            x: p1.x + radius * Math.cos(angle),
            y: p1.y + radius * Math.sin(angle)
        },
        end: {
            x: p2.x - radius * Math.cos(angle),
            y: p2.y - radius * Math.sin(angle)
        }
    };
}

function getCurvePath(el1, el2, radius, bend = 0.5) {
    const points = getArrowPoints(el1, el2, radius);
    const midX = (points.start.x + points.end.x) / 2;
    const midY = (points.start.y + points.end.y) / 2;
    const dx = points.end.x - points.start.x;
    const dy = points.end.y - points.start.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const controlX = midX - bend * dy * (distance / 200);
    const controlY = midY + bend * dx * (distance / 200);
    return `M ${points.start.x},${points.start.y} Q ${controlX},${controlY} ${points.end.x},${points.end.y}`;
}

const cyclePaths = {
    geracao: [
        { id: 'agua-madeira', d: getCurvePath('agua', 'madeira', SPHERE_RADIUS) },
        { id: 'madeira-fogo', d: getCurvePath('madeira', 'fogo', SPHERE_RADIUS) },
        { id: 'fogo-terra', d: getCurvePath('fogo', 'terra', SPHERE_RADIUS) },
        { id: 'terra-metal', d: getCurvePath('terra', 'metal', SPHERE_RADIUS) },
        { id: 'metal-agua', d: getCurvePath('metal', 'agua', SPHERE_RADIUS) }
    ],
    controlo: [
        { id: 'madeira-terra', d: `M ${getArrowPoints('madeira', 'terra', SPHERE_RADIUS).start.x},${getArrowPoints('madeira', 'terra', SPHERE_RADIUS).start.y} L ${getArrowPoints('madeira', 'terra', SPHERE_RADIUS).end.x},${getArrowPoints('madeira', 'terra', SPHERE_RADIUS).end.y}` },
        { id: 'terra-agua', d: `M ${getArrowPoints('terra', 'agua', SPHERE_RADIUS).start.x},${getArrowPoints('terra', 'agua', SPHERE_RADIUS).start.y} L ${getArrowPoints('terra', 'agua', SPHERE_RADIUS).end.x},${getArrowPoints('terra', 'agua', SPHERE_RADIUS).end.y}` },
        { id: 'agua-fogo', d: `M ${getArrowPoints('agua', 'fogo', SPHERE_RADIUS).start.x},${getArrowPoints('agua', 'fogo', SPHERE_RADIUS).start.y} L ${getArrowPoints('agua', 'fogo', SPHERE_RADIUS).end.x},${getArrowPoints('agua', 'fogo', SPHERE_RADIUS).end.y}` },
        { id: 'fogo-metal', d: `M ${getArrowPoints('fogo', 'metal', SPHERE_RADIUS).start.x},${getArrowPoints('fogo', 'metal', SPHERE_RADIUS).start.y} L ${getArrowPoints('fogo', 'metal', SPHERE_RADIUS).end.x},${getArrowPoints('fogo', 'metal', SPHERE_RADIUS).end.y}` },
        { id: 'metal-madeira', d: `M ${getArrowPoints('metal', 'madeira', SPHERE_RADIUS).start.x},${getArrowPoints('metal', 'madeira', SPHERE_RADIUS).start.y} L ${getArrowPoints('metal', 'madeira', SPHERE_RADIUS).end.x},${getArrowPoints('metal', 'madeira', SPHERE_RADIUS).end.y}` }
    ]
};

function setup5ElementsDiagram() { 
    if (!spheresContainer) return; 
    spheresContainer.innerHTML = Object.keys(fiveElementsData).map(key => { 
        const el = fiveElementsData[key]; 
        const { x, y } = elementCoords[key]; 
        return `<g id="${key}" class="element-sphere">
            <circle class="sphere-shadow" cx="${x}" cy="${y}" r="${SPHERE_RADIUS}" />
            <circle class="sphere-circle" cx="${x}" cy="${y}" r="${SPHERE_RADIUS}" fill="var(--el-${el.color})"/>
            <text class="sphere-text" x="${x}" y="${y + 5}">${el.name}</text>
        </g>`; 
    }).join(''); 
}
function renderCyclePaths() { if(!pathsContainer) return; pathsContainer.innerHTML = cyclePaths[currentCycle].map(p => `<path id="${p.id}" class="cycle-path" d="${p.d}" stroke="${defaultColor}" stroke-width="2.5" fill="none" marker-end="url(#arrow)"/>`).join(''); }
function update5ElementsUI() { if(!elementDiagramSVG) return; elementDiagramSVG.querySelectorAll('.element-sphere').forEach(g => g.classList.remove('active')); document.querySelectorAll('.arrow-marker').forEach(marker => marker.style.fill = defaultColor); if (pathsContainer) { pathsContainer.querySelectorAll('.cycle-path').forEach(path => { path.style.stroke = defaultColor; path.style.strokeWidth = '2.5'; path.classList.remove('draw'); }); } if (selectedElementId) { const elData = fiveElementsData[selectedElementId]; const selectedGroup = document.getElementById(selectedElementId); if (selectedGroup) selectedGroup.classList.add('active'); const targetElementId = elData.target[currentCycle]; const activePathId = `${selectedElementId}-${targetElementId}`; const activePath = document.getElementById(activePathId); if (activePath) { const color = `var(--el-${elData.color})`; activePath.style.stroke = color; activePath.style.color = color; activePath.style.strokeWidth = '4'; activePath.classList.add('draw'); const marker = document.querySelector(`#arrow path`); if (marker) marker.style.fill = color; } elementDetailsContainer.innerHTML = `<div class="text-left p-6 rounded-lg border-2" style="border-color: var(--el-${elData.color}); background-color: #fafcff;"><h3 class="text-2xl font-playfair font-bold mb-4" style="color: var(--el-${elData.color});">${elData.name}</h3><div class="card-prose"><p class="font-semibold text-gray-600 mb-2">Relações no Ciclo de ${currentCycle.charAt(0).toUpperCase() + currentCycle.slice(1)}:</p><p class="text-sm">${elData.relations[currentCycle]}</p><table class="w-full text-sm mt-4"><tbody>${elData.table}</tbody></table></div></div>`; } else { elementDetailsContainer.innerHTML = '<div class="flex items-center justify-center h-full text-center text-gray-500 p-4 bg-gray-50 rounded-lg"><p>Clique num elemento do diagrama para ver as suas correspondências detalhadas e a sua relação no ciclo atual.</p></div>'; } }
function switchCycle(cycle) { currentCycle = cycle; const info = cycleInfo[cycle]; if(cycleInfoBox) { cycleInfoBox.className = `mb-6 p-4 rounded-lg text-center transition-colors duration-500 ${info.color} ${info.textColor}`; cycleInfoBox.innerHTML = `<h4 class="font-bold">${info.title}</h4><p class="text-sm">${info.description}</p>`; } if(btnGeracao) btnGeracao.classList.toggle('active', cycle === 'geracao'); if(btnControlo) btnControlo.classList.toggle('active', cycle === 'controlo'); renderCyclePaths(); update5ElementsUI(); }
if(btnGeracao) btnGeracao.addEventListener('click', () => switchCycle('geracao'));
if(btnControlo) btnControlo.addEventListener('click', () => switchCycle('controlo'));
if (elementDiagramSVG) { elementDiagramSVG.addEventListener('click', (e) => { const sphereGroup = e.target.closest('.element-sphere'); if (sphereGroup) { selectedElementId = sphereGroup.id; update5ElementsUI(); } }); }

function setupGlossary() { const glossaryContainer = document.getElementById('glossary-container'); if (!glossaryContainer) return; const categories = Object.values(glossaryData).reduce((acc, item) => { (acc[item.category] = acc[item.category] || []).push(item); return acc; }, {}); const sortedCategories = Object.keys(categories).sort(); glossaryContainer.innerHTML = sortedCategories.map(category => `<div class="floating-card mb-8"><div class="card-header"><h3 class="text-gray-700">${category}</h3></div><div class="card-content grid md:grid-cols-2 gap-x-8 gap-y-6">${categories[category].sort((a, b) => a.term.localeCompare(b.term)).map(item => `<div><h4 class="font-bold text-lg">${item.term}</h4><p class="text-gray-600">${item.definition}</p></div>`).join('')}</div></div>`).join(''); }

function setupDietetics() { const foodSearchInput = document.getElementById('food-search-input'); const foodResultsContainer = document.getElementById('food-results-container'); const foodAlphaNav = document.getElementById('food-alpha-nav'); function renderFoodList(foods) { const groupedFoods = foods.reduce((acc, food) => { const firstLetter = food.name.charAt(0).toUpperCase(); if (!acc[firstLetter]) acc[firstLetter] = []; acc[firstLetter].push(food); return acc; }, {}); const letters = Object.keys(groupedFoods).sort(); if (foodAlphaNav) foodAlphaNav.innerHTML = letters.map(letter => `<a href="#food-letter-${letter}">${letter}</a>`).join(''); if (foodResultsContainer) { foodResultsContainer.innerHTML = letters.map(letter => `<h3 id="food-letter-${letter}" class="food-group-header" tabindex="-1">${letter}</h3><div class="food-group-items">${groupedFoods[letter].map(food => `<div class="food-item floating-card p-4 mb-3"><h4 class="font-bold text-lg text-green-800">${food.name}</h4><div class="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm mt-2"><div><strong>Temp:</strong> <span class="font-semibold">${food.temp}</span></div><div><strong>Sabor:</strong> <span class="font-semibold">${food.flavor}</span></div><div class="col-span-2"><strong>Órgãos:</strong> <span class="font-semibold">${food.organs}</span></div></div><p class="text-sm mt-2"><strong>Ações:</strong> ${food.actions}</p></div>`).join('')}</div>`).join(''); } } if (foodSearchInput) { renderFoodList(foodData); foodSearchInput.addEventListener('input', (e) => { const searchTerm = e.target.value.toLowerCase().trim(); const headers = foodResultsContainer.querySelectorAll('.food-group-header'); headers.forEach(header => { const groupWrapper = header.nextElementSibling; if (!groupWrapper) return; const items = groupWrapper.querySelectorAll('.food-item'); let groupHasVisibleItems = false; items.forEach(item => { const foodName = item.querySelector('h4').textContent.toLowerCase(); const isVisible = foodName.includes(searchTerm); item.classList.toggle('hidden', !isVisible); if (isVisible) groupHasVisibleItems = true; }); header.style.display = groupHasVisibleItems ? 'block' : 'none'; groupWrapper.style.display = groupHasVisibleItems ? 'block' : 'none'; }); }); } }

// --- ESTRUTURA DE NAVEGAÇÃO ---
const navStructure = [
    { id: 'inicio', title: 'Início', icon: 'icon-home', isCategory: false },
    {
        title: 'Fundamentos', icon: 'icon-book-open', isCategory: true,
        links: [
            { id: 'yin-yang', title: 'Teoria Yin-Yang', icon: 'icon-yin-yang' },
            { id: 'substancias-fundamentais', title: 'Substâncias Fundamentais', icon: 'icon-atom' },
            { id: 'tipos-de-qi', title: 'Tipos de Qi', icon: 'icon-wind' },
            { id: 'cinco-elementos', title: 'Os 5 Elementos', icon: 'icon-star' },
            { id: 'ciclos-de-vida', title: 'Ciclos de Vida', icon: 'icon-refresh-cw' },
            { id: 'meridianos', title: 'Meridianos e Pontos', icon: 'icon-git-branch' },
            { id: 'anatomia-energetica', title: 'Anatomia Energética', icon: 'icon-body' },
            { id: 'padroes-zang-fu', title: 'Padrões Zang-Fu', icon: 'icon-clipboard-heart' },
        ]
    },
    { title: 'Diagnóstico', icon: 'icon-stethoscope', isCategory: true, links: [ { id: 'diagnostico', title: 'Métodos de Diagnóstico', icon: 'icon-stethoscope' } ] },
    { title: 'Terapêuticas', icon: 'icon-lotus', isCategory: true, links: [ { id: 'terapias', title: 'Visão Geral', icon: 'icon-lotus' }, { id: 'dietetica', title: 'Dietética', icon: 'icon-soup' } ] },
    { title: 'Sabedoria', icon: 'icon-users', isCategory: true, links: [ { id: 'grandes-mestres', title: 'Grandes Mestres', icon: 'icon-scroll' } ] },
    { id: 'glossario', title: 'Glossário', icon: 'icon-book-open', isCategory: true, links: [{ id: 'glossario', title: 'Glossário', icon: 'icon-book-open' }] },
];

function generateNavLinks() {
    const generateHtml = (item) => {
        if (item.links && item.links.length > 1) { // Render as a group if more than one link
            return `<div class="nav-group"><button class="nav-group-header flex items-center justify-between w-full" aria-expanded="false"><span class="flex items-center"><svg class="w-5 h-5 mr-3 text-gray-500"><use href="#${item.icon}"></use></svg><span class="font-semibold">${item.title}</span></span><svg class="w-5 h-5 shrink-0 text-gray-400 chevron"><use href="#icon-chevron-down"></use></svg></button><div class="nav-group-content pl-4 pt-1 space-y-1">${item.links.map(link => `<a href="#${link.id}" class="sidebar-link flex items-center p-2 rounded-lg"><svg class="w-5 h-5 mr-3 text-gray-500"><use href="#${link.icon}"></use></svg><span>${link.title}</span></a>`).join('')}</div></div>`;
        } else {
            // Render as a single link if it's a category with one link or a standalone item
            const targetId = item.id || (item.links && item.links[0].id);
            const targetTitle = item.title;
            const targetIcon = item.icon;
            return `<a href="#${targetId}" class="sidebar-link flex items-center p-2 rounded-lg"><svg class="w-5 h-5 mr-3 text-gray-500"><use href="#${targetIcon}"></use></svg><span>${targetTitle}</span></a>`;
        }
    };
    const navHtml = navStructure.map(generateHtml).join('');
    allNavHubs.forEach(hub => hub.innerHTML = navHtml);
}

// --- PONTO DE ENTRADA DA APLICAÇÃO ---
document.addEventListener('DOMContentLoaded', () => {
    generateNavLinks(); 
    
    // Setup das secções
    setupYinYangSection();
    setupFlipGrid('qi-cards-container', qiData, renderQiFlipCard);
    createLifeCycleTimeline('female-cycles-timeline', lifeCyclesFemaleData, 'bg-pink-500');
    createLifeCycleTimeline('male-cycles-timeline', lifeCyclesMaleData, 'bg-blue-500');
    setupGlossary();
    setupDietetics();
    
    // Setup das grelhas com zoom
    setupZoomGrid('meridian-grid-container', meridianData, renderMeridianCard, renderMeridianModalContent);
    setupZoomGrid('therapies-grid-container', therapiesData, renderTherapyCard, renderTherapyModalContent);
    setupZoomGrid('zangfu-grid-container', zangFuPatternsData, renderZangFuCard, renderZangFuModalContent);
    setupZoomGrid('anatomy-grid-container', anatomyData, renderAnatomyCard, renderAnatomyModalContent);

    // Setup da grelha com flip para os Mestres
    setupFlipGrid('masters-grid-container', greatMastersData, renderMasterFlipCard);
    
    // Setup do diagnóstico
    setupDiagnosisAccordion();
    setupDiagnosisDiagrams();
    
    // Setup dos 5 Elementos
    if (document.getElementById('cinco-elementos')) {
        setup5ElementsDiagram();
        switchCycle('geracao');
    }

    // Animações e inicialização
    document.querySelectorAll('aside .sidebar-link, aside .nav-group').forEach((el, index) => {
        el.style.animationDelay = `${index * 0.07}s`;
    });

    createSearchIndex();
    contentSections = mainContent.querySelectorAll('.content-section');
    
    // Initial view setup
    showSection('inicio', 'Início');
    updateActiveLink('inicio');
    
    if(loadingScreen) {
        setTimeout(() => {
            loadingScreen.classList.add('hidden');
        }, 1500);
    }
});
