import { Server } from "restify";

export abstract class Router {
  abstract applyRoutes(app: Server): any;
}
