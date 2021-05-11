import styles from '../styles/LogPage.module.css';
import { signIn } from 'next-auth/client';

export default function LogPage() {

    return (
        <div className={styles.container}>
            <button onClick={signIn}>Sign In</button>
        </div>
    )

}