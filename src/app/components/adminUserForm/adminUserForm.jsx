'use client';
import { getUsers } from '@/lib/data';
import styles from './adminUserForm.module.css';
import { useFormState } from 'react-dom';
import { addUser } from '@/lib/action';

const AdminUserForm = () => {

        const [state, formAction] = useFormState(addUser, undefined);
        return (
         
            

            <form action={formAction} className={styles.container}>
            <h1>Add New User</h1>
              <input type="text" name="username" placeholder="Username" />
              <input type="email" name="email" placeholder="Email" />
              <input type="password" name="password" placeholder="Password" />
              <select name='isAdmin'>
                <option value="false">Is Admin?</option>
                <option value="false">No</option>
                <option value="true">Yes</option>
                
              </select>
              
              <input type="text" name="img" placeholder="Image" />
              
              <button type="submit">Add User</button>
              {state?.error }
            </form>

        );
};
export default AdminUserForm;