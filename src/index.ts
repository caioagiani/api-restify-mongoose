import { server } from "./server";

import { usersRoute } from "./users/users.routes";
import { curriculumRoute } from "./users/curriculum.routes";

(async () => {
  await server.bootstrap([usersRoute, curriculumRoute]);

  console.log({ server: server.app.address() });
})();
