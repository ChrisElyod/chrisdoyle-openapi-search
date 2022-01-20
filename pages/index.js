import Head from 'next/head';
import { useState } from 'react';
import BookTable from '../components/book-table/book-table';
import Input from '../components/input/input';
import styles from '../styles/index.module.scss';

export default function Home() {
  const [query, setQuery] = useState();
  return (
    <>
      <Head>
        <title>React Assessment - Book Search</title>
        <meta name="description" content="React Assessment for Chris Doyle" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles["fea-layout"]}>
        <p className={styles["fea-header"]}>
          OpenLibrary Book Search
        </p>
        <div>
          <Input
            onChange={({ target: { value }}) => setQuery(value.replaceAll(" ", "+"))}
            label="Search Here!"
            aria-label="Search Books Here"
            style={{ marginBottom: "1.5em" }}
          />
          <BookTable query={query} />
        </div>
      </main>
    </>
  )
}
