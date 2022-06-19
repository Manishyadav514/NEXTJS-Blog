import Head from "next/head";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../components/posts";
import Link from "next/link";
import Date from "../components/date";
import Image from "next/image";

export default function Home({ allPostsData }) {
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <div className={utilStyles.container}>
        <header className={utilStyles.header}>
          <Image
            priority
            src="/profile.jpg"
            className={utilStyles.borderCircle}
            height={144}
            width={144}
            alt="Manish Yadav"
          />
          <h1 className={utilStyles.heading2Xl}>Manish Yadav</h1>
        </header>

        <section className={utilStyles.headingMd}>
          <p>Blog posts sorted older to new</p>
        </section>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Blog</h2>
          <ul className={utilStyles.list}>
            {allPostsData.map(({ id, date, title }) => (
              <li className={utilStyles.listItem} key={id}>
                <Link href={`/postRouting/${id}`}>
                  <a>{title}</a>
                </Link>
                <br />
                <small className={utilStyles.lightText}>
                  <Date dateString={date} />
                </small>
              </li>
            ))}
          </ul>
        </section>
      </div>
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
