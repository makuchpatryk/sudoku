import StartGameButton from "../../Buttons/StartGameButton";
import Context from "@/context/Provider";
import styles from "./styles.module.css";

import { useContext, useState } from "react";

import { DEFAULT_BOARD, LEVELS, TRIALS } from "@/defaults";
import { useRouter } from "next/router";
import { TextField, MenuItem, Select } from "@mui/material";

const ChooseTab = () => {
  const {
    setName,
    name,
    level,
    setLevel,
    setBoard,
    setCorrectedBoard,
    setTrials,
  } = useContext(Context);
  const router = useRouter();
  const [textValidation, setTextValidation] = useState("");

  const handleStartGame = () => {
    if (!name) {
      setTextValidation("Write at least one charakter");
      return;
    }

    router.push(`/game?level=${level}&name=${name}`);
    setBoard(DEFAULT_BOARD);
    setCorrectedBoard(DEFAULT_BOARD);
    setTrials(TRIALS);
  };

  return (
    <>
      <div className={styles.chooseName}>
        <div className={styles.name}>
          {textValidation ? (
            <TextField
              error
              label="Name"
              className={styles.input}
              helperText={textValidation}
              onChange={(e) => {
                setTextValidation("");
                setName(e.target.value);
              }}
            />
          ) : (
            <TextField
              label="Name"
              className={styles.input}
              onChange={(e) => {
                setTextValidation("");
                setName(e.target.value);
              }}
            />
          )}
        </div>
        <div className={styles.level}>
          <Select
            label="Level"
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
