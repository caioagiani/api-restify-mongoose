## TypeScript API using Restify with Mongoose

Request:

```javascript
application.get("/users", (req, res) => {
    const users = await User.findAll();

    return res.json(users);
});
```

Response:

```javascript
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

## Contato

- [LinkedIn](https://www.linkedin.com/in/caioagiani/)
- caio.agiani14@gmail.com
