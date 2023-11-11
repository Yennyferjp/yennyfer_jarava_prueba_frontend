import React, { useState, useCallback, useEffect, useRef } from 'react';
import styles from './Clock.module.css';

export function Clock() {
    const hour = useRef(null);
    const minute = useRef(null);
    const second = useRef(null);
    const [hourDeg, setHourDeg] = useState(1);
    const [minuteDeg, setMinuteDeg] = useState(1);
    const [secondDeg, setSecondDeg] = useState(1);
    const [currentDate, setCurrentDate] = useState(new Date());

    const setTime = () => {
        const now = new Date();
        const hour = now.getHours() % 12;
        const minute = now.getMinutes();
        const second = now.getSeconds();
        const currentHourDeg = 30 * hour + minute / 2;
        const currentMinuteDeg = minute * 6;
        const currentSecondDeg = second * 6;

        setHourDeg(currentHourDeg);
        setMinuteDeg(currentMinuteDeg);
        setSecondDeg(currentSecondDeg);
        setCurrentDate(now);
    };

    useEffect(() => {
        const timer = setInterval(() => setTime(), 1000);
        return () => clearTimeout(timer);
    }, []);

    const updateDegrees = useCallback(() => {
        hour.current.style.transform = `rotate(${hourDeg}deg)`;
        minute.current.style.transform = `rotate(${minuteDeg}deg)`;
        second.current.style.transform = `rotate(${secondDeg}deg)`;
    }, [hourDeg, minuteDeg, secondDeg]);

    useEffect(updateDegrees, [hourDeg, minuteDeg, secondDeg]);


    return (
        <div className={styles.clockContainer}>
            <div className={styles.clock}>
                <div ref={hour} className={`${styles.hour} ${styles.hand}`} style={{ "--color": "#ff3d58", "--height": "76px", "--width": "5px" }}><i></i></div>
                <div ref={minute} className={`${styles.minute} ${styles.hand}`} style={{ "--color": "#00a6ff", "--height": "86px", "--width": "3px" }}><i></i></div>
                <div ref={second} className={`${styles.second} ${styles.hand}`} style={{ "--color": "#ffffff", "--height": "96px", "--width": "1px" }} ><i></i></div>
                <div className={styles.date}> {currentDate.toLocaleDateString(undefined, {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                })}</div>
                <span style={{ "--i": 1, "--j": 0 }}><i></i></span>
                <span style={{ "--i": 1, "--j": 0 }}><i>|</i></span>
                <span style={{ "--i": 2, "--j": 0 }}><i>|</i></span>
                <span style={{ "--i": 3, "--j": 3 }}><i>3</i></span>
                <span style={{ "--i": 4, "--j": 0 }}><i>|</i></span>
                <span style={{ "--i": 5, "--j": 0 }}><i>|</i></span>
                <span style={{ "--i": 6, "--j": 6 }}><i>6</i></span>
                <span style={{ "--i": 7, "--j": 0 }}><i>|</i></span>
                <span style={{ "--i": 8, "--j": 0 }}><i>|</i></span>
                <span style={{ "--i": 9, "--j": 9 }}><i>9</i></span>
                <span style={{ "--i": 10, "--j": 0 }}><i>|</i></span>
                <span style={{ "--i": 11, "--j": 0 }}><i>|</i></span>
                <span style={{ "--i": 12, "--j": 12 }}><i>12</i></span>
            </div>
        </div>
    );
}