import React from 'react';
import styles from "./Header.module.scss";
import SelectAlgorithm from "./components/FormControl";
import { makeStyles, Slider } from "@mui/material";
import Button from '@mui/material/Button';


function Header() {

    return (
        <header>
            <Button variant="outlined">Generate Array</Button>
            <SelectAlgorithm />
            <div className={styles.range}>
                <div className={styles.name}>Resize Array:</div>
                <div className={styles.slider}>
                    <Slider
                        size="small"
                        min={4}
                        max={1000}
                        step={1}
                        valueLabelDisplay="auto"
                    >
                    </Slider>
                </div>
            </div>

        </header >
    );
}

export default Header;
