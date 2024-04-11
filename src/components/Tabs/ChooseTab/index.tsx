import StartGameButton from "../../Buttons/StartGameButton";
import Context from "@/context/Provider";
import styles from "./styles.module.css";

import { useContext } from "react";

import { DEFAULT_BOARD, LEVELS } from "@/defaults";
import { useRouter } from "next/router";
import { Input, MenuItem, Select } from "@mui/material";

const ChooseTab = () => {
  const { setName, name, level, setLevel, setBoard, setCorrectedBoard } =
    useContext(Context);
  const router = useRouter();

  const handleStartGame = () => {
    router.push(`/game?level=${level}&name=${name}`);
    setBoard(DEFAULT_BOARD);
    setCorrectedBoard(DEFAULT_BOARD);
  };

  return (
    <>
      <div className={styles.chooseName}>
        <div className={styles.name}>
          <label className={styles.label}>Name:</label>
          <Input
            className={styles.input}
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={styles.level}>
          <label className={styles.label}>Level:</label>
          <Select
            className={styles.select}
            defaultValue={LEVELS.EASY}
            onChange={(e) => setLevel(e.target.value)}
          >
            {Object.values(LEVELS).map((item, key) => {
              return (
                <MenuItem key={key} value={item}>
                  {item}
                </MenuItem>
              );
            })}
          </Select>
        </div>
        <StartGameButton handleClick={handleStartGame} />
      </div>
    </>
  );
};

export default ChooseTab;
