import { Router } from "../common/router";
import * as restify from "restify";

class UserRouter extends Router {
  applyRoutes(application: restify.Server) {
    application.get("/users", (req, res, next) => {
      res.json({ message: "Router Users" });
    });
  }
}

export default new UserRouter();
