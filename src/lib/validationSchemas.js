import { z } from "zod";

export const loginSchema = z.object({
  userName: z.string().min(1, "Ingresar nombre de usuario"),
  password: z.string().min(1, "Ingresar contraseña"),
});

export const registerSchema = z.object({
  userName: z.string().min(1, "Ingresar nombre de usuario"),
  password: z
    .string()
    .min(1, "Ingresar contraseña")
    .regex(
      /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/,
      "La contraseña debe contener al menos un número y una letra mayúscula y minúscula, y al menos 8 o más caracteres"
    ),
  email: z.string().min(1, "Ingresar Email").email("El email es invalido"),
});

export const characterSchema = z.object({
  name: z.string().min(1, "Ingresar nombre"),
  description: z.string().min(1, "Ingresar descripcion"),
});
