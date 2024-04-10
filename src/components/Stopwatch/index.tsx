import React, { useState, useEffect, useImperativeHandle } from "react";
import styles from './index.module.css';

export type CountdownProps = {}

export type CountdownHandle = {
    reset: () => void;
    stop: () => void;
    getTime: () => number;
};

const WrappedComponent = React.forwardRef<CountdownHandle, CountdownProps>(
    function StopWatch(props, ref) {
        const [isActive, setIsActive] = useState<boolean>(false);
        const [isPaused, setIsPaused] = useState<boolean>(true);
        const [time, setTime] = useState<number>(0);
        
        useImperativeHandle(ref, () => {
            return {
                stop: () => {
                    setIsActive(false);
                    setIsPaused(true);
                },
                reset: () => {
                    handleReset();
                },
                getTime: () => {
                    return time;
                }
            }
        });


        React.useEffect(() => {
            let interval:any = null;

            if (isActive && isPaused === false) {
                interval = setInterval(() => {
                    setTime((time) => time + 10);
                }, 10);
            } else {
                clearInterval(interval);
            }
            return () => {
                clearInterval(interval);
            };
        }, [isActive, isPaused]);
        
        const handleStart = () => {
            setIsActive(true);
            setIsPaused(false);
        };
        
        const handlePauseResume = () => {
            setIsPaused(!isPaused);
        };
        
        const handleReset = () => {
            setIsActive(false);
            setTime(0);
        };

        useEffect(() => {
            handleStart();
        }, [])
        
        return (
            <div className={styles.timer}>
                <span className={styles.digits}>
                {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
                </span>
                <span className={styles.digits}>
                {("0" + Math.floor((time / 1000) % 60)).slice(-2)}.
                </span>
                <span className={`${styles.digits} ${styles.miliSec}`}>
                {("0" + ((time / 10) % 100)).slice(-2)}
                </span>
            </div>
        );
    }
)
  
export default WrappedComponent;