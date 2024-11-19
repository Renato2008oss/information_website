# Flashcard - Aprenda de Forma Interativa

Este projeto é uma aplicação web interativa de flashcards, que permite que você aprenda conceitos de maneira rápida e divertida. O conteúdo dos flashcards é exibido de forma dinâmica, e as respostas podem ser reveladas ao interagir com caixas de seleção.

## Estrutura do Projeto
- A aplicação está dividida em três partes principais:

  . **HTML**: A estrutura da página.
  . **CSS**: Estilos e formatação da página.
  . **JavaScript**: Lógica para interatividade, incluindo a renderização dinâmica dos flashcards

## Estrutura de Pastas

```bash
/flashcards
  ├── /assets
  │     └── style.css            # Arquivo de estilos
  ├── /scripts
  │     ├── app.js               # Lógica principal de interação com os flashcards
  │     └── pergunta.js          # Perguntas e respostas
  └── index.html                 # Página principal
```

## Dependências

  + **HTML5**: Marcações básicas de estrutura da página.
  + **CSS3**: Estilos para tornar a interface agradável e responsiva.
  + **JavaScript ES6+**: Para a funcionalidade de interação e manipulação dos flashcards.

## Tecnologias Usadas

  + **Fontes**: Google Fonts (Roboto)
  + **CSS**: Flexbox para layout responsivo e animações suaves com transition.
  + **JavaScript**: Utiliza módulos ES6 para estruturar o código.

# Funcionalidade

## 1. Flashcards Dinâmicos
As perguntas são agrupadas por categorias e exibidas como cartões interativos. Cada flashcard tem:

  - **Pergunta**: Uma questão que o usuário pode ler.
  - **Resposta**: Inicialmente oculta, sendo revelada ao marcar a caixa de seleção ao lado da pergunta.
## 2. Interatividade
  
  - Ao marcar a caixa de seleção, a resposta associada à pergunta será exibida.
  - A resposta será ocultada novamente quando a caixa de seleção for desmarcada.

# Arquivos

## index.html
Este é o **arquivo principal** que contém a **estrutura HTML** da aplicação, incluindo a **inclusão de estilo e scripts**.

## assets/style.css
Este arquivo contém os **estilos da página**, incluindo **design responsivo e animações para os cartões de pergunta**.

## scripts/app.js
Este arquivo contém a **lógica para renderizar os flashcards** e **alternar a visibilidade das respostas**.

## scripts/pergunta.js
Este arquivo contém as **perguntas e respostas**. Você pode **adicionar** novas perguntas facilmente aqui.

# Como Usar
1. **Clone ou baixe o repositório.**
2. **Abra o arquivo index.html em um navegador.**
3. **Interaja com os flashcards clicando nas caixas de seleção para revelar as respostas.**

### PS: Caso não queira instalar o projeto, haverá uma Branch específica para download do projeto compactado 
  #### Name Branch: packages

# Contribuições
Este projeto é de código aberto. Se você quiser adicionar mais perguntas, melhorar o design ou corrigir algum erro, fique à vontade para contribuir!

1. **Faça um fork do projeto.**
2. **Crie uma branch (git checkout -b minha-feature).**
3. **Faça suas alterações.**
4. **Envie um pull request.**

# Licença
## Este código é um projeto Alura desenvolvido por Renato Justino
Este projeto é licenciado sob a Licença MIT - veja o arquivo LICENSE para mais detalhes.
