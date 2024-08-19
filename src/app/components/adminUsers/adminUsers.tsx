import { getUsers } from "@/lib/data";
import styles from "./adminUsers.module.css";
import Image from "next/image";
import { deleteUser } from "@/lib/action";

const AdminUsers = async () => {
  const users = await getUsers();

  return (
    <div className={styles.container}>
      <h1>Admin Users</h1>

      {users.map((user: any) => (
        <div className={styles.user} key={user.id}>
          <div className={styles.detail}>
            <Image
              src={user.img ? user.img : "/images/author/noavatar.png"}
              width={50}
              height={50}
              alt={user.username}
              className={styles.heroImg}
            />
            <span className={styles.username}>{user.username}</span>
            </div>
            <form action={deleteUser}>
              <input type="hidden" name="id" value={user.id} />
              <button className={styles.deleteButton}>Delete</button>
            </form>
          
        </div>
      ))}
    </div>
  );
};
export default AdminUsers;
