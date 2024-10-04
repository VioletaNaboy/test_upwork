import { fetchPageContent } from './api/api';
import Image from 'next/image'
import { useState } from 'react';
import styles from '../styles/Home.module.css';

export async function getStaticProps() {
  const pageContent = await fetchPageContent();
  return {
    props: { pageContent },
    revalidate: 10,
  };
}

export default function Home({ pageContent }) {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (index) => {
    setSelectedTab(index);
  };

  if (!pageContent) {
    return <div>Loading...</div>;
  }

  const currentItem = pageContent.Items[selectedTab];

  return (
    <div style={{ width: '100%', height: '100%' }} >
      <div className={styles.wrapper}>
        <h1>{pageContent.Title}</h1>
        <p>{pageContent.descr}</p>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {pageContent.image && pageContent.image[0].url && (
          <div className={styles.leftSection}>
            <div className={styles.photo}>
              <Image
                src={pageContent.image[0].url}
                alt={pageContent.image[0].alternativeText || 'Industry Experts'}
                layout="fill"
                objectFit="cover"
              /></div>
            <div className={styles.imageOverlay}>
              <p className={styles.overlayText}>{currentItem.title}</p>
              <p className={styles.overlayDescr}>{currentItem.descr}</p>
            </div>
          </div>
        )}
        <div className={styles.rightSection}>
          <ul>
            {pageContent.Items.map((item, index) => (
              <li
                key={index}
                onClick={() => handleTabChange(index)}
                className={`${styles.tab} ${index === selectedTab ? styles.active : styles.inactive}`}
              >
                <span className={styles.arrow}>&lt;</span>{item.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
