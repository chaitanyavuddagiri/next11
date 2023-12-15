import Link from "next/link";
import styles from "../styles/Home.module.css";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Home Page</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          voluptate.Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quisquam, voluptate.
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quisquam, voluptate.
        </p>
        <Link href="/ninjas" className={styles.btn}>
          {" "}
          See Ninja Listing
        </Link>
      </div>
    </>
  );
}
