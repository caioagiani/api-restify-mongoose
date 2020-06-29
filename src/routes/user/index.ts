import { Server } from "restify";

import { Router } from "../../common/router";
import { UserController } from "../../controller/UserController";

class UserRouter extends Router {
  signRoutes(app: Server) {
    app.get("/users", UserController.index);
    app.get("/users/:id", UserController.show);
    app.post("/users", UserController.store);
  }
}

export const UserRoutes = new UserRouter();
