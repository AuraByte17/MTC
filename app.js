// --- Importa todos os dados de data.js ---
import { 
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
    pulseData,
    therapiesData // Importa os novos dados de terapias
} from './data.js';

// --- Seleção de Elementos DOM ---
const openMenuBtn = document.getElementById('open-menu-btn');
const closeMenuBtn = document.getElementById('close-menu-btn');
const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
const mobileNavHub = document.getElementById('navigation-hub');
const desktopNavHub = document.getElementById('desktop-navigation-hub');
const currentSectionTitle = document.getElementById('current-section-title');
const contentArea = document.getElementById('main-content-area');
const mainContent = document.getElementById('main-content');
let contentSections = []; // Será preenchido dinamicamente

const allNavHubs = [mobileNavHub, desktopNavHub];

// Elementos da Pesquisa Global
const openSearchMobileBtn = document.getElementById('open-search-btn-mobile');
const desktopSearchInput = document.getElementById('desktop-search-input');
const searchModalContainer = document.getElementById('search-modal-container');
const searchOverlay = document.getElementById('search-overlay');
const closeSearchBtn = document.getElementById('close-search-btn');
const globalSearchInput = document.getElementById('global-search-input');
const searchResultsContainer = document.getElementById('search-results-container');
let searchIndex = []; // Onde todos os dados pesquisáveis serão guardados

// --- LÓGICA DE NAVEGAÇÃO RESPONSIVA ---
function openMobileMenu() { document.body.classList.add('mobile-menu-open'); }
function closeMobileMenu() { document.body.classList.remove('mobile-menu-open'); }
openMenuBtn.addEventListener('click', openMobileMenu);
closeMenuBtn.addEventListener('click', closeMobileMenu);
mobileMenuOverlay.addEventListener('click', closeMobileMenu);

// --- LÓGICA DA PESQUISA GLOBAL ---
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

// --- CRIAÇÃO DO ÍNDICE DE PESQUISA ---
function createSearchIndex() {
    searchIndex = []; // Limpa o índice antes de reconstruir
    // 1. Meridianos e Pontos
    meridianData.forEach(meridian => {
        meridian.points.forEach(point => {
            searchIndex.push({
                title: `${point.id} - ${point.name} (${point.character})`,
                content: `${point.pt_name}. ${point.functions}`,
                type: 'Ponto',
                color: meridian.element,
                sectionId: 'meridianos',
            });
        });
    });

    // 2. Glossário
    Object.values(glossaryData).forEach(item => {
        searchIndex.push({
            title: item.term,
            content: item.definition,
            type: 'Glossário',
            color: 'primary',
            sectionId: 'glossario'
        });
    });

    // 3. Alimentos
    foodData.forEach(food => {
        searchIndex.push({
            title: food.name,
            content: `Ações: ${food.actions}`,
            type: 'Alimento',
            color: 'wood',
            sectionId: 'dietetica'
        });
    });

    // 4. Padrões Zang-Fu
    zangFuPatternsData.forEach(organ => {
        organ.patterns.forEach(pattern => {
            searchIndex.push({
                title: pattern.name,
                content: pattern.symptoms,
                type: 'Padrão Zang-Fu',
                color: organ.color,
                sectionId: 'padroes-zang-fu'
            });
        });
    });
}


// --- LÓGICA DE EXECUÇÃO DA PESQUISA ---
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
        <div class="search-result-item" data-section-id="${item.sectionId}">
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
function createAccordion(containerId, data) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = data.map((item, index) => {
        const uniqueId = `${containerId}-item-${index}`;
        return `
        <div class="accordion-item">
            <button class="accordion-button" aria-expanded="false" aria-controls="${uniqueId}-content" id="${uniqueId}-button">
                <span class="flex items-center">
                    ${item.color ? `<span class="w-3 h-3 rounded-full mr-3" style="background-color: var(--el-${item.color});"></span>` : ''}
                    ${item.name || item.title}
                </span>
                <svg class="w-5 h-5 shrink-0 text-gray-400 chevron"><use href="#icon-chevron-down"></use></svg>
            </button>
            <div class="accordion-content card-prose" id="${uniqueId}-content" role="region" aria-labelledby="${uniqueId}-button">
                ${item.content || item.functions}
            </div>
        </div>`;
    }).join('');

    container.addEventListener('click', (e) => {
        const button = e.target.closest('.accordion-button');
        if (button) {
            const isExpanded = button.getAttribute('aria-expanded') === 'true';
            button.setAttribute('aria-expanded', !isExpanded);
        }
    });
}

function createLifeCycleTimeline(containerId, data, colorClass) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = data.map(item => `
        <div class="timeline-item">
            <div class="timeline-marker">
                <div class="w-8 h-8 rounded-full ${colorClass} text-white flex items-center justify-center font-bold text-sm shadow-md">${item.age}</div>
            </div>
            <div class="pt-1">
                <p class="font-semibold text-gray-800">Idade ${item.age}</p>
                <p class="text-sm text-gray-600">${item.content}</p>
            </div>
        </div>`).join('');
}

function setupSidebarLayout(navId, contentId, data, idPrefix = 'content-') {
    const navContainer = document.getElementById(navId);
    const contentContainer = document.getElementById(contentId);
    if (!navContainer || !contentContainer) return;

    navContainer.innerHTML = data.map(item => `
        <button class="sidebar-nav-item flex items-center text-left w-full" data-id="${item.id}">
            ${item.color ? `<span class="w-4 h-4 rounded-full mr-3 flex-shrink-0" style="background-color: var(--el-${item.color});"></span>` : ''}
            <span class="font-semibold text-sm">${item.name || item.title}</span>
        </button>
    `).join('');
    
    if (navId === 'meridian-navigation') {
        contentContainer.innerHTML = data.map(item => setupMeridianLayout(item, idPrefix)).join('');
    } else if (navId === 'zangfu-navigation') {
        contentContainer.innerHTML = setupZangFuLayout(data);
    } else {
        contentContainer.innerHTML = data.map(item => `
            <div class="content-card" id="${idPrefix}${item.id}">
                <div class="pb-4 mb-4 border-b-2" style="border-color: var(--el-${item.color || 'gray'});">
                    <h3 class="text-2xl font-playfair font-bold" style="color: var(--el-${item.color || 'gray'});">${item.name || item.title}</h3>
                </div>
                <div class="card-prose">
                    ${item.content ? `<div class="text-gray-600">${item.content}</div>` : ''}
                </div>
            </div>`).join('');
    }
    
    const navItems = navContainer.querySelectorAll('.sidebar-nav-item');
    const contentCards = contentContainer.querySelectorAll('.content-card');

    navContainer.addEventListener('click', (e) => {
        const button = e.target.closest('.sidebar-nav-item');
        if (!button) return;

        const targetId = button.dataset.id;
        navItems.forEach(nav => nav.classList.remove('active'));
        button.classList.add('active');
        
        contentCards.forEach(card => card.classList.remove('active'));
        const targetCard = contentContainer.querySelector(`#${idPrefix}${targetId}`);
        if(targetCard) targetCard.classList.add('active');
    });

    contentContainer.addEventListener('click', (e) => {
        const button = e.target.closest('.accordion-button');
        if (button) {
            const isExpanded = button.getAttribute('aria-expanded') === 'true';
            button.setAttribute('aria-expanded', !isExpanded);
        }
    });

    if (navItems.length > 0) navItems[0].click();
}

function setupMeridianLayout(item, idPrefix) {
    return `
    <div class="content-card" id="${idPrefix}${item.id}">
        <div class="pb-4 mb-4 border-b-2" style="border-color: var(--el-${item.color || 'gray'});">
            <h3 class="text-2xl font-playfair font-bold" style="color: var(--el-${item.color || 'gray'});">${item.name}</h3>
            <p class="font-semibold text-gray-500">${item.element} / ${item.time}</p>
        </div>
        <div class="card-prose text-sm">
            <div class="grid md:grid-cols-2 gap-x-8">
                <div>
                    <h4 class="font-bold !text-base !mb-2 !mt-0">Funções Principais</h4>
                    <p class="text-gray-600">${item.functions}</p>
                </div>
                <div>
                    <h4 class="font-bold !text-base !mb-2 !mt-0">Sinais de Desequilíbrio</h4>
                    <p class="text-gray-600">${item.imbalances}</p>
                </div>
            </div>
            
            <h4 class="font-bold !text-base !mb-2">Pontos Especiais</h4>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-2 text-xs p-3 bg-gray-50 rounded-md">
                <div><strong>Fonte (Yuan):</strong> ${item.yuan_source}</div>
                <div><strong>Conexão (Luo):</strong> ${item.luo_connecting}</div>
                <div><strong>Fenda (Xi):</strong> ${item.xi_cleft}</div>
            </div>

            <h4 class="font-bold !text-base !mb-2">Pontos Shu Antigos</h4>
            <div class="overflow-x-auto">
                <table class="w-full text-left !text-xs">
                    <thead class="bg-gray-100"><tr>
                        <th class="p-2 font-semibold">Tipo</th><th class="p-2 font-semibold">Elemento</th><th class="p-2 font-semibold">Ponto</th><th class="p-2 font-semibold">Funções</th>
                    </tr></thead>
                    <tbody>
                        ${item.five_shu.map(p => `<tr class="border-b">
                            <td class="p-2">${p.type}</td><td class="p-2">${p.element}</td><td class="p-2 font-bold">${p.point}</td><td class="p-2">${p.functions}</td>
                        </tr>`).join('')}
                    </tbody>
                </table>
            </div>
            
            <h4 class="font-bold !text-base !mb-2">Lista Completa de Pontos</h4>
            <div class="space-y-3 max-h-80 overflow-y-auto pr-2">
                ${item.points.map(p => `<div class="p-2 border-l-2 border-gray-200 hover:bg-gray-50">
                    <strong class="text-primary-dark">${p.id} - ${p.name} (${p.character}) - ${p.pt_name}</strong>
                    <p class="text-gray-600 !mb-0">${p.functions}</p>
                </div>`).join('')}
            </div>
        </div>
    </div>`;
}

function setupZangFuLayout(data) {
    return data.map((organ, organIndex) => `
        <div class="content-card" id="zangfu-content-${organ.id}">
            <div class="pb-4 mb-4 border-b-2" style="border-color: var(--el-${organ.color});">
                <h3 class="text-2xl font-playfair font-bold" style="color: var(--el-${organ.color});">Padrões do ${organ.name}</h3>
            </div>
            <div class="space-y-4" id="zangfu-accordion-${organ.id}">
                ${organ.patterns.map((pattern, patternIndex) => {
                    const uniqueId = `zangfu-${organIndex}-pattern-${patternIndex}`;
                    return `
                    <div class="accordion-item">
                        <button class="accordion-button" aria-expanded="false" aria-controls="${uniqueId}-content" id="${uniqueId}-button">
                            <span class="flex items-center gap-2">
                                <svg class="w-5 h-5 text-gray-400"><use href="#icon-zangfu-patterns"></use></svg>
                                ${pattern.name}
                            </span>
                            <svg class="w-5 h-5 shrink-0 text-gray-400 chevron"><use href="#icon-chevron-down"></use></svg>
                        </button>
                        <div class="accordion-content card-prose text-sm" id="${uniqueId}-content" role="region" aria-labelledby="${uniqueId}-button">
                            <h4 class="font-bold text-gray-700">Manifestações Clínicas:</h4>
                            <p>${pattern.symptoms}</p>
                            <h4 class="font-bold text-gray-700">Língua:</h4>
                            <p>${pattern.tongue}</p>
                            <h4 class="font-bold text-gray-700">Pulso:</h4>
                            <p>${pattern.pulse}</p>
                            <h4 class="font-bold text-gray-700">Princípio de Tratamento:</h4>
                            <p class="text-green-800 font-semibold">${pattern.treatmentPrinciple}</p>
                        </div>
                    </div>`;
                }).join('')}
            </div>
        </div>
    `).join('');
}


// --- Lógica dos 5 Elementos ---
function setup5Elements() {
    const elementDiagram = document.querySelector('.element-diagram');
    const elementDetailsContainer = document.getElementById('element-details-container');
    const pathsContainer = document.getElementById('cycle-paths-container');
    const btnGeracao = document.getElementById('btn-geracao');
    const btnControlo = document.getElementById('btn-controlo');
    const cycleInfoBox = document.getElementById('cycle-info-box');
    if (!elementDiagram) return; // Sai se não encontrar o diagrama
    
    const defaultColor = '#e5e7eb';
    let currentCycle = 'geracao';
    let selectedElementId = null;

    const cycleInfo = {
        geracao: { title: 'Ciclo de Geração (Sheng)', description: 'Este ciclo representa a nutrição e o apoio. Cada elemento é a "mãe" do seguinte, nutrindo-o e promovendo o seu crescimento.', color: 'bg-green-100', textColor: 'text-green-800' },
        controlo: { title: 'Ciclo de Controlo (Ke)', description: 'Este ciclo representa o controlo e a restrição, garantindo que nenhum elemento se torna excessivo e mantendo o equilíbrio do sistema.', color: 'bg-red-100', textColor: 'text-red-800' }
    };

    const cyclePaths = {
        geracao: [
            { id: 'madeira-fogo', d: "M 150,55 A 80 80 0 0 1 238,105" }, { id: 'fogo-terra', d: "M 245,112 A 80 80 0 0 1 205,230" },
            { id: 'terra-metal', d: "M 195,245 A 80 80 0 0 1 105,245" }, { id: 'metal-agua', d: "M 95,230 A 80 80 0 0 1 55,112" },
            { id: 'agua-madeira', d: "M 62,105 A 80 80 0 0 1 150,55" }
        ],
        controlo: [
            { id: 'madeira-terra', d: "M 150 78 L 195 215" }, { id: 'fogo-metal', d: "M 220 105 L 125 225" },
            { id: 'terra-agua', d: "M 195 225 L 80 125" }, { id: 'metal-madeira', d: "M 105 225 L 145 80" },
            { id: 'agua-fogo', d: "M 80 105 L 215 105" }
        ]
    };

    function renderCyclePaths() {
        if(!pathsContainer) return;
        pathsContainer.innerHTML = cyclePaths[currentCycle].map(p => `<path id="${p.id}" class="cycle-path" d="${p.d}" stroke="${defaultColor}" stroke-width="2" fill="none" marker-end="url(#arrow)"/>`).join('');
    }

    function update5ElementsUI() {
        elementDiagram.querySelectorAll('.element').forEach(btn => btn.setAttribute('aria-pressed', 'false'));
        document.querySelectorAll('.arrow-marker').forEach(marker => marker.style.fill = defaultColor);
        if (pathsContainer) {
            pathsContainer.querySelectorAll('.cycle-path').forEach(path => {
                path.style.stroke = defaultColor;
                path.style.strokeWidth = '2';
                path.classList.remove('draw');
            });
        }
        
        if (selectedElementId) {
            const elData = fiveElementsData[selectedElementId];
            const selectedButton = document.getElementById(selectedElementId);
            if (selectedButton) selectedButton.setAttribute('aria-pressed', 'true');

            const targetElementId = elData.target[currentCycle];
            const activePathId = `${selectedElementId}-${targetElementId}`;
            const activePath = document.getElementById(activePathId);
            if (activePath) {
                const color = `var(--el-${elData.color})`;
                activePath.style.stroke = color;
                activePath.style.color = color;
                activePath.style.strokeWidth = '4';
                activePath.classList.add('draw');
                const marker = document.querySelector(`#arrow path`);
                if (marker) marker.style.fill = color;
            }

            elementDetailsContainer.innerHTML = `
                <div class="text-left p-6 rounded-lg border-2" style="border-color: var(--el-${elData.color}); background-color: #fafcff;">
                    <h3 class="text-2xl font-playfair font-bold mb-4" style="color: var(--el-${elData.color});">${elData.name}</h3>
                    <div class="card-prose">
                        <p class="font-semibold text-gray-600 mb-2">Relações no Ciclo de ${currentCycle.charAt(0).toUpperCase() + currentCycle.slice(1)}:</p>
                        <p class="text-sm">${elData.relations[currentCycle]}</p>
                        <table class="w-full text-sm mt-4"><tbody>${elData.table}</tbody></table>
                    </div>
                </div>`;
        } else {
            elementDetailsContainer.innerHTML = '<div class="flex items-center justify-center h-full text-center text-gray-500 p-4 bg-gray-50 rounded-lg"><p>Clique num elemento do diagrama para ver as suas correspondências detalhadas e a sua relação no ciclo atual.</p></div>';
        }
    }

    function switchCycle(cycle) {
        currentCycle = cycle;
        const info = cycleInfo[cycle];
        if(cycleInfoBox) {
            cycleInfoBox.className = `mb-6 p-4 rounded-lg text-center transition-colors duration-500 ${info.color} ${info.textColor}`;
            cycleInfoBox.innerHTML = `<h4 class="font-bold">${info.title}</h4><p class="text-sm">${info.description}</p>`;
        }
        if(btnGeracao) btnGeracao.classList.toggle('active', cycle === 'geracao');
        if(btnControlo) btnControlo.classList.toggle('active', cycle === 'controlo');
        renderCyclePaths();
        update5ElementsUI();
    }

    if(btnGeracao) btnGeracao.addEventListener('click', () => switchCycle('geracao'));
    if(btnControlo) btnControlo.addEventListener('click', () => switchCycle('controlo'));

    elementDiagram.addEventListener('click', (e) => {
        const button = e.target.closest('.element');
        if (button) {
            selectedElementId = button.id;
            update5ElementsUI();
        }
    });

    // Inicia o ciclo
    switchCycle('geracao');
}

function setupGlossary() {
    const glossaryContainer = document.getElementById('glossary-container');
    if (!glossaryContainer) return;

    const categories = Object.values(glossaryData).reduce((acc, item) => {
        (acc[item.category] = acc[item.category] || []).push(item);
        return acc;
    }, {});
    const sortedCategories = Object.keys(categories).sort();
    
    glossaryContainer.innerHTML = sortedCategories.map(category => `
        <div class="visual-card mb-8">
            <div class="card-header"><h3 class="text-gray-700">${category}</h3></div>
            <div class="card-content grid md:grid-cols-2 gap-x-8 gap-y-6">
                ${categories[category].sort((a, b) => a.term.localeCompare(b.term)).map(item => `
                    <div>
                        <h4 class="font-bold text-lg">${item.term}</h4>
                        <p class="text-gray-600">${item.definition}</p>
                    </div>`).join('')}
            </div>
        </div>`).join('');
}

function setupDietetics() {
    const foodSearchInput = document.getElementById('food-search-input');
    const foodResultsContainer = document.getElementById('food-results-container');
    const foodAlphaNav = document.getElementById('food-alpha-nav');

    function renderFoodList(foods) {
        const groupedFoods = foods.reduce((acc, food) => {
            const firstLetter = food.name.charAt(0).toUpperCase();
            if (!acc[firstLetter]) acc[firstLetter] = [];
            acc[firstLetter].push(food);
            return acc;
        }, {});
        const letters = Object.keys(groupedFoods).sort();
        
        if (foodAlphaNav) foodAlphaNav.innerHTML = letters.map(letter => `<a href="#food-letter-${letter}">${letter}</a>`).join('');

        if (foodResultsContainer) {
            foodResultsContainer.innerHTML = letters.map(letter => `
                <h3 id="food-letter-${letter}" class="food-group-header" tabindex="-1">${letter}</h3>
                <div class="food-group-items">
                ${groupedFoods[letter].map(food => `
                    <div class="food-item visual-card p-4 mb-3">
                        <h4 class="font-bold text-lg text-green-800">${food.name}</h4>
                        <div class="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm mt-2">
                            <div><strong>Temp:</strong> <span class="font-semibold">${food.temp}</span></div>
                            <div><strong>Sabor:</strong> <span class="font-semibold">${food.flavor}</span></div>
                            <div class="col-span-2"><strong>Órgãos:</strong> <span class="font-semibold">${food.organs}</span></div>
                        </div>
                        <p class="text-sm mt-2"><strong>Ações:</strong> ${food.actions}</p>
                    </div>`).join('')}
                </div>`).join('');
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
                    if (isVisible) {
                        groupHasVisibleItems = true;
                    }
                });

                header.style.display = groupHasVisibleItems ? 'block' : 'none';
                groupWrapper.style.display = groupHasVisibleItems ? 'block' : 'none';
            });
        });
    }
}

function setupDiagnosisDiagrams() {
    document.querySelectorAll('.diagram-area-svg').forEach(area => {
        const infoBox = area.closest('.visual-card, .grid').querySelector('.p-4.bg-gray-100');
        if (!infoBox) return;
        
        const defaultText = infoBox.firstElementChild.textContent;
        const updateInfo = () => {
            if (infoBox) {
                infoBox.innerHTML = `<p class="font-semibold">${area.dataset.info}</p>`;
            }
        };
        const resetInfo = () => {
            if (infoBox) {
                infoBox.innerHTML = `<p class="text-center text-gray-500">${defaultText}</p>`;
            }
        };
        
        area.addEventListener('mouseover', updateInfo);
        area.addEventListener('focus', updateInfo);
        area.addEventListener('mouseout', resetInfo);
        area.addEventListener('blur', resetInfo);
    });
}

// --- FUNÇÃO PARA GERAR OS LINKS DE NAVEGAÇÃO ---
function generateNavLinks() {
    const navStructure = [
        { id: 'inicio', title: 'Início', icon: 'icon-home' },
        {
            title: 'Fundamentos', icon: 'icon-yin-yang',
            links: [
                { id: 'substancias-fundamentais', title: 'Substâncias Fundamentais', icon: 'icon-3-treasures' },
                { id: 'tipos-de-qi', title: 'Tipos de Qi', icon: 'icon-qi' },
                { id: 'cinco-elementos', title: 'Os 5 Elementos', icon: 'icon-5-elements' },
                { id: 'ciclos-de-vida', title: 'Ciclos de Vida', icon: 'icon-lifecycle' }
            ]
        },
        { id: 'meridianos', title: 'Meridianos e Pontos', icon: 'icon-meridian' },
        { id: 'anatomia-energetica', title: 'Anatomia Energética', icon: 'icon-anatomy' },
        { id: 'padroes-zang-fu', title: 'Padrões Zang-Fu', icon: 'icon-zangfu-patterns' },
        {
            title: 'Diagnóstico', icon: 'icon-diagnosis',
            links: [
                { id: 'diagnostico-geral', title: 'Geral e Visual', icon: 'icon-diagnosis' },
                { id: 'pulsologia', title: 'Pulsologia', icon: 'icon-diagnosis' }
            ]
        },
        {
            title: 'Terapêuticas', icon: 'icon-tuina',
            links: [
                { id: 'dietetica', title: 'Dietética', icon: 'icon-diet' },
                { id: 'fitoterapia', title: 'Fitoterapia', icon: 'icon-fitoterapia' },
                { id: 'acupuntura', title: 'Acupuntura', icon: 'icon-acupuncture' },
                { id: 'moxabustao', title: 'Moxabustão', icon: 'icon-moxibustion' },
                { id: 'ventosaterapia', title: 'Ventosaterapia', icon: 'icon-cupping' },
                { id: 'qigong', title: 'Qi Gong & Tai Chi', icon: 'icon-qigong' }
            ]
        },
        { id: 'glossario', title: 'Glossário', icon: 'icon-glossary' },
    ];

    const generateHtml = (item) => {
        if (item.links) {
            return `
                <div class="nav-group">
                    <button class="nav-group-header flex items-center justify-between w-full p-2 rounded-lg" aria-expanded="false">
                        <span class="flex items-center">
                            <svg class="w-5 h-5 mr-3 text-gray-500"><use href="#${item.icon}"></use></svg>
                            <span class="font-semibold">${item.title}</span>
                        </span>
                        <svg class="w-5 h-5 shrink-0 text-gray-400 chevron"><use href="#icon-chevron-down"></use></svg>
                    </button>
                    <div class="nav-group-content pl-4 pt-1 space-y-1">
                        ${item.links.map(link => `
                            <a href="#${link.id}" class="sidebar-link flex items-center p-2 rounded-lg">
                                <svg class="w-5 h-5 mr-3 text-gray-500"><use href="#${link.icon}"></use></svg>
                                <span>${link.title}</span>
                            </a>
                        `).join('')}
                    </div>
                </div>`;
        } else {
            return `
                <a href="#${item.id}" class="sidebar-link flex items-center p-2 rounded-lg">
                    <svg class="w-5 h-5 mr-3 text-gray-500"><use href="#${item.icon}"></use></svg>
                    <span>${item.title}</span>
                </a>`;
        }
    };
    
    const navHtml = navStructure.map(generateHtml).join('');
    allNavHubs.forEach(hub => hub.innerHTML = navHtml);
}

// --- FUNÇÕES DE CONSTRUÇÃO DE CONTEÚDO INICIAL ---
function buildInitialContent() {
    document.getElementById('inicio').innerHTML = `
        <div class="visual-card">
            <div class="card-header"><h3>Bem-vindo ao Guia de Medicina Tradicional Chinesa</h3></div>
            <div class="card-content card-prose">
                <p>Este guia interativo foi concebido para ser uma referência rápida e completa sobre os conceitos fundamentais da Medicina Tradicional Chinesa (MTC). Utilize o menu lateral para navegar pelas diferentes secções.</p>
                <h4>Como Utilizar:</h4>
                <ul class="list-disc list-inside">
                    <li><strong>Navegação:</strong> Clique nos itens do menu para explorar os fundamentos, meridianos, diagnóstico e muito mais.</li>
                    <li><strong>Pesquisa Global:</strong> Utilize a barra de pesquisa para encontrar rapidamente informações sobre pontos de acupuntura, alimentos, padrões de desarmonia ou termos do glossário.</li>
                    <li><strong>Interatividade:</strong> Muitas secções contêm elementos interativos, como diagramas e abas, para facilitar a aprendizagem.</li>
                </ul>
                <p>Explore, aprenda e encontre o caminho para uma vida em harmonia.</p>
            </div>
        </div>`;

    document.getElementById('substancias-fundamentais').innerHTML = `
        <div class="visual-card">
            <div class="card-header"><h3>As 5 Substâncias Fundamentais</h3></div>
            <div class="card-content card-prose">
                <p>As cinco substâncias vitais são os alicerces da vida do ponto de vista da MTC. São as matérias-primas essenciais que formam o corpo, a mente e o espírito. O seu equilíbrio e livre circulação são cruciais para a saúde.</p>
                <div class="space-y-4">
                    <div><h4>Qi (氣) - Energia Vital</h4><p>A força da vida que anima todas as funções do corpo. É o aspeto mais Yang e dinâmico.</p></div>
                    <div><h4>Xue (血) - Sangue</h4><p>Mais denso e material que o Qi, o Sangue nutre, humedece e serve como veículo para o Shen (Mente).</p></div>
                    <div><h4>Jing (精) - Essência</h4><p>A nossa reserva de energia mais profunda, herdada e adquirida, que governa o crescimento, desenvolvimento e reprodução.</p></div>
                    <div><h4>Shen (神) - Espírito/Mente</h4><p>Abrangendo a consciência, o pensamento e a estabilidade emocional, o Shen reside no Coração e é nutrido pelo Sangue.</p></div>
                    <div><h4>Jin Ye (津液) - Fluidos Corporais</h4><p>Todos os fluidos do corpo, desde o suor às lágrimas, que humedecem e lubrificam os tecidos e órgãos.</p></div>
                </div>
            </div>
        </div>`;

    document.getElementById('tipos-de-qi').innerHTML = `
        <div class="visual-card">
            <div class="card-header"><h3>Os Diferentes Tipos de Qi</h3></div>
            <div class="card-content">
                <div id="qi-accordion" class="space-y-3"></div>
            </div>
        </div>`;
    createAccordion('qi-accordion', qiData);

    document.getElementById('cinco-elementos').innerHTML = `
        <div class="visual-card mb-6">
            <div class="card-header"><h3>A Teoria dos Cinco Elementos</h3></div>
            <div class="card-content">
                <div id="cycle-info-box"></div>
                <div class="flex justify-center gap-4 mb-6">
                    <button id="btn-geracao" class="tab-button">Geração (Sheng)</button>
                    <button id="btn-controlo" class="tab-button">Controlo (Ke)</button>
                </div>
                <div class="grid md:grid-cols-2 gap-8 items-center">
                    <div class="relative w-full max-w-xs mx-auto aspect-square">
                        <div class="element-lines">
                            <svg id="cycle-paths-container" class="w-full h-full" viewBox="0 0 300 300"></svg>
                        </div>
                        <div class="element-diagram">
                            <button id="madeira" class="element wood" style="top: 20%; left: 50%;">Madeira</button>
                            <button id="fogo" class="element fire" style="top: 35%; left: 80%;">Fogo</button>
                            <button id="terra" class="element earth" style="top: 75%; left: 65%;">Terra</button>
                            <button id="metal" class="element metal" style="top: 75%; left: 35%;">Metal</button>
                            <button id="agua" class="element water" style="top: 35%; left: 20%;">Água</button>
                        </div>
                    </div>
                    <div id="element-details-container"></div>
                </div>
            </div>
        </div>`;

    document.getElementById('ciclos-de-vida').innerHTML = `
        <div class="grid md:grid-cols-2 gap-8">
            <div class="visual-card">
                <div class="card-header"><h3>Ciclos Femininos (7 Anos)</h3></div>
                <div id="female-cycles-timeline" class="card-content timeline-container"></div>
            </div>
            <div class="visual-card">
                <div class="card-header"><h3>Ciclos Masculinos (8 Anos)</h3></div>
                <div id="male-cycles-timeline" class="card-content timeline-container"></div>
            </div>
        </div>`;
    createLifeCycleTimeline('female-cycles-timeline', lifeCyclesFemaleData, 'bg-pink-500');
    createLifeCycleTimeline('male-cycles-timeline', lifeCyclesMaleData, 'bg-blue-500');

    document.getElementById('meridianos').innerHTML = `
        <div class="flex flex-col lg:flex-row gap-6">
            <nav id="meridian-navigation" class="w-full lg:w-1/4 space-y-2"></nav>
            <div id="meridian-content-area" class="flex-1 content-area"></div>
        </div>`;

    document.getElementById('anatomia-energetica').innerHTML = `
        <div class="flex flex-col lg:flex-row gap-6">
            <nav id="anatomy-navigation" class="w-full lg:w-1/4 space-y-2"></nav>
            <div id="anatomy-content-area" class="flex-1 content-area"></div>
        </div>`;

    document.getElementById('padroes-zang-fu').innerHTML = `
        <div class="flex flex-col lg:flex-row gap-6">
            <nav id="zangfu-navigation" class="w-full lg:w-1/4 space-y-2"></nav>
            <div id="zangfu-content-area" class="flex-1 content-area"></div>
        </div>`;

    document.getElementById('diagnostico-geral').innerHTML = `
        <div class="visual-card mb-8">
            <div class="card-header"><h3>As 10+1 Perguntas</h3></div>
            <div class="card-content">
                <div id="perguntas-accordion" class="space-y-3"></div>
            </div>
        </div>
        <div class="visual-card">
            <div class="card-header"><h3>Diagnóstico Visual Interativo</h3></div>
            <div class="card-content">
                <p class="card-prose mb-6">Passe o rato sobre as diferentes áreas dos diagramas para ver as correspondências de diagnóstico na Medicina Tradicional Chinesa.</p>
                <div class="grid md:grid-cols-2 gap-8">
                    <div class="visual-card p-4">
                        <h4 class="text-center font-bold text-lg mb-2 text-primary">Diagnóstico da Língua</h4>
                        <div class="diagram-container relative max-w-xs mx-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 200" class="rounded-lg bg-pink-50">
                                <defs>
                                    <filter id="inner-shadow" x="-50%" y="-50%" width="200%" height="200%">
                                        <feComponentTransfer in="SourceAlpha"><feFuncA type="table" tableValues="1 0" /></feComponentTransfer>
                                        <feGaussianBlur stdDeviation="3" />
                                        <feOffset dx="0" dy="4" result="offsetblur" />
                                        <feFlood flood-color="rgb(0,0,0)" result="color" />
                                        <feComposite in2="offsetblur" operator="in" />
                                        <feComposite in2="SourceAlpha" operator="in" />
                                        <feMerge><feMergeNode in="SourceGraphic" /><feMergeNode /></feMerge>
                                    </filter>
                                </defs>
                                <path fill="#F4A2B8" d="M75 195C25 145 25 110 75 25c50 85 50 120 0 170z" />
                                <path fill="#D68098" d="M75 195c-2.5-12.5-5-25 0-35 5 10 2.5 22.5 0 35z" filter="url(#inner-shadow)" />
                                <path fill="#EAAABE" d="M75 182.5c-15-10-25-22.5-25-37.5 0-20 12.5-32.5 25-42.5 12.5 10 25 22.5 25 42.5 0 15-10 27.5-25 37.5z" opacity="0.5" />
                            </svg>
                            <svg class="absolute top-0 left-0 w-full h-full" viewBox="0 0 150 200">
                                <path class="diagram-area-svg" data-info="Ponta: Coração. Reflete o estado do Shen, ansiedade e insónia." d="M75,195 C50,165 58,150 75,140 C92,150 100,165 75,195 Z"></path>
                                <path class="diagram-area-svg" data-info="Área atrás da ponta: Pulmão. Mostra condições do sistema respiratório e do Wei Qi." d="M75,140 C55,130 55,105 75,100 C95,105 95,130 75,140 Z"></path>
                                <path class="diagram-area-svg" data-info="Laterais: Fígado e Vesícula Biliar. Indicam estagnação de Qi, irritabilidade e tensão." d="M55,105 C35,105 30,35 55,35 L55,105 Z M95,105 C115,105 120,35 95,35 L95,105 Z"></path>
                                <path class="diagram-area-svg" data-info="Centro: Baço e Estômago. Reflete o estado da digestão e da produção de Qi e Sangue." d="M75,100 C55,105 55,35 75,35 C95,35 95,105 75,100 Z"></path>
                                <path class="diagram-area-svg" data-info="Raiz: Rim, Bexiga, Intestinos. Mostra a constituição (Jing) e o estado do Aquecedor Inferior." d="M75,35 C55,35 55,25 75,25 C95,25 95,35 75,35 Z"></path>
                                </svg>
                        </div>
                        <div class="p-4 bg-gray-100 rounded-lg mt-4 min-h-[60px] flex items-center justify-center text-center">
                            <p class="text-gray-500 text-sm">Passe o rato sobre uma área.</p>
                        </div>
                    </div>
                    <div class="visual-card p-4">
                        <h4 class="text-center font-bold text-lg mb-2 text-primary">Diagnóstico do Pulso</h4>
                        <div class="diagram-container relative max-w-xs mx-auto">
                            <img src="https://placehold.co/300x400/f8f9fa/ccc?text=Diagrama+do+Pulso" alt="Diagrama do pulso para diagnóstico na MTC" class="rounded-lg">
                            <svg class="absolute top-0 left-0 w-full h-full" viewBox="0 0 150 200">
                                <rect class="diagram-area-svg" data-info="Posição CUN (Distal): Pulmão (D) e Coração (E). Nível superficial." x="40" y="50" width="70" height="30" rx="5"></rect>
                                <rect class="diagram-area-svg" data-info="Posição GUAN (Média): Baço/Estômago (D) e Fígado/VB (E). Nível médio." x="40" y="90" width="70" height="30" rx="5"></rect>
                                <rect class="diagram-area-svg" data-info="Posição CHI (Proximal): Rim Yang (D) e Rim Yin (E). Nível profundo." x="40" y="130" width="70" height="30" rx="5"></rect>
                            </svg>
                        </div>
                        <div class="p-4 bg-gray-100 rounded-lg mt-4 min-h-[60px] flex items-center justify-center text-center">
                            <p class="text-gray-500 text-sm">Passe o rato sobre uma posição.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
    createAccordion('perguntas-accordion', dezPerguntasData);

    document.getElementById('pulsologia').innerHTML = `
        <div class="visual-card">
            <div class="card-header"><h3>Tipos de Pulso Comuns</h3></div>
            <div class="card-content">
                <div id="pulse-list-container" class="space-y-3"></div>
            </div>
        </div>`;
    createAccordion('pulse-list-container', pulseData);

    document.getElementById('dietetica').innerHTML = `
        <div class="visual-card">
            <div class="card-header"><h3>Dietética Energética</h3></div>
            <div class="card-content">
                <input type="search" id="food-search-input" placeholder="Pesquisar alimento..." class="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500">
                <div id="food-alpha-nav"></div>
                <div id="food-results-container"></div>
            </div>
        </div>`;
}


// --- PONTO DE ENTRADA DA APLICAÇÃO ---
document.addEventListener('DOMContentLoaded', () => {
    // Geração de conteúdo principal
    generateNavLinks(); 
    buildInitialContent(); // Constrói o HTML inicial para as secções
    
    // Configuração de componentes interativos e conteúdo dinâmico
    setupTherapiesContent(therapiesData);
    setup5Elements();
    setupDiagnosisDiagrams();
    setupGlossary();
    setupDietetics();

    // Configuração de layouts complexos
    setupSidebarLayout('meridian-navigation', 'meridian-content-area', meridianData, 'meridian-content-');
    setupSidebarLayout('anatomy-navigation', 'anatomy-content-area', anatomyData, 'anatomy-content-');
    setupSidebarLayout('zangfu-navigation', 'zangfu-content-area', zangFuPatternsData, 'zangfu-content-');

    // Animação da barra lateral
    document.querySelectorAll('aside .sidebar-link, aside .nav-group').forEach((el, index) => {
        el.style.animationDelay = `${index * 0.07}s`;
    });

    // Construção do índice de pesquisa
    createSearchIndex();
    
    // Seleciona as secções de conteúdo DEPOIS de serem criadas
    contentSections = mainContent.querySelectorAll('.content-section');
    
    // Mostra a secção inicial
    showSection('inicio', 'Início');
    updateActiveLink('inicio');
});
