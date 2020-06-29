import { server } from "./common/server";

import { UserRoutes } from "./routes/user";
import { CurriculumRoutes } from "./routes/curriculum";

import { HomeRoutes } from "./routes/home";

(async () => {
  await server.bootstrap([UserRoutes, CurriculumRoutes, HomeRoutes]);

  console.log({ server: server.app.address() });
})();
