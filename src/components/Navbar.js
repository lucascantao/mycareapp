import ExitToAppIcon from '@material-ui/icons/ExitToApp'
// import MenuIcon from '@material-ui/icons/Menu'
// import MenuOpenIcon from '@material-ui/icons/MenuOpen'
// import { useState } from 'react';
import { useSession, signOut } from 'next-auth/client';

import styles from '../styles/Navbar.module.css';

export default function Navbar() {

    // const [active, setActive] = useState(false)
    const [session, loading] = useSession()

    return (
        <div className={styles.container}>

            <p>{session ? `Welcome, ${session.user.name}!` : 'My Care'}</p>

            {session && <span onClick={signOut}>
                {/* <MenuIcon fontSize='large' onClick={() => setActive(true)} /> */}
                <ExitToAppIcon fontSize='large' />
            </span>}
            {/* { active &&
                <>
                    <div className={styles.options}>
                        <header>
                            <span>
                                <img src="mycare.png" alt="logo" />
                            </span>
                            <span>
                                <MenuOpenIcon onClick={() => setActive(false)} fontSize='large' />
                            </span>
                        </header>

                        <a href="#"><p>About</p></a>
                        <a href="#" onClick={signOut}><ExitToAppIcon className='icon' /></a>

                    </div>
                </>
            } */}

        </div>
    )
}
