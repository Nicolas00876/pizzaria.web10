/* ========================================================================
   ===== CONFIGURAÇÕES EDITÁVEIS =====
   Edite aqui o telefone/WhatsApp, taxas, frete grátis e horários de atendimento
   ======================================================================== */
const WHATSAPP_NUMBER = "5544998212660";
const PHONE_DISPLAY = "(44) 99821-2660";
const FRETE_GRATIS_A_PARTIR_DE = 80.00;
const TAXA_ENTREGA_PADRAO = 6.00;
const DESCONTO_RETIRADA_PERCENTUAL = 0.10;
const DESCONTO_TERCA_DOBRO_PERCENTUAL = 0.50;
const TAMANHO_PADRAO = 'G';
const STORAGE_KEY = 'montese_pizzaria_cart_v2';
const TOAST_DURATION_MS = 2600;
const HERO_AUTOPLAY_INTERVAL_MS = 6000; // Tempo em milissegundos para troca automática de pizza no hero (6 segundos)

// Configuração do Pagamento via Pix Estático (QR Code + Copia e Cola)
// PREENCHER PIX_CHAVE E PIX_NOME_RECEBEDOR PARA ATIVAR O PIX
const PIX_CHAVE = "44998212660";           // chave Pix da pizzaria (CPF/CNPJ, e-mail, telefone ou aleatória)
const PIX_NOME_RECEBEDOR = "Rafael Luiz Ribeiro";  // nome do recebedor, até 25 caracteres, sem acentos, em maiúsculas
const PIX_CIDADE = "PALOTINA";  // até 15 caracteres, sem acentos, em maiúsculas
const PIX_LIMITE_MINUTOS = 30;  // texto informativo: tempo sugerido para pagar

// Ponto de corte único entre celular (< 768px) e PC/Tablet (>= 768px)
const BREAKPOINT_DESKTOP = 768;

/* ========================================================================
   ===== PEDIDO RÁPIDO NO CELULAR (< 768px): CONSTANTES EDITÁVEIS =====
   Nada disto é usado no PC/Tablet (>= 768px).
   (O tamanho padrão do cardápio é a constante TAMANHO_PADRAO, no topo deste arquivo.)
   ======================================================================== */
const BANNER_AUTOPLAY_MS = 0;     // Autoplay do carrossel de banner (0 = desligado por padrão; altere para milissegundos, ex: 5000)
const BOTTOM_BAR_CONFIG = {
  height: 68,                     // Altura da barra inferior em pixels (além da safe-area)
  cartBtnSize: 46                 // Diâmetro do botão central elevado do carrinho
};
const TAMANHO_STORAGE_KEY = 'montese_pizzaria_size_v1'; // Tamanho global salvo à parte do carrinho
const SEARCH_DEBOUNCE_MS = 150;   // Espera após a última tecla antes de filtrar a lista
const TOQUE_MINIMO_PX = 44;       // Alvo de toque mínimo (vai para o CSS como --toque-minimo)
const THUMB_LISTA_PX = 72;        // Lado da foto quadrada da linha compacta (vai para o CSS como --lista-thumb)
const VIBRACAO_MS = 10;           // Vibração curta ao adicionar/remover (quando o aparelho suporta)
const VOLTAR_TOPO_TELAS = 1;      // Quantas alturas de tela rolar dentro do cardápio antes de mostrar o "↑"

// Constantes da Etapa 2 e Ajuste Final Mobile (< 768px)
const MOSTRAR_STATUS_NO_HEADER = true; // Pontinho de 8px (verde/cinza) ao lado do logo no header
const OFERTA_DESTAQUE_MOBILE_ID = 'of-combo-familia'; // ID do Combo Família exibido como oferta única no celular

// Tamanhos de pizza (mesmos da legenda do HTML): código, nome e fatias
const TAMANHOS_PIZZA = [
  { codigo: 'P', nome: 'Brotinho', fatias: 4 },
  { codigo: 'M', nome: 'Média', fatias: 6 },
  { codigo: 'G', nome: 'Grande', fatias: 8 },
  { codigo: 'GG', nome: 'Família', fatias: 12 }
];

// Visibilidade de seções no celular (< 768px). No PC e Tablet (>= 768px) todas ficam 100% visíveis.
// Altere true/false para ligar ou desligar qualquer seção no celular:
const SECOES_NO_CELULAR = {
  destaques: false,
  ofertas: false,
  cardapio: true,
  sobre: false,
  avaliacoes: false,
  comoPedir: true,
  localizacao: true
};

// Horários de Funcionamento da Pizzaria
// Terça a Domingo das 18h00 às 23h30 | Segunda fechado
const HORARIOS_FUNCIONAMENTO = {
  horaAbertura: 18,
  minutoAbertura: 0,
  horaFechamento: 23,
  minutoFechamento: 30,
  // 0 = Domingo, 1 = Segunda, 2 = Terça, 3 = Quarta, 4 = Quinta, 5 = Sexta, 6 = Sábado
  diasFechados: [1]
};

const CONFIG = {
  whatsappNumber: WHATSAPP_NUMBER,
  phoneDisplay: PHONE_DISPLAY,
  deliveryFee: TAXA_ENTREGA_PADRAO,
  freeShippingThreshold: FRETE_GRATIS_A_PARTIR_DE,
  storageKey: STORAGE_KEY
};

/* ========================================================================
   ========================================================================
   OFERTAS (SUBSTITUIR PELOS DADOS REAIS)
   - diaDaSemana: 0 (Dom), 1 (Seg), 2 (Ter), 3 (Qua), 4 (Qui), 5 (Sex), 6 (Sáb) ou null (Todos os dias)
   - tipo: 'combo' | 'desconto' | 'frete'
   ========================================================================
   ======================================================================== */
const OFFERS_ITEMS = [
  {
    id: 'of-combo-familia',
    titulo: 'Combo Família',
    descricao: '1 pizza grande (sabor tradicional) + 1 pizza broto doce + refrigerante 2L.',
    itensInclusos: '1x Pizza Grande Tradicional + 1x Pizza Broto Doce + 1x Refrigerante 2L',
    precoDe: 89.90, // [EXEMPLO - SUBSTITUIR]
    precoPor: 79.90, // [EXEMPLO - SUBSTITUIR]
    badge: 'Combo',
    diaDaSemana: null,
    regras: 'Válido todos os dias para delivery, retirada ou salão. Informe os sabores desejados nas observações.',
    tipo: 'combo'
  },
  {
    id: 'of-combo-casal',
    titulo: 'Combo Casal',
    descricao: '1 pizza média (sabor tradicional) + 2 refrigerantes em lata 350ml.',
    itensInclusos: '1x Pizza Média Tradicional + 2x Refrigerantes Lata 350ml',
    precoDe: 62.00, // [EXEMPLO - SUBSTITUIR]
    precoPor: 54.90, // [EXEMPLO - SUBSTITUIR]
    badge: 'Combo',
    diaDaSemana: null,
    regras: 'Válido todos os dias. Informe o sabor da pizza e das latas nas observações do pedido.',
    tipo: 'combo'
  },
  {
    id: 'of-terca-dobro',
    titulo: 'Terça em Dobro',
    descricao: 'Na compra de 1 pizza grande, a segunda pizza grande tradicional sai com 50% de desconto.',
    precoDe: 136.00, // [EXEMPLO - SUBSTITUIR] Valor ref. 2 Pizzas G
    precoPor: 102.00, // [EXEMPLO - SUBSTITUIR] Valor ref. com 50% na 2ª
    destaqueCurto: '50% OFF na 2ª Pizza G',
    badge: 'Terça',
    diaDaSemana: 2, // Válido às terças-feiras
    regras: 'Válido às terças, delivery ou salão. Desconto aplicado automaticamente na pizza grande tradicional de menor valor.',
    tipo: 'desconto'
  },
  {
    id: 'of-quarta-doce',
    titulo: 'Quarta Doce',
    descricao: 'Na compra de qualquer pizza grande, ganhe 1 pizza broto doce de chocolate.',
    precoDe: 108.00, // [EXEMPLO - SUBSTITUIR] Valor ref. Pizza G + Broto Doce
    precoPor: 68.00,  // [EXEMPLO - SUBSTITUIR] Valor a partir de 1 Pizza G
    destaqueCurto: 'Broto Doce Grátis',
    badge: 'Quarta',
    diaDaSemana: 3, // Válido às quartas-feiras
    regras: 'Válido às quartas na compra de qualquer pizza grande (G) avulsa. Brinde adicionado automaticamente no carrinho.',
    tipo: 'desconto'
  },
  {
    id: 'of-retirada-10',
    titulo: 'Retirada com 10% OFF',
    descricao: 'Retirando seu pedido no balcão da Montese, ganhe 10% de desconto no total das pizzas.',
    precoDe: 72.00, // [EXEMPLO - SUBSTITUIR]
    precoPor: 64.80, // [EXEMPLO - SUBSTITUIR]
    destaqueCurto: '10% OFF nas Pizzas',
    badge: 'Retirada',
    diaDaSemana: null,
    regras: 'Válido todos os dias ao selecionar "Retirada" no carrinho. Aplicado sobre as pizzas avulsas do pedido.',
    tipo: 'desconto'
  },
  {
    id: 'of-frete-gratis',
    titulo: 'Frete Grátis',
    descricao: 'Em pedidos para entrega acima de R$ 80,00, a taxa de entrega é zerada automaticamente.',
    precoDe: 6.00, // [EXEMPLO - SUBSTITUIR]
    precoPor: 0.00,
    destaqueCurto: 'Taxa Zero (>R$ 80)',
    badge: 'Entrega',
    diaDaSemana: null,
    regras: 'Válido todos os dias em toda a área urbana de Palotina para pedidos de delivery a partir de R$ 80,00.',
    tipo: 'frete'
  },
  {
    id: 'of-domingo-familia',
    titulo: 'Domingo em Família',
    descricao: '2 pizzas grandes (sabores tradicionais) + 1 refrigerante 2L por preço especial.',
    itensInclusos: '2x Pizzas Grandes Tradicionais + 1x Refrigerante 2L',
    precoDe: 151.00, // [EXEMPLO - SUBSTITUIR]
    precoPor: 99.90,  // [EXEMPLO - SUBSTITUIR]
    badge: 'Domingo',
    diaDaSemana: 0, // Válido aos domingos
    regras: 'Válido aos domingos para delivery, retirada ou salão. Informe os sabores tradicionais nas observações.',
    tipo: 'combo'
  }
];

/* ========================================================================
   ========================================================================
   CARDÁPIO (SUBSTITUIR PELOS DADOS REAIS)
   ========================================================================
   ======================================================================== */
const MENU_ITEMS = [
  // --- PIZZAS TRADICIONAIS (7) ---
  {
    id: 'pz-calabresa',
    category: 'tradicionais',
    destaque: true,
    selo: 'Mais Pedida',
    destaqueHero: true,
    name: 'Calabresa Artesanal',
    description: 'Molho de tomate artesanal, muçarela derretida, calabresa fatiada defumada, cebola roxa em anéis, azeitonas pretas e orégano.',
    badge: 'Mais Pedida',
    image: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=600&q=80',
    prices: { P: 42.00, M: 56.00, G: 68.00, GG: 82.00 }
  },
  {
    id: 'pz-frango-catupiry',
    category: 'tradicionais',
    destaque: true,
    selo: 'Clássica',
    destaqueHero: true,
    name: 'Frango com Catupiry',
    description: 'Molho artesanal, muçarela, peito de frango desfiado e temperado na cozinha da Montese, coberto com generosa camada de Catupiry legítimo e orégano.',
    badge: 'Clássica',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80',
    prices: { P: 44.00, M: 58.00, G: 72.00, GG: 86.00 }
  },
  {
    id: 'pz-portuguesa',
    category: 'tradicionais',
    name: 'Portuguesa Clássica',
    description: 'Molho artesanal, muçarela, presunto magro, ovos cozidos, cebola, ervilhas frescas, palmito macio, azeitonas pretas e orégano.',
    badge: '',
    image: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=600&q=80',
    prices: { P: 44.00, M: 58.00, G: 72.00, GG: 86.00 }
  },
  {
    id: 'pz-marguerita',
    category: 'tradicionais',
    destaque: true,
    selo: 'Vegetariana',
    destaqueHero: true,
    name: 'Marguerita Verace',
    description: 'Molho de tomates selecionados, muçarela, rodelas de tomate fresco, lascas de parmesão e folhas de manjericão colhidas na hora.',
    badge: 'Vegetariana',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=600&q=80',
    prices: { P: 40.00, M: 54.00, G: 66.00, GG: 79.00 }
  },
  {
    id: 'pz-quatro-queijos',
    category: 'tradicionais',
    destaqueHero: true,
    name: 'Quatro Queijos',
    description: 'Molho artesanal, combinação cremosa de muçarela, Catupiry legítimo, provolone defumado, toque suave de gorgonzola e orégano.',
    badge: 'Vegetariana',
    image: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&w=600&q=80',
    prices: { P: 45.00, M: 60.00, G: 74.00, GG: 88.00 }
  },
  {
    id: 'pz-milho-bacon',
    category: 'tradicionais',
    name: 'Milho Cremoso com Bacon',
    description: 'Molho artesanal, muçarela, milho verde doce, cubos de bacon crocante dourados no forno e fios de Catupiry.',
    badge: '',
    image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=600&q=80',
    prices: { P: 43.00, M: 57.00, G: 70.00, GG: 84.00 }
  },
  {
    id: 'pz-napolitana',
    category: 'tradicionais',
    name: 'Napolitana com Alho Dourado',
    description: 'Molho de tomate artesanal, muçarela, tomates em rodelas, parmesão gratinado, alho frito crocante na medida certa e orégano.',
    badge: '',
    image: 'https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?auto=format&fit=crop&w=600&q=80',
    prices: { P: 40.00, M: 54.00, G: 66.00, GG: 79.00 }
  },

  // --- PIZZAS ESPECIAIS DA CASA (5) ---
  {
    id: 'pz-montese-especial',
    category: 'especiais',
    destaque: true,
    selo: 'Assinatura',
    name: 'Montese Especial',
    description: 'Nossa assinatura: molho artesanal, muçarela, lombo canadense, bacon em cubos, palmito selecionado, Catupiry legítimo e manjericão.',
    badge: 'Assinatura Montese',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80',
    prices: { P: 48.00, M: 64.00, G: 78.00, GG: 92.00 }
  },
  {
    id: 'pz-costela',
    category: 'especiais',
    destaque: true,
    selo: 'Sucesso',
    name: 'Costela Desfiada & Cebola',
    description: 'Molho artesanal, muçarela, costela bovina assada lentamente e desfiada, cebola caramelizada, requeijão cremoso e salsinha fresca.',
    badge: 'Sucesso',
    image: 'https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?auto=format&fit=crop&w=600&q=80',
    prices: { P: 50.00, M: 66.00, G: 82.00, GG: 96.00 }
  },
  {
    id: 'pz-palotina-suprema',
    category: 'especiais',
    name: 'Palotina Suprema',
    description: 'Homenagem à nossa terra: frango desfiado, calabresa defumada, bacon crocante, milho verde, muçarela e cobertura de Catupiry.',
    badge: 'Bem Recheada',
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=600&q=80',
    prices: { P: 48.00, M: 64.00, G: 78.00, GG: 92.00 }
  },
  {
    id: 'pz-parma-rucula',
    category: 'especiais',
    name: 'Rúcula, Tomate Seco & Búfala',
    description: 'Molho artesanal, muçarela, folhas de rúcula fresca, tomate seco selecionado, lascas de muçarela de búfala e fio de azeite.',
    badge: 'Leve & Gourmet',
    image: 'https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=600&q=80',
    prices: { P: 49.00, M: 65.00, G: 80.00, GG: 94.00 }
  },
  {
    id: 'pz-pepperoni-hot',
    category: 'especiais',
    destaqueHero: true,
    name: 'Pepperoni com Cream Cheese',
    description: 'Molho de tomate artesanal, camada dupla de muçarela, fatias generosas de pepperoni importado e medalhões de cream cheese.',
    badge: 'Especial',
    image: 'https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?auto=format&fit=crop&w=600&q=80',
    prices: { P: 49.00, M: 65.00, G: 79.00, GG: 93.00 }
  },

  // --- PIZZAS DOCES (4) ---
  {
    id: 'pz-morango-nutella',
    category: 'doces',
    destaque: true,
    selo: 'Mais Pedida',
    name: 'Sensação de Morango & Avelã',
    description: 'Base crocante com creme de leite, chocolate ao leite nobre derretido, morangos frescos fatiados e fios de creme de avelã.',
    badge: 'Favorita Doce',
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=600&q=80',
    prices: { P: 44.00, M: 58.00, G: 70.00, GG: 84.00 }
  },
  {
    id: 'pz-banana-nevada',
    category: 'doces',
    name: 'Banana Nevada Gratinada',
    description: 'Muçarela levemente salgada, bananas maduras fatiadas, açúcar com canela caramelizado no forno e cobertura de chocolate branco.',
    badge: '',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80',
    prices: { P: 40.00, M: 52.00, G: 64.00, GG: 76.00 }
  },
  {
    id: 'pz-prestigio',
    category: 'doces',
    name: 'Prestígio Artesanal',
    description: 'Creme de chocolate ao leite derretido, coco ralado úmido em flocos, leite condensado e cerejas selecionadas.',
    badge: '',
    image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=600&q=80',
    prices: { P: 42.00, M: 55.00, G: 67.00, GG: 80.00 }
  },
  {
    id: 'pz-romeu-julieta',
    category: 'doces',
    name: 'Romeu e Julieta Cremoso',
    description: 'Combinação clássica de muçarela, Catupiry legítimo e goiabada cascão derretida.',
    badge: 'Tradição',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=600&q=80',
    prices: { P: 40.00, M: 52.00, G: 64.00, GG: 76.00 }
  },

  // --- BEBIDAS (6) ---
  {
    id: 'beb-coca-2l',
    category: 'bebidas',
    name: 'Coca-Cola 2 Litros',
    description: 'Garrafa de 2 litros bem gelada (Tradicional ou Sem Açúcar - informe nas observações).',
    badge: 'Gelada',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=600&q=80',
    price: 15.00
  },
  {
    id: 'beb-guarana-2l',
    category: 'bebidas',
    name: 'Guaraná Antarctica 2 Litros',
    description: 'Garrafa de 2 litros bem gelada, ideal para acompanhar a pizza em família.',
    badge: 'Gelada',
    image: 'https://images.unsplash.com/photo-1581006852262-e4307cf6283a?auto=format&fit=crop&w=600&q=80',
    price: 14.00
  },
  {
    id: 'beb-coca-lata',
    category: 'bebidas',
    name: 'Coca-Cola Lata 350ml',
    description: 'Lata 350ml trincando de gelada (Tradicional ou Zero).',
    badge: '',
    image: 'https://images.unsplash.com/photo-1554866585-cd94860890b7?auto=format&fit=crop&w=600&q=80',
    price: 6.50
  },
  {
    id: 'beb-suco-laranja',
    category: 'bebidas',
    name: 'Suco Natural de Laranja 1L',
    description: 'Jarra/Garrafa de 1 litro de suco 100% natural, espremido no dia e sem conservantes.',
    badge: '100% Natural',
    image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=600&q=80',
    price: 18.00
  },
  {
    id: 'beb-heineken',
    category: 'bebidas',
    name: 'Cerveja Heineken Long Neck 330ml',
    description: 'Long neck 330ml super gelada (Venda proibida para menores de 18 anos).',
    badge: '',
    image: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&w=600&q=80',
    price: 11.00
  },
  {
    id: 'beb-agua',
    category: 'bebidas',
    name: 'Água Mineral 500ml',
    description: 'Garrafa de 500ml (Com gás ou sem gás).',
    badge: '',
    image: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=600&q=80',
    price: 4.50
  }
];

/* ========================================================================
   ===== UTILITÁRIOS (DOM, MOEDA E FUSO HORÁRIO) =====
   ======================================================================== */

// Seletor auxiliar de elemento por ID (DRY)
const $ = (id) => document.getElementById(id);

// Formatador oficial de moeda Real Brasileiro (BRL)
const currencyFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL'
});

function roundMoney(val) {
  return Math.round((val + Number.EPSILON) * 100) / 100;
}

function formatBRL(value) {
  return currencyFormatter.format(value);
}

// Retorna dia da semana e minuto atual no fuso oficial de Palotina/PR (America/Sao_Paulo)
function getSaoPauloTimeInfo() {
  const now = new Date();
  const formatter = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Sao_Paulo',
    weekday: 'short',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false
  });

  const parts = formatter.formatToParts(now);
  const timeMap = {};
  parts.forEach(part => { timeMap[part.type] = part.value; });

  const weekdayMap = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
  const dayIndex = weekdayMap[timeMap.weekday] !== undefined ? weekdayMap[timeMap.weekday] : now.getDay();
  const hour = parseInt(timeMap.hour, 10) % 24;
  const minute = parseInt(timeMap.minute, 10);

  return {
    weekdayShort: timeMap.weekday,
    dayIndex,
    totalMinutes: hour * 60 + minute
  };
}

/* ========================================================================
   ===== ESTADO CENTRALIZADO DA APLICAÇÃO E LOCALSTORAGE =====
   ======================================================================== */
const state = {
  cart: [],
  selectedSizes: {},
  currentCategory: 'todos',
  deliveryMode: 'entrega', // 'entrega' ou 'retirada'
  // Somente celular (< 768px): tamanho global da lista, trocas pontuais por item e texto da busca
  globalSize: TAMANHO_PADRAO,
  itemSizeOverrides: {},
  searchQuery: ''
};

// Carrega o carrinho salvo no navegador
function loadCartFromStorage() {
  try {
    const saved = localStorage.getItem(CONFIG.storageKey);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed)) {
        state.cart = parsed;
      }
    }
  } catch (error) {
    state.cart = [];
  }
}

// Salva o carrinho no navegador de forma resiliente
function saveCartToStorage() {
  try {
    localStorage.setItem(CONFIG.storageKey, JSON.stringify(state.cart));
  } catch (error) {
    // Falha silenciosa caso o armazenamento esteja bloqueado
  }
}

// Carrega o tamanho global da lista (celular); valor inválido ou storage bloqueado volta ao TAMANHO_PADRAO
function loadGlobalSizeFromStorage() {
  try {
    const saved = localStorage.getItem(TAMANHO_STORAGE_KEY);
    if (TAMANHOS_PIZZA.some(t => t.codigo === saved)) {
      state.globalSize = saved;
    }
  } catch (error) {
    state.globalSize = TAMANHO_PADRAO;
  }
}

function saveGlobalSizeToStorage() {
  try {
    localStorage.setItem(TAMANHO_STORAGE_KEY, state.globalSize);
  } catch (error) {
    // Falha silenciosa caso o armazenamento esteja bloqueado
  }
}

/* ========================================================================
   ===== GAVETAS, MENUS E INTERFACE (DRY) =====
   ======================================================================== */

// Abre ou fecha o drawer lateral do carrinho
function toggleCartDrawer(isOpen) {
  const drawer = $('cartDrawer');
  const overlay = $('cartOverlay');
  if (!drawer || !overlay) return;

  drawer.classList.toggle('open', isOpen);
  overlay.classList.toggle('open', isOpen);
  drawer.setAttribute('aria-hidden', String(!isOpen));
}

function openCartDrawer() {
  toggleCartDrawer(true);
}

function closeCartDrawer() {
  toggleCartDrawer(false);
}

// Abre ou fecha o menu hambúrguer no mobile
function toggleMobileNav(isOpen) {
  const mobileNav = $('mobileNav');
  const mobileMenuBtn = $('mobileMenuBtn');
  if (!mobileNav || !mobileMenuBtn) return;

  const targetState = (typeof isOpen === 'boolean') ? isOpen : !mobileNav.classList.contains('open');
  mobileNav.classList.toggle('open', targetState);
  mobileMenuBtn.setAttribute('aria-expanded', String(targetState));
}

// Sincroniza todos os links do site com o telefone e WhatsApp oficial
function syncPhoneLinks() {
  document.querySelectorAll('[data-wa-link]').forEach(el => {
    const currentHref = el.getAttribute('href') || '';
    const textParamIndex = currentHref.indexOf('?text=');
    const query = textParamIndex !== -1 ? currentHref.slice(textParamIndex) : '';
    el.setAttribute('href', `https://wa.me/${WHATSAPP_NUMBER}${query}`);
  });

  document.querySelectorAll('[data-tel-link]').forEach(el => {
    el.setAttribute('href', `tel:+${WHATSAPP_NUMBER}`);
  });
}

/* ========================================================================
   ===== STATUS ABERTO / FECHADO =====
   ======================================================================== */
function updateStoreStatus() {
  const badges = [
    { badge: $('storeStatusBadge'), text: $('storeStatusText') },
    { badge: $('storeStatusBadgeMobile'), text: $('storeStatusBadgeMobile')?.querySelector('.store-status-text') }
  ];

  try {
    const { dayIndex, totalMinutes } = getSaoPauloTimeInfo();
    const openTime = HORARIOS_FUNCIONAMENTO.horaAbertura * 60 + HORARIOS_FUNCIONAMENTO.minutoAbertura;
    const closeTime = HORARIOS_FUNCIONAMENTO.horaFechamento * 60 + HORARIOS_FUNCIONAMENTO.minutoFechamento;
    const isClosedDay = HORARIOS_FUNCIONAMENTO.diasFechados.includes(dayIndex);
    const isOpen = !isClosedDay && (totalMinutes >= openTime && totalMinutes <= closeTime);

    let statusText = '';
    if (isOpen) {
      statusText = 'Aberto agora • Atendimento até 23h30';
    } else if (isClosedDay) {
      statusText = 'Fechado hoje (Segunda) • Abriremos terça às 18h';
    } else if (totalMinutes < openTime) {
      statusText = 'Fechado agora • Abrimos hoje às 18h00';
    } else {
      statusText = 'Fechado agora • Atendemos de terça a domingo das 18h às 23h30';
    }

    badges.forEach(({ badge, text }) => {
      if (!badge) return;
      badge.classList.toggle('is-open', isOpen);
      badge.classList.toggle('is-closed', !isOpen);
      if (text) text.textContent = statusText;
    });

    // Pontinho de status no header ao lado do logo (somente celular)
    const headerDot = $('headerStatusDot');
    if (headerDot) {
      if (!MOSTRAR_STATUS_NO_HEADER) {
        headerDot.style.display = 'none';
      } else {
        headerDot.style.display = '';
        headerDot.classList.toggle('is-open', isOpen);
        headerDot.classList.toggle('is-closed', !isOpen);
        headerDot.setAttribute('aria-label', isOpen ? 'Aberto agora' : 'Fechado · abre às 18h00');
      }
    }
  } catch (err) {
    badges.forEach(({ badge, text }) => {
      if (text) text.textContent = 'Terça a Domingo • 18h às 23h30';
    });
    const headerDot = $('headerStatusDot');
    if (headerDot && MOSTRAR_STATUS_NO_HEADER) {
      headerDot.style.display = '';
      headerDot.classList.toggle('is-open', false);
      headerDot.classList.toggle('is-closed', true);
      headerDot.setAttribute('aria-label', 'Fechado · abre às 18h00');
    }
  }
}

/* ========================================================================
   ===== REGRAS DE DESCONTO E CÁLCULO PURO DO PEDIDO =====
   DOCUMENTAÇÃO DAS REGRAS DE ACÚMULO E DESCONTO:
   1. Terça em Dobro (somente às terças): a cada par de pizzas Grandes (G) avulsas,
      aplica 50% de desconto na pizza G tradicional de menor valor.
   2. Quarta Doce (somente às quartas): tendo ao menos 1 pizza Grande (G) avulsa,
      ganha 1x Pizza Broto Doce de Chocolate de brinde (R$ 0,00).
   3. Retirada 10% OFF: ao selecionar "Retirada", aplica 10% sobre a base líquida
      das pizzas avulsas (após Terça em Dobro; não incide em combos ou bebidas).
   4. Frete Grátis: exclusivo para "Entrega" quando o subtotal bruto atinge R$ 80,00.
   Ordem de cálculo: Subtotal Bruto -> Terça em Dobro -> Retirada 10% -> Frete -> Total Final.
   ======================================================================== */
function calculateOrderSummary() {
  const { dayIndex } = getSaoPauloTimeInfo();
  const subtotal = state.cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  const discounts = [];
  const freebies = [];

  // Agrupa pizzas avulsas para aplicação precisa dos descontos
  const largePizzas = [];
  const largeTraditionalPizzas = [];
  let allIndividualPizzasTotal = 0;

  state.cart.forEach(item => {
    const isPizza = !item.isCombo && ['tradicionais', 'especiais', 'doces'].includes(item.category);
    if (!isPizza) return;

    allIndividualPizzasTotal += item.price * item.quantity;
    if (item.size === 'G') {
      for (let i = 0; i < item.quantity; i++) {
        largePizzas.push(item.price);
        if (item.category === 'tradicionais') {
          largeTraditionalPizzas.push(item.price);
        }
      }
    }
  });

  // 1. Regra Terça em Dobro
  let tuesdayDiscountAmount = 0;
  if (dayIndex === 2 && largePizzas.length >= 2 && largeTraditionalPizzas.length >= 1) {
    const pairsCount = Math.floor(largePizzas.length / 2);
    const sortedTrad = [...largeTraditionalPizzas].sort((a, b) => a - b);
    const discountedCount = Math.min(pairsCount, sortedTrad.length);

    for (let i = 0; i < discountedCount; i++) {
      tuesdayDiscountAmount += sortedTrad[i] * DESCONTO_TERCA_DOBRO_PERCENTUAL;
    }
    tuesdayDiscountAmount = roundMoney(tuesdayDiscountAmount);

    if (tuesdayDiscountAmount > 0) {
      discounts.push({
        label: 'Desconto Terça em Dobro (50% na 2ª G)',
        amount: tuesdayDiscountAmount
      });
    }
  }

  // 2. Regra Quarta Doce
  if (dayIndex === 3 && largePizzas.length >= 1) {
    freebies.push({
      label: 'Brinde Quarta Doce (1x Broto Doce Chocolate)',
      displayValue: 'Grátis (R$ 0,00)'
    });
  }

  // 3. Regra Retirada com 10% OFF
  let pickupDiscountAmount = 0;
  if (state.deliveryMode === 'retirada') {
    const eligiblePizzaBase = Math.max(0, allIndividualPizzasTotal - tuesdayDiscountAmount);
    if (eligiblePizzaBase > 0) {
      pickupDiscountAmount = roundMoney(eligiblePizzaBase * DESCONTO_RETIRADA_PERCENTUAL);
      discounts.push({
        label: 'Desconto Retirada (10% nas pizzas)',
        amount: pickupDiscountAmount
      });
    }
  }

  const totalDiscount = roundMoney(discounts.reduce((acc, d) => acc + d.amount, 0));

  // 4. Regra Frete Grátis
  const isFreeShippingUnlocked = (state.deliveryMode === 'entrega' && subtotal >= CONFIG.freeShippingThreshold);
  const deliveryFee = (state.deliveryMode === 'entrega')
    ? (isFreeShippingUnlocked ? 0 : CONFIG.deliveryFee)
    : 0;

  const finalTotal = roundMoney(Math.max(0, subtotal - totalDiscount + deliveryFee));

  return {
    subtotal,
    discounts,
    freebies,
    totalDiscount,
    deliveryFee,
    isFreeShippingUnlocked,
    finalTotal
  };
}

/* ========================================================================
   ===== RENDERIZAÇÃO NA TELA (UI) =====
   ======================================================================== */

// Atualiza o aviso de oferta ativa no cardápio e no carrinho
function activateOfferNotice(message) {
  const menuBanner = $('activeOfferBanner');
  const menuBannerText = $('activeOfferBannerText');
  const cartNotice = $('cartPromoNotice');

  if (menuBanner && menuBannerText) {
    menuBannerText.textContent = message;
    menuBanner.classList.add('show');
  }
  if (cartNotice) {
    cartNotice.textContent = message;
    cartNotice.classList.add('show');
  }
}

// Renderiza os cards de ofertas destacando a oferta do dia
function renderOffers() {
  const container = $('offersContainer');
  if (!container) return;

  const { dayIndex } = getSaoPauloTimeInfo();

  // Ordena colocando a oferta do dia em primeiro lugar
  const sortedOffers = [...OFFERS_ITEMS].sort((a, b) => {
    const aIsToday = (a.diaDaSemana !== null && a.diaDaSemana === dayIndex) ? 1 : 0;
    const bIsToday = (b.diaDaSemana !== null && b.diaDaSemana === dayIndex) ? 1 : 0;
    return bIsToday - aIsToday;
  });

  container.innerHTML = sortedOffers.map(offer => {
    const isTodayOffer = (offer.diaDaSemana !== null && offer.diaDaSemana === dayIndex);
    const todayBadgeHTML = isTodayOffer ? '<span class="offer-badge-today">★ Oferta de hoje</span>' : '';
    const pillHTML = offer.destaqueCurto
      ? `<span class="offer-price-pill">${offer.destaqueCurto}</span>`
      : `<span class="offer-price-pill">Economize ${formatBRL(offer.precoDe - offer.precoPor)}</span>`;

    return `
      <article class="offer-card ${isTodayOffer ? 'is-today-offer' : ''}" data-offer-id="${offer.id}">
        <div class="tricolor-bar" aria-hidden="true"></div>
        <div class="offer-card-body">
          <div class="offer-badges-row">
            <span class="offer-badge">${offer.badge}</span>
            ${todayBadgeHTML}
          </div>
          <h3 class="offer-title">${offer.titulo}</h3>
          <p class="offer-desc">${offer.descricao}</p>
          <div class="offer-pricing">
            <span class="offer-price-old">De ${formatBRL(offer.precoDe)}</span>
            <div class="offer-price-new-row">
              <span class="offer-price-new">Por ${formatBRL(offer.precoPor)}</span>
              ${pillHTML}
            </div>
          </div>
          <p class="offer-rules">${offer.regras}</p>
          <button type="button" class="btn-offer-cta" data-action="select-offer" data-offer-id="${offer.id}" aria-label="Pedir oferta ${offer.titulo}">
            Pedir esta oferta
          </button>
        </div>
      </article>
    `;
  }).join('');
}

/* ------------------------------------------------------------------------
   Cálculos puros do cardápio (sem tocar no DOM)
   ------------------------------------------------------------------------ */

// Mesma consulta de mídia usada pelo watcher de layout: abaixo de 768px o cardápio vira lista compacta
const desktopMediaQuery = window.matchMedia(`(min-width: ${BREAKPOINT_DESKTOP}px)`);

function isCompactLayout() {
  return !desktopMediaQuery.matches;
}

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

// Normaliza texto para a busca: minúsculas, sem acentos e com grafias equivalentes
// ("calabreza" = "calabresa", "mussarela" = "muçarela"), para o cliente achar o sabor mesmo errando a letra.
function foldText(text) {
  return String(text)
    .toLowerCase()
    .replace(/ç/g, 's')
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/c(?=[ei])/g, 's')
    .replace(/z/g, 's')
    .replace(/([a-z])\1+/g, '$1');
}

// Índice de busca montado uma única vez a partir do próprio array do cardápio (sem duplicar dados).
// Inclui nome, ingredientes/descrição, categoria e palavras-chave (bebida/pizza) para busca completa.
const MENU_SEARCH_INDEX = new Map(
  MENU_ITEMS.map(item => [
    item.id,
    foldText(`${item.name} ${item.description || ''} ${item.category || ''} ${item.category === 'bebidas' ? 'bebida bebidas' : ''} ${item.prices ? 'pizza pizzas' : ''}`)
  ])
);

// Seções fixas do cardápio contínuo no celular (< 768px), na ordem oficial dos dados
const MENU_SECTIONS = [
  { id: 'tradicionais', name: 'Pizzas Tradicionais' },
  { id: 'especiais', name: 'Especiais Montese' },
  { id: 'doces', name: 'Pizzas Doces' },
  { id: 'bebidas', name: 'Bebidas' }
];

// Gera a lista contínua com título por categoria para o celular (< 768px)
function renderContinuousMenuHTML() {
  return `
    <div class="menu-continuous-list">
      ${MENU_SECTIONS.map(section => {
    const sectionItems = MENU_ITEMS.filter(item => item.category === section.id);
    // Itens com selo ou destaque continuam aparecendo primeiro dentro da seção
    sectionItems.sort((a, b) => ((b.destaque || b.selo) ? 1 : 0) - ((a.destaque || a.selo) ? 1 : 0));

    return `
          <section class="menu-category-section" id="categoria-${section.id}" data-category="${section.id}">
            <div class="menu-category-header">
              <h3 class="menu-category-title">${section.name}</h3>
            </div>
            <div class="menu-category-items">
              ${sectionItems.map(item => renderMenuItem(item, true)).join('')}
            </div>
          </section>
        `;
  }).join('')}
    </div>
  `;
}

// Itens do cardápio: no PC filtra por categoria; no celular (< 768px), com busca ativa gera
// UMA lista plana de resultados com todos os itens correspondentes (inclusive bebidas), respeitando o tamanho global.
// Sem busca ativa, retorna os itens da categoria selecionada (com itens em destaque primeiro no celular).
function getVisibleMenuItems(compact) {
  const byCategory = MENU_ITEMS.filter(item => {
    if (state.currentCategory === 'todos') return true;
    return item.category === state.currentCategory;
  });
  if (!compact) return byCategory;

  const terms = foldText(state.searchQuery).split(' ').filter(Boolean);
  if (terms.length === 0) {
    // No celular: itens com destaque: true aparecem primeiro dentro da categoria
    return [...byCategory].sort((a, b) => (b.destaque ? 1 : 0) - (a.destaque ? 1 : 0));
  }

  // Busca ativa: lista plana em todo o cardápio (itens em destaque primeiro)
  return MENU_ITEMS.filter(item => {
    const haystack = MENU_SEARCH_INDEX.get(item.id) || '';
    return terms.every(term => haystack.includes(term));
  }).sort((a, b) => (b.destaque ? 1 : 0) - (a.destaque ? 1 : 0));
}

// Tamanho efetivo do item. PC: escolha do próprio card (ou padrão). Celular: exceção do item ou tamanho global.
// Itens sem tamanho (bebidas) retornam null e ignoram o seletor.
function getEffectiveSize(item, compact) {
  if (!item.prices) return null;
  if (compact) return state.itemSizeOverrides[item.id] || state.globalSize;
  return state.selectedSizes[item.id] || TAMANHO_PADRAO;
}

function getUnitPrice(item, size) {
  return item.prices ? item.prices[size] : item.price;
}

function buildCartKey(product, size) {
  return product.prices ? `${product.id}_${size}` : product.id;
}

// Rótulo falado/lido do item, usado nos aria-label e nos avisos para leitores de tela
function buildItemLabel(item, size) {
  return size ? `Pizza ${item.name} tamanho ${size}` : item.name;
}

function getCartQuantityMap() {
  return new Map(state.cart.map(entry => [entry.cartKey, entry.quantity]));
}

// Troca o parâmetro de largura da URL da foto para pedir uma imagem pequena (e quadrada) na lista
function buildThumbUrl(url, width) {
  if (!/[?&]w=\d+/.test(url)) return url;
  return url.replace(/([?&])w=\d+/, `$1w=${width}&h=${width}`);
}

/* ------------------------------------------------------------------------
   Peças de HTML do item do cardápio
   ------------------------------------------------------------------------ */
function buildBadgeHTML(item) {
  const isHighlightBadge = item.badge && (
    item.badge.includes('Assinatura') || item.badge.includes('Mais') ||
    item.badge.includes('Sucesso') || item.badge.includes('Favorita') || item.badge.includes('Especial')
  );
  return item.badge ? `<span class="card-tag ${isHighlightBadge ? 'tag-destaque' : ''}">${item.badge}</span>` : '';
}

// Foto reduzida da lista: nunca baixa a imagem grande do card (srcset 1x/2x/3x do quadrado de THUMB_LISTA_PX)
function buildThumbImageHTML(item) {
  const src = buildThumbUrl(item.image, THUMB_LISTA_PX * 2);
  const canResize = src !== item.image;
  const srcset = canResize
    ? ` srcset="${[1, 2, 3].map(m => `${buildThumbUrl(item.image, THUMB_LISTA_PX * m)} ${THUMB_LISTA_PX * m}w`).join(', ')}" sizes="${THUMB_LISTA_PX}px"`
    : '';
  return `<img src="${src}"${srcset} alt="${item.name}" width="${THUMB_LISTA_PX}" height="${THUMB_LISTA_PX}" loading="lazy" decoding="async">`;
}

// Preço estático da linha compacta no celular: sem seta, sem fundo e sem cara de botão.
// Pizzas mostram o valor e, abaixo em 12px, o tamanho lido do seletor global (ex.: "G · 8 fatias").
// Bebidas mostram apenas o valor unitário, sem rótulo de tamanho.
function buildCompactPriceHTML(item, size, price) {
  const priceFormatted = formatBRL(price);
  const priceHTML = `<span class="price-value" id="price-${item.id}">${priceFormatted}</span>`;

  if (!item.prices) {
    return `
      <div class="compact-price-box">
        ${priceHTML}
      </div>`;
  }

  const infoTamanho = TAMANHOS_PIZZA.find(t => t.codigo === size);
  const sizeDesc = infoTamanho ? `${size} · ${infoTamanho.fatias} fatias` : size;
  const sizeHTML = `<span class="compact-price-size">${sizeDesc}</span>`;

  return `
    <div class="compact-price-box">
      ${priceHTML}
      ${sizeHTML}
    </div>`;
}

// Controle de quantidade da linha. O "+" é o botão principal de 48x48px;
// no contador "− 1 +", ambos os botões têm no mínimo 44x44px com ícones SVG inline.
function buildItemControlHTML(item, size) {
  const label = buildItemLabel(item, size);
  return `
    <div class="item-control" data-cart-key="${buildCartKey(item, size)}">
      <button type="button" class="item-qty-btn item-qty-minus" data-action="remove-one" data-id="${item.id}" aria-label="Remover uma unidade de ${label}">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <line x1="5" y1="12" x2="19" y2="12"/>
        </svg>
      </button>
      <span class="item-qty">0</span>
      <button type="button" class="btn-add-item btn-add-item--compact" data-action="add-to-cart" data-id="${item.id}" aria-label="Adicionar ${label}">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <line x1="12" y1="5" x2="12" y2="19"/>
          <line x1="5" y1="12" x2="19" y2="12"/>
        </svg>
      </button>
    </div>`;
}

// Etiqueta pequena do item no celular para itens com selo secundário (ex.: "Clássica").
// CONFIRMAR COM A PIZZARIA QUAIS SÃO AS MAIS PEDIDAS ANTES DE USAR O SELO 'MAIS PEDIDA'
function buildCompactSeloHTML(item) {
  if (!item.destaque || !item.selo) return '';
  // Se for "Mais Pedida", o selo é renderizado atravessando a borda superior do card (fora do título)
  if (item.selo === 'Mais Pedida') return '';
  // Demais selos (ex.: "Clássica"): continuam como pílula discreta sob o nome, com contraste AA
  return `<span class="card-item-selo">${item.selo}</span>`;
}

// Etiqueta de destaque que atravessa a borda superior do card (top: -10px, left: 12px), alinhada à foto.
// Fundo #006B35, texto branco, peso 700, caixa alta, com ícone SVG de chama de 12px à esquerda.
// CONFIRMAR COM A PIZZARIA QUAIS SÃO AS MAIS PEDIDAS ANTES DE USAR O SELO 'MAIS PEDIDA'
function buildCompactTopBadgeHTML(item) {
  if (!item.destaque || item.selo !== 'Mais Pedida') return '';
  return `
    <span class="card-badge-top" aria-label="Selo de destaque: ${item.selo}">
      <svg class="badge-icon" width="12" height="12" viewBox="0 0 24 24" fill="currentColor" stroke="none" aria-hidden="true">
        <path d="M12 23c-4.97 0-9-4.03-9-9 0-3.86 2.54-7.23 4.88-9.44a1 1 0 0 1 1.62.62c.16 2.07.97 3.5 2.12 4.32C12.3 8.1 13.06 6.57 13.2 4.8a1 1 0 0 1 1.76-.56C17.42 7.15 21 11.23 21 14c0 4.97-4.03 9-9 9z"/>
      </svg>
      <span>${item.selo}</span>
    </span>`;
}

// Um item do cardápio. Mesmo caminho para PC e celular: o PC gera o card grande de sempre;
// o celular gera a linha compacta (classe card-item--compact) com as mesmas classes-base.
function renderMenuItem(item, compact) {
  const hasSizes = Boolean(item.prices);
  const currentSize = getEffectiveSize(item, compact);
  const displayPrice = getUnitPrice(item, currentSize);
  const badgeHTML = buildBadgeHTML(item);

  if (compact) {
    const seloHTML = buildCompactSeloHTML(item);
    const topBadgeHTML = buildCompactTopBadgeHTML(item);
    const hasTopBadge = Boolean(topBadgeHTML);
    return `
      <article class="card-item card-item--compact ${hasTopBadge ? 'card-item--destaque' : ''}" data-item-id="${item.id}">
        ${topBadgeHTML}
        <div class="card-img-box">
          ${buildThumbImageHTML(item)}
        </div>
        <div class="card-body">
          <div class="card-title-row">
            <h3 class="card-title">${item.name}</h3>
            ${seloHTML}
          </div>
          <p class="card-desc">${item.description}</p>
        </div>
        <div class="card-footer">
          ${buildCompactPriceHTML(item, currentSize, displayPrice)}
          ${buildItemControlHTML(item, currentSize)}
        </div>
      </article>
    `;
  }

  const sizes = TAMANHOS_PIZZA.map(t => t.codigo);
  const sizeSelectorHTML = hasSizes
    ? `<div class="size-selector" role="group" aria-label="Escolha o tamanho da pizza ${item.name}">
          ${sizes.map(sz => `
            <button type="button" class="size-btn ${currentSize === sz ? 'active' : ''}" data-action="select-size" data-id="${item.id}" data-size="${sz}">
              ${sz}
            </button>
          `).join('')}
        </div>`
    : '';

  return `
      <article class="card-item" data-item-id="${item.id}">
        <div class="card-img-box">
          <img src="${item.image}" alt="${item.name}" loading="lazy">
          ${badgeHTML}
        </div>
        <div class="card-body">
          <h3 class="card-title">${item.name}</h3>
          <p class="card-desc">${item.description}</p>
          ${sizeSelectorHTML}
          <div class="card-footer">
            <div class="price-box">
              <span class="price-label">${hasSizes ? `Tamanho ${currentSize}` : 'Unidade'}</span>
              <span class="price-value" id="price-${item.id}">${formatBRL(displayPrice)}</span>
            </div>
            <button type="button" class="btn-add-item" data-action="add-to-cart" data-id="${item.id}">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
              Adicionar
            </button>
          </div>
        </div>
      </article>
    `;
}

function renderEmptyMenuHTML() {
  return `
    <div class="menu-empty">
      <p class="menu-empty-text">Nenhum sabor encontrado. Tente outro nome.</p>
      <button type="button" class="btn-clear-search" data-action="clear-search">Limpar busca</button>
    </div>
  `;
}

// Centraliza a aba ativa no container horizontal sem deslocar a página verticalmente
function scrollTabIntoView(tabBtn) {
  if (!tabBtn) return;
  const container = tabBtn.closest('.menu-tabs');
  if (!container) return;

  // Se o container não tiver transbordamento horizontal, não precisa rolar
  if (container.scrollWidth <= container.clientWidth) return;

  const scrollTarget = tabBtn.offsetLeft - (container.clientWidth - tabBtn.clientWidth) / 2;
  container.scrollTo({
    left: Math.max(0, scrollTarget),
    behavior: prefersReducedMotion() ? 'auto' : 'smooth'
  });
}

// Atualiza dicas de gradiente de rolagem nas bordas das abas
function updateTabScrollGradients() {
  const tabsWrapper = document.querySelector('.menu-tabs-wrapper');
  const tabsContainer = document.querySelector('.menu-tabs');
  if (!tabsWrapper || !tabsContainer) return;

  const scrollLeft = tabsContainer.scrollLeft;
  const maxScroll = tabsContainer.scrollWidth - tabsContainer.clientWidth;

  if (scrollLeft > 2) {
    tabsWrapper.classList.add('has-scroll-left');
  } else {
    tabsWrapper.classList.remove('has-scroll-left');
  }

  if (maxScroll > 2 && scrollLeft < maxScroll - 2) {
    tabsWrapper.classList.add('has-scroll-right');
  } else {
    tabsWrapper.classList.remove('has-scroll-right');
  }
}

let isProgrammaticScrolling = false;
let programmaticScrollTimer = null;

// Marca a categoria ativa na UI (aria-current, classes e centralização)
function setActiveCategoryUI(catId) {
  state.currentCategory = catId;
  const tabs = document.querySelectorAll('.menu-tab-btn');
  let activeTabBtn = null;

  tabs.forEach(btn => {
    const isTarget = btn.getAttribute('data-category') === catId;
    btn.classList.toggle('active', isTarget);
    btn.setAttribute('aria-selected', String(isTarget));
    if (isTarget) {
      btn.setAttribute('aria-current', 'true');
      btn.setAttribute('tabindex', '0');
      activeTabBtn = btn;
    } else {
      btn.removeAttribute('aria-current');
      btn.setAttribute('tabindex', '-1');
    }
  });

  if (activeTabBtn) {
    scrollTabIntoView(activeTabBtn);
  }
  updateTabScrollGradients();
}

// Rola suavemente até o título da seção de categoria no celular
function scrollToCategorySection(catId) {
  if (catId === 'ofertas') {
    const target = $('mobileOfferBanner') || $('ofertas');
    if (target) {
      target.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
    }
    return;
  }

  // Tocar numa categoria durante a busca limpa a busca para restaurar a lista contínua
  if (state.searchQuery !== '') {
    clearSearch();
  }

  const targetSection = document.getElementById(`categoria-${catId}`);
  if (!targetSection) return;

  // Marca ativa imediatamente sem piscar e ignora o observer durante a rolagem
  setActiveCategoryUI(catId);
  isProgrammaticScrolling = true;
  clearTimeout(programmaticScrollTimer);

  targetSection.scrollIntoView({
    behavior: prefersReducedMotion() ? 'auto' : 'smooth',
    block: 'start'
  });

  const scrollDuration = prefersReducedMotion() ? 50 : 800;
  programmaticScrollTimer = setTimeout(() => {
    isProgrammaticScrolling = false;
  }, scrollDuration);
}

let stickyFiltersObserver = null;

// Observa o elemento sentinela para alternar a classe .is-stuck no modo sticky sem usar evento scroll
function initStickyFiltersObserver() {
  if (stickyFiltersObserver) {
    stickyFiltersObserver.disconnect();
    stickyFiltersObserver = null;
  }

  const sentinel = $('menuFiltersSentinel');
  const filtersBar = $('menuFiltersBar');
  if (!sentinel || !filtersBar) return;

  if (!isCompactLayout()) {
    filtersBar.classList.remove('is-stuck');
    return;
  }

  const header = document.querySelector('.site-header') || document.querySelector('header');
  const headerHeight = header ? Math.round(header.offsetHeight) : 58;

  // Sincroniza o estado inicial imediatamente com base na posição da sentinela
  const initialSentinelRect = sentinel.getBoundingClientRect();
  const initialStuck = initialSentinelRect.top <= headerHeight;
  filtersBar.classList.toggle('is-stuck', initialStuck);

  stickyFiltersObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      // Quando a sentinela (logo acima da barra) ultrapassa a base do header, a barra gruda
      const isStuck = !entry.isIntersecting && entry.boundingClientRect.top <= headerHeight;
      filtersBar.classList.toggle('is-stuck', isStuck);
    });
  }, {
    root: null,
    rootMargin: `-${headerHeight}px 0px 0px 0px`,
    threshold: [0, 1.0]
  });

  stickyFiltersObserver.observe(sentinel);
}

let categoryScrollSpyObserver = null;

// Observa as seções para atualizar a categoria ativa durante a rolagem no celular sem usar evento scroll
function initCategoryScrollSpy() {
  if (categoryScrollSpyObserver) {
    categoryScrollSpyObserver.disconnect();
    categoryScrollSpyObserver = null;
  }

  if (!isCompactLayout() || Boolean(state.searchQuery.trim())) {
    return;
  }

  const sections = document.querySelectorAll('.menu-category-section');
  if (sections.length === 0) return;

  const header = document.querySelector('.site-header') || document.querySelector('header');
  const headerHeight = header ? header.offsetHeight : 58;
  const compactBarHeight = 86;
  const topOffset = headerHeight + compactBarHeight + 8; // ~146px (header 52-58px + barra fixa 86px + respiro 8px)

  categoryScrollSpyObserver = new IntersectionObserver((entries) => {
    if (isProgrammaticScrolling) return;

    // Seções visíveis na área de leitura
    const intersecting = entries.filter(e => e.isIntersecting);
    if (intersecting.length === 0) return;

    // Seleciona a seção mais próxima do topo da área de leitura
    intersecting.sort((a, b) => Math.abs(a.boundingClientRect.top - topOffset) - Math.abs(b.boundingClientRect.top - topOffset));
    const activeSection = intersecting[0].target;
    const catId = activeSection.getAttribute('data-category');
    if (catId && catId !== state.currentCategory) {
      setActiveCategoryUI(catId);
    }
  }, {
    root: null,
    rootMargin: `-${topOffset}px 0px -50% 0px`,
    threshold: [0, 0.1, 0.25, 0.5]
  });

  sections.forEach(sec => categoryScrollSpyObserver.observe(sec));
}

// Renderiza a grade de itens do cardápio (cards no PC, lista compacta contínua no celular)
function renderMenu() {
  const grid = $('menuGrid');
  const legend = $('sizeLegend');
  if (!grid) return;

  const compact = isCompactLayout();
  const visibleItems = getVisibleMenuItems(compact);

  if (legend) {
    const hasPizzas = state.searchQuery.trim()
      ? visibleItems.some(item => Boolean(item.prices))
      : (state.currentCategory !== 'bebidas');
    legend.style.display = hasPizzas ? 'block' : 'none';
  }

  // Variação de layout por classe CSS. Na lista compacta o aviso ao leitor de tela vem da região de busca;
  // manter aria-live="polite" na grade faria o leitor ler a lista inteira a cada troca de tamanho ou categoria.
  grid.classList.toggle('menu-grid--lista', compact);
  grid.setAttribute('aria-live', compact ? 'off' : 'polite');

  syncSizeBar(visibleItems);

  if (compact) {
    if (state.searchQuery.trim() !== '') {
      // Busca ativa: lista plana de resultados com todos os itens correspondentes
      grid.innerHTML = visibleItems.length > 0
        ? visibleItems.map(item => renderMenuItem(item, true)).join('')
        : renderEmptyMenuHTML();
      if (categoryScrollSpyObserver) {
        categoryScrollSpyObserver.disconnect();
      }
    } else {
      // Sem busca ativa: lista única contínua com título de seção por categoria
      grid.innerHTML = renderContinuousMenuHTML();
      initCategoryScrollSpy();
      if (state.currentCategory === 'todos' || !state.currentCategory) {
        setActiveCategoryUI('tradicionais');
      }
    }
  } else {
    // Desktop/Tablet (>= 768px): grade tradicional filtrada pelas abas
    grid.innerHTML = visibleItems.length > 0
      ? visibleItems.map(item => renderMenuItem(item, false)).join('')
      : renderEmptyMenuHTML();
  }

  syncMenuQuantityControls();
  updateSearchStatus(visibleItems.length);
}

/* ------------------------------------------------------------------------
   Contadores "− 1 +" da lista: sempre refletem o carrinho real
   (chamado por updateCartUI, a função única que redesenha o carrinho)
   ------------------------------------------------------------------------ */
function syncMenuQuantityControls() {
  const controls = document.querySelectorAll('.item-control');
  if (controls.length === 0) return;

  const quantityByKey = getCartQuantityMap();
  controls.forEach(control => {
    const quantity = quantityByKey.get(control.getAttribute('data-cart-key')) || 0;
    control.classList.toggle('has-qty', quantity > 0);
    const qtyEl = control.querySelector('.item-qty');
    if (qtyEl) qtyEl.textContent = String(quantity);
  });
}

/* ------------------------------------------------------------------------
   Seletor global de tamanho (P / M / G / GG) – somente celular
   ------------------------------------------------------------------------ */
function renderSizeBar() {
  const bar = $('sizeBar');
  if (!bar) return;

  bar.innerHTML = TAMANHOS_PIZZA.map(t => `
    <button type="button" class="size-bar-btn" data-global-size="${t.codigo}" aria-pressed="false" aria-label="Tamanho ${t.codigo}, ${t.nome}, ${t.fatias} fatias">
      <span class="size-bar-code">${t.codigo}</span>
      <span class="size-bar-slices">${t.fatias} fatias</span>
    </button>
  `).join('');
  syncSizeBar();
}

// Marca o tamanho global ativo e no celular mantém a faixa no topo da lista (escondendo apenas durante busca sem pizzas)
function syncSizeBar(visibleItems) {
  const bar = $('sizeBar');
  if (!bar) return;

  if (isCompactLayout()) {
    const isSearchActive = Boolean(state.searchQuery.trim());
    if (isSearchActive && Array.isArray(visibleItems)) {
      bar.hidden = !visibleItems.some(item => Boolean(item.prices));
    } else {
      bar.hidden = false;
    }
  } else {
    bar.hidden = (state.currentCategory === 'bebidas');
  }

  bar.querySelectorAll('[data-global-size]').forEach(btn => {
    const isActive = btn.getAttribute('data-global-size') === state.globalSize;
    btn.classList.toggle('is-active', isActive);
    btn.setAttribute('aria-pressed', String(isActive));
  });
}

function setGlobalSize(size) {
  if (!TAMANHOS_PIZZA.some(t => t.codigo === size)) return;

  state.globalSize = size;
  // Trocar o tamanho global vale para todas as pizzas: descarta as exceções por item
  state.itemSizeOverrides = {};
  saveGlobalSizeToStorage();
  renderMenu();
}

/* ------------------------------------------------------------------------
   Folha de tamanho de UM item (bottom sheet com <dialog>) – somente celular
   ------------------------------------------------------------------------ */
let sheetItemId = null;

function renderSizeSheet(item) {
  const itemEl = $('sizeSheetItem');
  const optionsEl = $('sizeSheetOptions');
  if (!itemEl || !optionsEl) return;

  const currentSize = getEffectiveSize(item, true);
  itemEl.textContent = item.name;
  optionsEl.innerHTML = TAMANHOS_PIZZA.map(t => `
    <button type="button" class="size-sheet-option ${t.codigo === currentSize ? 'is-selected' : ''}" data-sheet-size="${t.codigo}" aria-pressed="${t.codigo === currentSize}">
      <span class="size-sheet-option-name"><strong>${t.codigo}</strong> · ${t.nome} · ${t.fatias} fatias</span>
      <span class="size-sheet-option-price">${formatBRL(item.prices[t.codigo])}</span>
    </button>
  `).join('');
}

function openSizeSheet(itemId) {
  const sheet = $('sizeSheet');
  const item = MENU_ITEMS.find(i => i.id === itemId);
  if (!sheet || !item || !item.prices || typeof sheet.showModal !== 'function') return;

  sheetItemId = itemId;
  renderSizeSheet(item);
  if (!sheet.open) sheet.showModal();
  sheet.querySelector('.size-sheet-option.is-selected')?.focus();
}

function closeSizeSheet() {
  const sheet = $('sizeSheet');
  if (sheet && sheet.open) sheet.close();
}

function chooseItemSize(size) {
  const itemId = sheetItemId;
  if (!itemId || !TAMANHOS_PIZZA.some(t => t.codigo === size)) return;

  // Escolher o mesmo tamanho do global remove a exceção (o item volta a acompanhar o global)
  if (size === state.globalSize) {
    delete state.itemSizeOverrides[itemId];
  } else {
    state.itemSizeOverrides[itemId] = size;
  }

  closeSizeSheet();
  renderMenu();
  // A linha foi redesenhada: devolve o foco ao preço do mesmo item
  $('menuGrid')?.querySelector(`[data-action="open-size-sheet"][data-id="${itemId}"]`)?.focus({ preventScroll: true });
}

function initSizeSheet() {
  const sheet = $('sizeSheet');
  const closeBtn = $('closeSizeSheetBtn');
  if (!sheet) return;

  if (closeBtn) {
    closeBtn.addEventListener('click', closeSizeSheet);
  }

  // Light-dismiss para navegadores que ainda não suportam nativamente closedby="any"
  if (!('closedBy' in HTMLDialogElement.prototype)) {
    sheet.addEventListener('click', (event) => {
      if (event.target !== sheet) return;
      const rect = sheet.getBoundingClientRect();
      const isContent = (
        rect.top <= event.clientY &&
        event.clientY <= rect.top + rect.height &&
        rect.left <= event.clientX &&
        event.clientX <= rect.left + rect.width
      );
      if (!isContent) closeSizeSheet();
    });
  }

  sheet.addEventListener('click', (e) => {
    const opt = e.target.closest('[data-sheet-size]');
    if (opt) {
      chooseItemSize(opt.getAttribute('data-sheet-size'));
    }
  });

  sheet.addEventListener('close', () => {
    sheetItemId = null;
  });
}

function applyTouchLayoutConstants() {
  const root = document.documentElement;
  root.style.setProperty('--toque-minimo', `${TOQUE_MINIMO_PX}px`);
  root.style.setProperty('--lista-thumb', `${THUMB_LISTA_PX}px`);
}


/* ------------------------------------------------------------------------
   Busca por sabor ou ingrediente – somente celular
   ------------------------------------------------------------------------ */
let searchDebounceTimer = null;

function applySearchQuery(rawQuery) {
  state.searchQuery = rawQuery.trim();
  renderMenu();
}

function clearSearch() {
  const input = $('menuSearchInput');
  const clearBtn = $('menuSearchClear');
  clearTimeout(searchDebounceTimer);
  if (input) input.value = '';
  if (clearBtn) clearBtn.hidden = true;
  applySearchQuery('');
}

// Anuncia a quantidade de resultados (região role="status" do HTML com aria-live="polite"); vazio quando não há busca ativa
function updateSearchStatus(resultCount) {
  const status = $('menuSearchStatus');
  if (!status) return;

  if (!isCompactLayout() || state.searchQuery === '') {
    status.textContent = '';
    return;
  }
  status.textContent = resultCount === 0
    ? 'Nenhum sabor encontrado. Tente outro nome.'
    : `${resultCount} ${resultCount === 1 ? 'sabor encontrado' : 'sabores encontrados'}`;
}

function initMenuSearch() {
  const input = $('menuSearchInput');
  const clearBtn = $('menuSearchClear');
  if (!input || !clearBtn) return;

  input.addEventListener('input', () => {
    clearBtn.hidden = (input.value === '');
    // Debounce de 150ms (SEARCH_DEBOUNCE_MS): filtra após pausa na digitação para evitar flickering
    clearTimeout(searchDebounceTimer);
    searchDebounceTimer = setTimeout(() => applySearchQuery(input.value), SEARCH_DEBOUNCE_MS);
  });

  input.addEventListener('search', () => {
    // Trata o botão nativo de limpar (botão 'x' em inputs type="search" no mobile)
    if (input.value === '') {
      clearSearch();
    }
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && input.value !== '') {
      e.preventDefault();
      clearSearch();
    } else if (e.key === 'Enter') {
      e.preventDefault();
      // Enter fecha o teclado do celular (blur) e leva a tela ao início dos resultados
      clearTimeout(searchDebounceTimer);
      applySearchQuery(input.value);
      input.blur();
      const resultsEl = $('menuGrid') || $('cardapio');
      resultsEl?.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth', block: 'start' });
    }
  });

  clearBtn.addEventListener('click', () => {
    clearSearch();
    input.focus();
  });
}

/* ------------------------------------------------------------------------
   Voltar ao topo do cardápio – somente celular
   ------------------------------------------------------------------------ */
function scrollToMenuTop() {
  // scroll-padding-top do html desconta o header fixo
  $('cardapio')?.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth', block: 'start' });
  document.querySelector('.menu-tab-btn.active')?.focus({ preventScroll: true });
}

// Mostra o "↑" só depois de rolar mais de uma tela dentro do cardápio (e enquanto o cardápio ainda está na tela)
function updateBackToMenuTop() {
  const button = $('backToMenuTop');
  const section = $('cardapio');
  if (!button || !section) return;

  let shouldShow = false;
  if (isCompactLayout()) {
    const rect = section.getBoundingClientRect();
    const scrolledInsideMenu = -rect.top;
    shouldShow = scrolledInsideMenu > window.innerHeight * VOLTAR_TOPO_TELAS
      && rect.bottom > window.innerHeight * 0.5;
  }
  button.classList.toggle('is-visible', shouldShow);
}

function initBackToMenuTop() {
  const button = $('backToMenuTop');
  if (!button) return;

  let isScheduled = false;
  window.addEventListener('scroll', () => {
    if (isScheduled) return;
    isScheduled = true;
    requestAnimationFrame(() => {
      isScheduled = false;
      updateBackToMenuTop();
    });
  }, { passive: true });
  window.addEventListener('resize', updateBackToMenuTop, { passive: true });

  button.addEventListener('click', scrollToMenuTop);
  updateBackToMenuTop();
}

/* ------------------------------------------------------------------------
   Carrossel Interativo da Seção "Como Fazer o Seu Pedido" no Celular (< 768px)
   ------------------------------------------------------------------------ */
function updateStepCartStatus(totalCount) {
  const card1 = document.querySelector('.step-card[data-step-index="0"]');
  const badgeEl = $('step1CartBadge');
  if (!card1) return;

  const hasItems = (totalCount > 0);
  card1.classList.toggle('has-items', hasItems);
  if (badgeEl && hasItems) {
    badgeEl.textContent = `${totalCount} ${totalCount === 1 ? 'item' : 'itens'} no carrinho`;
  }
}

function initStepsCarousel() {
  const stepsGrid = $('stepsGrid');
  if (!stepsGrid) return;

  const cards = Array.from(stepsGrid.querySelectorAll('.step-card'));
  const segments = Array.from(document.querySelectorAll('.steps-progress-segment'));
  const counterEl = $('stepsCounter');
  const prevBtn = $('stepsBtnPrev');
  const nextBtn = $('stepsBtnNext');
  const chipEntrega = $('stepChipEntrega');
  const chipRetirada = $('stepChipRetirada');
  const chipInfo = $('stepChipInfo');
  const step1Action = $('step1ActionBtn');
  const step2Action = $('step2ActionBtn');

  if (cards.length === 0) return;

  let currentStepIndex = 0;

  // Rola suavemente até as abas do cardápio descontando a altura do header
  function scrollToCardapioMenu() {
    const cardapio = $('cardapio');
    if (!cardapio) return;
    const headerHeight = document.querySelector('.site-header')?.offsetHeight || 68;
    const rect = cardapio.getBoundingClientRect();
    const targetTop = window.scrollY + rect.top - headerHeight - 10;
    window.scrollTo({
      top: targetTop,
      behavior: prefersReducedMotion() ? 'auto' : 'smooth'
    });
  }

  // Atualiza indicadores de progresso, contador e botões
  function setActiveStep(index, isUserScroll = true) {
    if (index < 0 || index >= cards.length) return;
    currentStepIndex = index;

    cards.forEach((card, idx) => {
      card.classList.toggle('is-active', idx === index);
    });

    segments.forEach((seg, idx) => {
      const isCurrent = idx === index;
      const isPast = idx < index;
      seg.classList.toggle('is-active', isCurrent || isPast);
      seg.classList.toggle('is-completed', isPast);
      seg.setAttribute('aria-selected', String(isCurrent));
    });

    if (counterEl) {
      counterEl.textContent = `Passo ${index + 1} de ${cards.length}`;
    }

    if (prevBtn) {
      prevBtn.disabled = (index === 0);
    }

    if (nextBtn) {
      const isLast = (index === cards.length - 1);
      nextBtn.classList.toggle('is-last-step', isLast);
      if (isLast) {
        nextBtn.innerHTML = `
          <span>Começar meu pedido</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        `;
        nextBtn.setAttribute('aria-label', 'Começar meu pedido no cardápio');
      } else {
        nextBtn.innerHTML = `
          <span>Próximo</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        `;
        nextBtn.setAttribute('aria-label', 'Próximo passo');
      }
    }
  }

  // Desloca o carrossel até o passo especificado
  function scrollToStep(index) {
    if (index < 0 || index >= cards.length) return;
    const targetCard = cards[index];
    if (targetCard) {
      targetCard.scrollIntoView({
        behavior: prefersReducedMotion() ? 'auto' : 'smooth',
        inline: 'center',
        block: 'nearest'
      });
      setActiveStep(index, false);
    }
  }

  // Detecta o passo ativo com IntersectionObserver (sem cálculo manual de scroll)
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      if (window.innerWidth >= BREAKPOINT_DESKTOP) return;

      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const idx = cards.indexOf(entry.target);
          if (idx !== -1) {
            setActiveStep(idx, true);
          }
        }
      });
    }, {
      root: stepsGrid,
      threshold: 0.6
    });

    cards.forEach(card => observer.observe(card));
  }

  // Segmentos da barra de progresso são botões clicáveis
  segments.forEach((seg, idx) => {
    seg.addEventListener('click', () => {
      scrollToStep(idx);
    });
  });

  // Botão Anterior
  prevBtn?.addEventListener('click', () => {
    if (currentStepIndex > 0) {
      scrollToStep(currentStepIndex - 1);
    }
  });

  // Botão Próximo / Começar meu pedido
  nextBtn?.addEventListener('click', () => {
    if (currentStepIndex < cards.length - 1) {
      scrollToStep(currentStepIndex + 1);
    } else {
      scrollToCardapioMenu();
    }
  });

  // Atalho Passo 1: Rola até o cardápio
  step1Action?.addEventListener('click', () => {
    scrollToCardapioMenu();
  });

  // Atalho Passo 2: Abre o drawer do carrinho
  step2Action?.addEventListener('click', () => {
    openCartDrawer();
  });

  // Chips Passo 2: Entrega vs Retirada com informações dinâmicas
  function updateDeliveryChipInfo(mode) {
    if (!chipInfo) return;
    if (mode === 'entrega') {
      chipInfo.textContent = `Taxa ${formatBRL(CONFIG.deliveryFee)} (Grátis acima de ${formatBRL(CONFIG.freeShippingThreshold)}) • 40–55 min`;
    } else {
      const desc = Math.round(DESCONTO_RETIRADA_PERCENTUAL * 100);
      chipInfo.textContent = `Sem taxa de entrega • ${desc}% OFF no balcão`;
    }
  }

  chipEntrega?.addEventListener('click', () => {
    chipEntrega.classList.add('is-active');
    chipEntrega.setAttribute('aria-checked', 'true');
    chipRetirada?.classList.remove('is-active');
    chipRetirada?.setAttribute('aria-checked', 'false');
    updateDeliveryChipInfo('entrega');
  });

  chipRetirada?.addEventListener('click', () => {
    chipRetirada.classList.add('is-active');
    chipRetirada.setAttribute('aria-checked', 'true');
    chipEntrega?.classList.remove('is-active');
    chipEntrega?.setAttribute('aria-checked', 'false');
    updateDeliveryChipInfo('retirada');
  });

  // Inicializa info dos chips com valores da configuração
  updateDeliveryChipInfo('entrega');

  // Inicializa no primeiro passo
  setActiveStep(0, false);
}

/* ------------------------------------------------------------------------
   Feedback ao adicionar/remover pela lista (sem abrir o carrinho)
   ------------------------------------------------------------------------ */
function pulseElement(el) {
  if (!el) return;
  el.classList.remove('is-pulse');
  void el.offsetWidth; // Reinicia a animação mesmo com toques seguidos
  el.classList.add('is-pulse');
  el.addEventListener('animationend', () => el.classList.remove('is-pulse'), { once: true });
}

function pulseBottomCart() {
  if (prefersReducedMotion()) return;
  const cartCircle = document.querySelector('#mobileBottomCartBtn .mobile-nav-cart-circle');
  if (cartCircle) {
    pulseElement(cartCircle);
  }
}

function playQuantityFeedback(buttonEl) {
  if (prefersReducedMotion()) return;

  pulseElement(buttonEl);
  pulseBottomCart();
  try {
    if (navigator.vibrate) navigator.vibrate(VIBRACAO_MS);
  } catch (error) {
    // Vibração indisponível ou bloqueada: o feedback visual já basta
  }
}

// Avisa o leitor de tela a nova quantidade do item no pedido
function announceQuantity(product, size) {
  const announcer = $('menuAnnouncer');
  if (!announcer) return;

  const quantity = getCartQuantityMap().get(buildCartKey(product, size)) || 0;
  const label = buildItemLabel(product, size);
  announcer.textContent = quantity > 0 ? `${label}: ${quantity} no pedido.` : `${label} removido do pedido.`;
}

function addFromList(itemId, buttonEl) {
  const product = MENU_ITEMS.find(i => i.id === itemId);
  if (!product) return;

  const size = getEffectiveSize(product, true);
  addItemToCart(product, size);
  playQuantityFeedback(buttonEl);
  announceQuantity(product, size);
}

function removeOneFromList(itemId, buttonEl) {
  const product = MENU_ITEMS.find(i => i.id === itemId);
  if (!product) return;

  const size = getEffectiveSize(product, true);
  changeCartQty(buildCartKey(product, size), -1);
  playQuantityFeedback(buttonEl);
  announceQuantity(product, size);

  // Ao zerar, o "−" some: devolve o foco ao "+" para o teclado/leitor de tela não se perder
  const control = buttonEl.closest('.item-control');
  if (control && !control.classList.contains('has-qty')) {
    control.querySelector('[data-action="add-to-cart"]')?.focus({ preventScroll: true });
  }
}

// Ao cruzar o ponto de corte (girar o aparelho, redimensionar): redesenha a lista no layout certo e reajusta observadores
function refreshMenuForLayoutChange() {
  closeSizeSheet();
  renderMenu();
  updateBackToMenuTop();
  if (isCompactLayout()) {
    initStickyFiltersObserver();
    initCategoryScrollSpy();
  } else {
    if (stickyFiltersObserver) {
      stickyFiltersObserver.disconnect();
      stickyFiltersObserver = null;
    }
    if (categoryScrollSpyObserver) {
      categoryScrollSpyObserver.disconnect();
      categoryScrollSpyObserver = null;
    }
    $('menuFiltersBar')?.classList.remove('is-stuck');
  }
}

// Renderiza todo o carrinho de compras (lista, resumo, frete e contadores)
function updateCartUI() {
  const badge = $('cartCountBadge');
  const emptyState = $('cartEmptyState');
  const contentWrapper = $('cartContentWrapper');
  const footer = $('cartFooter');
  const listEl = $('cartItemsList');
  const freeShippingBox = $('freeShippingBox');
  const freeShippingText = $('freeShippingText');
  const freeShippingFill = $('freeShippingFill');
  const discountsContainer = $('summaryDiscountsContainer');

  const totalCount = state.cart.reduce((acc, item) => acc + item.quantity, 0);
  if (badge) badge.textContent = totalCount;

  // Mantém a reação visual do Passo 1 do carrossel sincronizada com o carrinho
  updateStepCartStatus(totalCount);

  // Mantém os contadores "− 1 +" da lista do cardápio iguais ao carrinho real (inclusive ao remover pelo drawer)
  syncMenuQuantityControls();

  // Se o carrinho mudar enquanto a tela de pagamento Pix estiver aberta, fecha para evitar valor desatualizado
  if (typeof isPixModalOpen === 'function' && isPixModalOpen()) {
    closePixModal();
  }

  // Atualiza barra inferior no celular (< 768px)
  const mobileBadge = $('mobileBottomCartBadge') || $('mobileBottomCartCount');
  const mobileTotal = $('mobileBottomCartTotal');
  const mobileCartBtn = $('mobileBottomCartBtn');

  if (state.cart.length === 0) {
    if (mobileBadge) mobileBadge.textContent = '0';
    if (mobileTotal) mobileTotal.textContent = 'R$ 0,00';
    if (mobileCartBtn) {
      mobileCartBtn.setAttribute('aria-label', 'Abrir carrinho, 0 itens, R$ 0,00');
    }
    emptyState.style.display = 'block';
    contentWrapper.style.display = 'none';
    footer.style.display = 'none';
    freeShippingBox.style.display = 'none';
    if (typeof syncPixAvailability === 'function') syncPixAvailability();
    return;
  }

  emptyState.style.display = 'none';
  contentWrapper.style.display = 'block';
  footer.style.display = 'block';

  const summary = calculateOrderSummary();

  if (mobileBadge) mobileBadge.textContent = totalCount;
  if (mobileTotal) {
    mobileTotal.textContent = formatBRL(summary.subtotal);
  }
  if (mobileCartBtn) {
    const countText = `${totalCount} ${totalCount === 1 ? 'item' : 'itens'}`;
    const totalText = mobileTotal ? mobileTotal.textContent : formatBRL(summary.subtotal);
    mobileCartBtn.setAttribute('aria-label', `Abrir carrinho, ${countText}, ${totalText}`);
  }

  // Barra de progresso do frete grátis
  if (state.deliveryMode === 'entrega') {
    freeShippingBox.style.display = 'block';
    const remaining = Math.max(0, CONFIG.freeShippingThreshold - summary.subtotal);
    const pct = Math.min(100, (summary.subtotal / CONFIG.freeShippingThreshold) * 100);
    freeShippingFill.style.width = `${pct}%`;

    if (remaining === 0) {
      freeShippingText.textContent = '🎉 Parabéns! Você ganhou Frete Grátis neste pedido!';
      freeShippingText.classList.add('unlocked');
    } else {
      freeShippingText.textContent = `🛵 Faltam ${formatBRL(remaining)} para frete grátis!`;
      freeShippingText.classList.remove('unlocked');
    }
  } else {
    freeShippingBox.style.display = 'none';
  }

  // Lista de itens no carrinho
  listEl.innerHTML = state.cart.map(item => {
    const includedHTML = item.isCombo && item.includedItems
      ? `<div class="cart-item-included">Incluso: ${item.includedItems}</div>`
      : '';

    return `
      <div class="cart-item">
        <div class="cart-item-info">
          <div class="cart-item-title">${item.name} ${item.size ? `(${item.size})` : ''}</div>
          ${includedHTML}
          <div class="cart-item-sub">${formatBRL(item.price)} cada • Subtotal: <strong>${formatBRL(item.price * item.quantity)}</strong></div>
        </div>
        <div class="cart-item-controls">
          <button type="button" class="qty-btn" data-cart-action="dec" data-key="${item.cartKey}" aria-label="Diminuir quantidade">−</button>
          <span class="qty-val">${item.quantity}</span>
          <button type="button" class="qty-btn" data-cart-action="inc" data-key="${item.cartKey}" aria-label="Aumentar quantidade">+</button>
          <button type="button" class="remove-item-btn" data-cart-action="remove" data-key="${item.cartKey}" aria-label="Remover item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
          </button>
        </div>
      </div>
    `;
  }).join('');

  // Linhas de descontos e brindes aplicados
  const discountRows = summary.discounts.map(d => `
    <div class="summary-row discount-row">
      <span>${d.label}</span>
      <span>− ${formatBRL(d.amount)}</span>
    </div>
  `).join('');

  const freebieRows = summary.freebies.map(f => `
    <div class="summary-row discount-row">
      <span>🎁 ${f.label}</span>
      <span>${f.displayValue}</span>
    </div>
  `).join('');

  discountsContainer.innerHTML = discountRows + freebieRows;

  // Valores totais do resumo
  $('summarySubtotal').textContent = formatBRL(summary.subtotal);
  $('summaryDeliveryLabel').textContent = (state.deliveryMode === 'entrega') ? 'Taxa de entrega (Palotina)' : 'Retirada no balcão';

  if (state.deliveryMode === 'entrega') {
    $('summaryDelivery').textContent = summary.isFreeShippingUnlocked ? 'Grátis (Oferta >R$ 80)' : formatBRL(summary.deliveryFee);
  } else {
    $('summaryDelivery').textContent = 'R$ 0,00 (Retirada)';
  }

  $('summaryTotal').textContent = formatBRL(summary.finalTotal);
  if (typeof syncPixAvailability === 'function') syncPixAvailability();
}

/* ========================================================================
   ===== AÇÕES DO CARRINHO =====
   ======================================================================== */

// Núcleo único de inclusão no carrinho (usado pelos cards do PC e pela lista do celular).
// Mantém o formato dos itens do carrinho, do qual dependem os descontos e a mensagem do WhatsApp.
function addItemToCart(product, size) {
  const unitPrice = getUnitPrice(product, size);
  const cartKey = buildCartKey(product, size);

  const existing = state.cart.find(c => c.cartKey === cartKey);
  if (existing) {
    existing.quantity += 1;
  } else {
    state.cart.push({
      cartKey,
      id: product.id,
      name: product.name,
      category: product.category,
      isCombo: false,
      size,
      price: unitPrice,
      quantity: 1
    });
  }

  saveCartToStorage();
  updateCartUI();
}

// Adiciona um item ao carrinho (card do PC: toast e botão "Adicionado")
function addToCart(itemId, buttonEl) {
  const product = MENU_ITEMS.find(i => i.id === itemId);
  if (!product) return;

  const size = getEffectiveSize(product, false);
  addItemToCart(product, size);
  showToast(`🍕 ${product.name} ${size ? `(${size})` : ''} adicionada!`);

  if (buttonEl) {
    const originalHTML = buttonEl.innerHTML;
    buttonEl.classList.add('added');
    buttonEl.innerHTML = '✓ Adicionado';
    setTimeout(() => {
      buttonEl.classList.remove('added');
      buttonEl.innerHTML = originalHTML;
    }, 900);
  }
}

// Altera a quantidade de um item no carrinho
function changeCartQty(cartKey, delta) {
  const idx = state.cart.findIndex(c => c.cartKey === cartKey);
  if (idx === -1) return;

  state.cart[idx].quantity += delta;
  if (state.cart[idx].quantity <= 0) {
    state.cart.splice(idx, 1);
  }

  saveCartToStorage();
  updateCartUI();
}

// Remove um item do carrinho
function removeCartItem(cartKey) {
  state.cart = state.cart.filter(c => c.cartKey !== cartKey);
  saveCartToStorage();
  updateCartUI();
}

// Alterna a modalidade de entrega ('entrega' ou 'retirada')
function setDeliveryMode(mode) {
  state.deliveryMode = mode;
  const optEntrega = $('optEntrega');
  const optRetirada = $('optRetirada');
  const addressGroup = $('addressGroup');

  if (mode === 'entrega') {
    optEntrega.classList.add('active');
    optRetirada.classList.remove('active');
    addressGroup.style.display = 'flex';
  } else {
    optRetirada.classList.add('active');
    optEntrega.classList.remove('active');
    addressGroup.style.display = 'none';
  }
  updateCartUI();
}

// Trata a seleção de um card de oferta
function handleOfferClick(offerId) {
  const offer = OFFERS_ITEMS.find(o => o.id === offerId);
  if (!offer) return;

  const { dayIndex } = getSaoPauloTimeInfo();

  // 1. Combos
  if (offer.tipo === 'combo') {
    const cartKey = `combo_${offer.id}`;
    const existing = state.cart.find(c => c.cartKey === cartKey);

    if (existing) {
      existing.quantity += 1;
    } else {
      state.cart.push({
        cartKey,
        id: offer.id,
        name: offer.titulo,
        size: null,
        category: 'combo',
        isCombo: true,
        includedItems: offer.itensInclusos,
        price: offer.precoPor,
        quantity: 1
      });
    }

    saveCartToStorage();
    updateCartUI();
    pulseBottomCart();
    showToast(`🍕 ${offer.titulo} adicionado ao pedido!`);
    openCartDrawer();
    return;
  }

  // 2. Terça em Dobro e Quarta Doce
  if (offer.id === 'of-terca-dobro' || offer.id === 'of-quarta-doce') {
    const isCorrectDay = (offer.diaDaSemana === dayIndex);
    const dayName = offer.id === 'of-terca-dobro' ? 'terças-feiras' : 'quartas-feiras';

    const msg = isCorrectDay
      ? `✨ Oferta ativa (${offer.titulo}): adicione uma pizza grande (G) e o desconto/brinde é aplicado automaticamente!`
      : `ℹ️ Oferta ativa: adicione uma pizza grande e o desconto/brinde é aplicado automaticamente (Lembrete: promoção válida exclusivamente às ${dayName}).`;

    activateOfferNotice(msg);
    showToast('Confira o cardápio e adicione sua Pizza Grande (G)!');
    $('cardapio')?.scrollIntoView({ behavior: 'smooth' });
    return;
  }

  // 3. Retirada 10% OFF
  if (offer.id === 'of-retirada-10') {
    setDeliveryMode('retirada');
    activateOfferNotice('🏪 Oferta ativa: Retirada no Balcão selecionada! 10% de desconto aplicado automaticamente nas pizzas avulsas.');
    showToast('🏪 Retirada com 10% OFF ativada!');
    if (state.cart.length > 0) {
      openCartDrawer();
    } else {
      $('cardapio')?.scrollIntoView({ behavior: 'smooth' });
    }
    return;
  }

  // 4. Frete Grátis
  if (offer.id === 'of-frete-gratis') {
    setDeliveryMode('entrega');
    activateOfferNotice(`🛵 Oferta ativa: em pedidos para entrega acima de ${formatBRL(FRETE_GRATIS_A_PARTIR_DE)}, a taxa de entrega é zerada automaticamente!`);
    showToast('🛵 Frete grátis automático acima de R$ 80,00!');
    if (state.cart.length > 0) {
      openCartDrawer();
    } else {
      $('cardapio')?.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

/* ========================================================================
   ===== CHECKOUT E WHATSAPP =====
   ======================================================================== */

// Constrói a mensagem de pedido do WhatsApp
function buildWhatsAppOrderMessage(clientData, summary) {
  const appliedOffersList = [];

  state.cart.forEach(item => {
    if (item.isCombo) {
      appliedOffersList.push(`${item.quantity}x ${item.name} (${formatBRL(item.price)})`);
    }
  });
  summary.discounts.forEach(d => {
    appliedOffersList.push(`${d.label}: −${formatBRL(d.amount)}`);
  });
  summary.freebies.forEach(f => {
    appliedOffersList.push(`${f.label}: ${f.displayValue}`);
  });
  if (summary.isFreeShippingUnlocked) {
    appliedOffersList.push(`Frete Grátis (Pedido acima de ${formatBRL(CONFIG.freeShippingThreshold)})`);
  }

  const lines = [
    '🍕 *NOVO PEDIDO - MONTESE PIZZARIA*',
    '----------------------------------',
    `👤 *Cliente:* ${clientData.name}`,
    `🛵 *Modalidade:* ${state.deliveryMode === 'entrega' ? 'Entrega (Delivery)' : 'Retirada no Balcão'}`
  ];

  if (state.deliveryMode === 'entrega') {
    lines.push(`📍 *Endereço:* ${clientData.address} - Palotina/PR`);
  }

  lines.push('', '📋 *ITENS DO PEDIDO:*');
  state.cart.forEach(item => {
    const sizeLabel = item.size ? ` [Tam. ${item.size}]` : '';
    lines.push(`• ${item.quantity}x ${item.name}${sizeLabel} — ${formatBRL(item.price * item.quantity)}`);
    if (item.isCombo && item.includedItems) {
      lines.push(`   ↳ _Incluso: ${item.includedItems}_`);
    }
  });

  if (appliedOffersList.length > 0) {
    lines.push('', '🏷️ *OFERTAS E BENEFÍCIOS APLICADOS:*');
    appliedOffersList.forEach(ofText => lines.push(`✓ ${ofText}`));
  }

  if (clientData.notes) {
    lines.push('', `📝 *Observações:* ${clientData.notes}`);
  }

  lines.push(
    '',
    '----------------------------------',
    `Subtotal dos itens: ${formatBRL(summary.subtotal)}`
  );

  if (summary.totalDiscount > 0) {
    lines.push(`Descontos aplicados: − ${formatBRL(summary.totalDiscount)}`);
  }

  const deliveryText = (state.deliveryMode === 'entrega')
    ? (summary.isFreeShippingUnlocked ? 'R$ 0,00 (Frete Grátis)' : formatBRL(summary.deliveryFee))
    : 'R$ 0,00 (Retirada)';

  lines.push(`Taxa de Entrega: ${deliveryText}`);
  lines.push(`💰 *TOTAL A PAGAR: ${formatBRL(summary.finalTotal)}*`);

  if (clientData.payment === 'PIX' || clientData.payment === 'Pix') {
    lines.push('💳 *Pagamento:* Pix');
    if (clientData.orderId) {
      lines.push(`Pedido: ${clientData.orderId}`);
    }
    lines.push('Comprovante: vou enviar nesta conversa');
  } else {
    lines.push(`💳 *Pagamento:* ${clientData.payment}`);
    if (clientData.payment === 'Dinheiro' && clientData.change) {
      lines.push(`💵 *Troco para:* ${clientData.change}`);
    }
  }

  lines.push(
    '----------------------------------',
    'Aguardo a confirmação do pedido. Obrigado!'
  );

  return lines.join('\n');
}

/* ========================================================================
   ===== PAGAMENTO VIA PIX ESTÁTICO (QR CODE + COPIA E COLA) =====
   ======================================================================== */

// Algoritmo CRC-16/CCITT-FALSE (polinômio 0x1021, valor inicial 0xFFFF)
// Validado: o CRC de "123456789" resulta rigorosamente em 29B1
function crc16CcittFalse(str) {
  let crc = 0xFFFF;
  for (let i = 0; i < str.length; i++) {
    crc ^= (str.charCodeAt(i) << 8);
    for (let j = 0; j < 8; j++) {
      if ((crc & 0x8000) !== 0) {
        crc = ((crc << 1) ^ 0x1021) & 0xFFFF;
      } else {
        crc = (crc << 1) & 0xFFFF;
      }
    }
  }
  return crc.toString(16).toUpperCase().padStart(4, '0');
}

// Formatação TLV do padrão EMV (ID com 2 dígitos + Tamanho com 2 dígitos + Valor)
function formatEMV(id, value) {
  const len = String(value.length).padStart(2, '0');
  return `${id}${len}${value}`;
}

// Remove acentos e caracteres especiais para atender o padrão EMV
function sanitizePixText(text, maxLen) {
  return (text || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^A-Za-z0-9 ]/g, '')
    .trim()
    .toUpperCase()
    .slice(0, maxLen);
}

// Função pura que gera o código BR Code Pix conforme especificação do Banco Central do Brasil
function gerarPayloadPix({ chave, nome, cidade, valor, identificador }) {
  const chaveLimpa = (chave || '').trim();
  const nomeLimpo = sanitizePixText(nome, 25) || 'MONTESE PIZZARIA';
  const cidadeLimpa = sanitizePixText(cidade, 15) || 'PALOTINA';
  const idLimpo = (identificador || '').replace(/[^A-Za-z0-9]/g, '').slice(0, 25) || '***';
  const valorFormatado = Number(valor).toFixed(2);

  // Subcampos da conta do recebedor (campo 26)
  const sub26_00 = formatEMV('00', 'br.gov.bcb.pix');
  const sub26_01 = formatEMV('01', chaveLimpa);
  const campo26 = formatEMV('26', sub26_00 + sub26_01);

  // Subcampo do identificador do pedido (campo 62)
  const sub62_05 = formatEMV('05', idLimpo);
  const campo62 = formatEMV('62', sub62_05);

  const payloadSemCRC = [
    formatEMV('00', '01'),
    campo26,
    formatEMV('52', '0000'),
    formatEMV('53', '986'),
    formatEMV('54', valorFormatado),
    formatEMV('58', 'BR'),
    formatEMV('59', nomeLimpo),
    formatEMV('60', cidadeLimpa),
    campo62,
    '6304'
  ].join('');

  const crc = crc16CcittFalse(payloadSemCRC);
  return payloadSemCRC + crc;
}

// Gera identificador único curto do pedido no formato MON + 5 dígitos
function generateOrderId() {
  const digits = Math.floor(10000 + Math.random() * 90000);
  const id = `MON${digits}`;
  try {
    localStorage.setItem('montese_last_order_id', id);
  } catch (e) {
    // localStorage indisponível, segue normalmente
  }
  return id;
}

// Renderiza o QR Code SVG na tela com proteção try/catch e fallback
function renderPixQrCode(payload, totalFormatted) {
  const wrapper = $('pixQrCodeWrapper');
  if (!wrapper) return;

  wrapper.innerHTML = '';
  wrapper.setAttribute('aria-label', `QR Code Pix no valor de ${totalFormatted}`);

  try {
    if (typeof qrcode === 'function') {
      const qr = qrcode(0, 'M');
      qr.addData(payload);
      qr.make();
      const svgTag = qr.createSvgTag({
        cellSize: 6,
        margin: 4,
        scalable: true
      });
      wrapper.innerHTML = svgTag;
      return;
    }
  } catch (err) {
    // Falha silenciosa da biblioteca de QR: fallback sem lançar erro no console
  }

  // Fallback caso a biblioteca não esteja disponível
  wrapper.innerHTML = `
    <div class="pix-qr-fallback">
      <p>Use o botão abaixo para copiar o código Pix e pagar no aplicativo do seu banco.</p>
    </div>
  `;
}

let lastFocusedElementBeforePixModal = null;

// Verifica se a tela de pagamento Pix está aberta no momento
function isPixModalOpen() {
  const modal = $('pixModal');
  return modal && !modal.hidden && modal.classList.contains('open');
}

// Abre a tela de pagamento Pix
function openPixPaymentModal() {
  const summary = calculateOrderSummary();
  if (summary.finalTotal <= 0) return;

  const orderId = generateOrderId();
  state.currentOrderId = orderId;

  const payload = gerarPayloadPix({
    chave: PIX_CHAVE,
    nome: PIX_NOME_RECEBEDOR,
    cidade: PIX_CIDADE,
    valor: summary.finalTotal,
    identificador: orderId
  });

  const totalFormatted = formatBRL(summary.finalTotal);
  const totalEl = $('pixTotalValue');
  if (totalEl) totalEl.textContent = totalFormatted;

  const codeArea = $('pixCodeText');
  if (codeArea) codeArea.value = payload;

  const copyBtn = $('pixCopyBtn');
  if (copyBtn) copyBtn.textContent = 'Copiar código Pix';

  renderPixQrCode(payload, totalFormatted);

  const overlay = $('pixModalOverlay');
  const modal = $('pixModal');
  if (overlay && modal) {
    lastFocusedElementBeforePixModal = document.activeElement;
    overlay.hidden = false;
    modal.hidden = false;
    // Força reflow para transição suave
    void modal.offsetWidth;
    overlay.classList.add('open');
    modal.classList.add('open');

    const closeBtn = $('pixCloseBtn');
    if (closeBtn) closeBtn.focus();
  }
}

// Fecha a tela de pagamento Pix e devolve o foco
function closePixModal() {
  const overlay = $('pixModalOverlay');
  const modal = $('pixModal');
  if (overlay && modal) {
    overlay.classList.remove('open');
    modal.classList.remove('open');
    setTimeout(() => {
      overlay.hidden = true;
      modal.hidden = true;
    }, 250);
  }

  if (lastFocusedElementBeforePixModal && typeof lastFocusedElementBeforePixModal.focus === 'function') {
    lastFocusedElementBeforePixModal.focus();
  }
}

// Copia o código Pix para a área de transferência com fallback
async function copyPixCode() {
  const textarea = $('pixCodeText');
  const code = textarea ? textarea.value : '';
  if (!code) return;

  let copied = false;
  if (navigator.clipboard && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(code);
      copied = true;
    } catch (e) {
      copied = false;
    }
  }

  if (!copied && textarea) {
    try {
      textarea.focus();
      textarea.select();
      textarea.setSelectionRange(0, 99999);
      copied = document.execCommand('copy');
    } catch (e) {
      copied = false;
    }
  }

  const copyBtn = $('pixCopyBtn');
  const feedback = $('pixCopyFeedback');

  if (copied) {
    if (copyBtn) copyBtn.textContent = 'Código copiado ✓';
    if (feedback) feedback.textContent = 'Código Pix copiado para a área de transferência com sucesso.';
    setTimeout(() => {
      if (copyBtn) copyBtn.textContent = 'Copiar código Pix';
    }, 2000);
  } else {
    if (copyBtn) copyBtn.textContent = 'Selecione o código abaixo';
    if (feedback) feedback.textContent = 'Não foi possível copiar automaticamente. Selecione e copie o código manualmente.';
    setTimeout(() => {
      if (copyBtn) copyBtn.textContent = 'Copiar código Pix';
    }, 2000);
  }
}

// Finaliza o pedido após pagamento via Pix, enviando mensagem enriquecida ao WhatsApp
function confirmPixPaymentAndSend() {
  const nameInput = $('clientName');
  const addressInput = $('clientAddress');
  const notesInput = $('clientNotes');

  const name = nameInput ? nameInput.value.trim() : '';
  const address = addressInput ? addressInput.value.trim() : '';
  const notes = notesInput ? notesInput.value.trim() : '';
  const orderId = state.currentOrderId || generateOrderId();

  const summary = calculateOrderSummary();
  const message = buildWhatsAppOrderMessage({
    name,
    address,
    payment: 'PIX',
    change: '',
    notes,
    orderId
  }, summary);

  const waURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(waURL, '_blank', 'noopener,noreferrer');

  closePixModal();
  closeCartDrawer();
}

// Gerencia a visibilidade e habilitação da opção Pix conforme a chave e total
function syncPixAvailability() {
  const paymentSelect = $('paymentMethod');
  if (!paymentSelect) return;

  const pixOption = paymentSelect.querySelector('option[value="PIX"]');
  const isPixEnabled = Boolean(PIX_CHAVE && PIX_CHAVE.trim().length > 0);
  const helper = $('pixPaymentHelper');

  if (!isPixEnabled) {
    if (pixOption) {
      pixOption.hidden = true;
      pixOption.disabled = true;
      if (paymentSelect.value === 'PIX') {
        paymentSelect.value = 'Cartão de Crédito (levar maquininha)';
      }
    }
    if (helper) helper.style.display = 'none';
    return;
  }

  // Pix com chave configurada
  if (pixOption) {
    pixOption.hidden = false;
    const summary = calculateOrderSummary();
    pixOption.disabled = (summary.finalTotal <= 0);
  }

  if (helper) {
    helper.style.display = (paymentSelect.value === 'PIX') ? 'block' : 'none';
  }
}

// Valida os campos do cliente e envia o pedido para o WhatsApp ou abre modal do Pix
function sendOrderToWhatsApp() {
  if (state.cart.length === 0) return;

  const nameInput = $('clientName');
  const addressInput = $('clientAddress');
  const paymentSelect = $('paymentMethod');
  const changeInput = $('clientChange');
  const notesInput = $('clientNotes');

  const name = nameInput ? nameInput.value.trim() : '';
  const address = addressInput ? addressInput.value.trim() : '';
  const payment = paymentSelect ? paymentSelect.value : '';
  const change = changeInput ? changeInput.value.trim() : '';
  const notes = notesInput ? notesInput.value.trim() : '';

  if (!name) {
    alert('Por favor, informe o seu nome para identificarmos o pedido.');
    nameInput?.focus();
    return;
  }

  if (state.deliveryMode === 'entrega' && !address) {
    alert('Por favor, informe o endereço de entrega em Palotina.');
    addressInput?.focus();
    return;
  }

  const isPixActive = Boolean(PIX_CHAVE && PIX_CHAVE.trim().length > 0);
  if (payment === 'PIX' && isPixActive) {
    openPixPaymentModal();
    return;
  }

  const summary = calculateOrderSummary();
  const message = buildWhatsAppOrderMessage({ name, address, payment, change, notes }, summary);
  const waURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  window.open(waURL, '_blank', 'noopener,noreferrer');
}

/* ========================================================================
   ===== TOAST NOTIFICATION E SCROLL REVEAL =====
   ======================================================================== */
let toastTimer = null;
function showToast(msg) {
  const toast = $('toastNotification');
  if (!toast) return;

  toast.querySelector('span').textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, TOAST_DURATION_MS);
}


/* ========================================================================
   ===== CONTROLE DE VISIBILIDADE DE SEÇÕES NO CELULAR =====
   Aplica SECOES_NO_CELULAR no celular (< 768px). No PC (>= 768px), todas ficam visíveis.
   ======================================================================== */
const SECTION_CONFIG_MAP = {
  destaques: { id: 'diferenciais', href: '#diferenciais' },
  ofertas: { id: 'ofertas', href: '#ofertas' },
  cardapio: { id: 'cardapio', href: '#cardapio' },
  sobre: { id: 'sobre', href: '#sobre' },
  avaliacoes: { id: 'avaliacoes', href: '#avaliacoes' },
  comoPedir: { id: 'como-pedir', href: '#como-pedir' },
  localizacao: { id: 'contato', href: '#contato' }
};

/* ========================================================================
   ===== REDESIGN MOBILE: BANNER, MAIS PEDIDAS, FAIXA DE OFERTA E NAVEGAÇÃO =====
   ======================================================================== */
let bannerAutoplayTimer = null;
let currentBannerSlide = 0;
let bottomNavObserver = null;

function renderMobileBanner() {
  const carousel = $('mobileBannerCarousel');
  const dotsContainer = $('mobileBannerDots');
  if (!carousel) return;

  if (dotsContainer) {
    dotsContainer.innerHTML = '';
  }

  // Banner mobile: slide único da marca, sem carrossel e sem pontinhos
  carousel.innerHTML = `
    <!-- Slide 1: Marca Montese -->
    <div class="mobile-banner-slide mobile-banner-slide--brand" role="region" aria-label="A arte da pizza artesanal">
      <div class="banner-slide-content">
        <h2 class="banner-slide-title">A arte da pizza artesanal para as suas <em>melhores noites</em>.</h2>
        <button type="button" class="btn btn-primary btn-banner-action" data-banner-action="scroll-cardapio" aria-label="Ver cardápio completo">Ver cardápio</button>
      </div>
      <div class="banner-slide-media" aria-hidden="true">
        <img src="img/pizza-hero-mobile.webp" alt="Pizza artesanal da Montese" width="110" height="110" fetchpriority="high" class="banner-pizza-img">
      </div>
    </div>
  `;

  carousel.onclick = (e) => {
    const btn = e.target.closest('[data-banner-action="scroll-cardapio"]');
    if (btn) {
      const cardapio = $('cardapio') || $('menuFiltersBar');
      if (cardapio) cardapio.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
    }
  };
}



function initBannerAutoplay() {
  clearInterval(bannerAutoplayTimer);
  bannerAutoplayTimer = null;

  if (BANNER_AUTOPLAY_MS <= 0 || prefersReducedMotion()) return;

  const carousel = $('mobileBannerCarousel');
  if (!carousel) return;

  bannerAutoplayTimer = setInterval(() => {
    if (window.innerWidth >= BREAKPOINT_DESKTOP) return;
    const nextIndex = (currentBannerSlide + 1) % 3;
    const slideWidth = carousel.offsetWidth;
    carousel.scrollTo({
      left: nextIndex * slideWidth,
      behavior: 'smooth'
    });
    currentBannerSlide = nextIndex;
    const dotsContainer = $('mobileBannerDots');
    if (dotsContainer) {
      dotsContainer.querySelectorAll('.mobile-banner-dot').forEach((dot, idx) => {
        const isActive = (idx === nextIndex);
        dot.classList.toggle('is-active', isActive);
        dot.setAttribute('aria-selected', String(isActive));
      });
    }
  }, BANNER_AUTOPLAY_MS);

  carousel.ontouchstart = pauseBannerAutoplay;
  carousel.onmouseenter = pauseBannerAutoplay;
  carousel.onfocusin = pauseBannerAutoplay;
  carousel.onmouseleave = resumeBannerAutoplay;
  carousel.onfocusout = resumeBannerAutoplay;
}

function pauseBannerAutoplay() {
  clearInterval(bannerAutoplayTimer);
  bannerAutoplayTimer = null;
}

function resumeBannerAutoplay() {
  if (BANNER_AUTOPLAY_MS > 0 && !bannerAutoplayTimer) {
    initBannerAutoplay();
  }
}

function restartBannerAutoplay() {
  pauseBannerAutoplay();
  resumeBannerAutoplay();
}

function renderMobileMaisPedidas() {
  const container = $('mobileMaisPedidasCarousel');
  if (!container) return;

  let items = MENU_ITEMS.filter(item => item.destaque === true);
  if (items.length === 0) {
    items = MENU_ITEMS.filter(item => item.prices).slice(0, 5);
  }

  container.innerHTML = items.map(item => {
    const currentSize = getEffectiveSize(item, true);
    const displayPrice = getUnitPrice(item, currentSize);
    const badgeText = item.selo || item.badge || '';
    const badgeHTML = badgeText ? `<span class="mais-pedida-badge">${badgeText}</span>` : '';
    const thumbUrl = buildThumbUrl(item.image, 300);

    return `
      <article class="mais-pedida-card" data-item-id="${item.id}">
        <div class="mais-pedida-img-box">
          <img src="${thumbUrl}" alt="${item.name}" width="156" height="117" loading="lazy" decoding="async">
          ${badgeHTML}
        </div>
        <div class="mais-pedida-info">
          <h3 class="mais-pedida-title">${item.name}</h3>
          <p class="mais-pedida-desc">${item.description}</p>
        </div>
        <div class="mais-pedida-footer">
          <span class="mais-pedida-price">${formatBRL(displayPrice)}</span>
          ${buildItemControlHTML(item, currentSize)}
        </div>
      </article>
    `;
  }).join('');
}

function renderMobileOfferBanner() {
  const container = $('mobileOfferBanner');
  if (!container) return;

  const combo = OFFERS_ITEMS.find(o => o.id === OFERTA_DESTAQUE_MOBILE_ID) || OFFERS_ITEMS[0];
  if (!combo) {
    container.style.display = 'none';
    return;
  }
  container.style.display = '';

  const inclusoTexto = combo.descricao || combo.itensInclusos;
  const badgeLabel = (combo.badge || 'COMBO').toUpperCase();

  container.innerHTML = `
    <div class="tricolor-bar" aria-hidden="true"></div>
    <div class="mobile-combo-card-body">
      <div class="mobile-combo-col-left">
        <div class="mobile-combo-row-1">
          <span class="mobile-combo-badge">${badgeLabel}</span>
          <h3 class="mobile-combo-title">${combo.titulo}</h3>
        </div>
        <p class="mobile-combo-incluso">${inclusoTexto}</p>
        <div class="mobile-combo-prices">
          ${combo.precoDe ? `<span class="mobile-combo-price-old">De ${formatBRL(combo.precoDe)}</span>` : ''}
          <span class="mobile-combo-price-cur">Por ${formatBRL(combo.precoPor)}</span>
        </div>
      </div>
      <div class="mobile-combo-col-right">
        <button type="button" class="btn btn-combo-cta" data-action="select-offer" data-offer-id="${combo.id}" aria-label="Pedir ${combo.titulo}">
          Pedir combo
        </button>
      </div>
    </div>
  `;
}

function initMobileBottomNav() {
  const bar = $('mobileBottomBar');
  if (!bar) return;

  bar.addEventListener('click', (e) => {
    const navItem = e.target.closest('[data-nav-target]');
    if (!navItem) return;

    const target = navItem.getAttribute('data-nav-target');
    if (target === 'inicio') {
      window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
    } else if (target === 'cardapio') {
      const cardapioEl = $('cardapio') || $('menuFiltersBar');
      if (cardapioEl) {
        cardapioEl.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
      }
    } else if (target === 'buscar') {
      window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
      $('menuSearchInput')?.focus();
    }
  });

  if ('IntersectionObserver' in window) {
    const targets = [
      { id: 'inicio', navId: 'mobileNavInicio' },
      { id: 'cardapio', navId: 'mobileNavCardapio' }
    ];

    if (bottomNavObserver) {
      bottomNavObserver.disconnect();
    }

    bottomNavObserver = new IntersectionObserver((entries) => {
      if (window.innerWidth >= BREAKPOINT_DESKTOP) return;

      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const match = targets.find(t => t.id === entry.target.id);
          if (match) {
            bar.querySelectorAll('.mobile-nav-item').forEach(item => {
              const isActive = (item.id === match.navId);
              item.classList.toggle('is-active', isActive);
              if (isActive) {
                item.setAttribute('aria-current', 'page');
              } else {
                item.removeAttribute('aria-current');
              }
            });
          }
        }
      });
    }, { threshold: 0.2 });

    targets.forEach(t => {
      const el = $(t.id);
      if (el) bottomNavObserver.observe(el);
    });
  }
}

function applyMobileSectionVisibility(isDesktop) {
  Object.entries(SECTION_CONFIG_MAP).forEach(([key, conf]) => {
    const sectionEl = $(conf.id);
    const navLink = document.querySelector(`.mobile-nav a[href="${conf.href}"]`);
    const navLi = navLink ? navLink.closest('li') : null;

    if (isDesktop) {
      if (sectionEl) {
        sectionEl.hidden = false;
        sectionEl.classList.remove('section-mobile-hidden');
      }
      if (navLi) navLi.hidden = false;
    } else {
      // No celular, a seção de ofertas tradicional é substituída pela faixa larga #mobileOfferBanner
      const isVisible = (key === 'ofertas') ? false : Boolean(SECOES_NO_CELULAR[key]);
      if (sectionEl) {
        sectionEl.hidden = !isVisible;
        sectionEl.classList.toggle('section-mobile-hidden', !isVisible);
      }
      if (navLi) {
        navLi.hidden = !isVisible;
      }
    }
  });

  // Controle do menu hambúrguer no celular:
  // Hambúrguer só se houver seções secundárias ativas em SECOES_NO_CELULAR; senão, remover do celular
  const hasSecondary = ['destaques', 'sobre', 'avaliacoes'].some(k => Boolean(SECOES_NO_CELULAR[k]));
  const menuToggle = $('mobileMenuBtn');
  if (menuToggle) {
    if (isDesktop) {
      menuToggle.hidden = false;
      menuToggle.style.display = '';
    } else {
      menuToggle.hidden = !hasSecondary;
      menuToggle.style.display = hasSecondary ? 'inline-flex' : 'none';
    }
  }

  // Oculta aba de ofertas no celular se desativada em SECOES_NO_CELULAR
  const ofertasTab = document.querySelector('.menu-tab-btn--ofertas');
  if (ofertasTab) {
    ofertasTab.hidden = !isDesktop && !SECOES_NO_CELULAR.ofertas;
  }

  // Se estiver no celular, renderiza os blocos exclusivos do app
  if (!isDesktop) {
    if (state.currentCategory === 'todos') {
      state.currentCategory = 'tradicionais';
      document.querySelectorAll('.menu-tab-btn').forEach(btn => {
        const isActive = (btn.dataset.category === 'tradicionais');
        btn.classList.toggle('active', isActive);
        btn.setAttribute('aria-selected', isActive ? 'true' : 'false');
        btn.setAttribute('tabindex', isActive ? '0' : '-1');
      });
      renderMenu();
    }
    renderMobileBanner();
    renderMobileMaisPedidas();
    renderMobileOfferBanner();
    syncMenuQuantityControls();
    initMobileBottomNav();
  } else {
    pauseBannerAutoplay();
  }
}

// Iframe do Google Maps: no celular NÃO carrega; no PC renderiza dinamicamente
function renderDesktopMap() {
  const frame = $('mapDesktopFrame');
  if (!frame || frame.querySelector('iframe')) return;

  const iframe = document.createElement('iframe');
  iframe.title = "Mapa de localização da Montese pizzaria no Centro de Palotina - PR";
  iframe.src = "https://maps.google.com/maps?q=Centro,+Palotina+-+PR&t=&z=15&ie=UTF8&iwloc=&output=embed";
  iframe.loading = "lazy";
  iframe.referrerPolicy = "no-referrer-when-downgrade";
  iframe.allowFullscreen = true;
  frame.appendChild(iframe);
}

/* ========================================================================
   ===== HERO INTERATIVO (PIZZA GIGANTE, MINIATURAS E PARALLAX) =====
   Renderizado exclusivamente em telas >= 768px para desempenho máximo no celular.
   ======================================================================== */
let heroAutoplayTimer = null;
let currentHeroPizzaId = 'pz-marguerita';
let heroParallaxCleanup = null;

// Renderiza a pizza principal gigante apenas no Desktop
function renderDesktopHeroVisual(pizza) {
  const heroVisual = $('heroVisual');
  if (!heroVisual) return;

  heroVisual.innerHTML = `
    <div class="hero-pizza-glow" aria-hidden="true"></div>
    <div class="hero-pizza-frame">
      <div class="hero-pizza-spin-layer">
        <img id="heroMainPizzaImg"
             class="hero-main-pizza"
             src="${pizza.image}"
             alt="Pizza ${pizza.name} artesanal da Montese pizzaria"
             fetchpriority="high"
             width="640"
             height="640">
      </div>
    </div>
  `;
}

// Renderiza os 7 elementos decorativos flutuantes apenas no Desktop
function renderDesktopHeroDecor() {
  const decorContainer = $('heroDecorations');
  if (!decorContainer) return;

  decorContainer.innerHTML = `
    <div class="hero-decor decor-1" data-depth="0.35"><svg viewBox="0 0 60 40"><use href="#basil-leaf"/></svg></div>
    <div class="hero-decor decor-2" data-depth="0.55"><svg viewBox="0 0 54 54"><use href="#tomato-slice"/></svg></div>
    <div class="hero-decor decor-3" data-depth="0.3"><svg viewBox="0 0 60 40"><use href="#basil-leaf"/></svg></div>
    <div class="hero-decor decor-4" data-depth="0.65"><svg viewBox="0 0 54 54"><use href="#tomato-slice"/></svg></div>
    <div class="hero-decor decor-5" data-depth="0.25"><svg viewBox="0 0 60 40"><use href="#basil-leaf"/></svg></div>
    <div class="hero-decor decor-6 decor-blur" data-depth="0.18"><svg viewBox="0 0 54 54"><use href="#tomato-slice"/></svg></div>
    <div class="hero-decor decor-7 decor-blur" data-depth="0.4"><svg viewBox="0 0 60 40"><use href="#basil-leaf"/></svg></div>
  `;
}

// Desmonta recursos pesados ao alternar para modo celular
function teardownDesktopHero() {
  clearInterval(heroAutoplayTimer);
  heroAutoplayTimer = null;

  if (heroParallaxCleanup) {
    heroParallaxCleanup();
    heroParallaxCleanup = null;
  }

  const thumbnailsContainer = $('heroThumbnails');
  if (thumbnailsContainer) thumbnailsContainer.innerHTML = '';

  const heroVisual = $('heroVisual');
  if (heroVisual) heroVisual.innerHTML = '';

  const decorContainer = $('heroDecorations');
  if (decorContainer) decorContainer.innerHTML = '';
}

// Inicializa a composição do Hero no PC / Tablet (>= 768px)
function initHeroComposition() {
  const isDesktop = window.matchMedia(`(min-width: ${BREAKPOINT_DESKTOP}px)`).matches;
  if (!isDesktop) {
    teardownDesktopHero();
    return;
  }

  // O novo hero desktop usa foto horizontal ponta a ponta e degradê escuro.
  // Desativa e limpa recursos dinâmicos do hero antigo (pizza giratória, miniaturas, autoplay e parallax).
  teardownDesktopHero();

  // Sincroniza frete grátis na linha de informações do hero a partir da constante existente
  const metaFreteText = document.querySelector('.hero-meta-frete-text');
  if (metaFreteText && typeof CONFIG !== 'undefined' && CONFIG.freeShippingThreshold) {
    metaFreteText.textContent = `Frete grátis acima de ${formatBRL(CONFIG.freeShippingThreshold)}`;
  }
}

// Parallax sutil nos elementos decorativos (manjericão e tomates) apenas em telas grandes
function initHeroParallax() {
  const heroSection = $('inicio');
  const decorElements = document.querySelectorAll('.hero-decor');
  if (!heroSection || decorElements.length === 0) return;

  const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
  const isDesktop = window.matchMedia(`(min-width: ${BREAKPOINT_DESKTOP}px)`).matches;
  if (isReducedMotion || isTouchDevice || !isDesktop) return;

  let mouseX = 0;
  let mouseY = 0;
  let currentX = 0;
  let currentY = 0;
  let rafId = null;

  function onMouseMove(e) {
    const rect = heroSection.getBoundingClientRect();
    const halfWidth = rect.width / 2;
    const halfHeight = rect.height / 2;
    mouseX = (e.clientX - rect.left - halfWidth) / halfWidth;
    mouseY = (e.clientY - rect.top - halfHeight) / halfHeight;

    if (!rafId) {
      rafId = requestAnimationFrame(updateParallax);
    }
  }

  function updateParallax() {
    currentX += (mouseX - currentX) * 0.08;
    currentY += (mouseY - currentY) * 0.08;

    decorElements.forEach(el => {
      const depth = parseFloat(el.getAttribute('data-depth')) || 0.3;
      const moveX = currentX * depth * 22;
      const moveY = currentY * depth * 22;
      el.style.setProperty('--parallax-x', `${moveX.toFixed(1)}px`);
      el.style.setProperty('--parallax-y', `${moveY.toFixed(1)}px`);
    });

    if (Math.abs(mouseX - currentX) > 0.005 || Math.abs(mouseY - currentY) > 0.005) {
      rafId = requestAnimationFrame(updateParallax);
    } else {
      rafId = null;
    }
  }

  heroSection.addEventListener('mousemove', onMouseMove, { passive: true });
  heroParallaxCleanup = () => {
    heroSection.removeEventListener('mousemove', onMouseMove);
    if (rafId) cancelAnimationFrame(rafId);
  };
}

// Monitor de redimensionamento e rotação em tempo real via matchMedia 'change'
function initResponsiveLayoutWatcher() {
  const desktopMq = window.matchMedia(`(min-width: ${BREAKPOINT_DESKTOP}px)`);

  function updateLayout(isDesktop) {
    applyMobileSectionVisibility(isDesktop);
    if (isDesktop) {
      initHeroComposition();
      renderDesktopMap();
    } else {
      teardownDesktopHero();
    }
  }

  desktopMq.addEventListener('change', (e) => {
    updateLayout(e.matches);
    refreshMenuForLayoutChange();
  });

  updateLayout(desktopMq.matches);
}

function initScrollReveal() {
  const elements = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    elements.forEach(el => el.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  elements.forEach(el => observer.observe(el));
}

/* ========================================================================
   ===== INICIALIZAÇÃO E EVENT LISTENERS =====
   ======================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  const currentYearEl = $('currentYear');
  if (currentYearEl) currentYearEl.textContent = new Date().getFullYear();

  // Sincroniza links de telefone e WhatsApp
  syncPhoneLinks();

  // Status e ofertas periódicos
  updateStoreStatus();
  renderOffers();
  setInterval(() => {
    updateStoreStatus();
    renderOffers();
  }, 60000);

  // Inicializa estado e renderização
  loadCartFromStorage();
  loadGlobalSizeFromStorage();
  applyTouchLayoutConstants();
  renderSizeBar();
  renderMenu();
  updateCartUI();
  initScrollReveal();
  initResponsiveLayoutWatcher();
  initMenuSearch();
  initBackToMenuTop();
  initStepsCarousel();
  ($('mobileBottomCartBtn') || $('mobileBottomCartTrigger'))?.addEventListener('click', openCartDrawer);

  // Delegação: Mais Pedidas (Adicionar / Remover no carrossel horizontal)
  $('mobileMaisPedidasCarousel')?.addEventListener('click', (e) => {
    const removeBtn = e.target.closest('[data-action="remove-one"]');
    if (removeBtn) {
      removeOneFromList(removeBtn.getAttribute('data-id'), removeBtn);
      return;
    }

    const addBtn = e.target.closest('[data-action="add-to-cart"]');
    if (addBtn) {
      addFromList(addBtn.getAttribute('data-id'), addBtn);
      return;
    }
  });

  // Atalho "Ver todas"
  $('mobileVerTodasBtn')?.addEventListener('click', (e) => {
    e.preventDefault();
    const grid = $('menuGrid');
    if (grid) grid.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
  });

  // Delegação: Seleção de Ofertas (Tanto no carrossel de ofertas quanto na faixa de oferta mobile)
  const onSelectOffer = (e) => {
    const offerBtn = e.target.closest('[data-action="select-offer"]');
    if (offerBtn) {
      handleOfferClick(offerBtn.getAttribute('data-offer-id'));
    }
  };
  $('offersContainer')?.addEventListener('click', onSelectOffer);
  $('mobileOfferBanner')?.addEventListener('click', onSelectOffer);

  // Fechar banner de oferta ativa
  $('closeOfferBannerBtn')?.addEventListener('click', () => {
    $('activeOfferBanner')?.classList.remove('show');
  });

  // ========================================================================
  // CONTROLE DAS ABAS DE CATEGORIA DO CARDÁPIO (RESPONSIVIDADE E ACESSIBILIDADE)
  // ========================================================================

  /**
   * Ativa a aba selecionada no PC (filtrando) ou navega até a seção no celular
   */
  function activateCategoryTab(tabBtn) {
    if (!tabBtn) return;
    const cat = tabBtn.getAttribute('data-category');

    // No celular (< 768px), o cardápio é contínuo: rola até a seção desejada
    if (window.innerWidth < BREAKPOINT_DESKTOP) {
      scrollToCategorySection(cat);
      return;
    }

    // No PC e Tablet (>= 768px): comportamento original inalterado de abas que filtram o cardápio
    if (cat === 'ofertas') {
      const target = $('mobileOfferBanner') || $('ofertas');
      if (target) {
        target.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
      }
      return;
    }

    // Tocar numa categoria durante a busca limpa a busca e aplica a categoria
    if (state.searchQuery !== '') {
      const input = $('menuSearchInput');
      const clearBtn = $('menuSearchClear');
      clearTimeout(searchDebounceTimer);
      if (input) input.value = '';
      if (clearBtn) clearBtn.hidden = true;
      state.searchQuery = '';
    }

    const tabs = document.querySelectorAll('.menu-tab-btn');
    tabs.forEach(btn => {
      const isActive = (btn === tabBtn);
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-selected', isActive ? 'true' : 'false');
      btn.setAttribute('tabindex', isActive ? '0' : '-1');
      if (isActive) {
        btn.setAttribute('aria-current', 'true');
      } else {
        btn.removeAttribute('aria-current');
      }
    });

    state.currentCategory = cat;
    renderMenu();

    scrollTabIntoView(tabBtn);
    updateTabScrollGradients();
  }

  /**
   * Inicializa delegação de cliques, navegação por teclado (Tab, setas, Home, End)
   * e gradientes de rolagem nas abas
   */
  function initMenuTabs() {
    const tabsWrapper = document.querySelector('.menu-tabs-wrapper') || document.querySelector('.menu-tabs');
    const tabsContainer = document.querySelector('.menu-tabs');
    if (!tabsWrapper || !tabsContainer) return;

    // Clique nas abas
    tabsWrapper.addEventListener('click', (e) => {
      const tabBtn = e.target.closest('.menu-tab-btn');
      if (!tabBtn) return;
      activateCategoryTab(tabBtn);
    });

    // Navegação por teclado: Tab acessa o grupo, setas movem, Home/End vão ao início/fim
    tabsContainer.addEventListener('keydown', (e) => {
      const tabs = Array.from(tabsContainer.querySelectorAll('.menu-tab-btn'));
      const currentTab = document.activeElement;
      const currentIndex = tabs.indexOf(currentTab);
      if (currentIndex === -1) return;

      let targetIndex = -1;
      if (e.key === 'ArrowRight') {
        targetIndex = (currentIndex + 1) % tabs.length;
      } else if (e.key === 'ArrowLeft') {
        targetIndex = (currentIndex - 1 + tabs.length) % tabs.length;
      } else if (e.key === 'Home') {
        targetIndex = 0;
      } else if (e.key === 'End') {
        targetIndex = tabs.length - 1;
      }

      if (targetIndex !== -1) {
        e.preventDefault();
        const targetTab = tabs[targetIndex];
        targetTab.focus();
        activateCategoryTab(targetTab);
      }
    });

    // Atualiza gradientes nas bordas ao rolar a fileira ou redimensionar a tela
    tabsContainer.addEventListener('scroll', updateTabScrollGradients, { passive: true });
    window.addEventListener('resize', updateTabScrollGradients, { passive: true });

    // Inicializa observador sticky da barra de categorias no celular via IntersectionObserver
    initStickyFiltersObserver();

    // Estado inicial
    updateTabScrollGradients();
  }

  initMenuTabs();

  // Delegação: Grade do Cardápio (Tamanhos, Adicionar, contador da lista, folha de tamanho e busca vazia)
  $('menuGrid')?.addEventListener('click', (e) => {
    const sizeBtn = e.target.closest('[data-action="select-size"]');
    if (sizeBtn) {
      const itemId = sizeBtn.getAttribute('data-id');
      const size = sizeBtn.getAttribute('data-size');
      state.selectedSizes[itemId] = size;
      renderMenu();
      return;
    }

    const sheetBtn = e.target.closest('[data-action="open-size-sheet"]');
    if (sheetBtn) {
      openSizeSheet(sheetBtn.getAttribute('data-id'));
      return;
    }

    const clearBtn = e.target.closest('[data-action="clear-search"]');
    if (clearBtn) {
      clearSearch();
      $('menuSearchInput')?.focus();
      return;
    }

    const removeBtn = e.target.closest('[data-action="remove-one"]');
    if (removeBtn) {
      removeOneFromList(removeBtn.getAttribute('data-id'), removeBtn);
      return;
    }

    const addBtn = e.target.closest('[data-action="add-to-cart"]');
    if (addBtn) {
      // Celular: adiciona sem abrir o carrinho e sem toast. PC: comportamento de sempre.
      if (isCompactLayout()) {
        addFromList(addBtn.getAttribute('data-id'), addBtn);
      } else {
        addToCart(addBtn.getAttribute('data-id'), addBtn);
      }
    }
  });

  // Delegação: seletor global de tamanho (celular)
  $('sizeBar')?.addEventListener('click', (e) => {
    const sizeBtn = e.target.closest('[data-global-size]');
    if (sizeBtn) setGlobalSize(sizeBtn.getAttribute('data-global-size'));
  });

  initSizeSheet();

  // Delegação: Itens do Carrinho (Quantidade e Remoção)
  $('cartItemsList')?.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-cart-action]');
    if (!btn) return;
    const action = btn.getAttribute('data-cart-action');
    const key = btn.getAttribute('data-key');

    if (action === 'inc') changeCartQty(key, 1);
    if (action === 'dec') changeCartQty(key, -1);
    if (action === 'remove') removeCartItem(key);
  });

  // Controle de Gaveta do Carrinho
  $('openCartBtn')?.addEventListener('click', openCartDrawer);
  $('closeCartBtn')?.addEventListener('click', closeCartDrawer);
  $('cartOverlay')?.addEventListener('click', closeCartDrawer);

  // Fechar modal Pix ou gaveta do carrinho na tecla Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (typeof isPixModalOpen === 'function' && isPixModalOpen()) {
        closePixModal();
        return;
      }
      closeCartDrawer();
      toggleMobileNav(false);
    }
  });

  // Alternar Entrega e Retirada
  $('optEntrega')?.addEventListener('click', () => setDeliveryMode('entrega'));
  $('optRetirada')?.addEventListener('click', () => setDeliveryMode('retirada'));

  // Exibir campo de troco apenas para Dinheiro e texto auxiliar para Pix
  $('paymentMethod')?.addEventListener('change', (e) => {
    const val = e.target.value;
    $('changeGroup').style.display = (val === 'Dinheiro') ? 'flex' : 'none';
    const helper = $('pixPaymentHelper');
    if (helper) {
      helper.style.display = (val === 'PIX') ? 'block' : 'none';
    }
  });

  // Listeners do modal de pagamento Pix
  $('pixCloseBtn')?.addEventListener('click', closePixModal);
  $('pixModalOverlay')?.addEventListener('click', closePixModal);
  $('pixBackBtn')?.addEventListener('click', () => {
    closePixModal();
    $('paymentMethod')?.focus();
  });
  $('pixCopyBtn')?.addEventListener('click', copyPixCode);
  $('pixConfirmPaidBtn')?.addEventListener('click', confirmPixPaymentAndSend);

  // Focus trap acessível dentro do modal Pix
  $('pixModal')?.addEventListener('keydown', (e) => {
    if (e.key !== 'Tab') return;
    const focusables = $('pixModal').querySelectorAll(
      'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
    if (focusables.length === 0) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];

    if (e.shiftKey) {
      if (document.activeElement === first) {
        last.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === last) {
        first.focus();
        e.preventDefault();
      }
    }
  });

  // Sincroniza disponibilidade inicial do Pix no carregamento
  syncPixAvailability();

  // Prevenção de recarregamento no formulário de checkout
  $('checkoutForm')?.addEventListener('submit', (e) => e.preventDefault());

  // Botão Finalizar Pedido
  $('finishOrderBtn')?.addEventListener('click', sendOrderToWhatsApp);

  // Menu Hambúrguer Mobile
  $('mobileMenuBtn')?.addEventListener('click', () => toggleMobileNav());

  // Fechar menu mobile ao clicar em qualquer link de navegação (Delegação DRY)
  $('mobileNav')?.addEventListener('click', (e) => {
    if (e.target.closest('.mobile-nav-link')) {
      toggleMobileNav(false);
    }
  });
});
