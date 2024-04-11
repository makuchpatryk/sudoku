// import { PrismaClient } from "@prisma/client";

import RootLayout from "@/components/Layout";
import { ReactElement } from "react";

// import { LEVELS } from "@/defaults";
// import formatTime from "@/utils/time-formatter";

// import styles from "./styles.module.css";

const Ranking = () => {
  return <div></div>;
  //   const ranking = await getData();

  //   return (
  //     <div className={styles.resultsListWrapper}>
  //       <div className={styles.resultsList}>
  //         <span className={styles.title} style={{ color: "black" }}>
  //           {LEVELS.EASY.toUpperCase()}
  //         </span>
  //         <ul className={styles.ul}>
  //           <li className={styles.li}>
  //             <span className={styles.authorLabel}>Gamer</span>
  //             <span className={styles.finishTimeLabel}>Time</span>
  //           </li>
  //           {ranking
  //             .filter((i: any) => i.level === "easy")
  //             .map((item: any, index: number) => (
  //               <li className={styles.li} key={index}>
  //                 <span className={styles.author}>{item.name}</span>
  //                 <span className={styles.time}>
  //                   {formatTime(item.finishTime)}
  //                 </span>
  //               </li>
  //             ))}
  //         </ul>
  //       </div>
  //       <div className={styles.resultsList}>
  //         <span className={styles.title} style={{ color: "black" }}>
  //           {LEVELS.MEDIUM.toUpperCase()}
  //         </span>
  //         <ul className={styles.ul}>
  //           <li className={styles.li}>
  //             <span className={styles.authorLabel}>Gamer</span>
  //             <span className={styles.finishTimeLabel}>Time</span>
  //           </li>
  //           {ranking
  //             .filter((i: any) => i.level === "medium")
  //             .map((item: any, index: number) => (
  //               <li className={styles.li} key={index}>
  //                 <span className={styles.author}>{item.name}</span>
  //                 <span className={styles.time}>
  //                   {formatTime(item.finishTime)}
  //                 </span>
  //               </li>
  //             ))}
  //         </ul>
  //       </div>
  //       <div className={styles.resultsList}>
  //         <span className={styles.title} style={{ color: "black" }}>
  //           {LEVELS.HARD.toUpperCase()}
  //         </span>
  //         <ul className={styles.ul}>
  //           <li className={styles.li}>
  //             <span className={styles.authorLabel}>Gamer</span>
  //             <span className={styles.finishTimeLabel}>Time</span>
  //           </li>
  //           {ranking
  //             .filter((i: any) => i.level === "hard")
  //             .map((item: any, index: number) => (
  //               <li className={styles.li} key={index}>
  //                 <span className={styles.author}>{item.name}</span>
  //                 <span className={styles.time}>
  //                   {formatTime(item.finishTime)}
  //                 </span>
  //               </li>
  //             ))}
  //         </ul>
  //       </div>
  //     </div>
  //   );
};

async function getData() {
  //   const prisma = new PrismaClient();
  //   const ranking = await prisma.ranking.findMany({
  //     orderBy: {
  //       finishTime: "desc",
  //     },
  //   });
  //   return ranking;
}

Ranking.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};

export default Ranking;
