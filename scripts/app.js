// Importa as perguntas e respostas
import { perguntasRespostas } from './pergunta.js'; // Se estiver usando módulos

// Função para controlar a visibilidade da resposta
function toggleResposta(event) {
    const resposta = event.target.closest('.cartao__conteudo').querySelector('.cartao__conteudo__resposta');
    
    if (event.target.checked) {
        resposta.classList.remove('hidden');
    } else {
        resposta.classList.add('hidden');
    }
}

// Função para renderizar os flashcards
function renderizarFlashcards() {
    const container = document.getElementById('container');

    if (!container) {
        console.error('Elemento com id "container" não encontrado!');
        return;
    }

    // Agrupa as perguntas por categoria
    const categorias = perguntasRespostas.reduce((acc, item) => {
        if (!acc[item.categoria]) {
            acc[item.categoria] = []; // Cria uma nova categoria se não existir
        }
        acc[item.categoria].push(item); // Adiciona a pergunta à categoria correspondente
        return acc;
    }, {});

    // Itera pelas categorias e renderiza as perguntas
    Object.keys(categorias).forEach(categoria => {
        // Cria o título da categoria
        const categoriaDiv = document.createElement('div');
        categoriaDiv.classList.add('categoria');
        const tituloCategoria = document.createElement('h2');
        tituloCategoria.textContent = categoria;
        categoriaDiv.appendChild(tituloCategoria);

        // Adiciona as perguntas dessa categoria
        categorias[categoria].forEach(item => {
            const article = document.createElement('article');
            article.classList.add('cartao');
            article.setAttribute('aria-labelledby', `cartao-titulo-${item.pergunta}`);

            const conteudo = document.createElement('div');
            conteudo.classList.add('cartao__conteudo');

            const perguntaDiv = document.createElement('div');
            perguntaDiv.classList.add('cartao__conteudo__pergunta');
            perguntaDiv.innerHTML = ` 
                <label>
                    <input type="checkbox" class="checkbox-pergunta"> ${item.pergunta}
                </label>
            `;

            const respostaDiv = document.createElement('div');
            respostaDiv.classList.add('cartao__conteudo__resposta', 'hidden'); // Resposta escondida por padrão
            respostaDiv.innerHTML = `<p>${item.resposta}</p>`;

            // Adiciona os elementos ao flashcard
            conteudo.appendChild(perguntaDiv);
            conteudo.appendChild(respostaDiv);
            article.appendChild(conteudo);

            // Adiciona o flashcard ao container
            categoriaDiv.appendChild(article);

            // Adiciona o evento para mostrar/ocultar resposta
            const checkbox = perguntaDiv.querySelector('.checkbox-pergunta');
            checkbox.addEventListener('change', toggleResposta);
        });

        // Adiciona a categoria ao container
        container.appendChild(categoriaDiv);
    });
}

// Renderiza os flashcards ao carregar a página
document.addEventListener('DOMContentLoaded', renderizarFlashcards);
