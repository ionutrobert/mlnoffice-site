import Image from 'next/image'
import styles from './postCard.module.css'
import Link from 'next/link'

const PostCard = ({post} : any) => {
    
    return (
        <div className={styles.container}>
        <div className={styles.top}>

        <div className={styles.imgContainer}>
          <Image src={post.img ? post.img : '/images/post/noimage.png'} alt={post.title} fill className={styles.heroImg} /> 
        </div>
        
        <span className={styles.date}>01.01.2024</span>
        </div>
        
        <div className={styles.bottom}>
            <h1 className={styles.heading}>{post.title}</h1>
            <p className={styles.description}>{post.body}</p>
            <Link href={`/blog/${post.slug}`} className={styles.link}>READ MORE</Link>
        </div>

        </div>
    )

}

export default PostCard