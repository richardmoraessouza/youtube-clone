# 🎥 YouTube Clone

Um clone moderno e responsivo da interface do YouTube desenvolvido com React, Vite e SCSS. Este projeto replica a experiência visual e funcional do YouTube com uma interface limpa e intuitiva.

## 🚀 Demonstração

Acesse a versão online: [YouTube Clone](https://richardmoraessouza.github.io/youtube-clone)

## ✨ Funcionalidades

### 🎯 Principais Recursos
- **Interface Responsiva**: Adaptável para desktop, tablet e mobile
- **Menu Lateral Colapsível**: Menu de navegação que se adapta ao tamanho da tela
- **Grid de Vídeos**: Exibição em grade dos vídeos com thumbnails
- **Barra de Pesquisa**: Campo de busca com ícones intuitivos
- **Filtros de Categoria**: Sistema de filtros para diferentes tipos de conteúdo
- **Design Fiel ao Original**: Interface que replica fielmente o YouTube

### 🎨 Componentes
- **Menu**: Barra de navegação superior com logo, pesquisa e perfil
- **CardVideos**: Cards de vídeos com thumbnail, título, canal e visualizações
- **Filtros**: Sistema de categorização de conteúdo
- **Menu Lateral**: Navegação expandível com links e informações

## 🛠️ Tecnologias Utilizadas

### Frontend
- **React 19.1.1** - Biblioteca principal para interface
- **Vite 7.1.2** - Build tool e servidor de desenvolvimento
- **SCSS** - Pré-processador CSS para estilização
- **Tailwind CSS 4.1.12** - Framework CSS utilitário
- **React Icons 5.5.0** - Biblioteca de ícones

### Ferramentas de Desenvolvimento
- **ESLint** - Linter para qualidade de código
- **GitHub Pages** - Deploy automático
- **Material Symbols** - Ícones do Google Material Design

## 📁 Estrutura do Projeto

```
cloneYoutube/
├── public/
│   └── image/                 # Imagens estáticas
│       ├── favicon-youtube.png
│       ├── richard.jpg
│       └── Youtube.png
├── src/
│   ├── components/
│   │   ├── CardVideos/        # Componente de cards de vídeo
│   │   │   ├── CardVideos.jsx
│   │   │   ├── CardVideos.json # Dados dos vídeos
│   │   │   └── CardVideos.module.scss
│   │   ├── Fitro/             # Componente de filtros
│   │   │   ├── FItro.jsx
│   │   │   ├── Fitro.module.scss
│   │   │   └── Fitros.json
│   │   ├── FitrosMenu/        # Menu de filtros
│   │   │   ├── FitrosMenu.jsx
│   │   │   ├── FitrosMenu.module.scss
│   │   │   └── Fitros.json
│   │   └── Menu/              # Menu principal
│   │       ├── Menu.jsx
│   │       └── Menu.module.scss
│   ├── App.jsx                # Componente principal
│   ├── App.css                # Estilos globais
│   ├── index.css              # Estilos base
│   └── main.jsx               # Ponto de entrada
├── dist/                      # Build de produção
├── package.json               # Dependências e scripts
├── vite.config.js             # Configuração do Vite
└── README.md                  # Este arquivo
```

## 🚀 Como Executar

### Pré-requisitos
- Node.js (versão 16 ou superior)
- npm ou yarn

### Instalação

1. **Clone o repositório**
   ```bash
   git clone https://github.com/richardmoraessouza/youtube-clone.git
   cd youtube-clone
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Execute o projeto em modo de desenvolvimento**
   ```bash
   npm run dev
   ```

4. **Acesse no navegador**
   ```
   http://localhost:5173
   ```

### Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev          # Inicia servidor de desenvolvimento

# Produção
npm run build        # Gera build de produção
npm run preview      # Visualiza build de produção

# Deploy
npm run predeploy    # Executa build antes do deploy
npm run deploy       # Deploy para GitHub Pages

# Qualidade de código
npm run lint         # Executa ESLint
```

## 🎨 Design e Interface

### Características Visuais
- **Layout Responsivo**: Adapta-se perfeitamente a diferentes tamanhos de tela
- **Menu Inteligente**: Menu lateral que colapsa automaticamente em telas menores
- **Grid Flexível**: Sistema de grid que se ajusta ao conteúdo
- **Tipografia**: Fonte e tamanhos que replicam o YouTube original
- **Cores**: Paleta de cores fiel ao design do YouTube

### Componentes Principais

#### Menu Superior
- Logo do YouTube
- Barra de pesquisa com botão de busca
- Botão de microfone para pesquisa por voz
- Botões de ação (Criar, Notificações, Perfil)

#### Menu Lateral
- Navegação principal
- Links de categorias
- Informações do rodapé
- Comportamento responsivo

#### Cards de Vídeo
- Thumbnail do vídeo
- Título clicável
- Avatar do canal
- Informações de visualizações e data

## 📱 Responsividade

O projeto foi desenvolvido com foco na responsividade:

- **Desktop (≥1310px)**: Menu lateral fixo, layout completo
- **Tablet (768px - 1309px)**: Menu colapsível, layout adaptado
- **Mobile (<768px)**: Menu hambúrguer, layout otimizado

## 🔧 Configuração

### Vite Configuration
```javascript
export default defineConfig({
  base: '/youtube-clone/',
  plugins: [react(), tailwindcss()],
})
```

### GitHub Pages
O projeto está configurado para deploy automático no GitHub Pages com a base path `/youtube-clone/`.

## 📊 Dados dos Vídeos

Os vídeos são carregados a partir do arquivo `CardVideos.json` que contém:
- Link do vídeo
- Thumbnail
- Avatar do canal
- Título
- Nome do criador
- Número de visualizações e data

## 🎯 Funcionalidades Implementadas

### ✅ Concluído
- [x] Interface responsiva
- [x] Menu lateral colapsível
- [x] Grid de vídeos
- [x] Barra de pesquisa
- [x] Sistema de filtros
- [x] Deploy no GitHub Pages
- [x] Estilização com SCSS
- [x] Componentes modulares

### 🔄 Futuras Implementações
- [ ] Funcionalidade de pesquisa real
- [ ] Player de vídeo integrado
- [ ] Sistema de comentários
- [ ] Autenticação de usuário
- [ ] Sistema de likes/dislikes
- [ ] Histórico de visualizações
- [ ] Playlists personalizadas

## 🤝 Contribuição

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença ISC. Veja o arquivo `package.json` para mais detalhes.

## 👨‍💻 Autor

**Richard Moraes Souza**
- GitHub: [@richardmoraessouza](https://github.com/richardmoraessouza)
- LinkedIn: [Richard Moraes Souza](https://www.linkedin.com/in/richard-moraes-souza/)


⭐ Se este projeto foi útil para você, considere dar uma estrela no repositório!