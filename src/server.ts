import * as restify from "restify";
import { environments } from "./common/environment";
import { Router } from "./common/router";
import { connect } from "mongoose";

class Server {
  application: restify.Server;

  async initializeDb() {
    await connect(environments.db.url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }

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
    await this.initializeDb();

    return this;
  }
}

export default new Server();
