import { Router } from "../common/router";
import { Server } from "restify";

import { UserController } from "../controller/UserController";

class UserRouter extends Router {
  applyRoutes(app: Server) {
    app.get("/users", UserController.index);
    app.get("/users/:id", UserController.show);
    app.post("/users", UserController.store);
  }
}

export const usersRoute = new UserRouter();
