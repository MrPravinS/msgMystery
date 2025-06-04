import {z} from "zod"

export const signInSchema = z.object({
    identifier:z.string(),
    passwod:z.string()
})