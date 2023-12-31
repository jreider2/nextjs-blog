import Layout, { siteTitle } from '../components/layout';

import Head from 'next/head';
import { getSortedPostsData } from '../lib/posts';
import TeaserCard from '../components/teasercard';
import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import arrowStyles from '../components/arrowDown.module.css';
import styles from '../styles/Home.module.css';


export default function Home({ allPostsData }) {
  const workRef = useRef(null);
  const scrollToWork = () => {
    workRef.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <>
      <Layout ref={workRef} home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <div className={styles.heroContainer}>
          <div className={styles.heroSection}>

            <motion.h1
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            ><span className={styles.EngineersLens}>Engineer's Lens</span><br></br>
              <span className={styles.designerVision}>Designer's Vision</span></motion.h1>

            <motion.div className={styles.subheadContainer}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1 }}
            >
              <h2>hi! i’m juliana, an engineer turned product designer.</h2>
              <h2 className={styles.subhead2}>my methodical nature merges aesthetics with functionality.</h2>
            </motion.div>

            <motion.div onClick={() => scrollToWork()}
              initial={{ y: 10 }}
              animate={{ y: 0 }}
              transition={{ delay: 2, duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
              className={arrowStyles.arrowDown}>↓</motion.div>
          </div>
        </div>
        <div className={styles.ghost} ref={workRef}></div>
        <TeaserCard title="Thought Filter" description="First designer for a B2B content marketing SaaS tool." image="/images/macx2.png" link={"/thoughtFilter"}></TeaserCard>
        <TeaserCard title="Convoscope" description="Designing an experimental AI interface for MIT Media Lab researchers." image="/images/macx2.png" link={"/convoScope"}></TeaserCard>
        <TeaserCard title="CodeHarbor" description="Leading the design of an innovative collaborative coding platform, blending the power of real-time collaboration with advanced version control for software teams." image="/images/macx2.png" link={"/case3"}></TeaserCard>

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