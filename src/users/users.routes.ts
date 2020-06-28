import { Router } from "../common/router";
import * as restify from "restify";
import { User } from "./users.model";

class UserRouter extends Router {
  applyRoutes(application: restify.Server) {
    application.get("/users", async (req, res) => {
      const users = await User.findAll();

      return res.json(users);
    });

    application.get("/users/:id", async (req, res) => {
      const { id } = req.params;
      const user = await User.findById(id);

      if (!user) {
        res.status(400);
        return res.json({ error: "User not found" });
      }

      return res.json(user);
    });
  }
}

export default new UserRouter();
