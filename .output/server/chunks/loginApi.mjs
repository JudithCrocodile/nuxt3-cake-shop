import { defineEventHandler, setCookie } from 'h3';
import jwt from 'jsonwebtoken';
import { u as useRuntimeConfig } from './config.mjs';
import 'destr';
import 'scule';

const runtimeConfig = useRuntimeConfig();
const loginApi = defineEventHandler((event) => {
  console.log("api login");
  const maxAge = 60 * 60 * 24 * 7;
  const expires = Math.floor(Date.now() / 1e3) + maxAge;
  const jwtToken = jwt.sign(
    {
      exp: expires
      // data: jwtTokenPayload
    },
    runtimeConfig.jwtSignSecret
  );
  setCookie(event, "access_token", jwtToken, {
    httpOnly: true,
    maxAge,
    expires: new Date(expires * 1e3),
    secure: true,
    path: "/"
  });
  return {
    code: "0000",
    message: "success login"
  };
});

export { loginApi as default };
//# sourceMappingURL=loginApi.mjs.map
