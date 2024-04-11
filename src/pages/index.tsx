"use client";
import { ReactElement, useRef } from "react";
import { Modal, Box } from "@mui/material";

import Board from "@/components/Board";
import ChooseTab from "@/components/Tabs/ChooseTab";
import Legend from "@/components/Legend";
import NewGameButton from "@/components/Buttons/NewGameButton";
import HomeButton from "@/components/Buttons/HomeButton";

import Loading from "@/components/Loading";
import { STATUSES, TRIALS, DEFAULT_BOARD } from "@/defaults";
import styles from "./styles.module.css";

import Context from "@/context/Provider";
import { CountdownHandle } from "@/components/Stopwatch";

import { useContext } from "react";
import RootLayout from "@/components/Layout";

const Page = () => {
  const timeRef = useRef<CountdownHandle>(null);
  const {
    name,
    level,
    setTrials,
    status,
    setStatus,
    setBoard,
    setCorrectedBoard,
    openModal,
    setOpenModal,
    modalBody,
    setModalBody,
  } = useContext(Context);

  const won = async () => {
    setTrials(TRIALS);
    setOpenModal(true);
    timeRef.current?.stop();
    const finishTime = timeRef.current?.getTime() || 0;

    setModalBody(
      <Box sx={modalStyle}>
        <h2>You won congrats!!</h2>
        <p>time: {finishTime}</p>
      </Box>
    );

    await submitResults(finishTime);
  };
  const lost = () => {
    setTrials(TRIALS);
    setOpenModal(true);
    timeRef.current?.stop();

    setModalBody(
      <Box sx={modalStyle}>
        <h2>You lost try again!!</h2>
      </Box>
    );
  };

  const submitResults = async (finishTime: number) => {
    try {
      const body = {
        name: name,
        level: level,
        finishTime: finishTime,
      };
      await fetch("/sudoku/api/ranking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    } catch (error) {
      console.error(error);
    }
  };

  const closingModalHandle = () => {
    setOpenModal(false);
    setModalBody(null);
    setStatus(STATUSES.WAITING);
  };
  const handleStartGame = async (event: React.MouseEvent<HTMLElement>) => {
    setStatus(STATUSES.LOADING);

    try {
      const response = await fetch(
        `/sudoku/api/sudoku?${new URLSearchParams({
          level,
        })}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );
      const { hide, board } = await response.json();

      setBoard(hide);
      setCorrectedBoard(board);
      setStatus(STATUSES.PLAYING);
    } catch (error) {
      console.error(error);
    }
  };

  const handleBackToHome = () => {
    setStatus(STATUSES.WAITING);
    setBoard(DEFAULT_BOARD);
    setCorrectedBoard(DEFAULT_BOARD);
  };
  const modalStyle = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      {status}
      {status === STATUSES.WAITING && (
        <ChooseTab handleStartGame={handleStartGame} />
      )}
      {status === STATUSES.LOADING && <Loading />}
      {status === STATUSES.PLAYING && (
        <div className={styles.game}>
          <HomeButton handleClick={handleBackToHome} />
          <NewGameButton handleClick={handleStartGame} />
          <Legend timeRef={timeRef} />
          <span className={styles.gameContainer}>
            <Board won={won} lost={lost} />
          </span>
        </div>
      )}

      <Modal open={openModal} onClose={closingModalHandle}>
        {modalBody || <></>}
      </Modal>
    </>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};

export default Page;
