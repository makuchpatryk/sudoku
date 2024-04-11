import StartGameButton from "../../Buttons/StartGameButton";
import Context from "@/context/Provider";
import styles from "./styles.module.css";

import { useContext } from "react";

import { LEVELS } from "@/defaults";

type TypeProps = {
  handleStartGame: React.MouseEventHandler<HTMLButtonElement>;
};

export default function ChooseTab({ handleStartGame }: TypeProps) {
  const { setName, level, setLevel } = useContext(Context);

  return (
    <>
      <div className={styles.chooseName}>
        <div className={styles.name}>
          <label className={styles.label}>Name:</label>
          <input
            className={styles.input}
            type="text"
            maxLength={100}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={styles.level}>
          <label className={styles.label}>Level:</label>
          <select
            className={styles.select}
            defaultValue={LEVELS.EASY}
            onChange={(e) => setLevel(e.target.value)}
          >
            {Object.values(LEVELS).map((item, key) => {
              return (
                <option key={key} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>
        <StartGameButton handleClick={handleStartGame} />
      </div>
    </>
  );
}
