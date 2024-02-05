// <define:__ROUTES__>
var define_ROUTES_default = { version: 1, include: ["/*"], exclude: [] };

// ../../../../AppData/Roaming/nvm/v21.6.1/node_modules/wrangler/templates/pages-dev-pipeline.ts
import worker from "C:\\Users\\LENOVO\\Desktop\\Programming\\work\\cf-todo\\.wrangler\\tmp\\pages-slWRv5\\bundledWorker-0.6182568767835097.mjs";
import { isRoutingRuleMatch } from "C:\\Users\\LENOVO\\AppData\\Roaming\\nvm\\v21.6.1\\node_modules\\wrangler\\templates\\pages-dev-util.ts";
export * from "C:\\Users\\LENOVO\\Desktop\\Programming\\work\\cf-todo\\.wrangler\\tmp\\pages-slWRv5\\bundledWorker-0.6182568767835097.mjs";
var routes = define_ROUTES_default;
var pages_dev_pipeline_default = {
  fetch(request, env, context) {
    const { pathname } = new URL(request.url);
    for (const exclude of routes.exclude) {
      if (isRoutingRuleMatch(pathname, exclude)) {
        return env.ASSETS.fetch(request);
      }
    }
    for (const include of routes.include) {
      if (isRoutingRuleMatch(pathname, include)) {
        if (worker.fetch === void 0) {
          throw new TypeError("Entry point missing `fetch` handler");
        }
        return worker.fetch(request, env, context);
      }
    }
    return env.ASSETS.fetch(request);
  }
};
export {
  pages_dev_pipeline_default as default
};
//# sourceMappingURL=tivtxh1d2c.js.map
