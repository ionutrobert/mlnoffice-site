import { getPosts } from "@/lib/data";
import styles from "./adminPosts.module.css";
import Image from "next/image";
import { deletePost } from "@/lib/action";

const AdminPosts = async () => {
  const posts = await getPosts();

  return (
    <div className={styles.container}>
      <h1>Posts</h1>

      {posts.map((post: any) => (
        <div className={styles.post} key={post.id}>
          <div className={styles.detail}>
          <Image src={post.img ? post.img : '/images/post/noimage.png'} width={50} height={50} alt={post.title} className={styles.heroImg} /> 
            <span className={styles.postTitle}>{post.title}</span>
            </div>
            <form action={deletePost}>
                <input type="hidden" name="id" value={post.id}  />
              <button className={styles.deleteButton}>Delete</button>
            </form>
          
        </div>
      ))}
    </div>
  );
};
export default AdminPosts;
