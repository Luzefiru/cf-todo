				import worker, * as OTHER_EXPORTS from "C:\\Users\\LENOVO\\Desktop\\Programming\\work\\cf-todo\\.wrangler\\tmp\\pages-NfdavU\\pbsglsjn3b.js";
				import * as __MIDDLEWARE_0__ from "C:\\Users\\LENOVO\\AppData\\Roaming\\nvm\\v21.6.1\\node_modules\\wrangler\\templates\\middleware\\middleware-miniflare3-json-error.ts";
				const envWrappers = [__MIDDLEWARE_0__.wrap].filter(Boolean);
				const facade = {
					...worker,
					envWrappers,
					middleware: [
						__MIDDLEWARE_0__.default,
            ...(worker.middleware ? worker.middleware : []),
					].filter(Boolean)
				}
				export * from "C:\\Users\\LENOVO\\Desktop\\Programming\\work\\cf-todo\\.wrangler\\tmp\\pages-NfdavU\\pbsglsjn3b.js";

				const maskDurableObjectDefinition = (cls) =>
					class extends cls {
						constructor(state, env) {
							let wrappedEnv = env
							for (const wrapFn of envWrappers) {
								wrappedEnv = wrapFn(wrappedEnv)
							}
							super(state, wrappedEnv);
						}
					};
				

				export default facade;