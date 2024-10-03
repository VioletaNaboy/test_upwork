import { fetchPageContent } from './api/api';
import Image from 'next/image';

export async function getStaticProps() {
  const pageContent = await fetchPageContent();
  return {
    props: { pageContent },
    revalidate: 10,
  };
}

export default function Home({ pageContent }) {

  if (!pageContent) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h1>{pageContent.Title}</h1>
      <p>{pageContent.descr}</p>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* Перевіряємо, чи існує зображення */}
        {pageContent.image && pageContent.image[0].url && (
          <div style={{ position: 'relative', width: '50%', height: '300px' }}>
            <Image
              src={`http://localhost:1337${pageContent.image[0].url}`}
              alt="Industry Experts"
              layout="fill"
              objectFit="cover"
            />
          </div>
        )}

        <div style={{ width: '40%' }}>
          {/* Перевіряємо, чи є items */}
          {pageContent.Items && pageContent.Items.length > 0 ? (
            pageContent.Items.map((item, index) => (
              <div key={index} style={{ marginBottom: '1rem' }}>
                <h3>{item.title}</h3>
                <p>{item.descr}</p>
              </div>
            ))
          ) : (
            <p>No items available</p>
          )}
        </div>
      </div>
    </div>
  );
}
