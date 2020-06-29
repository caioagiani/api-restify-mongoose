import { Router } from "../common/router";
import { Server } from "restify";

import { CurriculumController } from "../controller/CurriculumController";

class UserRouter extends Router {
  applyRoutes(app: Server) {
    app.get("/curriculum", CurriculumController.index);
    app.get("/curriculum/:id", CurriculumController.show);
    app.post("/curriculum/:id/save", CurriculumController.store);
  }
}

export const curriculumRoute = new UserRouter();
