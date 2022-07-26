import { useRef, useContext } from 'react';
import NotificationContext from '../../store/notification-context';
import styles from './newsletter-registration.module.css';

function NewsletterRegistration() {
  const emailInputRef = useRef();
  const notificationCtx = useContext(NotificationContext);

  function registrationHandler(e) {
    e.preventDefault();

    const enteredEmail = emailInputRef.current.value;

    notificationCtx.showNotification({
      title: 'Signing up...',
      message: 'Registering for newsletters.',
      status: 'pending',
    });

    fetch('/api/newsletter', {
      method: 'POST',
      body: JSON.stringify({ email: enteredEmail }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }

        return response.json().then((data) => {
          throw new Error(data.message || 'Something went wrong');
        });
      })
      .then(() => {
        notificationCtx.showNotification({
          title: 'Success!',
          message: 'Successfully registered for newsletter!',
          status: 'success',
        });
      })
      .catch((error) => {
        notificationCtx.showNotification({
          title: 'Error!',
          message: error.message || 'Something went wrong!',
          status: 'error',
        });
      });
  }

  return (
    <section className={styles.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={styles.control}>
          <input
            type='email'
            id='email'
            placeholder='Your email'
            aria-label='Tour email'
            ref={emailInputRef}
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;
