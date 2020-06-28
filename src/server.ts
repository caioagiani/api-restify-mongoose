import * as restify from "restify";
import { environments } from "./common/environment";
import { Router } from "./common/router";

class Server {
  application: restify.Server;

  initRoutes(routers: Router[]): Promise<any> {
    return new Promise((resolve, reject) => {
      try {
        this.application = restify.createServer({
          name: "restify-api",
          version: "0.1.0",
        });

        this.application.use(restify.plugins.queryParser());

        for (let router of routers) {
          router.applyRoutes(this.application);
        }

        this.application.listen(environments.server.port, () =>
          resolve(this.application)
        );
      } catch (error) {
        reject(error);
      }
    });
  }

  async bootstrap(routers: Router[] = []): Promise<Server> {
    await this.initRoutes(routers);

    return this;
  }
}

export default new Server();
