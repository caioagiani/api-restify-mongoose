import { Request, Response } from "restify";

import { User } from "../model/User";

class UserClass {
  async index(_req: Request, res: Response) {
    const users = await User.find().populate("curriculum", ["_id", "name"]);

    return res.json(users);
  }

  async show(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const user = await User.findById(id);

      return res.json(user);
    } catch (error) {
      res.status(400);
      return res.json({ error: "User not found." });
    }
  }

  async store(req: Request, res: Response) {
    const { email } = req.body;

    try {
      await User.findOne({ email });

      const { _id } = await User.create(req.body);

      return res.json({ _id, email });
    } catch (error) {
      res.status(400);
      return res.json({ error: "User already exists." });
    }
  }
}

export const UserController = new UserClass();
