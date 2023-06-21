

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>
<p align="center">
  Aplicação em NestJS/TypeScript - Loja 🚀
  <br>
  <br>

  <img alt="Language count" src="https://img.shields.io/github/repo-size/alvarobraz/store-nestjs"/>

  <a href="https://nestjs.com/">
    <img alt="Made by NestJS" src="https://img.shields.io/badge/made%20by-nestjs-%237519C1">
  </a>

  <a href="https://www.linkedin.com/in/alvarobraz/">
    <img alt="Made by alvarobraz" src="https://img.shields.io/badge/made%20by-alvarobraz-%237519C1">
  </a>

  <a href="https://github.com/alvarobraz/store-nestjs/commits/main">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/alvarobraz/store-nestjs">
  </a>

  <img alt="License" src="https://img.shields.io/github/license/alvarobraz/store-nestjs">
</p>

---

<p align="center">
  <a href="#dart-sobre">Sobre</a> &#xa0; | &#xa0; 
  <a href="#rocket-tecnologias">Tecnologias</a> &#xa0; | &#xa0;
  <a href="#estrutura">Estrurura</a> &#xa0; | &#xa0;
  <a href="#white_check_mark-requerimentos">Requerimentos</a> &#xa0; | &#xa0;
  <a href="#checkered_flag-começando">Começando</a>
</p>

<br>

## :dart: Sobre ##

Projeto básico em NestJS/TypeScript de que simula uma loja e seus usuários, nesta aplicação é possível usar os CRUD's de usuários e produtos, tudo rodado em um TypeORM usando PostgreSQL.

## :rocket: Tecnologias ##

As seguintes tecnologias foram utilizadas no projeto:

- [nest.js](https://nestjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [class-transformer](https://www.npmjs.com/package/class-transformer)
- [class-validator](https://www.npmjs.com/package/class-validator)
- [typeorm](https://typeorm.io/)
- [postgresql](https://www.postgresql.org/)
- [docker-compose](https://docs.docker.com/compose/)

## Estrutura ##
```
.
├── docker-compose.yaml
├── LICENSE
├── nest-cli.json
├── package.json
├── package-lock.json
├── README.md
├── src
│   ├── app.module.ts
│   ├── config
│   │   └── postgres.config.service.ts
│   ├── main.ts
│   ├── produto
│   │   ├── dto
│   │   │   ├── AtualizaProduto.dto.ts
│   │   │   ├── CriaProduto.dto.ts
│   │   │   └── ListaProduto.dto.ts
│   │   ├── produto-caracteristica.entity.ts
│   │   ├── produto.controller.ts
│   │   ├── produto.entity.ts
│   │   ├── produto-imagem.entity.ts
│   │   ├── produto.module.ts
│   │   ├── produto.repository.ts
│   │   └── produto.service.ts
│   └── usuario
│       ├── dto
│       │   ├── AtualizaUsuario.dto.ts
│       │   ├── CriaUsuario.dto.ts
│       │   └── ListaUsuario.dto.ts
│       ├── usuario.controller.ts
│       ├── usuario.entity.ts
│       ├── usuario.module.ts
│       ├── usuario.repository.ts
│       ├── usuario.service.ts
│       └── validacao
│           └── email-eh-unico.validator.ts
├── test
│   └── jest-e2e.json
├── tsconfig.build.json
└── tsconfig.json


```

## :white_check_mark: Requerimentos ##

- [nest.js](https://nestjs.com/)
- [npm](https://www.npmjs.com/)

## :checkered_flag: Começando ##

```bash
# Clone this project
$ git clone https://github.com/alvarobraz/store-nestjs

# Access
$ cd store-nestjs

# Install dependencies
$ npm install

# Run the project
$ npm run start:dev

# Rum containers
$ docker-compose up -d

# The server will initialize in the <http://localhost:3333>
```

Nest is [MIT licensed](LICENSE).
