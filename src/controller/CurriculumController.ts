import { Request, Response } from "restify";

import { Curriculum } from "../model/Curriculum";
import { User } from "../model/User";

class CurriculumClass {
  async index(_req: Request, res: Response) {
    const allCurriculum = await Curriculum.find();

    return res.json(allCurriculum);
  }

  async show(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const checkCv = await Curriculum.findById(id).populate("user", [
        "_id",
        "name",
        "email",
      ]);

      return res.json(checkCv);
    } catch (error) {
      res.status(400);
      return res.json({ error: "There was an error." });
    }
  }

  async store(req: Request, res: Response) {
    const { id: user } = req.params;
    const { name } = req.body;

    try {
      await User.findById(user);

      const checkCv = await Curriculum.find({ user });

      if (checkCv.length > 0) {
        res.status(400);
        return res.json({ error: "You already have a registered resume." });
      }

      const { _id } = await Curriculum.create({ name, user });

      await User.findOneAndUpdate({ _id: user }, { curriculum: _id });

      return res.json({ ...{ id: _id }, message: "success" });
    } catch (error) {
      res.status(400);
      return res.json({ error: "There was an error." });
    }
  }
}

export const CurriculumController = new CurriculumClass();
