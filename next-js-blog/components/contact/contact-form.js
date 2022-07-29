import { useEffect, useRef, useState } from 'react';
import Notification from '../ui/notification';
import styles from './contact-form.module.css';

async function sendContactData(contactDetails) {
  const response = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(contactDetails),
    headers: { 'Content-Type': 'application/json' },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong!');
  }
}

function ContactForm() {
  const formRef = useRef();
  const emailInputRef = useRef();
  const nameInputRef = useRef();
  const messageInputRef = useRef();
  const [requestStatus, setRequestStatus] = useState(); // 'pending', 'success', 'error'
  const [requestError, setRequestError] = useState();

  useEffect(() => {
    if (requestStatus === 'success' || requestStatus === 'error') {
      const timer = setTimeout(() => {
        setRequestStatus(null);
        setRequestError(null);
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [requestStatus]);

  async function sendMessageHandler(e) {
    e.preventDefault();

    setRequestStatus('pending');

    try {
      await sendContactData({
        email: emailInputRef.current.value,
        name: nameInputRef.current.value,
        message: messageInputRef.current.value,
      });
      setRequestStatus('success');
      formRef.current.reset();
    } catch (error) {
      setRequestStatus('error');
      setRequestError(error.message);
    }
  }

  let notification;

  if (requestStatus === 'pending') {
    notification = {
      status: 'pending',
      title: 'Sending message',
      message: 'Your message is on its way!',
    };
  }

  if (requestStatus === 'success') {
    notification = {
      status: 'success',
      title: 'Success!',
      message: 'Message sent successfully!',
    };
  }

  if (requestStatus === 'error') {
    notification = {
      status: 'error',
      title: 'Error!',
      message: requestError,
    };
  }

  return (
    <section className={styles.contact}>
      <h1>How can I help you?</h1>
      <form className={styles.form} onSubmit={sendMessageHandler} ref={formRef}>
        <div className={styles.controls}>
          <div className={styles.control}>
            <label htmlFor='email'>Your Email</label>
            <input type='email' id='email' ref={emailInputRef} required />
          </div>
          <div className={styles.control}>
            <label htmlFor='name'>Your Name</label>
            <input type='text' id='name' ref={nameInputRef} required />
          </div>
        </div>
        <div className={styles.control}>
          <label htmlFor='message'>Your Message</label>
          <textarea id='message' rows='5' ref={messageInputRef} required />
        </div>
        <div className={styles.actions}>
          <button>Send Message</button>
        </div>
      </form>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
    </section>
  );
}

export default ContactForm;
