# Cypress Heroes - Automação de Testes E2E

<div align="center">
  <img src="https://www.cypress.io/static/cypress-io-logo-social-share-8fb8a1db3cdc0b289fad927694ecb415.png" width="200" alt="Cypress Logo">
</div>

Repositório de testes automatizados para a aplicação Cypress Heroes utilizando Cypress e boas práticas de automação.

## :sparkles: Recursos

- Testes End-to-End completos
- Padrão Page Objects
- Relatórios de execução
- Integração contínua
- Dados de teste dinâmicos

## :hammer_and_wrench: Tecnologias

| Tecnologia | Badge |
|------------|-------|
| JavaScript | ![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?logo=javascript&logoColor=black) |
| Cypress | ![Cypress](https://img.shields.io/badge/-Cypress-17202C?logo=cypress) |
| GitHub Actions | ![GitHub Actions](https://img.shields.io/badge/-GitHub_Actions-2088FF?logo=github-actions) |
| Node.js | ![Node.js](https://img.shields.io/badge/-Node.js-339933?logo=node.js&logoColor=white) |

## :package: Pré-requisitos

- Node.js v16+
- npm v8+
- Cypress v12+

## :rocket: Como Executar

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/cypress-heroes.git
cd cypress-heroes

# Instale as dependências
npm install

# Execute os testes no modo headless
npm test

# Ou abra o Cypress no modo interativo
npm run cy:open

# :building_construction: Estrutura do Projeto
cypress-heroes/
├── cypress/
│   ├── e2e/              # Especificações de teste
│   ├── fixtures/         # Dados de teste
│   ├── pages/            # Page Objects
│   ├── plugins/          # Plugins do Cypress
│   └── support/          # Comandos customizados
├── reports/              # Relatórios de execução
├── .github/workflows/    # Configurações de CI
├── cypress.config.js     # Configuração do Cypress
└── package.json

# :test_tube: Principais Testes
Login de usuário
Cadastro de heróis
Fluxos completos