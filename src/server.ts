import { createServer, plugins, Server } from "restify";
import { environments } from "./common/environment";
import { Router } from "./common/router";
import { connect } from "mongoose";

class ServerHandler {
  app: Server;

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
        this.app = createServer({
          name: "restify-api",
          version: "0.1.0",
        });

        this.app.use(plugins.queryParser());
        this.app.use(plugins.bodyParser());

        for (let router of routers) {
          router.applyRoutes(this.app);
        }

        this.app.listen(environments.server.port, () => resolve(this.app));
      } catch (error) {
        reject(error);
      }
    });
  }

  async bootstrap(routers: Router[] = []): Promise<ServerHandler> {
    await this.initRoutes(routers);
    await this.initializeDb();

    return this;
  }
}

export const server = new ServerHandler();
