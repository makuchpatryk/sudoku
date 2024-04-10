export default function formatTime(time: number) {
    const getHours = (`0${Math.floor((time / 60000) % 60)}`).slice(-2);
    const getMinutes = (`0${Math.floor((time / 1000) % 60)}`).slice(-2);
    const getSeconds = (`0${((time / 10) % 100)}`).slice(-2);
    return `${getHours} : ${getMinutes} : ${getSeconds}`;
};