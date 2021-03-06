import Head from 'next/head';
import EventList from '../components/events/event-list';
import NewsletterRegistration from '../components/Input/newsletter-registration';
import { getFeaturedEvents } from '../helpers/api-util';

function HomePage({ featuredEvents }) {
  return (
    <div>
      <Head>
        <title>NextJS Events</title>
        <meta name='description' content='Find a lot of great events' />
      </Head>
      <NewsletterRegistration />
      <EventList items={featuredEvents} />
    </div>
  );
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      featuredEvents,
    },
    revalidate: 1800,
  };
}

export default HomePage;
