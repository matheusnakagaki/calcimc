# Calculadora de IMC- CLI

Este projeto é uma aplicação de linha de comando funcional desenvolvida em **Node.js** com **TypeScript**, criada como parte da 3ª Atividade Avaliativa da disciplina de Programação Web.

## 🚀 Requisitos Atendidos

- **Tipagem Forte:** Uso explícito de tipos (`number`, `string`, `void`) em todas as variáveis e funções, evitando o uso de `any`.
- **Interatividade:** Implementação de captura de dados via terminal utilizando a biblioteca `prompt-sync`.
- **Fluxo de Controle:** Sistema rodando dentro de um laço de repetição (`while`), permitindo múltiplas operações.
- **Funcionalidades:**
  - Novo cálculo de IMC.
  - Histórico de consultas realizadas durante a sessão.
  - Opção de saída estruturada.

### 📋 Pré-requisitos

Para instalar e rodar o software, você precisará de:
**Node.js** (Ambiente de execução)
**npm** (Gerenciador de pacotes)

### 🔧 Instalação

Siga o passo-a-passo para configurar o ambiente:

1. **Instale as dependências do projeto:**
   ```bash
   npm install

2. **Certifique-se de que o prompt-sync estão configurados:**

   ```bash
   npm install prompt - sync @types / prompt - sync

3. **Execute a aplicação utilizando o ts-node:**

   ```bash
   npx ts-node src/imc.ts

## ⚙️ Executando os testes

Explicar como executar os testes automatizados para este sistema.

### 🔩 Analise os testes de ponta a ponta

O sistema utiliza um menu iterativo que permite realizar múltiplas operações sem encerrar o programa.

⌨️ Demonstração de uso
Ao rodar o sistema, você terá as seguintes funcionalidades:

Opção 1: Realiza a captura do peso e altura, calcula o IMC e armazena o registro.

Opção 2: Exibe o histórico de todas as consultas realizadas na sessão atual usando um laço for.

Opção 0: Encerra o sistema com uma mensagem de saída.

## 🛠️ Construído com

Ferramentas utilizadas para o desenvolvimento:

* TypeScript 
* Node.js
* prompt-sync

## 📌 Versão

1.0

## ✒️ Autores

Matheus Nakagaki Gouveia

## 📄 Licença

GPL-3.0 license
---
