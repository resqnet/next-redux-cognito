const hostName = () => {
  switch (process.env.ENVIRONMENT) {
    case "development":
      return "";
    case "production":
      // TODO: 本番サーバーに書き換える
      return "";
    default:
      return "http://localhost:3000";
  }
};

export const API_HOST = hostName();

export const apiURL = (path: string) => {
  return `${API_HOST}/api${path}`;
};
