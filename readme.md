<img width="120" style="margin-top: 20px" src="http://restify.com/img/logo-homepage.svg" alt="API-restify">

## TypeScript API using Restify with Mongoose

- Install TypeScript global `npm i -g typescript`
- Install dependencies: `yarn install` ou `npm install`
- TypeScript compile: `yarn compile` ou `npm run compile`
- Start application: `yarn dev` ou `npm run dev`.

## Routes

- [x] Request findAll Users:

```javascript
application.get("/users");

[
  {
    id: 1,
    name: "Caio Agiani",
    email: "caio.agiani14@gmail.com",
  },
  {
    id: 2,
    name: "Caio Henrique",
    email: "agianicaio@gmail.com",
  },
];
```

- [x] Request findById User:

```javascript
application.get("/users/:id");

{
  "id": 1,
  "name": "Caio Agiani",
  "email": "caio.agiani14@gmail.com"
}
```

- [x] Request Create User:

```javascript
application.post("/users");

{
  "name": "Caio Agiani",
  "email": "caio.agiani14@gmail.com",
  "password": "123"
}
```

## Contato

- [LinkedIn](https://www.linkedin.com/in/caioagiani/)
- caio.agiani14@gmail.com
