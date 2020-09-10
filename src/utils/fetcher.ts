import { createError, ErrorStatusCode, ERROR_MESSAGES } from "./error";
// ______________________________________________________
//
const createRequestInit = (injects?: Partial<RequestInit>): RequestInit => ({
  credentials: "include", // Add default credentials: "include" for Cookie.
  ...injects,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    ...(injects ? injects.headers : {}),
  },
});
// ______________________________________________________
//
export function fetcher<T>(
  input: RequestInfo,
  requestInit?: RequestInit
): Promise<T> {
  // Use Native API with Next.js bundled polyfill.
  return fetch(input, createRequestInit(requestInit))
    .catch(() => {
      throw Error(ERROR_MESSAGES[418]);
    })
    .then((res: Response) => {
      if (res.ok) return res;

      if (res.status >= 500) {
        const err = createError(res.status as ErrorStatusCode);
        errorLog(err, {
          type: "utils/fetcher",
          url: typeof input === "string" ? input : "unknown",
          method: requestInit?.method || "GET",
        });
      }
      switch (res.status) {
        case 400:
          throw Error(ERROR_MESSAGES[400]);
        case 401:
          throw Error(ERROR_MESSAGES[401]);
        case 404:
          throw Error(ERROR_MESSAGES[404]);
        case 413:
          throw Error(ERROR_MESSAGES[413]);
        case 500:
          throw Error(ERROR_MESSAGES[500]);
        case 502:
          throw Error(ERROR_MESSAGES[502]);
        default:
          throw Error(ERROR_MESSAGES[999]);
      }
    })
    .then((res) => res.json());
}
