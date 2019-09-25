## Requisitos

* Desktop - Windows ou Linux (Recomendamos um servidor desktop isolado)
* [NodeJS 10.16.*](https://nodejs.org)
* [NPM 6.9.*](https://www.npmjs.com/)
* [Mongodb](https://www.mongodb.com/)
* [PM2](http://pm2.keymetrics.io/)

## Tecnologias Utilizadas

* NodeJS
* Mongodb
* Express
* Electron

## Instalação

```bash
# Clone o repositório
git clone https://github.com/DC-WebSolutions/api-whatsapp
# Entre no repositório
cd api-whatsapp
# Instale as dependencias
npm install
```
Configure o banco mongodb nas variaveis dentro do .env

```bash
# Criar .env
cp .env.example .env
```

Exemplo:
```bash
MONGO_HOST=NOME_DO_HOST
MONGO_PORT=SUA_PORTA
MONGO_USER=SEU_USUÁRIO
MONGO_PASS=SUA_SENHA
MONGO_DB=NOME_DO_BANCO
```

Por fim, execute em modo de desenvolvimento ou produção.

```bash
# Executar em desenvolvimento
npm run dev
# Executar em produção com PM2
npm run prod
```

## Como usar a API

É uma API simples para o envio de mensagens automaticas, precisa ser enviado um post no formato json.

**Para mensagens agendadas**:

```js
{
	"channel": "whmcs",
	"phone": "5511999999999", // precisa seguir o mesmo exemplo
	"message": "Teste", // qualquer mensagem
	"scheduleAt": "2019-09-20 20:00:00" // data e hora do envio
}
```

**Para mensagens diretas**:

```js
{
	"phone": "5511999999999", // precisa seguir o mesmo exemplo
	"message": "Teste", // qualquer mensagem
}
```

Envia um post para http://localhost:3000/push em formato json, contendo as informações corretas.

**Para listar todas as mensagens**:

Envia um get para http://localhost:3000/messages, que vai listar todas as mensagens enviadas e agendadas.

## To Do

- [x] Validações do Número
- [ ] QRcode via socket.io
- [ ] Multisessões
- [ ] Painel Web para envio
- [ ] Autenticação via Token (API) para os usuários

## Contato

Entre em contato, queremos melhorar essa API e também a documentação de instalação.

Whatsapp: [+55 11 95600-7726](https://wa.me/5511956007726)

E-Mail: [daniel.costa@dcwebsolutions.com.br](mailto:daniel.costa@dcwebsolutions.com.br)

## License

[GPL-3.0 (GNU GENERAL PUBLIC LICENSE)](LICENSE.md)
