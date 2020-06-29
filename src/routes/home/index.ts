import { Server } from "restify";

import { Router } from "../../common/router";

class HomeRouter extends Router {
  signRoutes(app: Server) {
    app.get("/", (req, res) => {
      res.json({
        api: "Caio Agiani",
        version: "0.1.0",
        github: "https://github.com/caioagiani",
        linkedin: "https://www.linkedin.com/in/caioagiani",
        email: "caio.agiani14@gmail.com",
      });
    });
  }
}

export const HomeRoutes = new HomeRouter();
