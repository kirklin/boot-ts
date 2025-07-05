import { field, logger } from "@kirklin/logger";

export const one = 1;
export const two = 2;
logger.info("1+2", field("result", one + two));
