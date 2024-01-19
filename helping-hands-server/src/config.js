import { config } from "dotenv";
config();
export let port = process.env.PORT || 2000;
export let secretKey = process.env.SECRET_KEY;
