
# PROJETO TORA | SEMINOVOS

Projeto feito para **TORA TRANSPORTES**. Este projeto foi desenvolvido em meu **Plano de desenvolvimento individual (PDI)** 


## Projeto

Projeto desenvolvido em **React.JS** e **Node.Js VERSION 17.8.0**. 

### Pré-requisitos

Para iniciar o projeto localmente : 
- download NodeJs VERSION 17.8.0 https://nodejs.org/en/download/ 
- Configurar variavel de ambiente : OracleDB.
```bash 
git clone : https://github.com/kaiquye/PROJETO-SEMINOVOS.git
npm install
```
Pasta main 
```bash
node  .\src\main.js
````
##### Porta do servidor : 
> localhost:3000

# **Construido com**
### Frontend
- React.JS
- ReactRouterDom
- Axios
- Socket.io 
- React-Adal 365 
### Backend
- Node.Js
- Knex
- Mysql
- SqlServer
- Yup
- Express
- Jsonwebtoken
- OracleDb
- Multer
- Cors
- sharp

## Autor 
- Kaique Mendes da Silva

## Confirmações 
-  Esse projeto foi desenvolvido como parte do meu **Plano de desenvolvimento individual (PDI)** na empresa **Tora Transporte**

# Login com React-Adal
> Clique em **Sou Administrador**
![image](https://user-images.githubusercontent.com/69175890/161146409-39fdcc13-7633-4ac8-8783-4e86ed316d6c.png)


> Faça login com sua conta **Office 365 do grupo Tora**.
![image](https://user-images.githubusercontent.com/69175890/161144356-cdaf4850-969b-438e-9697-48d88c13af1f.png)

# Painel de administrador

## Novas propostas. 
- Todos formularios de propostas preenchidos ficam listados nesta tela. 
- O primeiro botão (**Ultimas propostas**) busca as ultimas propostas, ( salvas no WebSocket )

![image](https://user-images.githubusercontent.com/69175890/161147499-5b011247-69cd-4c9c-b43f-5f2f0ceeb0d6.png)

- O segundo botão (**Todas propostas**) busca todas as propostas feitas ( salvas no Banco de dados ).

![image](https://user-images.githubusercontent.com/69175890/161150879-5373149a-f02e-48fa-983d-c1edf34941ad.png)



## Tabela de anuncios
### Listas de anuncios cadastrados
- **Primeiro CheckBox** : Aplica o filtro "Em negociação"
- **Segundo CheckBox** : Ativa ou desativa o anuncio, ( Não exclui do banco de dados ).
- **Ultimo botão** ( X ) : Excluir o anuncio. 

![image](https://user-images.githubusercontent.com/69175890/161149193-b47ea29d-210a-4e03-8d50-844938bf17e8.png)

- **Botão de mensagem** : Lista todas as mensagens que aquele anuncio recebeu pelo Chat.(Cada anuncio tem sua propria aba com a listagem das mensagens) **Responder** : Abre o chat para que o ADM possa responder o usuario.

![image](https://user-images.githubusercontent.com/69175890/161150260-b61f79f7-d903-4174-977c-e6b05e691d0b.png)

- **Botão edição** : Edita as informações do anuncio.

![image](https://user-images.githubusercontent.com/69175890/161150728-f664ade8-52c8-4ae5-956b-fd9135d5454d.png)


# HomePage

### Filtro 
- **Marcas** : Cada botão representa um filtro. Exemplo : **VOLVO** Buscar todos veiculos da marca **Volvo**......
- **Situação do veiculo** : Buscar anuncios disponivel para venda ou em negociação.
- **Data de publicação** : Filtra a data de publicação do anuncio.
- **Sedan** : Buscar todos os carros anunciados.
- **Truck** : Buscar todos os caminhões anunciados.
- **SemiReboque** : Buscar todo os reboques anunciados.

![image](https://user-images.githubusercontent.com/69175890/161151533-c6f0f4a1-9b95-4705-b4b8-610fd2622028.png)

### Card Anuncio
- **Fazer proposta** : Abre uma nova aba no navegador. O Usuario pode escolher conversar pelo Chat ou preencher um formulario. ( So é possivel fazer uma nova proposta se o anuncio não estiver em negociação, cada pessoa pode fazer 3 propostas. )
- **Visitar** : Abre uma nova aba com as informações do anuncio.


# Entrar em contato 

### Chat : Uma nova sala é criar. Nela o usuario pode conversa com o vendendor. 

### Formulario : Esse formulario é salvo no banco de dados relacionado junto ao anuncio escolhido.


# Informações do anuncio
### **Lateral** : Mostra algumas informações, como : Modelo, Potencia, Kilometragem... 


### **Ficha tecnica** : Mostra a ficha tecnica do veiculo.




======================================================
# Processo GIT
### Primeira vez (não tenho o repositorio na minha maquina)
```bash
git clone git@github.com:kaiquye/PROJETO-SEMINOVOS.git

cd PROJETO-SEMINOVOS
cd BACk
npm install
cd ..
cd FRONT
npm install
```

### Já tenho o repositorio clonado
```bash
git pull # Baixa as atualizacoes do github
```

### Quero criar um commit (CHECKPOINT)
```bash
git add .
git commit -m "MINHA MENSAGEM DE COMMIT"
```

### QUERO SUBIR ALTERAÇÕES PARA O GITHUB
```bash
git push
```
