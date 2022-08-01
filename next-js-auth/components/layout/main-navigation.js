import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import styles from './main-navigation.module.css';

function MainNavigation() {
  const { data: session, status } = useSession();

  function logoutHandler() {
    signOut();
  }

  return (
    <header className={styles.header}>
      <Link href='/'>
        <a>
          <div className={styles.logo}>Next Auth</div>
        </a>
      </Link>
      <nav>
        <ul>
          {!session && status !== 'loading' && (
            <li>
              <Link href='/auth'>Login</Link>
            </li>
          )}
          {session && (
            <li>
              <Link href='/profile'>Profile</Link>
            </li>
          )}
          {session && (
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
