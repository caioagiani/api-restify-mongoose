import server from "./server";
import usersRoute from "./users/users.routes";

server.bootstrap([usersRoute]).then((server) => {
  console.log(server.application.address());
});
