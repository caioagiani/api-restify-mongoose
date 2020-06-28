import { Router } from "../common/router";
import * as restify from "restify";

import UserController from "../controller/UserController";

class UserRouter extends Router {
  applyRoutes(application: restify.Server) {
    application.get("/users", UserController.index);
    application.get("/users/:id", UserController.show);
    application.post("/users", UserController.store);
  }
}

export default new UserRouter();
