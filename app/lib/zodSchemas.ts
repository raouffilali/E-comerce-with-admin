import { z } from "zod";

export const productSchema = z.object({
  name: z.string().min(2, "Name is required and must be at least 2 characters"),
  description: z
    .string()
    .min(10, "Description is required and must be at least 10 characters"),
  status: z.enum(["draft", "published", "archived"]),
  price: z.number().min(1, "Price is required and must be at least $1"),
  images: z
    .array(z.string())
    .min(1, "At least one image is required")
    .max(10, "Maximum of 10 images allowed"),
  category: z.enum(["men", "women", "kids"]),
  isFeatured: z.boolean().optional(),
});

export const bannerSchema = z.object({
  title: z
    .string()
    .min(2, "Title is required and must be at least 2 characters"),
  imageString: z.string(),
});
