import { server } from "./common/server";

import { UserRoutes } from "./routes/user";
import { HomeRoutes } from "./routes/home";
import { CurriculumRoutes } from "./routes/curriculum";

(async () => {
  await server.bootstrap([UserRoutes, CurriculumRoutes, HomeRoutes]);

  console.log({ server: server.app.address() });
})();
