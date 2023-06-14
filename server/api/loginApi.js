import jwt from "jsonwebtoken";

const runtimeConfig = useRuntimeConfig();

export default defineEventHandler((event) => {
  console.log("api login");

  const maxAge = 60 * 60 * 24 * 7;
  const expires = Math.floor(Date.now() / 1000) + maxAge;

  const jwtToken = jwt.sign(
    {
      exp: expires,
      // data: jwtTokenPayload
    },
    runtimeConfig.jwtSignSecret
  );

  setCookie(event, "access_token", jwtToken, {
    httpOnly: true,
    maxAge,
    expires: new Date(expires * 1000),
    secure: process.env.NODE_ENV === "production",
    path: "/",
  });

  // let auth = getCookie(event, "auth");
  // setCookie(event, "auth", "000000000");

  return {
    code: "0000",
    message: "success login",
  };
});
