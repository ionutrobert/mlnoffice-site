
import PostCard from '../components/postCard/postCard';
import styles from './blog.module.css'
import { getPosts } from '../lib/data';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "MLN Office Blog - Insights and Articles on Web Development",
  description: "Explore our blog for the latest articles, tutorials, and insights on full-stack web development, design, and more. Stay updated with MLN Office.",
  openGraph: {
    title: "MLN Office Blog - Insights and Articles on Web Development",
    description: "Explore our blog for the latest articles, tutorials, and insights on full-stack web development, design, and more. Stay updated with MLN Office.",
    url: "https://mlnoffice.com/blog",
    images: [
      {
        url: "/images/mlnoffice_cover.webp",  // Replace with a relevant image for your blog gallery
        width: 800,
        height: 600,
        alt: "MLN Office Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MLN Office Blog - Insights and Articles on Web Development",
    description: "Explore our blog for the latest articles, tutorials, and insights on full-stack web development, design, and more. Stay updated with MLN Office.",
    images: ["/images/mlnoffice_cover.webp"],
  },
};

// FETCH DATA WITH AN API
// const getData = async () => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts', {cache: 'no-store'})

//   if (!res.ok) {
//     throw new Error('Failed to fetch data')
//   }

//   return res.json()
// }
const BlogPage = async () => {

  // const posts = await getData();

  const posts = await getPosts();
  
    return (
    <div
    className={styles.container}>

      {posts.map((post:any) => (
        <div key={post.id} className={styles.post}>
          <PostCard post={post} />
        </div>
      ))}

 
      
     
    </div>
    )
  };
  
  export default BlogPage;