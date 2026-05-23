import { z } from "zod";

export const registerSchema = z
  .object({
    name: z.string().min(3, "Nama minimal 3 karakter"),
    email: z.string().email("Email tidak valid"),
    password: z.string().min(8, "Password minimal 8 karakter"),
    password_confirm: z.string().min(8, "Konfirmasi password minimal 8 karakter"),
    category: z.string().nonempty("Pilih kategori"),
    bio: z.string().min(5, "Bio minimal 5 karakter"),
  })
  .refine((data) => data.password === data.password_confirm, {
    message: "Password tidak sama",
    path: ["password_confirm"],
  });

export type RegisterType = z.infer<typeof registerSchema>;