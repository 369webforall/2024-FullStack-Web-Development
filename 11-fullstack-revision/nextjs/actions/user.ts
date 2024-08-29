"use server";
import z from "zod";
import prisma from "@/prisma/client";
import { formSchema } from "@/lib/schema/schema";

// Define the type based on the schema
type schema = z.infer<typeof formSchema>;

export async function newUser(values: schema) {
  // Validate the input data using the schema
  const validatedData = formSchema.safeParse(values);
  if (!validatedData.success) {
  }

  if (!validatedData.success) {
    // Handle validation errors
    throw new Error("Validation failed");
  }

  // Destructure the validated data
  const { name, email } = validatedData.data;

  try {
    // Create a new user in the database
    await prisma.user.create({
      data: {
        name,
        email,
      },
    });

    // Return the created user or any relevant information
    return { message: "user created", status: 201 };
  } catch (error) {
    // Handle any errors that occur during database interaction
    throw new Error(`Failed to create a new user: ${error}`);
  }
}
