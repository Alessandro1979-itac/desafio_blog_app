# Gerenciador BlogApp
> Blog sobre Tecnologia desenvolvido em NodeJS + express + MongoDB

## Instalação das Dependências

Acesse a pasta principal do projeto através do terminal, e instale as dependências usando o NPM.

Windows:
```sh
cd blogapp
npm install

```

## Configurando o MongoDB
OK, agora vamos ver algumas instruções do MongoDB.

## Passo 1: Instalar o MongoDB

Agora o [site oficial do MongoDB](https://www.mongodb.com/try?jmp=nav#community) e baixar o Mongo. Clique no link de download e busque a versão do Community Server mais recente para o seu sistema operacional. Baixe o arquivo e, no caso do Windows, rode o executável que extrairá os arquivos na sua pasta de Arquivos de Programas, seguido de uma pasta server/version.

## Passo 2: Executar mongod e mongo

Dentro da unidade C do seu computador, crie uma pasta chamada data. Você pode criar manualmente ou via terminal:

mkdir data

Nesta pasta vamos armazenar nossos dados do MongoDB. Se este diretório não for criado, teremos problemas mais tarde.

Pelo prompt de comando, digite o seguinte comando:

mongod --dbpath C:\data

Isso irá iniciar o servidor do Mongo. Uma vez que apareça no prompt “[initandlisten] waiting for connections on port 27017”, está pronto, o servidor está executando corretamente. Em versões mais recentes, ele dá uma mensagem diferente, mas se procurar algumas linhas acima, irá ver está mensagem.

Utilize o comando 'nodemon app.js' para executar o projeto.

## Meta

Alessandro Muniz – muniz.caranha@gmail.com