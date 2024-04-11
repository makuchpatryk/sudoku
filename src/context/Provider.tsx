"use client";

import { createContext, Dispatch, useReducer } from "react";
import {
  appReducer,
  initialState,
  IState,
  ActionKind,
} from "@/reducers/appReducer";

interface IProvider {
  children: JSX.Element | JSX.Element[];
}

interface IContextType extends IState {
  setStatus: Dispatch<string>;
  setName: Dispatch<string>;
  setLevel: Dispatch<string>;
  setBoard: Dispatch<(number | string)[][]>;
  setCorrectedBoard: Dispatch<(number | string)[][]>;
  setActiveNumber: Dispatch<number | string>;
  setTrials: Dispatch<number | string>;
  setOpenModal: Dispatch<boolean>;
  setModalBody: Dispatch<JSX.Element | null>;
  setIsPenciel: Dispatch<boolean>;
}

const ContextValue = {
  ...initialState,
  setStatus: () => ({}),
  setBoard: () => ({}),
  setCorrectedBoard: () => ({}),
  setTrials: () => ({}),
  setLevel: () => ({}),
  setName: () => ({}),
  setActiveNumber: () => ({}),
  setOpenModal: () => ({}),
  setModalBody: () => ({}),
  setIsPenciel: () => ({}),
};

const Context = createContext<IContextType>(ContextValue);

export const Provider = ({ children }: IProvider) => {
  const [
    {
      status,
      board,
      correctedBoard,
      trials,
      level,
      name,
      activeNumber,
      openModal,
      modalBody,
      isPenciel,
    },
    dispatch,
  ] = useReducer(appReducer, initialState);

  const setBoard = (payload: (number | string)[][]) =>
    dispatch({ type: ActionKind.SET_BOARD, payload });
  const setCorrectedBoard = (payload: (number | string)[][]) =>
    dispatch({ type: ActionKind.SET_CORRECTED_BOARD, payload });
  const setStatus = (payload: string) =>
    dispatch({ type: ActionKind.SET_STATUS, payload });
  const setLevel = (payload: string) =>
    dispatch({ type: ActionKind.SET_LEVEL, payload });
  const setName = (payload: string) =>
    dispatch({ type: ActionKind.SET_NAME, payload });
  const setActiveNumber = (payload: number | string) =>
    dispatch({ type: ActionKind.SET_ACTIVE_NUMBER, payload });
  const setTrials = (payload: number | string) =>
    dispatch({ type: ActionKind.SET_TRIALS, payload });
  const setOpenModal = (payload: boolean) =>
    dispatch({ type: ActionKind.SET_OPEN_MODAL, payload });
  const setModalBody = (payload: JSX.Element | null) =>
    dispatch({ type: ActionKind.SET_MODAL_BODY, payload });
  const setIsPenciel = (payload: boolean) =>
    dispatch({ type: ActionKind.SET_IS_PENCIEL, payload });

  const providerValues = {
    status,
    board,
    correctedBoard,
    trials,
    level,
    name,
    activeNumber,
    openModal,
    modalBody,
    isPenciel,
    setBoard,
    setCorrectedBoard,
    setStatus,
    setLevel,
    setName,
    setActiveNumber,
    setTrials,
    setOpenModal,
    setModalBody,
    setIsPenciel,
  };

  return <Context.Provider value={providerValues}>{children}</Context.Provider>;
};

export default Context;
