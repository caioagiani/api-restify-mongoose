import { Server } from "restify";

export abstract class Router {
  abstract signRoutes(app: Server): any;
}
