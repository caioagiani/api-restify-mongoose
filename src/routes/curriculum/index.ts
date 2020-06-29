import { Server } from "restify";

import { Router } from "../../common/router";
import { CurriculumController } from "../../controller/CurriculumController";

class CurriculumRouter extends Router {
  signRoutes(app: Server) {
    app.get("/curriculum", CurriculumController.index);
    app.get("/curriculum/:id", CurriculumController.show);
    app.post("/curriculum/:id/save", CurriculumController.store);
  }
}

export const CurriculumRoutes = new CurriculumRouter();
