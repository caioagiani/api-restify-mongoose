import * as restify from "restify";

export abstract class Router {
  abstract applyRoutes(application: restify.Server);
}
