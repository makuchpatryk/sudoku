import styles from './Row.module.css';

export default function Row({children}: any) {
    return <ul className={styles.ul}>{children}</ul>
}