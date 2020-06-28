import { Router } from "../common/router";
import * as restify from "restify";
import User from "./users.model";

class UserRouter extends Router {
  applyRoutes(application: restify.Server) {
    application.get("/users", async (req, res) => {
      const users = await User.find();

      return res.json(users);
    });

    application.get("/users/:id", async (req, res) => {
      const { id } = req.params;

      try {
        const user = await User.findById(id);

        if (!user) {
          res.status(400);
          return res.json({ error: "User not found" });
        }

        return res.json(user);
      } catch (error) {
        return res.json({ error: "User does not exist" });
      }
    });
  }
}

export default new UserRouter();
