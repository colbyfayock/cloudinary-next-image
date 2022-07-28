import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

import images from '../images.json';

export default function Home() {
  return (
    <>
      <Head>
        <title>Next Image with Cloudinary Loader - Cloudinary &amp; Next Image Component</title>
        <meta name="description" content="Find more Cloudinary examples at github.com/colbyfayock/cloudinary-examples" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.title}>
            Cloudinary &amp; Next Image Component
          </h1>
          <h2 className={styles.subtitle}>
            Next Image with Cloudinary Loader
          </h2>
        </div>

        <div className={styles.container}>
          <ul className={styles.images}>
            {images.map(image => {
              return (
                <li key={image.id}>
                  <a href={image.link} rel="noreferrer">
                    <Image width={image.width} height={image.height} src={image.image} alt={image.title} />
                    <h3 className={styles.imageTitle}>
                      { image.title }
                    </h3>
                  </a>
                </li>
              )
            })}
          </ul>
        </div>

      </main>
    </>
  )
}
