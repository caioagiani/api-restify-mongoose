import User from "../model/User";
import { Request, Response } from "restify";

class UserController {
  async index(req: Request, res: Response) {
    const users = await User.find();

    return res.json(users);
  }

  async show(req: Request, res: Response) {
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
  }

  async store(req: Request, res: Response) {
    const { email } = req.body;

    try {
      const checkUser = await User.findOne({ email });

      if (checkUser) return res.json({ error: "User already exists" });

      const user = await User.create(req.body);

      const { _id } = user;

      return res.json({ _id, email });
    } catch (error) {
      return res.json({ error });
    }
  }
}

export default new UserController();
