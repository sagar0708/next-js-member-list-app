import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <Head>
      <title>Home Page</title>
    </Head>
      <div className={styles.home}>
        <h1 className={styles.title}>Home Page</h1>
        <p className={styles.text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio pariatur officia facilis, nobis itaque minus odit provident accusamus, reiciendis culpa recusandae error odio magni velit dolores illum, iste aperiam illo.</p>
        <p className={styles.text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio pariatur officia facilis, nobis itaque minus odit provident accusamus, reiciendis culpa recusandae error odio magni velit dolores illum, iste aperiam illo.</p>
      </div>
    </>
  )
}
