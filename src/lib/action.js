"use server";
import { revalidatePath } from "next/cache";
import { Post, User } from "./models";
import { connectToDb } from "./utils";
import { signIn, signOut } from "@/lib/auth";
import bcrypt from "bcryptjs";

export const addPost = async (prevState, formData) => {
  const { title, slug, description, userId, img } = Object.fromEntries(formData);

  try {
    connectToDb();
    const newPost = new Post({
      title,
      slug,
      description,
      userId,
      img,
    });
    await newPost.save();

    console.log("Post created successfully");
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = async ( formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDb();
    await Post.findByIdAndDelete(id);

    console.log("Post deleted successfully");
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (error) {
    console.log(error);
  }
};

export const addUser = async (prevState, formData) => {
  const { username, email, password, img } = Object.fromEntries(formData);

  try {
    connectToDb();
    const newUser = new User({
      username, email, password, img
    });
    await newUser.save();

    console.log("User created successfully");
    revalidatePath("/admin");
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDb();
    await Post.deleteMany({ userId: id });
    await User.findByIdAndDelete(id);

    console.log("User deleted successfully");
    revalidatePath("/admin");
  } catch (error) {
    console.log(error);
  }
};

export const handleGithubLogin = async () => {
  "use server";
  await signIn("github");
};

export const handleLogout = async () => {
  "use server";
  await signOut();
};

export const register = async (previousState, formData) => {
  const { username, email, password, img, passwordRepeat } =
    Object.fromEntries(formData);

  if (password !== passwordRepeat) {
    return { error: "Passwords do not match" };
  }

  try {
    connectToDb();

    const user = await User.findOne({ username });

    if (user) {
      return { error: "Username already exists" };
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      img,
    });

    await newUser.save();

    console.log("User created successfully");
    return { success: "User created successfully" };
  } catch (error) {
    console.log(error);

    return { error: "Failed to register" };
  }
};
export const login = async (prevState, formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { username, password });
  } catch (err) {
    if (err.message.includes("CredentialsSignin")) {
      return { error: "Invalid username or password" };
    }

    throw err;
  }
};
