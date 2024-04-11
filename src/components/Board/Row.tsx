import styles from "./Row.module.css";

const Row = ({ children }: any) => {
  return <ul className={styles.ul}>{children}</ul>;
};

export default Row;
