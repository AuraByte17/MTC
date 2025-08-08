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
const mobileSearchOverlay = document.getElementById('mobile-search-overlay');
const closeSearchBtn = document.getElementById('close-search-btn');
const searchResultsContainer = document.getElementById('search-results-container');
const mobileSearchInput = document.getElementById('mobile-search-input');

// Elementos do Modal de Conteúdo
const contentModal = document.getElementById('content-modal');
const contentModalCloseBtn = document.getElementById('content-modal-close-btn');
const contentModalContent = document.getElementById('content-modal-content');

// Elementos dos Favoritos
const favBtn = document.getElementById('fav-btn');
const favCountSpan = document.getElementById('fav-count');
const favDropdown = document.getElementById('fav-dropdown');
const favList = document.getElementById('fav-list');

// Variáveis globais para os dados e pesquisa
let fuse;
let favorites = JSON.parse(localStorage.getItem('favorites')) || {};

// --- Funções Auxiliares ---

// Função para renderizar conteúdo Markdown
const markdownToHtml = (markdown) => {
    // Implementação básica para converter markdown simples
    let html = markdown;
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
    html = html.replace(/`(.*?)`/g, '<code>$1</code>');
    html = html.replace(/<br>\n/g, '<br>'); // Remove newlines after <br>
    return html;
};

// Gerar cores aleatórias para os elementos
const generateRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

// --- Funções de Renderização de Conteúdo ---

// Renderer para Qi
const renderQiContent = (item) => {
    return `
        <div class="p-6">
            <h3 class="text-2xl font-bold mb-4">${item.title}</h3>
            <p class="text-lg">${item.description}</p>
        </div>
    `;
};

// Renderer para Cinco Elementos
const renderFiveElementsContent = (item) => {
    const elements = ['wood', 'fire', 'earth', 'metal', 'water'];
    const elementColors = {
        wood: 'var(--el-wood)',
        fire: 'var(--el-fire)',
        earth: 'var(--el-earth)',
        metal: 'var(--el-metal)',
        water: 'var(--el-water)',
    };

    return `
        <div class="p-6">
            <h3 class="text-2xl font-bold mb-4 text-center" style="color: ${elementColors[item.name.toLowerCase()]};">${item.name}</h3>
            <p class="text-lg">${item.description}</p>
            <div class="mt-6 space-y-4">
                <div class="p-4 bg-gray-100 rounded-lg">
                    <h4 class="font-bold">Ciclo Sheng (Nutrição):</h4>
                    <p class="text-sm">${item.shengCycle}</p>
                </div>
                <div class="p-4 bg-gray-100 rounded-lg">
                    <h4 class="font-bold">Ciclo Ke (Controlo):</h4>
                    <p class="text-sm">${item.keCycle}</p>
                </div>
                <h4 class="font-bold mt-4">Associações:</h4>
                <ul class="list-disc list-inside text-sm space-y-1">
                    ${item.associations.map(assoc => `<li><strong>${assoc.aspect}:</strong> ${assoc.value}</li>`).join('')}
                </ul>
            </div>
        </div>
    `;
};


// Renderer para Meridianos
const renderMeridianContent = (meridian) => {
    return `
        <div class="p-6">
            <div class="flex items-center space-x-4 mb-4">
                <div class="w-8 h-8 rounded-full" style="background-color: ${meridian.color};"></div>
                <h3 class="text-2xl font-bold">${meridian.name}</h3>
            </div>
            <p class="text-lg mb-4">${meridian.description}</p>
            <div class="space-y-4">
                <div>
                    <h4 class="font-bold">Função:</h4>
                    <p class="text-sm">${meridian.function}</p>
                </div>
                <div>
                    <h4 class="font-bold">Problemas Associados:</h4>
                    <p class="text-sm">${meridian.associatedProblems}</p>
                </div>
                <div>
                    <h4 class="font-bold">Pontos de Acupuntura:</h4>
                    <ul class="list-disc list-inside text-sm space-y-2 mt-2">
                        ${meridian.points.map(point => `
                            <li class="point-item" data-id="Ponto-${point.id}" data-parent-id="${meridian.id}" data-type="Ponto">
                                <span><strong>${point.id} (${point.name}):</strong> ${point.function}</span>
                                <button class="favorite-toggle-btn" data-id="Ponto-${point.id}" data-parent-id="${meridian.id}" data-title="${point.id} - ${point.name}" data-type="Ponto" data-color="${meridian.color}" data-section-id="meridianos">
                                    <svg class="w-5 h-5"><use href="#icon-star-outline"></use></svg>
                                </button>
                            </li>
                        `).join('')}
                    </ul>
                </div>
            </div>
        </div>
    `;
};

// Renderer para Zang Fu Patterns
const renderZangFuContent = (item) => {
    const formatSintomas = (sintomas) => {
        if (Array.isArray(sintomas)) {
            return `<ul>${sintomas.map(s => `<li>${s}</li>`).join('')}</ul>`;
        }
        return `<ul><li>${sintomas}</li></ul>`;
    };

    return `
        <div class="p-6">
            <h3 class="text-2xl font-bold mb-4">${item.title}</h3>
            <p class="text-lg">${item.description}</p>
            <div class="mt-4">
                <h4 class="font-bold">Sintomas Chave:</h4>
                <div class="text-sm">${formatSintomas(item.sintomas)}</div>
            </div>
        </div>
    `;
};

// Renderer para Food Therapy
const renderFoodContent = (item) => {
    return `
        <div class="p-6">
            <h3 class="text-2xl font-bold mb-4">${item.name}</h3>
            <div class="mb-4">
                <span class="inline-block px-3 py-1 rounded-full text-white text-xs font-semibold" style="background-color: var(--el-${item.element.toLowerCase()});">Elemento: ${item.element}</span>
                <span class="inline-block px-3 py-1 rounded-full text-white text-xs font-semibold" style="background-color: var(--el-${item.element.toLowerCase()});">Natureza: ${item.nature}</span>
                <span class="inline-block px-3 py-1 rounded-full text-white text-xs font-semibold" style="background-color: var(--el-${item.element.toLowerCase()});">Sabor: ${item.taste}</span>
            </div>
            <p class="text-lg">${item.description}</p>
        </div>
    `;
};

// Renderer para a maioria dos itens (com base em Markdown)
const renderDefaultContent = (item) => {
    let contentHtml = item.description || '';
    if (item.content) {
        contentHtml = markdownToHtml(item.content);
    }
    return `<div class="p-6">${contentHtml}</div>`;
};

// Renderer para Anatomia
const renderAnatomyContent = (item) => {
    return `
        <div class="p-6">
            <h3 class="text-2xl font-bold mb-4">${item.title}</h3>
            <p class="text-lg">${item.description}</p>
            <div class="mt-4">
                <h4 class="font-bold">Detalhes:</h4>
                <p class="text-sm">${item.details}</p>
            </div>
        </div>
    `;
};

// Renderer para a Língua
const renderLinguaContent = (item) => {
    return `
        <div class="p-6">
            <h3 class="text-2xl font-bold mb-4">${item.title}</h3>
            <p class="text-lg">${item.info}</p>
        </div>
    `;
};

// Renderer para Pulso
const renderPulseContent = (item) => {
    return `
        <div class="p-6">
            <h3 class="text-2xl font-bold mb-4">${item.title}</h3>
            <p class="text-lg">${item.description}</p>
        </div>
    `;
};

// --- Estrutura de Dados e Renderers ---
const sectionMap = {
    'yin-yang': { title: 'Yin Yang', data: [yinYangData], renderer: renderDefaultContent },
    'qi': { title: 'Tipos de Qi', data: qiData, renderer: renderQiContent },
    'cinco-elementos': { title: 'Cinco Elementos', data: fiveElementsData, renderer: renderFiveElementsContent },
    'meridianos': { title: 'Os 12 Meridianos', data: meridianData, renderer: renderMeridianContent },
    'anatomia': { title: 'Anatomia e Fisiologia', data: anatomyData, renderer: renderAnatomyContent },
    'zang-fu': { title: 'Padrões Zang-Fu', data: zangFuPatternsData, renderer: renderZangFuContent },
    'ciclos-vida-feminino': { title: 'Ciclos da Vida Feminino', data: lifeCyclesFemaleData, renderer: renderDefaultContent },
    'ciclos-vida-masculino': { title: 'Ciclos da Vida Masculino', data: lifeCyclesMaleData, renderer: renderDefaultContent },
    'diagnostico': { title: 'Diagnóstico', data: dezPerguntasData, renderer: renderDefaultContent },
    'lingua': { title: 'Diagnóstico da Língua', data: Object.values(linguaData), renderer: renderLinguaContent },
    'pulso-posicao': { title: 'Diagnóstico do Pulso (Posição)', data: pulsePositionData, renderer: renderPulseContent },
    'pulso-tipo': { title: 'Diagnóstico do Pulso (Tipos)', data: pulseTypeData, renderer: renderPulseContent },
    'terapias': { title: 'Outras Terapias', data: therapiesData, renderer: renderDefaultContent },
    'dietetica': { title: 'Dietética Chinesa', data: foodData, renderer: renderFoodContent },
    'moxabustao': { title: 'Moxabustão', data: therapiesData.filter(t => t.id === 'moxa'), renderer: renderDefaultContent },
    'fitoterapia': { title: 'Fitoterapia', data: therapiesData.filter(t => t.id === 'fitoterapia'), renderer: renderDefaultContent },
    'grandes-mestres': { title: 'Grandes Mestres', data: greatMastersData, renderer: renderDefaultContent },
    'glossario': { title: 'Glossário', data: glossaryData, renderer: renderDefaultContent },
};

// Mapeamento de tipos para pesquisa e renderização de modal
const itemTypeMap = {
    'Meridiano': {
        data: meridianData,
        renderer: renderMeridianContent,
        title: 'Meridianos',
        sectionId: 'meridianos'
    },
    'Ponto': {
        data: meridianData.flatMap(m => m.points.map(p => ({ ...p, parentId: m.id, parentName: m.name, parentColor: m.color }))),
        renderer: (item) => `
            <div class="p-6">
                <div class="flex items-center space-x-4 mb-4">
                    <div class="w-8 h-8 rounded-full" style="background-color: ${item.parentColor};"></div>
                    <h3 class="text-2xl font-bold">${item.id} - ${item.name}</h3>
                </div>
                <p class="text-sm text-gray-500 mb-4">Ponto no Meridiano do(a) ${item.parentName}</p>
                <div class="space-y-4">
                    <div>
                        <h4 class="font-bold">Função:</h4>
                        <p class="text-sm">${item.function}</p>
                    </div>
                </div>
            </div>
        `,
        title: 'Pontos de Acupuntura'
    },
    'Glossário': {
        data: glossaryData,
        renderer: renderDefaultContent,
        title: 'Glossário'
    },
    'Alimento': {
        data: foodData,
        renderer: renderFoodContent,
        title: 'Alimentos'
    },
    'Mestre': {
        data: greatMastersData,
        renderer: renderDefaultContent,
        title: 'Grandes Mestres'
    },
    'Padrão Zang-Fu': {
        data: zangFuPatternsData,
        renderer: renderZangFuContent,
        title: 'Padrões Zang-Fu'
    }
};

// Inicialização de Fuse.js
const setupFuse = () => {
    // Mescla todos os dados relevantes em um único array
    const searchData = [
        ...meridianData.map(m => ({ id: `Meridiano-${m.id}`, title: m.name, type: 'Meridiano', content: m.description, color: m.color, sectionId: 'meridianos' })),
        ...meridianData.flatMap(m => m.points.map(p => ({ id: `Ponto-${p.id}`, title: `${p.id} - ${p.name}`, type: 'Ponto', content: p.function, color: m.color, sectionId: 'meridianos', parentId: m.id }))),
        ...glossaryData.map(g => ({ id: `Glossario-${g.title}`, title: g.title, type: 'Glossário', content: g.description, sectionId: 'glossario' })),
        ...foodData.map(f => ({ id: `Alimento-${f.id}`, title: f.name, type: 'Alimento', content: f.description, sectionId: 'dietetica' })),
        ...zangFuPatternsData.map(z => ({ id: `ZangFu-${z.id}`, title: z.title, type: 'Padrão Zang-Fu', content: z.sintomas, sectionId: 'zang-fu' })),
    ];

    const fuseOptions = {
        keys: ['title', 'content'],
        threshold: 0.3,
        minMatchCharLength: 2,
        includeScore: true,
    };
    fuse = new Fuse(searchData, fuseOptions);
};

// --- Funções de Estado e UI ---

// Carregar tela de carregamento e inicializar app
const showLoadingScreen = () => {
    loadingScreen.style.display = 'flex';
};

const hideLoadingScreen = () => {
    loadingScreen.style.display = 'none';
};

const initializeApp = () => {
    setupFuse();
    hideLoadingScreen();
    // Inicia na seção inicial
    handleSectionChange('meridianos');
    updateFavCount();
    updateFavoriteButtons();
};

// Menu Mobile
const openMenu = () => {
    mobileMenuOverlay.classList.add('open');
};

const closeMenu = () => {
    mobileMenuOverlay.classList.remove('open');
};

// Pesquisa
const openSearch = () => {
    mobileSearchOverlay.classList.add('open');
    mobileSearchInput.focus();
};

const closeSearch = () => {
    mobileSearchOverlay.classList.remove('open');
    searchResultsContainer.innerHTML = `<p class="text-center text-gray-500">Comece a escrever para ver os resultados.</p>`;
};

// Favoritos
const updateFavCount = () => {
    const count = Object.keys(favorites).length;
    favCountSpan.textContent = count;
    favCountSpan.classList.toggle('hidden', count === 0);
};

const toggleFavorite = (itemData) => {
    const { id, title, type, color, sectionId } = itemData;
    if (favorites[id]) {
        delete favorites[id];
    } else {
        favorites[id] = { id, title, type, color, sectionId };
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
    updateFavCount();
    updateFavList();
    updateFavoriteButtons();
};

const updateFavoriteButtons = () => {
    document.querySelectorAll('.favorite-toggle-btn').forEach(button => {
        const itemId = button.dataset.id;
        if (favorites[itemId]) {
            button.classList.add('active');
            button.innerHTML = `<svg class="w-5 h-5"><use href="#icon-star-filled"></use></svg>`;
        } else {
            button.classList.remove('active');
            button.innerHTML = `<svg class="w-5 h-5"><use href="#icon-star-outline"></use></svg>`;
        }
    });
};

const updateFavList = () => {
    favList.innerHTML = '';
    const favItems = Object.values(favorites);
    if (favItems.length === 0) {
        favList.innerHTML = `<p class="p-4 text-sm text-gray-500">Nenhum favorito adicionado.</p>`;
    } else {
        favItems.forEach(item => {
            const li = document.createElement('li');
            li.className = 'favorite-item flex items-center justify-between p-2 hover:bg-gray-50 cursor-pointer';
            li.dataset.id = item.id;
            li.dataset.type = item.type;
            li.dataset.sectionId = item.sectionId;
            if (item.parentId) { li.dataset.parentId = item.parentId; }

            const itemTitle = document.createElement('span');
            itemTitle.className = 'text-sm font-medium flex-1 truncate';
            itemTitle.textContent = item.title;

            const removeBtn = document.createElement('button');
            removeBtn.className = 'remove-favorite-btn p-1';
            removeBtn.innerHTML = `<svg class="w-4 h-4"><use href="#icon-close"></use></svg>`;
            removeBtn.onclick = (e) => {
                e.stopPropagation();
                toggleFavorite(item);
            };

            li.appendChild(itemTitle);
            li.appendChild(removeBtn);
            favList.appendChild(li);
        });
    }
};

const toggleFavDropdown = () => {
    favDropdown.classList.toggle('hidden');
    if (!favDropdown.classList.contains('hidden')) {
        updateFavList();
    }
};

// Modal de Conteúdo
const openContentModal = (contentHTML, itemDataForFavorite) => {
    contentModalContent.innerHTML = contentHTML;
    contentModal.classList.add('open');

    // Configurar botão de favoritos no modal
    const favBtn = document.getElementById('content-modal-favorite-btn');
    favBtn.dataset.id = itemDataForFavorite.id;
    favBtn.dataset.title = itemDataForFavorite.title;
    favBtn.dataset.type = itemDataForFavorite.type;
    favBtn.dataset.color = itemDataForFavorite.color || generateRandomColor();
    favBtn.dataset.sectionId = itemDataForFavorite.sectionId;

    if (favorites[itemDataForFavorite.id]) {
        favBtn.innerHTML = `<svg class="w-6 h-6 text-yellow-400"><use href="#icon-star-filled"></use></svg>`;
    } else {
        favBtn.innerHTML = `<svg class="w-6 h-6 text-gray-400"><use href="#icon-star-outline"></use></svg>`;
    }
};

const closeContentModal = () => {
    contentModal.classList.remove('open');
};

// Lida com a mudança de seção
const handleSectionChange = (sectionId) => {
    const section = sectionMap[sectionId];
    if (section) {
        currentSectionTitle.textContent = section.title;
        contentArea.innerHTML = ''; // Limpa o conteúdo anterior
        
        if (section.data && section.data.length > 0) {
            if (section.renderer === renderMeridianContent) {
                 // Renderiza a lista de meridianos
                contentArea.innerHTML = `
                    <div class="px-4 py-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        ${section.data.map(item => `
                            <div class="card bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer" data-id="${item.id}" data-type="Meridiano">
                                <div class="flex items-center space-x-4">
                                    <div class="w-10 h-10 rounded-full flex-shrink-0" style="background-color: ${item.color};"></div>
                                    <h4 class="text-xl font-semibold">${item.name}</h4>
                                </div>
                                <p class="text-sm text-gray-500 mt-2">${item.description.split('.')[0]}.</p>
                            </div>
                        `).join('')}
                    </div>
                `;
            } else {
                // Renderiza o conteúdo como um cartão clicável
                 contentArea.innerHTML = `
                    <div class="px-4 py-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        ${section.data.map((item, index) => {
                            const itemId = item.id || index;
                            const title = item.title || item.name;
                            const description = item.description || (Object.values(item)[1]);
                            return `
                                <div class="card bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer" data-id="${itemId}" data-type="${section.title}">
                                    <h4 class="text-xl font-semibold">${title}</h4>
                                    <p class="text-sm text-gray-500 mt-2">${description.split('.')[0]}.</p>
                                </div>
                            `;
                        }).join('')}
                    </div>
                 `;
            }
        } else {
            contentArea.innerHTML = `<div class="p-6 text-center text-gray-500">Conteúdo não encontrado para esta seção.</div>`;
        }
        
        // Remove a classe 'active' de todos os botões e adiciona ao botão clicado
        document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
        const activeItem = document.querySelector(`[data-section="${sectionId}"]`);
        if (activeItem) {
            activeItem.classList.add('active');
        }
    }
};

// --- Funções de Eventos ---

// Lida com o clique de navegação
function handleNavigationClick(event) {
    // Check if this is a touchend event, and prevent default behavior to avoid "ghost clicks"
    if (event.type === 'touchend') {
      event.preventDefault();
    }
    const navItem = event.target.closest('a.nav-item');
    if (navItem) {
        const sectionId = navItem.dataset.section;
        handleSectionChange(sectionId);
        // Fecha o menu móvel se estiver aberto
        if (mobileMenuOverlay.classList.contains('open')) {
            closeMenu();
        }
    }
}

// Lida com a busca de conteúdo
const handleSearch = (event) => {
    const query = event.target.value;
    searchResultsContainer.innerHTML = '';

    if (query.length > 1) {
        const results = fuse.search(query).slice(0, 10);
        if (results.length > 0) {
            const resultsHTML = results.map(result => {
                const item = result.item;
                return `
                    <div class="search-result-item bg-gray-100 p-3 mb-2 rounded-lg cursor-pointer hover:bg-gray-200" data-id="${item.id}" data-type="${item.type}">
                         <div class="flex items-center space-x-2">
                             ${item.color ? `<div class="w-4 h-4 rounded-full flex-shrink-0" style="background-color: ${item.color};"></div>` : ''}
                             <div class="flex-1">
                                 <h4 class="text-sm font-semibold">${item.title}</h4>
                                 <p class="text-xs text-gray-500">${item.type}</p>
                             </div>
                         </div>
                    </div>
                `;
            }).join('');
            searchResultsContainer.innerHTML = resultsHTML;
        } else {
            searchResultsContainer.innerHTML = `<p class="text-center text-gray-500">Nenhum resultado encontrado para "${query}".</p>`;
        }
    } else {
        searchResultsContainer.innerHTML = `<p class="text-center text-gray-500">Comece a escrever para ver os resultados.</p>`;
    }
};

// --- Inicialização e Event Listeners ---
document.addEventListener('DOMContentLoaded', () => {
    showLoadingScreen();

    // Adiciona o event listener para touchend no menu móvel
    mobileNavHub.addEventListener('touchend', handleNavigationClick);
    
    // Adiciona o event listener para click nos hubs de navegação
    allNavHubs.forEach(navHub => {
        navHub.addEventListener('click', handleNavigationClick);
    });

    openMenuBtn.addEventListener('click', openMenu);
    closeMenuBtn.addEventListener('click', closeMenu);
    mobileMenuOverlay.addEventListener('click', (event) => {
        // Fechar o menu apenas se o clique for no overlay e não no menu em si
        if (event.target === mobileMenuOverlay) {
            closeMenu();
        }
    });
    
    // Event listeners para pesquisa
    openSearchMobileBtn.addEventListener('click', openSearch);
    closeSearchBtn.addEventListener('click', closeSearch);
    mobileSearchInput.addEventListener('input', handleSearch);
    desktopSearchInput.addEventListener('input', handleSearch);

    // Event listeners para o modal de conteúdo
    contentModalCloseBtn.addEventListener('click', closeContentModal);
    document.getElementById('content-modal-overlay').addEventListener('click', closeContentModal);
    
    // Event listener para o botão de favoritar no modal
    document.getElementById('content-modal-favorite-btn').addEventListener('click', (e) => {
        const btn = e.currentTarget;
        const itemData = {
            id: btn.dataset.id,
            title: btn.dataset.title,
            type: btn.dataset.type,
            color: btn.dataset.color,
            sectionId: btn.dataset.sectionId
        };
        toggleFavorite(itemData);
    });
    
    // Event listeners para favoritos
    favBtn.addEventListener('click', toggleFavDropdown);
    favDropdown.addEventListener('click', (e) => {
        const item = e.target.closest('.favorite-item');
        if (item) {
            const { id, type, sectionId, parentId } = item.dataset;
            closeMenu();
            closeFavDropdown();
            // Lógica para abrir o item favorito
            if (type === 'Meridiano') {
                const itemInfo = meridianData.find(d => d.id === id);
                if (itemInfo) {
                    const contentHTML = renderMeridianContent(itemInfo);
                    openContentModal(contentHTML, favorites[id]);
                }
            } else if (type === 'Ponto') {
                const parentMeridian = meridianData.find(m => m.id === parentId);
                if (parentMeridian) {
                    const contentHTML = renderMeridianContent(parentMeridian);
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
                        openContentModal(contentHTML, favorites[id]);
                    }
                }
            }
        }
    });

    // Event listener para os cards de conteúdo
    contentArea.addEventListener('click', (e) => {
        const card = e.target.closest('.card');
        if (card) {
            const { id, type } = card.dataset;
            const mapping = itemTypeMap[type];
            if (mapping) {
                // Acha o item na lista de dados
                const itemInfo = mapping.data.find(d => d.id === id);
                if (itemInfo) {
                    const contentHTML = mapping.renderer(itemInfo);
                    const favItemData = {
                        id: `Meridiano-${itemInfo.id}`,
                        title: itemInfo.name,
                        type: 'Meridiano',
                        color: itemInfo.color,
                        sectionId: 'meridianos'
                    };
                    openContentModal(contentHTML, favItemData);
                }
            }
        }
    });

    // Lidar com o clique nos pontos de acupuntura dentro do modal
    contentModalContent.addEventListener('click', (e) => {
        const pointItem = e.target.closest('.point-item');
        if (pointItem) {
             const { id, parentId, type } = pointItem.dataset;
             const favItemData = {
                 id: id,
                 title: pointItem.querySelector('span').textContent.split(':')[0],
                 type: type,
                 color: meridianData.find(m => m.id === parentId)?.color,
                 sectionId: 'meridianos'
             };
             const parentMeridian = meridianData.find(m => m.id === parentId);
             const pointInfo = parentMeridian.points.find(p => `Ponto-${p.id}` === id);
             const contentHTML = itemTypeMap['Ponto'].renderer({ ...pointInfo, parentId: parentMeridian.id, parentName: parentMeridian.name, parentColor: parentMeridian.color });
             openContentModal(contentHTML, favItemData);
        }
    });

    initializeApp();
});
