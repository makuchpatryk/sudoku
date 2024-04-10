import Context from '@/context/Provider';

import { useContext } from 'react';

type TypeProps = {
    handleClick: React.MouseEventHandler<HTMLButtonElement>,
}

export default function StartGameButton({handleClick}: TypeProps) {
    return <button className="start-game btn" onClick={handleClick}>Start Game</button>
}