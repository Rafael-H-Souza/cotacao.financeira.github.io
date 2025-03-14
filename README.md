# 📈Cotações em Tempo Real📉

Este projeto é uma aplicação web para exibir cotações financeiras e índices econômicos em tempo real. O foco inicial foi na construção da estrutura e organização do projeto, com design aprimorado e melhor experiência do usuário.

## 🚧 Status do Projeto
> **Em desenvolvimento:** Esta é apenas a estrutura inicial com algumas funcionalidades implementadas.

- [x] Estruturação inicial do projeto
- [x] Estilo moderno e responsivo para desktop e dispositivos móveis
- [ ] Integração com API de cotações financeiras
- [ ] Implementação completa das funcionalidades planejadas
- [ ] aplicação de conta do usuário vinculada com Email e whatsapp para receber info de trade
- [ ] Demostração de trade em uma plataforma demo com interação do usuário
- [ ] Criptografias de dados utilizado jwt, com token de acesso 
- [ ] gravação de dados em banco de dado Mongodb || MySQL

## 📂 Estrutura do Projeto

```
cotacao-app/
├─ dist/
│  ├─ src/
│  │  ├─ config/
│  │  │  └─ dotenv.config.js
│  │  ├─ controllers/
│  │  │  └─ cotacao.controller.js
│  │  ├─ routes/
│  │  │  └─ cotacao.routes.js
│  │  ├─ services/
│  │  │  └─ cotacao.service.js
│  │  └─ utils/
│  │     └─ errorHandler.js
│  ├─ app.js
│  └─ server.js
├─ public/
│  ├─ scripts/
│  │  └─ scripts.js
│  ├─ styles/
│  │  └─ styles.css
│  └─ views/
│     └─ index.html
├─ src/
│  ├─ config/
│  │  └─ dotenv.config.ts
│  ├─ controllers/
│  │  └─ cotacao.controller.ts
│  ├─ routes/
│  │  └─ cotacao.routes.ts
│  ├─ services/
│  │  └─ cotacao.service.ts
│  └─ utils/
│     └─ errorHandler.ts
├─ .env
├─ .gitignore
├─ app.ts
├─ package-lock.json
├─ package.json
├─ README.md
├─ server.ts
└─ tsconfig.json
```

## 🚀 Tecnologias Utilizadas
- **Node.js** com **Express** para o backend
- **TypeScript** para tipagem segura
- **HTML5**, **CSS3** e **JavaScript** para o frontend
- **Axios** para requisições HTTP
- **Dotenv** para variáveis de ambiente

## 🔧 Como Executar o Projeto

### 1. Clonar o repositório 📊
```bash
git clone https://github.com/Rafael-H-Souza/.github.io-cotacao.financeira.git
```

### 2. Instalar as dependências
```bash
npm install
```

### 3. Configurar variáveis de ambiente
Crie um arquivo `.env` na raiz do projeto e adicione as seguintes variáveis:
```env
PORT=3000
API_KEY=seu_token_aqui
```

## 🚀 4. Executar o projeto
1. Clone o repositório:
```
git clone https://github.com/Rafael-H-Souza/.github.io-cotacao.financeira.git
```
2. Instale as dependências:
```
npm install
```
3. Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:
```
PORT=3000
```
4. Para rodar em modo de desenvolvimento:
```
npm run dev
```
5. Para rodar a versão buildada:
```
npm run build
npm start
```
6. Acesse no navegador: 
``` 
[http://localhost:3000/index](http://localhost:3000/index)
```

## 🔥 Funcionalidades Futuras
- [ ] Autenticação de usuários
- [ ] Painel administrativo para gerenciar dados financeiros
- [ ] Notificações e alertas personalizados
- [ ] Suporte para gráficos interativos

## 📋 Funcionalidades Planejadas
- Exibição de cotações de moedas e índices financeiros
- Interface responsiva para desktop e dispositivos móveis
- Sistema de login e criação de conta
- Filtros personalizados para exibir cotações por categoria

## 📞 Contato
- 👨‍💻 **Autor:** Rafael Souza 
- 📧 **Email:** [rafael.h.souza@outlook.com](mailto:rafael.h.souza@outlook.com)  
- 📊 **LinkedIn:** [[LinkedIn](https://www.linkedin.com/in/rafael-henrique-de-souza/)](https://www.linkedin.com/in/rafael-henrique-de-souza/)

---

_Projeto desenvolvido com foco na organização e boa estrutura de código para escalabilidade futura._


