import Layout, { siteTitle } from '../components/layout';
import Nav from '../components/nav';
import Date from '../components/date';

import Head from 'next/head';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import TeaserCard from '../components/teasercard';

import utilStyles from '../styles/utils.module.css';
import arrowStyles from '../components/arrowDown.module.css';
import styles from '../styles/Home.module.css';


export default function Home({ allPostsData }) {
  return (
    <>
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <div className={styles.heroSection}>
          <h1><span span className={styles.EngineersLens}>Engineer's Lens</span></h1>
          <h1><span className={styles.designerVision}>Designer's Vision</span></h1>
          <h2>
            hi! i’m juliana, an engineer turned product designer.
          </h2>
          <h2>my methodical nature merges aesthetics with functionality.</h2>
          <div className={arrowStyles.arrowDown}>↓</div>
        </div>
        <TeaserCard title="Your Title" description="Your Description" image="/images/mac.jpg"></TeaserCard>
        <TeaserCard title="Your Title" description="Your Description" image="/images/mac.jpg"></TeaserCard>
        <TeaserCard title="Your Title" description="Your Description" image="/images/mac.jpg"></TeaserCard>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          {/*<ul className={utilStyles.list}>
            {allPostsData.map(({ id, date, title }) => (
              <li className={utilStyles.listItem} key={id}>
                <Link href={`/posts/${id}`}>{title}</Link>
                <br />
                <small className={utilStyles.lightText}>
                  <Date dateString={date} />
                </small>
              </li>
            ))}
            </ul>*/}
        </section>
      </Layout >
    </>

  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}