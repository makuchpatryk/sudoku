import Stopwatch from "@/components/Stopwatch";
import styles from "./index.module.css";
import Context from "@/context/Provider";

import { useContext } from "react";
import { CountdownHandle } from "@/components/Stopwatch";

interface ILegend {
  timeRef: React.Ref<CountdownHandle>;
}

const Legend = ({ timeRef }: ILegend) => {
  const { trials, setIsPenciel } = useContext(Context);

  return (
    <div className={styles.navbar}>
      <div className={styles.leftColumn}>
        <div className={styles.trials}>
          trials: <span className={styles.num}>{trials}</span>
        </div>
        <div className={styles.pencielBtn}>
          <input
            type="checkbox"
            onChange={(e) => {
              const { checked } = e.target;
              setIsPenciel(checked);
            }}
          />
          <span>Penciel</span>
        </div>
      </div>
      <div className={styles.rightColumn}>
        <Stopwatch ref={timeRef} />
      </div>
    </div>
  );
};

export default Legend;
