import React, { useEffect, useState } from "react";
import SelectAlgorithm from "../../components/FormControl";
import { Slider } from "@mui/material";
import Button from "@mui/material/Button";
import styles from "./Home.module.scss";
import { bubbleSort } from "../../algorithms/bubbleSort";
import { mergeSort } from "../../algorithms/mergeSort";
import { heapSort } from "../../algorithms/heapSort";
import { quickSort } from "../../algorithms/quickSort";

function Home() {
  const [array, setState] = useState<number[]>([]);
  const [size, setSize] = useState(200);

  //   Example arrays and testing algorithms
  //   let array2 = [1000, 999, 2, 5, 1, 7, 9];
  //   let array3 = [2, 5, 1, 7, 9];
  //   let array4 = [99, 22, 7, 9];
  //   let array5 = [1, 2, 2, 5, 1, 7, 9, 44, 11, 44, 78965, 6534334, 434343];

  //   console.log(mergeSort(array2));
  //   console.log(bubbleSort(array3));
  //   console.log(heapSort(array4));
  //   console.log(quickSort(array5));

  useEffect(() => {
    resetArray();
  }, []);

  function randomIntFromIntervals(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const resetArray = () => {
    const array = [];
    for (let a = 0; a < size; a++) {
      array.push(randomIntFromIntervals(10, 750));
    }
    setState(array);
  };

  const changeSize = (event: Event, newValue: number | number[]) => {
    setSize(newValue as number);
  };

  return (
    <section>
      <div className={styles.menu}>
        <Button onClick={resetArray} variant="outlined">
          Generate New Array
        </Button>
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
            ></Slider>
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
          ))}
        </div>
      </div>
    </section>
  );
}

export default Home;
