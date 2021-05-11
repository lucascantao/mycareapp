import { signIn, useSession } from 'next-auth/client';
import styles from '../styles/Profile.module.css';

export default function Profile({ img }) {

    const [session, loading] = useSession();
    return (
        <div className={styles.container}>
            <div>
                <span className={styles.logo}>
                    <img src="mycare.png" alt="" />
                </span>
                <span className={styles.profilepic}>
                    <img src={img ?? 'profile.jpg'} alt="" />
                </span>
            </div>

            {!session && <button onClick={signIn}>Login</button>}
        </div>

    )
}