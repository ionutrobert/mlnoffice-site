"use client"
import { login } from "@/lib/action";
import styles from "./loginForm.module.css";
import { useFormState } from "react-dom"
import Link from "next/link";


const LoginForm = () => {

    const [state, formAction] = useFormState(login, undefined);



  return (
    
      
      <form className={styles.form} action={formAction}>
      <h1>Login with Credentials</h1>
        <input type="text" placeholder="Username" name="username" />

        <input type="password" placeholder="Password" name="password" />

        <button>Log in</button>
        {state?.error}
        <Link href = "/register">
            Need an account? <b>Register</b>
        </Link>
      </form>
 
  );
};

export default LoginForm;
