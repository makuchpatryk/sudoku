"use client";
import { ReactElement, useEffect, useState } from "react";
import { Modal } from "@mui/material";

import Board from "@/components/Board";
import Legend from "@/components/Legend";
import NewGameButton from "@/components/Buttons/NewGameButton";
import HomeButton from "@/components/Buttons/HomeButton";

import styles from "./styles.module.css";

import RootLayout from "@/components/Layout";
import useBoard from "@/hooks/useBoard";
import { useRouter } from "next/router";
import Sudoku from "@/utils/sudoku.class";
import { DEFAULT_BOARD, TRIALS } from "@/defaults";

const Page = () => {
  const {
    closingModalHandle,
    won,
    lost,
    timeRef,
    name,
    level,
    openModal,
    modalBody,
    setBoard,
    setCorrectedBoard,
    setTrials,
  } = useBoard();
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    const sudoku = new Sudoku(level);
    const { board, hide } = sudoku.generate();

    setBoard(hide);
    setCorrectedBoard(board);
  }, [refresh]);

  const router = useRouter();

  const handleStartGame = () => {
    setBoard(DEFAULT_BOARD);
    setCorrectedBoard(DEFAULT_BOARD);
    setTrials(TRIALS);

    router.push(`/game?level=${level}&name=${name}`);
    setRefresh(!refresh);
  };

  const handleBackToHome = () => {
    setBoard(DEFAULT_BOARD);
    setCorrectedBoard(DEFAULT_BOARD);
    setTrials(TRIALS);

    router.push("/");
  };

  return (
    <>
      <div className={styles.game}>
        <HomeButton handleClick={handleBackToHome} />
        <NewGameButton handleClick={handleStartGame} />
        <Legend timeRef={timeRef} />
        <span className={styles.gameContainer}>
          <Board won={won} lost={lost} />
        </span>
      </div>

      <Modal
        open={openModal}
        onClose={() => {
          router.push("/");
          closingModalHandle();
        }}
      >
        {modalBody || <></>}
      </Modal>
    </>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};

export default Page;
