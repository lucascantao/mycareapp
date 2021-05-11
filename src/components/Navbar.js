import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import MenuIcon from '@material-ui/icons/Menu'
import MenuOpenIcon from '@material-ui/icons/MenuOpen'
import { useState } from 'react';
import { signOut } from 'next-auth/client';

import styles from '../styles/Navbar.module.css';

export default function Navbar() {

    const [active, setActive] = useState(false)

    return (
        <div id={active ? 'active' : ''} className={styles.container}>

            <span>
                <MenuIcon fontSize='large' onClick={() => setActive(true)} />
            </span>
            { active &&
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
            }

        </div>
    )
}
