import Image from 'next/image'
import styles from './postCard.module.css'
import Link from 'next/link'

const PostCard = () => {
    
    return (
        <div className={styles.container}>
        <div className={styles.top}>

        <div className={styles.imgContainer}>
            <Image src="/images/post/1.jpg" alt="Post Image" fill className={styles.heroImg} />
        </div>
        
        <span className={styles.date}>01.01.2024</span>
        </div>
        
        <div className={styles.bottom}>
            <h1 className={styles.heading}>Test Title</h1>
            <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit repudiandae atque doloribus nihil, omnis nostrum officiis laudantium dolorem! Velit pariatur hic doloribus provident sit harum cumque ipsum doloremque ab consequuntur.</p>
            <Link href="/blog/Test-Title" className={styles.link}>READ MORE</Link>
        </div>

        </div>
    )

}

export default PostCard