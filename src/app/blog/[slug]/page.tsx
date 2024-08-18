import Image from "next/image";
import styles from "./singlePost.module.css";
import PostUser from "@/app/components/postUser/postUser";
import { Suspense } from "react";
import { getPost } from "@/app/lib/data";
import { Metadata } from 'next';

//Fetch data with an API
const getData = async (slug : any) => {
  const res = await fetch(`${process.env.URL}/api/blog/${slug}`)
  
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  const data = await res.json();
  return data;
}

export async function generateMetadata({ params }: { params: any }): Promise<Metadata> {
  const { slug } = params;
  const post = await getPost(slug);

  return {
    title: `${post?.title} - MLN Office Blog`,
    description: post?.description.slice(0, 160),  // Shorten the description for meta
    openGraph: {
      title: post?.title,
      description: post?.description.slice(0, 160),
      url: `https://mlnoffice.com/blog/${slug}`,
      images: [
        {
          url: post?.img || '/images/mlnoffice_cover.webp', // Fallback to a default image if post image is not available
          width: 800,
          height: 600,
          alt: post?.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post?.title,
      description: post?.description.slice(0, 160),
      images: [post?.img || '/images/mlnoffice_cover.webp'],
    },
  };
}

const SinglePostPage = async ({ params }: any) => {
  const { slug } = params;

  // FETCH DATA WITH A DATABASE
  // const post = await getPost(slug);

  // FETCH DATA WITH AN API
  const post = await getPost(slug);

  return (
    <div className={styles.container}>
      {post?.img && (
        <div className={styles.imgContainer}>
          <Image
            src={post?.img}          
            alt={post?.title}
            fill
            className={styles.postImg}
          />
        </div>
      )}
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post?.title}</h1>
        <div className={styles.detail}>
          {post && (
            <Suspense fallback={<div>Loading...</div>}>
              <PostUser userId={post.userId} />
            </Suspense>
          )}
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>{post?.createdAt.toString().slice(4, 16)}</span>
          </div>
        </div>
        <div className={styles.content}>{post?.description}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;
