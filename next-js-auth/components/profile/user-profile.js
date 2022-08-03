import { useEffect } from 'react';
import { getSession, useSession } from 'next-auth/react';
import ProfileForm from './profile-form';
import styles from './user-profile.module.css';

function UserProfile() {
  // const { data: session, status } = useSession();

  // useEffect(() => {
  //   if (status === 'unauthenticated') window.location.href = '/auth';
  // }, [status]);

  // if (status === 'loading' || !session) {
  //   return <p className={styles.profile}>Loading...</p>;
  // }

  async function changePasswordHandler(passwordData) {
    const response = await fetch('/api/user/change-password', {
      method: 'PATCH',
      body: JSON.stringify(passwordData),
      headers: { 'Content-Type': 'application/json' },
    });
    const data = await response.json();

    console.log(data);
  }

  return (
    <section className={styles.profile}>
      <h1>Your User Profile</h1>
      <ProfileForm onChangePassword={changePasswordHandler} />
    </section>
  );
}

export default UserProfile;
