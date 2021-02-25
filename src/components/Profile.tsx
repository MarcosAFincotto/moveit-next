import styles from '../styles/components/Profile.module.css';

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://avatars.githubusercontent.com/u/18029956?s=400&u=6824bbcf8ffc48146fcb5daf2e2effde797f1f98&v=4" alt="Marcos Fincotto" />
      <div>
        <strong>Marcos Fincotto</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level 1
        </p>
      </div>
    </div>
  );
}