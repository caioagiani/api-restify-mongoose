import server from "./server";

server.bootstrap().then((server) => {
  console.log(server.application.address());
});
