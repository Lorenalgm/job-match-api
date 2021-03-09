
<div align="center">
  <h1>Job Match API</h1>
  <br>
  <p><b>Os melhores matchs para sua vaga</b></p>
  <sub>Desafio GeekHunter</sub>
  <br>
</div>

[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]

## Tabela de conteúdos

- [Sobre](#sobre)
- [Feito com](#feito-com)
- [Para começar](#para-começar)
  - [Instalação padrão](#instalação-padrão)
    - [Pré-requisitos](#pré-requisitos)
    - [Instalando dependências](#instalando-dependências)
    - [Inicializando uma instância local](#inicializando-uma-instância-local)
    - [Testes](#testes)
    - [Qualidade](#qualidade)
- [Referência de API](#referência-de-api)
- [Autora](#autora)

## Sobre

Esta é uma API de uma aplicação web que lista os 5 melhores matchs (candidatos) para uma vaga.



## Feito com

- [Node.js](https://nodejs.org/pt-br/) - JavaScript runtime
- [Express](https://expressjs.com/pt-br/) - O framework web utilizado
- [MongoDB](https://www.mongodb.com/) - Base de dados não relacional
- [Yarn](https://yarnpkg.com/) - Gerenciador de pacotes e dependências

## Para começar

Com as instruções a seguir você terá uma cópia do projeto rodando em sua máquina local para propósitos de testes e desenvolvimento.

```bash
git clone https://github.com/Lorenalgm/job-match-api.git

cd job-match-api
```

### Instalação padrão

#### Pré-requisitos

- [Node.js](https://nodejs.org/pt-br/) versão 10 ou superior
- Um gerenciador de dependências - Yarn ou NPM
- Uma instância local ou um cluster do [MongoDB](https://www.mongodb.com/)

#### Instalando dependências

```bash
npm install
```

ou

```bash
yarn
```

#### Inicializando uma instância local

```bash
npm run dev
```

ou

```bash
yarn dev
```

#### Teste

Para rodar os testes existentes criados com jest, você pode utilizar:
```bash
npm run test
```

ou

```bash
yarn test
```

#### Qualidade

Para guiar a qualidade do código, este repositório foi integrado ao CodeClimate, obtendo até o presente momento o resultado:

<img src="https://i.imgur.com/r06rY8R.png" alt="JobMatch">


## Referência de API

Os serviços disponíveis nesta API são:

### API de Candidatos

Utilize a API de candidatos sempre que precisar buscar os matchs para uma vaga.


<details>
<summary style="font-size:24px;color:black"><b>GET: /candidates</b></summary>

#### Função

Listar todos os candidatos;

#### Requisição
| Campo | Descrição | Tipo de dado | Obrigatório |
|-----------|-----------|-------------------|--------------|------------|
| `city` | Cidade | `String` | Sim |
| `experience` | Experiência | `String` | Sim |
| `technologies` | Tecnologias | `Array` | Sim |

**URL de Requisição**

> https://job-match-api.herokuapp.com/candidates

Retorna um Array dos objetos de candidatos.

#### Exemplo de resposta

```
[
 {
    "id": 105599,
    "city": "Fortaleza - CE",
    "experience": "0-1 years",
    "technologies": [
      {
        "name": "Kotlin",
        "is_main_tech": true
      },
      {
        "name": "Java",
        "is_main_tech": false
      },
      {
        "name": "Java (Android)",
        "is_main_tech": false
      },
      {
        "name": "Python",
        "is_main_tech": false
      },
      {
        "name": "Flask",
        "is_main_tech": false
      },
      {
        "name": "Django",
        "is_main_tech": false
      },
      {
        "name": "Flutter",
        "is_main_tech": true
      }
    ]
  },
  {...},
  {...}
]
```

</details>

<details>
<summary style="font-size:24px;color:black"><b>POST: /candidates</b></summary>

#### Função

Criar um novo candidato;

#### Requisição
**Body**
```
{
	"city": "Fortaleza - CE",
    "experience": "0-1 years",
    "technologies": [
      {
        "name": "React",
        "is_main_tech": true
      }
    ]
}
```
**URL de Requisição**

> https://job-match-api.herokuapp.com/candidates
</details>

## Autora

- **Lorena Montes** - [Lorenalgm](https://github.com/Lorenalgm)

[forks-shield]: https://img.shields.io/github/forks/Lorenalgm/job-match-api.svg?style=flat-square
[forks-url]: https://github.com/Lorenalgm/job-match-api/network/members
[stars-shield]: https://img.shields.io/github/stars/Lorenalgm/job-match-api.svg?style=flat-square
[stars-url]: https://github.com/Lorenalgm/job-match-api/stargazers
[issues-shield]: https://img.shields.io/github/issues/Lorenalgm/job-match-api.svg?style=flat-square
[issues-url]: https://github.com/Lorenalgm/job-match-api/issues

