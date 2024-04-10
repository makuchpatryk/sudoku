import * as React from 'react';
import { memo } from 'react';
import styles from './Column.module.css';
import Context from '@/context/Provider';

import { useContext } from 'react';

interface IColumn {
    item: string|number,
    x: string|number,
    y: string|number,
    won: () => void;
    lost: () => void;
}

const memoColumn = memo(function Column({item, x, y, won, lost}: IColumn) {
    const ref = React.useRef<HTMLInputElement>(null)
    const {board, setBoard, correctedBoard, activeNumber, setActiveNumber, trials, setTrials, isPenciel } = useContext(Context);
    const [pencielBoard, setPencielBoard] = React.useState<string[]>(['','','','','','','','','' ]);

    const checkBox = () => {
        if (ref.current != null) {
            const X = parseInt(x.toString())
            const Y = parseInt(y.toString())
            const v = parseInt(ref.current.value || '')

            if (isNaN(v))
            {
                ref.current.value = '';
            }
            if(isPenciel) {
                if([1,2,3,4,5,6,7,8,9].includes(v)) {
                    const tmpPencielBoard = [
                        ...pencielBoard,
                    ]

                    tmpPencielBoard[v - 1] = tmpPencielBoard[v - 1] === '' ? v.toString() : '';
                    setPencielBoard(tmpPencielBoard);
                }

                ref.current.value = '';
                return;
            }

            if (correctedBoard[X][Y] != v)
            {
                if(trials <= 1)
                {
                    lost();
                }
                setTrials(trials - 1);
                ref.current.value = '';
            }
            else
            {
                const tmpBoard = [
                    ...board,
                ]

                tmpBoard[X][Y] = v;
                setBoard(tmpBoard);
                setPencielBoard([]);
                ref.current.value = '';
            }

            if(JSON.stringify(correctedBoard) == JSON.stringify(board))
            {
                won();
            }
        }
    }
    const showAllSameNumberValue = () => {
        setActiveNumber(item);      
    }

    return (
        <>
            <li onClick={showAllSameNumberValue} className={`${styles.li} ${activeNumber == item && item != '' ? styles.active : ''}`}>
                <input ref={ref} className={styles.input} disabled={item ? true : false} onInput={checkBox} type="text" maxLength={1} />
                <span className={styles.element}>{item}</span>
                <ul className={styles.pencialRow}>
                    {pencielBoard.map((peciel, pecielKey) => <li className={styles.pencialLi} key={`penciel-${item}-${pecielKey}`}>{peciel}</li>)}
                </ul>
            </li>
        </>
    )
})

export default memoColumn
