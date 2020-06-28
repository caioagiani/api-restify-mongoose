const users = [
  { id: 1, name: "Caio Agiani", email: "caio.agiani14@gmail.com" },
  { id: 2, name: "Caio Henrique", email: "agianicaio@gmail.com" },
];

export class User {
  static findAll(): Promise<any[]> {
    return Promise.resolve(users);
  }

  static findById(id: Number): Promise<any> {
    return new Promise((resolve) => {
      const filtered = users.filter((user) => user.id == id);

      resolve(filtered[0]);
    });
  }
}
