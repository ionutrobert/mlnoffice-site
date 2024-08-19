import { connectToDb } from "@/lib/utils";
import {Post} from "@/lib/models";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {

    const { slug } = params;

  try {

    connectToDb();
    const post = await Post.findOne({slug});
    console.log("Post model:", Post);
    console.log("Fetched post:", post);
    return NextResponse.json({ post });

  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
};

export const DELETE = async (request, { params }) => {

  const { slug } = params;

try {

  connectToDb();
  const post = await Post.deleteOne({slug});

  return NextResponse.json("Post deleted successfully");

} catch (error) {
  console.log(error);
  return new Response(JSON.stringify({ error: error.message }), {
    status: 500,
  });
}
};
