type TypeProps = {
    handleClick: React.MouseEventHandler<HTMLButtonElement>,
}

export default function HomeButton({handleClick}: TypeProps) {
    return <button className="btn" onClick={handleClick}>Home</button>
}