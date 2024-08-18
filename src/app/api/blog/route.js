import { connectToDb } from "@/app/lib/utils";
import {Post} from "@/app/lib/models";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {

    connectToDb();
    const posts = await Post.find();
    return NextResponse.json({ posts });

  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
};
