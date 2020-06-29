import { server } from "./common/server";

import { UserRoutes } from "./users/UserRoute";
import { CurriculumRoutes } from "./users/CurriculumRoute";

(async () => {
  await server.bootstrap([UserRoutes, CurriculumRoutes]);

  console.log({ server: server.app.address() });
})();
