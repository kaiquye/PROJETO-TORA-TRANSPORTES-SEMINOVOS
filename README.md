
# PROJETO TORA | SEMINOVOS 🚛

Projeto feito para **TORA TRANSPORTES**. Este projeto foi desenvolvido em meu **Plano de desenvolvimento individual (PDI)** 


## Projeto

Projeto desenvolvido em **React.JS** e **Node.Js VERSION 17.8.0**. 

###  🏗️  Pré-requisitos 

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

# ⚙️  **Construido com**
### Frontend
- React.JS
- ReactRouterDom
- Axios
- Socket.io 
- React-Adal 365 (Autenticação com office 365)
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

# 🧍 Autor 
- Kaique Mendes da Silva
-  Esse projeto foi desenvolvido como parte do meu **Plano de desenvolvimento individual (PDI)** na empresa **Tora Transporte**

# HomePage

### Filtro 
- **Marcas** : Cada botão representa um filtro. Exemplo : **VOLVO** Buscar todos os veiculos da marca **Volvo**......
- **Situação do veiculo** : Buscar anúncios disponiveis para venda ou em negociação.
- **Data da publicação** : Filtra a data de publicação do anúncio.
- **Sedan** : Buscar todos os carros anunciados.
- **Truck** : Buscar todos os caminhões anunciados.
- **SemiReboque** : Buscar todo os reboques anunciados.

![image](https://user-images.githubusercontent.com/69175890/161151533-c6f0f4a1-9b95-4705-b4b8-610fd2622028.png)

### Card Anúncio
- **Fazer proposta** : Abre uma nova aba no navegador. O Usuario pode escolher conversar pelo Chat ou preencher um formulario. ( So é possivel fazer uma nova proposta se o anúncio não estiver em negociação, cada pessoa pode fazer 3 propostas. )
- 
> ![image](https://user-images.githubusercontent.com/69175890/161254713-b6f8e11e-8b6e-4e68-9904-2155366a3aa3.png)

- **Visitar** : Abre uma nova aba com as informações do anúncio.
- 
> ![image](https://user-images.githubusercontent.com/69175890/161254735-c9b99282-ee45-4d50-ad25-ddeb1e686fc1.png)

# Informações do anúncio
- **Lateral** : Mostra algumas informações, como : Modelo, Potencia, Kilometragem... 
> ![image](https://user-images.githubusercontent.com/69175890/161285703-25ecf249-760b-4f66-a201-42feb3e15cb5.png)

- **Ficha tecnica** : Mostra a ficha tecnica do veiculo.
> ![image](https://user-images.githubusercontent.com/69175890/161286018-a8deb740-0fc9-4463-97d1-408ad65f1425.png)

# Login com React-Adal
> Clique em **Sou Administrador**
![image](https://user-images.githubusercontent.com/69175890/161146409-39fdcc13-7633-4ac8-8783-4e86ed316d6c.png)


> Faça login com sua conta **Office 365 do grupo Tora**.
> ![image](https://user-images.githubusercontent.com/69175890/161286781-74341951-4b5f-47cd-8cda-75403750853d.png)

# Painel de administrador

## Novas propostas. 
- Todos formulários de propostas preenchidos ficam listados nesta tela. 
- O primeiro botão (**Ultimas propostas**) busca as ultimas propostas, ( salvas no WebSocket )
>![image](https://user-images.githubusercontent.com/69175890/161254262-ec9a990b-4226-4496-b720-a6b795dd7569.png)

- O segundo botão (**Todas propostas**) busca todas as propostas feitas ( salvas no Banco de dados ).

![image](https://user-images.githubusercontent.com/69175890/161254402-5cb75d98-5911-475f-8ba0-e712b5c9c49c.png)

## Tabela de anúncios
### Lista de anúncios cadastrados
- **Primeiro CheckBox** : Aplica o filtro "Em negociação"
- **Segundo CheckBox** : Ativa ou desativa o anúncio, ( Não exclui do banco de dados ).
- **Ultimo botão** ( X ) : Excluir o anúncio. 
![image](https://user-images.githubusercontent.com/69175890/161253840-1b868a4b-9c28-49a1-8463-fb971a8335d4.png)

- **Botão de mensagem** : Lista todas as mensagens que aquele anúncio recebeu pelo Chat.(Cada anúncio tem sua propria aba com a listagem das mensagens) **Responder** : Abre o chat para que o ADM possa responder o usuario.

>![image](https://user-images.githubusercontent.com/69175890/161150260-b61f79f7-d903-4174-977c-e6b05e691d0b.png)
- **Quando a negociação acaber, o administrador ou cliente devem apagar a conversar.**
> ![image](https://user-images.githubusercontent.com/69175890/161288476-186d0f05-ffaf-4eb5-8906-a1a59aa9fde6.png)


- **Botão edição** : Edita as informações do anúncio.

>![image](https://user-images.githubusercontent.com/69175890/161150728-f664ade8-52c8-4ae5-956b-fd9135d5454d.png)

#Regras
- Um cliente tem um limite de 3 propostas.
- A sala de bate-papo fica ativa por 24 Horas.
- 

#Backend
-Estrutura de pastas
>
-Padrões de projetos utilizados
>
#FrontEnd
-Estrutura de pastas
>
-Padrões de projetos utilizados
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
