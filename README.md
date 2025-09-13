# 🛍️ Mini Loja – Atividade de Estilização em React

Este projeto foi desenvolvido como parte da atividade de **Desenvolvimento Web** do curso da +praTi, com o objetivo de implementar a **mesma tela em quatro versões**, cada uma utilizando uma técnica de estilização diferente no React.

---

## 📌 Estrutura da Atividade

A aplicação foi dividida em **quatro pastas**, cada uma representando uma abordagem distinta de estilização:

- **01-css-global/** → Estilização utilizando **CSS Global**
- **02-css-modules/** → Estilização utilizando **CSS Modules**
- **03-tailwind/** → Estilização utilizando **Tailwind CSS**
- **04-styled-components/** → Estilização utilizando **styled-components**

Cada pasta contém os componentes principais:

- `Navbar`
- `ProductCard`
- `Button`
- `Skeleton`

---

## 🖼️ Exemplo de Tela Construída

- **Navbar fixa** com:
  - Logo
  - Toggle de tema (claro/escuro com persistência em `localStorage`)
  - Badge do carrinho
- **Grid de produtos responsivo**, com os seguintes breakpoints:
  - ≤ 480px → 1 coluna
  - 481–768px → 2 colunas
  - 769–1024px → 3 colunas
  - ≥ 1025px → 4 colunas
- **Card de produto** com:
  - Imagem quadrada (1:1) com `object-fit`
  - Título com **2 linhas + ellipsis**
  - Preço
  - Rating com ícones ★
  - Tag (“Novo” / “Promo”)
  - Botão `Adicionar` com variantes **solid / outline / ghost**

---

## ⚡ Funcionalidades Implementadas

- Persistência do **modo claro/escuro**
- **Skeleton** de carregamento sem layout shift (simulação de atraso no carregamento)
- Botões com estados:
  - Hover
  - Focus visível (acessibilidade)
  - Disabled
  - Loading
- **Animações e transições** (150–250ms, usando transform/opacity)
- **Acessibilidade**:
  - Navegação por teclado
  - Uso de `aria-*` quando necessário
  - Contraste mínimo 4.5:1

---

## 📊 Dados dos Produtos

Foram exibidos **6 produtos**, cada um com:

- id
- título
- preço
- rating
- tag
- imagem placeholder (com lazy loading)

---

## ✅ Critérios Atendidos

- Breakpoints exatamente como descritos
- Dark mode com persistência
- Focus ring visível em todos os elementos interativos
- Skeleton sem deslocar layout
- Variantes de botão consistentes nos dois temas
- Organização clara de pastas
- Uso de tokens (cores, espaçamentos, bordas e sombras)

---

## 🚀 Tecnologias Utilizadas

- **React**
- **CSS Global**
- **CSS Modules**
- **Tailwind CSS**
- **styled-components**

---

## 📂 Organização de Pastas

mini-loja/
│
├── 01-css-global/
├── 02-css-modules/
├── 03-tailwind/
└── 04-styled-components/

---

## 📖 Sobre a Atividade

Esta atividade teve como objetivo **comparar diferentes formas de estilização em projetos React**, entendendo prós e contras de cada abordagem e garantindo que a interface final fosse consistente em todas as versões.

---
