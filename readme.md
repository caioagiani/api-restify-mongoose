## TypeScript API using Restify with Mongoose

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

## Contato

- [LinkedIn](https://www.linkedin.com/in/caioagiani/)
- caio.agiani14@gmail.com
