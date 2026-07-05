import { z } from "zod";

const loginSchema = z.object({
    username: z.string(),
    password: z.string().min(6, "Password must be at least 8 characters").max(50, "Password must be at most 50 characters")
})

export default loginSchema;