# Soluty Tecnologia - Website Institucional

![Soluty Tecnologia Logo](./assets/logo.png) ## Descrição

Este é o código-fonte do website institucional da Soluty Tecnologia, uma empresa focada em oferecer soluções tecnológicas inovadoras para pessoas e empresas. O site foi desenvolvido para apresentar os serviços da empresa, destacar seus diferenciais, exibir feedback de clientes e facilitar o contato.**[➡️ Acesse o site ao vivo AQUI](URL_DO_SEU_SITE_NO_GITHUB_PAGES_OU_OUTRA_HOSPEDAGEM)** ---## 🚩 Sumário* [Tecnologias Utilizadas](#-tecnologias-utilizadas)* [Funcionalidades Principais](#-funcionalidades-principais)* [Estrutura do Projeto](#-estrutura-do-projeto)* [Como Rodar Localmente](#-como-rodar-localmente)* [Visão Geral das Seções](#-visão-geral-das-seções)* [Personalização](#-personalização)* [Como Contribuir](#-como-contribuir)* [Licença](#-licença)* [Contato](#-contato)

---## ✨ Tecnologias Utilizadas

O projeto foi construído utilizando as seguintes tecnologias e bibliotecas:* **HTML5:** Estrutura e semântica do conteúdo.* **CSS3:** Estilização e design visual, incluindo Flexbox, Grid Layout e Variáveis CSS.* **JavaScript (ES6+):** Interatividade, manipulação do DOM e funcionalidades dinâmicas.* **Swiper.js:** Biblioteca para criar carrosséis/sliders responsivos (utilizado na seção "Nossos Destaques").* **ScrollReveal.js:** Biblioteca para animações de revelação de elementos ao rolar a página.* **Font Awesome:** Biblioteca de ícones vetoriais.* **Google Fonts:** Para a tipografia do site (DM Sans).

---## 🚀 Funcionalidades Principais* **Design Responsivo:** Adaptável a diferentes tamanhos de tela (desktops, tablets e smartphones).* **Navegação Fixa e Intuitiva:** Menu principal que acompanha o scroll e se torna translúcido.* **Menu Mobile:** Menu "hambúrguer" otimizado para dispositivos móveis.* **Hero Banner:** Seção de destaque inicial com imagem de fundo e chamada para ação.* **Seção de Boas-vindas:** Apresentação da empresa e estatísticas (clientes satisfeitos, especialistas, anos de experiência).* **Seção de Testemunhos:** Exibição de feedback de clientes e botão para avaliação no Google.* **Seção de Serviços:** Apresentação dos serviços oferecidos com ícones e preços.* **Carrossel de Destaques:** Slider com banners promocionais ou informativos.* **Banner Promocional Estático:** Imagem de destaque adicional.* **Seção de Contato:** Informações de contato (Instagram, E-mail) e botões para WhatsApp.* **Links Sociais:** Acesso rápido às redes sociais da empresa.* **Botão "Voltar ao Topo":** Facilita a navegação para o início da página.* **Botão Flutuante do WhatsApp:** Acesso rápido para contato via WhatsApp.* **Animações Suaves:** Elementos que surgem na tela conforme o usuário rola a página (ScrollReveal).


## 💻 Como Rodar Localmente

Para visualizar o projeto em sua máquina local, siga os passos abaixo:

1.  **Clone o repositório (se estiver no GitHub):**

    ```bash

    git clone [https://github.com/SEU_USUARIO/NOME_DO_REPOSITORIO.git](https://github.com/SEU_USUARIO/NOME_DO_REPOSITORIO.git)

    cd NOME_DO_REPOSITORIO

    ```

    Ou, se você já tem os arquivos, apenas navegue até a pasta do projeto.

2.  **Abra o arquivo `index.html`:**

    * Não é necessário nenhum servidor web especial para este projeto, pois ele é composto por arquivos estáticos.

    * Simplesmente abra o arquivo `index.html` diretamente no seu navegador de preferência (Google Chrome, Firefox, Edge, etc.).

E pronto! O site deverá ser exibido no seu navegador.

---

## 📄 Visão Geral das Seções

O site é uma página única (Single Page Application) com as seguintes seções principais, acessíveis pelo menu de navegação:

1.  **Início (`#welcome-content`):** Apresentação da Soluty Tecnologia, proposta de valor e estatísticas de impacto.

2.  **Serviços (`#services`):** Detalhamento dos principais serviços oferecidos, como formatação, desenvolvimento de sites e instalação de programas.

3.  **Destaque (`#banner-slider-area`):** Carrossel com banners mostrando promoções, novidades ou projetos em destaque.

4.  **Testemunhos (`#testimonials`):** Feedback de clientes satisfeitos e um convite para novas avaliações no Google.

5.  **Contato (`#contact`):** Facilita a comunicação direta com a empresa através de links para redes sociais, e-mail e WhatsApp.

Há também uma seção de banner promocional (`#about`) entre "Destaques" e "Contato".

---

## 🔧 Personalização

Este site foi construído para ser facilmente personalizável. Veja abaixo os principais pontos que você pode querer alterar:

* **Informações de Contato:**

    * **WhatsApp:** Altere o número nos links `https://wa.me/SEUNUMERO` presentes no `index.html`.

    * **Instagram:** Atualize o link para o perfil do Instagram no `index.html`.

    * **E-mail:** Modifique o endereço de e-mail na seção de contato no `index.html`.

    * **Link de Avaliação do Google:** Atualize o link no botão "Deixe sua Avaliação no Google" na seção `#testimonials` do `index.html`.

* **Textos e Conteúdo:**

    * Todos os textos (títulos, parágrafos, descrições de serviços) podem ser editados diretamente no arquivo `index.html`.

    * **Serviços:** Modifique os nomes, descrições e preços dos serviços na seção `#services`.

    * **Testemunhos:** Altere os textos e nomes dos clientes na seção `#testimonials`.

* **Imagens:**

    * **Logo e Favicon:** Substitua os arquivos `logo.png` e `favicon.png` na pasta `assets/` pelas suas imagens.

    * **Banners e Imagens de Seção:** Substitua as imagens na pasta `assets/` mantendo os nomes ou atualizando as referências no `index.html` e, se necessário, no `style.css` (para a imagem de fundo do hero banner).

* **Estilos e Cores:**

    * As cores principais, fontes e outros aspectos visuais podem ser ajustados no arquivo `style.css`. Procure pelas variáveis CSS no início do arquivo (`:root { ... }`) para alterações globais de cores.

* **Links de Redes Sociais:**

    * Atualize os `href` das tags `<a>` para os links corretos do Instagram, YouTube (se aplicável) e WhatsApp nas seções de navegação e rodapé.

---

## 🤝 Como Contribuir

Este é um projeto pessoal, mas se você tiver sugestões ou encontrar bugs, sinta-se à vontade para abrir uma "Issue" neste repositório do GitHub.

Se desejar contribuir com código:

1.  Faça um "Fork" do projeto.

2.  Crie uma nova "Branch" (`git checkout -b feature/sua-feature`).

3.  Faça suas alterações.

4.  Faça o "Commit" das suas alterações (`git commit -m 'Adicionando sua feature'`).

5.  Faça o "Push" para a Branch (`git push origin feature/sua-feature`).

6.  Abra um "Pull Request".

---

## 📜 Licença

© 2025 Soluty Tecnologia. Todos os direitos reservados.

---

## 📞 Contato

**Soluty Tecnologia**

* **Desenvolvedor Principal:** Antoniel Sousa

* **Instagram:** [@solutytecnologia](https://www.instagram.com/solutytecnologia/)

* **E-mail:** antonielsousa@solutytecnologia.com

* **WhatsApp:** [Fale Conosco](https://wa.me/558499507938)

---

Feito com ❤️ e muito código!
