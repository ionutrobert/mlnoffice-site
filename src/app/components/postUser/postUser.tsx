import { getUser } from '@/app/lib/data';
import styles from './postUser.module.css'
import Image from 'next/image';

// FETCH DATA WITH AN API
// const getData = async (userId : any) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {cache: 'no-store'})
  
//     if (!res.ok) {
//       throw new Error('Failed to fetch data')
//     }
  
//     return res.json()
//   }
const PostUser = async ({userId} : any) => {

    // const user = await getData(userId);
    
    const user = await getUser(userId);

    return (
        <div className={styles.container}>
        <Image
            src={user.img ? user.img : '/images/author/noavatar.png'}
            alt={ "Author: " +user?.username}
            width={50}
            height={50}
            className={styles.avatar}
          />
            <div className={styles.texts}>
            <span className={styles.title}>Author</span>
            <span className={styles.username}>{user?.username}</span>
            </div>
          </div>

    )
}

export default PostUser;