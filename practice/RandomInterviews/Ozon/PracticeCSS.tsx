import styles from './PracticeCSS.module.css';

export default function PracticeCSS() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>Header</header>
      {/* <div className={styles.content}> */}
      <aside className={styles.aside}>Sidebar</aside>
      <main className={styles.main}>Main</main>
      {/* </div> */}
      <footer className={styles.footer}>Footer</footer>
    </div>
  );
}
