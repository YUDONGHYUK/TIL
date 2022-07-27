import Image from 'next/image';
import styles from './hero.module.css';

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <Image
          src='/images/site/doyu.jpg'
          alt='An image showing Doyu'
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Doyu</h1>
      <p>
        I blog about web development - especially fronted frameworks like React
      </p>
    </section>
  );
}

export default Hero;
