import { useRef } from "react";
import { Box } from "@mui/material";

import { STATUSES, TRIALS, DEFAULT_BOARD, LEVELS } from "@/defaults";

import Context from "@/context/Provider";
import { CountdownHandle } from "@/components/Stopwatch";

import { useContext } from "react";

const useBoard = () => {
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
    setOpenModal(true);
    timeRef.current?.stop();

    setModalBody(
      <Box sx={modalStyle}>
        <h2>You lost try again!!</h2>
      </Box>
    );
  };

  const submitResults = async (finishTime: number) => {
    // try {
    //   const body = {
    //     name: name,
    //     level: level,
    //     finishTime: finishTime,
    //   };
    //   await fetch("/sudoku/api/ranking", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(body),
    //   });
    // } catch (error) {
    //   console.error(error);
    // }
  };

  const closingModalHandle = () => {
    setOpenModal(false);
    setModalBody(null);

    setBoard(DEFAULT_BOARD);
    setCorrectedBoard(DEFAULT_BOARD);
    setTrials(TRIALS);
  };

  return {
    closingModalHandle,
    submitResults,
    won,
    lost,
    timeRef,
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
  };
};

export default useBoard;
