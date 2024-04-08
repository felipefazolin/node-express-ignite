# Node Express Ignite
## O Boilerplate Node Express para Desenvolvimento Rápido

Criei este projeto boilerplate com o objetivo de oferecer uma estrutura confiável e simplificada para desenvolvedores iniciantes, permitindo economizar tempo e esforço na configuração inicial de projetos.
Ele já vem pré-configurado com Express, MongoDB, Mongoose, Dotenv, Nodemon e Module Alias, proporcionando uma infraestrutura robusta desde o início.

### Funcionalidades

- **Estrutura Pré-configurada**: Separada em configuração, controladores, modelos e rotas, facilitando a organização e escalabilidade do código.
- **Gestão de Variáveis de Ambiente**: Utiliza Dotenv para configurar ambientes de desenvolvimento, teste e produção.
- **Integração com MongoDB**: Mongoose simplifica a modelagem e interação com o banco de dados MongoDB.
- **Atualização Automática com Nodemon**: Reinicia automaticamente o servidor após alterações nos arquivos.
- **Importação Simplificada com Module Alias**: Cria aliases de módulo para facilitar a importação de arquivos.

## Estrutura do Projeto

O projeto está estruturado da seguinte forma:

```plaintext
project-root/
│
├── src/
│   ├── config/
│   │   └── db.js                      // Arquivo de configuração do banco de dados
│   ├── controllers/
│   │   └── elementController.js       // Controladores para lidar com lógica de negócios dos elementos
│   ├── models/
│   │   └── Element.js                 // Definição do modelo do elemento (usando Mongoose)
│   ├── routes/
│   │   └── elementRoutes.js           // Rotas relacionadas aos elementos
│   ├── app.js                         // Arquivo principal da aplicação Express
│
├── node_modules/                      // Pacotes instalados pelo npm
├── package.json                       // Arquivo de configuração do npm
├── package-lock.json                  // Arquivo de lock do npm
└── .env                               // Arquivo de ambiente
```

## Pré-requisitos

- Node.js e npm instalados localmente
- Acesso a um banco de dados MongoDB

## Instalação

1. Clone este repositório: `git clone https://github.com/seu-usuario/seu-repositorio.git`
2. Navegue até o diretório do projeto: `cd seu-repositorio`
3. Instale as dependências: `npm install`

## Arquivo .env

O arquivo .env é utilizado para armazenar variáveis de ambiente sensíveis ou específicas do ambiente de execução da aplicação. Essas variáveis são carregadas durante o processo de inicialização da aplicação e podem ser acessadas em todo o código.

- **MONGODB_PASSWORD**: Senha para acessar o banco de dados MongoDB.
- **MONGODB_USERNAME**: Nome de usuário para acessar o banco de dados MongoDB.
- **MONGODB_CLUSTER**: Endereço do cluster MongoDB onde o banco de dados está hospedado.
- **MONGODB_DATABASE**: Nome do banco de dados MongoDB usado pela aplicação.
- **PORT**: Porta na qual o servidor Express será executado (padrão: 3000).

Essas variáveis são usadas no arquivo de configuração do banco de dados (db.js) para configurar a conexão com o MongoDB. O uso de variáveis de ambiente para armazenar informações sensíveis ajuda a manter a segurança da aplicação, especialmente ao compartilhar o código-fonte com outros desenvolvedores ou ao implantar a aplicação em diferentes ambientes.


## Uso

1. Configure as variáveis de ambiente no arquivo `.env`, conforme necessário.
2. Inicie o servidor: `npm start`
3. Acesse a aplicação em `http://localhost:3000` por padrão.

## Scripts

- `npm start`: Inicia o servidor Express usando nodemon para reiniciar automaticamente após alterações nos arquivos.
- `npm run dev`: Inicia o servidor em modo de desenvolvimento, equivalente a `npm start`.

## Tecnologias Utilizadas

- Node.js
- Express
- MongoDB
- Mongoose
- Nodemon
- Module-Alias

## Contribuição

Contribuições são bem-vindas! Para sugestões, correções de bugs ou novas funcionalidades, sinta-se à vontade para abrir uma issue ou enviar um pull request.
