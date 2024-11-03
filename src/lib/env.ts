import { cleanEnv, str } from "envalid";
//console.log(`from the env file: ${process.env.PEXELS_API_KEY}`);
const env = cleanEnv(process.env, {
    PEXELS_API_KEY: str(),
})
export default env;