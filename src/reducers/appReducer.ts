import { Reducer } from 'react';
import { STATUSES, DEFAULT_BOARD, TRIALS, LEVELS } from '@/defaults';

export enum ActionKind {
    SET_STATUS = 'SET_STATUS',
    SET_LEVEL = 'SET_LEVEL',
    SET_NAME = 'SET_NAME',
    SET_ACTIVE_NUMBER= 'SET_ACTIVE_NUMBER',
    SET_TRIALS = 'SET_TRIALS',
    SET_BOARD = 'SET_BOARD',
    SET_CORRECTED_BOARD = 'SET_CORRECTED_BOARD',
    SET_OPEN_MODAL = 'SET_OPEN_MODAL',
    SET_MODAL_BODY = 'SET_MODAL_BODY',
    SET_IS_PENCIEL = 'SET_IS_PENCIEL',
}
  
interface IAction {
    type: ActionKind;
    payload: any;
}

export interface IState {
    status: string,
	board: (number|string)[][],
	correctedBoard: (number|string)[][],
	trials: number,
	level: string,
	name: string,
    activeNumber: number|string,
    openModal: boolean,
    modalBody: JSX.Element | null,
    isPenciel: boolean,
}

export const initialState = {
	status: STATUSES.WAITING,
	board: DEFAULT_BOARD,
	correctedBoard: DEFAULT_BOARD,
	trials: TRIALS,
	level: LEVELS.EASY,
	name: '',
    activeNumber: '',
    openModal: false,
    modalBody: null,
    isPenciel: false,
}


export const appReducer: Reducer<IState, IAction> = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case ActionKind.SET_STATUS: {
            return {
                ...state,
                status: payload,
            };
        };
        case ActionKind.SET_BOARD: {
            return {
                ...state,
                board: payload,
            };
        };
        case ActionKind.SET_CORRECTED_BOARD: {
            return {
                ...state,
                correctedBoard: payload,
            };
        };
        case ActionKind.SET_LEVEL: {
            return {
                ...state,
                level: payload,
            };
        };
        case ActionKind.SET_NAME: {
            return {
                ...state,
                name: payload,
            };
        };
        case ActionKind.SET_ACTIVE_NUMBER: {
            return {
                ...state,
                activeNumber: payload,
            };
        };
        case ActionKind.SET_TRIALS: {
            return {
                ...state,
                trials: payload,
            };
        };
        case ActionKind.SET_OPEN_MODAL: {
            return {
                ...state,
                openModal: payload,
            };
        };
        case ActionKind.SET_MODAL_BODY: {
            return {
                ...state,
                modalBody: payload,
            };
        };
        case ActionKind.SET_IS_PENCIEL: {
            return {
                ...state,
                isPenciel: payload,
            };
        };
        default: {
            throw Error('Unknown action: ' + type);
        }
    }
}