import { createServer, plugins, Server } from "restify";
import { connect } from "mongoose";

import { environments } from "./environment";
import { Router } from "./router";

class ServerHandler {
  app: Server;

  async bootstrap(routers: Router[] = []): Promise<ServerHandler> {
    await this.initRoutes(routers);
    await this.initializeDb();

    return this;
  }

  async initializeDb() {
    await connect(environments.db.url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
  }

  initRoutes(routers: Router[]): Promise<any> {
    return new Promise((resolve, reject) => {
      try {
        this.app = createServer({ name: "restify-api", version: "0.1.0" });

        this.app.use(plugins.queryParser());
        this.app.use(plugins.bodyParser());

        routers.map((router) => {
          router.signRoutes(this.app);
        });

        this.app.listen(environments.server.port, () => resolve(this.app));
      } catch (error) {
        reject(error);
      }
    });
  }
}

export const server = new ServerHandler();
