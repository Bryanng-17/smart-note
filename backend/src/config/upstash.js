import {Ratelimit} from "@upstash/ratelimit";
import  {Redis} from "@upstash/redis";
import dotenv from "dotenv";

dotenv.config();
//create a ratelimit that allow 10 requests rer 20 seconds
const ratelimit= new Ratelimit({
    redis: Redis.fromEnv(),
    limiter:Ratelimit.slidingWindow(100,"20 s"),
});

export default ratelimit;

