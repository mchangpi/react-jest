import { setupServer } from "msw/node";
/* https://mswjs.io/ */
import { rest } from "msw";

function createServer(handlerConfig) {
  const handlers = handlerConfig.map((config) => {
    const handlerFunc = (req, resp, ctx) => {
      return resp(ctx.json(config.resp(req, resp, ctx)));
    };
    return rest[config.method || "get"](config.path, handlerFunc);
  });

  const server = setupServer(...handlers);

  beforeAll(() => {
    server.listen();
  });
  afterEach(() => {
    server.resetHandlers();
  });
  afterAll(() => {
    server.close();
  });
}

export { createServer };
