import React, { useEffect, useState } from "react";
import SelectAlgorithm from "../../components/FormControl";
import { Slider } from "@mui/material";
import Button from '@mui/material/Button';
import styles from "./Home.module.scss"

function Home() {
    const [array, setState] = useState<number[]>([]);
    const [size, setSize] = useState(200);

    useEffect(() => {
        resetArray();
    }, []);

    function randomIntFromIntervals(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    // function getRandomInt(min: number, max: number) {
    //     return Math.floor(Math.random() * (max - min)) + min;
    // }

    // const random = getRandomInt(4, 300);

    const resetArray = () => {
        const array = [];
        for (let a = 0; a < size; a++) {
            array.push(randomIntFromIntervals(10, 750))
        }
        setState(array);
    }

    const changeSize = (event: Event, newValue: number | number[]) => {
        setSize(newValue as number);
    }

    return (
        <section>
            <div className={styles.menu}>
                <Button onClick={resetArray} variant="outlined">Generate New Array</Button>
                <SelectAlgorithm />
                <div className={styles.range}>
                    <div className={styles.name}>Resize Array:</div>
                    <div className={styles.slider}>
                        <Slider
                            size="small"
                            min={5}
                            max={200}
                            step={1}
                            defaultValue={100}
                            valueLabelDisplay="auto"
                            value={size}
                            onChange={changeSize}
                            onChangeCommitted={resetArray}
                        >
                        </Slider>
                    </div>
                </div>
            </div>
            <div className={styles.test}>
                <div className={styles.arrayContainer}>
                    {array.map((value, index) => (
                        <div
                            className={styles.arrayBlock}
                            key={index}
                            style={{ height: value }}
                        ></div>
                    ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Home;
