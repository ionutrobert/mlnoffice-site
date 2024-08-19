"use client";

import { useFormState } from "react-dom";
import styles from "./adminPostForm.module.css";
import { addPost } from "@/lib/action";

const AdminPostForm = ({userId}) => {
  const [state, formAction] = useFormState(addPost, undefined);
  return (
    
    
      <form action={formAction} className={styles.container}>
      <h1>Add New Post</h1>
        <input type="text" name="title" placeholder="Title" />
        <input type="text" name="slug" placeholder="Slug" />
        <textarea name="description" placeholder="Description" rows={10} />
        <input type="text" name="img" placeholder="Image" />
        <input type="hidden" name="userId" value={userId} />
        <button type="submit">Add Post</button>
        {state?.error }
      </form>

  );
};
export default AdminPostForm;
