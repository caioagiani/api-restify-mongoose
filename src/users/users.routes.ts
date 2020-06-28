import { Router } from "../common/router";
import * as restify from "restify";
import { User } from "./users.model";

class UserRouter extends Router {
  applyRoutes(application: restify.Server) {
    application.get("/users", async (req, res) => {
      const users = await User.findAll();

      return res.json(users);
    });
  }
}

export default new UserRouter();
