import styles from "./login.module.css";
import { handleGithubLogin } from "@/lib/action";

import LoginForm from "@/app/components/loginForm/loginForm";

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1>Login with Socials</h1>
        <form action={handleGithubLogin}>
          <button className={styles.buttonGithub}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={styles.githubIcon}
              style={{ marginRight: "8px" }}
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S19.73.65 18 2.48A13.38 13.38 0 0 0 12 1.82a13.38 13.38 0 0 0-6 1.66C4.27.65 4.09 1 4.09 1A5.07 5.07 0 0 0 4 4.77 5.44 5.44 0 0 0 3 9.25c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 0 0-.94 2.61V22"></path>
            </svg>
            Login with Github
          </button>
        </form>

        <hr />

        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
