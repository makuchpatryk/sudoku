import Row from "./Row";
import Column from "./Column";
import Context from "@/context/Provider";
import styles from "./styles.module.css";

import { useContext, memo } from "react";

interface IBoard {
  won: () => void;
  lost: () => void;
}

const Board = ({ won, lost }: IBoard) => {
  const { board } = useContext(Context);

  return (
    <>
      <div className={styles.lists}>
        {board.map((itemx, keyx) => (
          <Row key={`row-${keyx}`}>
            {itemx.map((itemy, keyy) => (
              <Column
                won={won}
                lost={lost}
                item={itemy}
                x={keyx}
                y={keyy}
                key={`column-${keyx}-${keyy}`}
              />
            ))}
          </Row>
        ))}
      </div>
    </>
  );
};

export default Board;
