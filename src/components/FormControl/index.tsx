import React, { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import styles from "./FormControl.module.scss";
import { MenuItem } from '@mui/material';
import { algorithms } from '../../global';


function SelectAlgorithm() {
    const [algorithm, setAlgorithm] = useState<string>('');

    const handleChange = (event: SelectChangeEvent) => {
        setAlgorithm(event.target.value as string);
    };

    return (
        <Box className={styles.box}>
            <FormControl fullWidth>
                <InputLabel>Algorithm</InputLabel>
                <Select
                    value={algorithm}
                    label="Algorithm"
                    onChange={handleChange}
                >
                    {algorithms.map((element) => (
                        <MenuItem
                            value={element.id}
                            key={element.id}
                        >
                            {element.name}
                        </MenuItem>
                    ))
                    }
                </Select>
            </FormControl>
        </Box >
    );
}

export default SelectAlgorithm;