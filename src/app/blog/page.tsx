
import PostCard from '../components/postCard/postCard';
import styles from './blog.module.css'
import { getPosts } from '../lib/data';

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