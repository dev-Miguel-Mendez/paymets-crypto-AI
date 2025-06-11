import { Router } from "express";
import { validate } from "../middleware/validateBody.js";
import { verifySubscriptionSchema } from "src/zodSchemas/user-schema.js";
import { verifySubscription } from "src/controllers/verify-subscription.js";
//*types:





export const router = Router();

router.get('/mysubscription/:walletAddress', validate(verifySubscription, verifySubscriptionSchema) )


