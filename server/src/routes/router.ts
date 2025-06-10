import { Router } from "express";
import { signin, triggerBadRequest, signup } from "../controllers/users.js";
import { validate } from "../middleware/validateBody.js";
import { loginSchema, signupSchema } from "../zodSchemas/user-schema.js";
//*types:





export const router = Router();


router.post('/signup', validate(signup, signupSchema) )

router.post('/signin', validate(signin, loginSchema))

router.post('/logout', triggerBadRequest)

