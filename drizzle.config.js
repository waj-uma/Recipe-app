import { ENV } from "./src/config/env.js";

export default{
    schema:"./src/db/schema.js",
    out:"./src/migrations",
    dialect:"postgresql",
    dbCredentials:{url:ENV.DATABASE_URL},
};