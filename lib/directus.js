import { createDirectus, rest } from "@directus/sdk";

const directusUrl = "https://directus-production-8156.up.railway.app";

export const directus = createDirectus(directusUrl).with(rest());