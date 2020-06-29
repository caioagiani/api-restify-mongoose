import { Server } from "restify";

import { Router } from "../../common/router";

class HomeRouter extends Router {
  signRoutes(app: Server) {
    app.get("/", (_req, res) => {
      res.json({
        api: "restify",
        version: "0.1.0",
        author: "Caio Agiani",
        email: "caio.agiani14@gmail.com",
        github: "https://github.com/caioagiani",
        linkedin: "https://www.linkedin.com/in/caioagiani",
      });
    });
  }
}

export const HomeRoutes = new HomeRouter();
