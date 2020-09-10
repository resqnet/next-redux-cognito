export const ERROR_MESSAGES = {
  400: "INVALID_TOKEN",
  401: "UNAUTHORIZED",
  404: "NOT_FOUND",
  413: "PAYLOAD_TOO_LARGE",
  418: "NETWORK_ERROR",
  500: "INTERNAL_SERVER_ERROR",
  502: "BAD_GATEWAY",
  999: "UNHANDLED_ERROR",
} as const;
// ______________________________________________________
//
export type ErrorMessages = typeof ERROR_MESSAGES;
export type ErrorStatusCode = keyof ErrorMessages;
export type ErrorMessage = ErrorMessages[keyof ErrorMessages];
export type ErrorObject = { status: ErrorStatusCode; message: ErrorMessage };
// ______________________________________________________
//
export function createError(
  status: ErrorStatusCode
): {
  status: ErrorStatusCode;
  message: ErrorMessage;
} {
  return {
    status,
    message: ERROR_MESSAGES[status],
  };
}
export function createErrorObjectByMessage(message: string): ErrorObject {
  const res = Object.keys(ERROR_MESSAGES)
    .map((status: string) => ({
      status: Number(status) as ErrorStatusCode,
      // @ts-expect-error: Inference impossible
      message: ERROR_MESSAGES[status] as ErrorMessage,
    }))
    .filter((item) => item.message === message)[0];
  return res || createError(999);
}
