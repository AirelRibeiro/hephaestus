# <h1 align="center">⚔️🛡️Hephaestus🏹🗡️</h1>

<p align="center">
  <img src="https://user-images.githubusercontent.com/98190806/192379561-2d275f50-79cd-4af8-90d0-df8c2219c133.png" alt="Hephaestus, fonte: https://i.pinimg.com/originals/c3/ac/99/c3ac99b0030a2ddd0e1bcabfd5c45d8c.jpg"  />
</p>

## Descrição:

<p align="justify">Hephaestus é uma <strong>API RESTful</strong> desenvolvida em <strong>arquitetura MSC</strong> (<strong>Model Service Controller</strong>); que possibilita a criação e leitura de pessoas usuárias, produtos e pedidos. A estrutura da Hephaestus simula o funcionamento de uma ferraria fictícia medieval, contando com a pessoa usuária para abstrair a usabilidade de uma API nesse mundo fantástico. 😉</p>

## Ferramentas de desenvolvimento:

<div align="left">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" height="50" alt="Docker_logo"  />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" height="45" alt="Mysql_logo"  />
<img src="https://api.iconify.design/logos:jwt-icon.svg?color=%23888888" height="45" alt="JWT_logo"  />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" height="45" alt="Express_logo"  />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" height="45" alt="NodeJs_logo"  />
<img src="https://user-images.githubusercontent.com/98190806/192383031-6fff1865-64a0-4ba1-9ab4-d969bf613374.png" height="45" alt="Typescript_logo"  />
<img src="https://seeklogo.com/images/P/postman-logo-F43375A2EB-seeklogo.com.png" height="45" alt="Postman_logo"  />

<p align="justify">
Hephaestus foi desenvolvido em ambiente isolado utilizando <strong>Docker</strong> e com o gerenciamento do banco de dados funcionando por meio do <strong>MySQL</strong>. Além disso, a biblioteca <strong>JSON Web Token</strong> (<strong>JWT</strong>) foi utilizada para gerar e autenticar tokens, aplicada com middlewares de validação, adicionando uma camada de segurança na API.
</p> 
<p align="justify" >
O <strong>Express.js</strong>, framework para <strong>Node.js</strong>, ofereceu estrutura para construir os endpoints dessa API seguindo os princípios de arquitetura REST. Para possibilitar a construção de um escopo robusto com utilização tipagem, o código foi escrito utilizando a linguagem <strong>Typescript</strong>. O <strong>Postman</strong> também foi utilizado, durante o desenvolvimento para monitorar e testar scripts e solicitações; posteriormente, para escrever a documentação.
</p> 

</div>

## Clique no ícone e acesse a documentação por meio do **Postman**:

<a href="https://documenter.getpostman.com/view/22527230/2s7Z16i2Qe" target="blanck"> <img src="https://seeklogo.com/images/P/postman-logo-F43375A2EB-seeklogo.com.png" height="70" alt="Postman_logo"  />

## Rodando o projeto na sua máquina:
  
1. Escolha um diretório e clone o repositório utilizando **git clone**:
```
  git clone git@github.com:AirelRibeiro/hephaestus.git
```

2. Acesse o diretório do projeto **hephaestus** e instale as dependências:
```
  cd hephaestus
  npm install
```

3. Então, na pasta raiz do projeto, procure o arquivo **.env** e preencha-o com as informações do MySQL na sua máquina:
```
  MYSQL_HOST="inserir seu Host aqui"
  MYSQL_USER="inserir seu User aqui"
  MYSQL_PASSWORD="inserir sua Senha aqui"
```

4. Então, no terminal, rode o script **restore**, para criar e popular o banco de dados do projeto:
```
  npm run restore
```
  
5. Após essas configurações rode **npm start** para iniciar a aplicação:
```
  npm start
```

4. Por fim, acesse o projeto via navegador, usando a seguinte url:
```
  http://localhost:3000
```
