# WebScraping

<img align="right" alt="livro" width="300" src="https://cdn-icons-png.flaticon.com/512/5968/5968322.png">

<!-- about me -->
 <h3 align="left">Scraping API: Preço de Livro na Amazon e NovaTec</h3>



Este é um projeto de API desenvolvido para buscar o preço de um livro específico nas plataformas Amazon e NovaTec. O projeto foi desenvolvido como parte de uma atividade acadêmica, onde a proposta era criar uma API qualquer, e eu decidi aplicar o conceito de "web scraping" para buscar informações de preço de um livro que estou interessado em comprar.
 ㅤ
  <div align="left"> 


<h3>Utilizado no
Projeto</h3>

<img src="https://skillicons.dev/icons?i=javascript,nodejs,express" /><br>

</div></h4>

<br>
<div align="center">

### O que é WebScraping?
</div>
Web scraping é uma técnica de extração de dados da web, onde um programa ou script coleta informações diretamente de sites. Ele simula a navegação de um usuário em uma página da web e extrai os dados desejados, como texto, imagens ou links, para processá-los e usá-los em outra aplicação.
<br>
<br>
No contexto deste projeto, o web scraping é utilizado para acessar as páginas da Amazon e da NovaTec e coletar o preço de um livro específico. Isso é feito através de ferramentas como o Axios, para realizar requisições HTTP, e o Cheerio, que analisa o conteúdo HTML das páginas e extrai as informações relevantes de maneira automatizada.

<br>


<img align="right" alt="livro" width="300" src="https://m.media-amazon.com/images/I/81wczsGs5VL.jpg">

<!-- about me -->
 <h3 align="left">Resposta da API</h3>


```json
{
  "livro": "Programação web com Node e Express: Beneficiando-se da Stack JavaScript",
  "editora": "NovaTec",
  "escritor": "Ethan Brown",
  "precos": {
    "Amazon": "R$ 86,53",
    "NovaTec": "R$ 105,00"
  }
}
``` 

### Endpoint

```bash
GET /livros
```
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

</div></h4>