## Requisitos

* Desktop - Windows ou Linux (Recomendamos um servidor desktop isolado)
* [NodeJS 10.16.*](https://nodejs.org)
* [NPM 6.9.*](https://www.npmjs.com/)
* [Mongodb](https://www.mongodb.com/)
* [PM2](http://pm2.keymetrics.io/)

## Instalação

```bash
# Clone o repositório
git clone https://github.com/DC-WebSolutions/api-whatsapp
# Entre no repositório
cd api-whatsapp
# Instale as dependencias
npm install
# Executar em desenvolvimento
npm run dev
# Executar em produção com PM2
npm run prod
```

## Como usar a API

É uma API simples para o envio de mensagens automaticas, precisa enviar um post no formato json, com as informações abaixo:

```js
{
	"channel": "whmcs",
	"phone": "5511956007726", // precisa seguir o mesmo exemplo
	"message": "Teste", // qualquer mensagem
	"scheduleAt": "2019-09-20 20:00:00" // data e hora do envio
}
```

Atualmente usa o express na porta 3000. Exemplo http://localhost:3000.

Enviando um post para http://localhost:3000 em formato json, contendo as informações corretas, será gravado no banco de dados mongodb, assim enviando a mensagem na data e hora especificada no "scheduleAt".

## To Do

- [ ] Validações do Número
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
