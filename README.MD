# Node.js, Nginx, and MySQL Docker Setup

Este projeto configura um ambiente de desenvolvimento com Docker utilizando Node.js, Nginx e MySQL. O objetivo é demonstrar a utilização do Nginx como proxy reverso para uma aplicação Node.js, que se comunica com um banco de dados MySQL.

## Estrutura do Projeto

- **Nginx**: Servidor de proxy reverso configurado para encaminhar requisições para a aplicação Node.js.
- **Node.js**: Aplicação que adiciona registros a uma tabela MySQL e retorna uma mensagem.
- **MySQL**: Banco de dados que armazena os registros.

## Pré-requisitos

Certifique-se de ter o Docker e o Docker Compose instalados em sua máquina. Você pode baixá-los [aqui](https://docs.docker.com/get-docker/) e [aqui](https://docs.docker.com/compose/install/).

## Configuração e Execução

1. **Clone o repositório**

   Clone este repositório para sua máquina local:

   ```sh
   git clone <URL_DO_REPOSITORIO>
   cd <NOME_DA_PASTA_DO_PROJETO>
