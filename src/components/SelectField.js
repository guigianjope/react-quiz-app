import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { handleCategoryChange, handleDifficultyChange } from '../redux/actions';

const SelectField = (props) => {

    const { label, options } = props;
    const dispatch = useDispatch();
    const [value, setValue] = useState("");

    const handleChange = (event) => {
        setValue(event.target.value);
        switch (label) {
            case "Category":
                dispatch(handleCategoryChange(event.target.value));
                break;
            case "Difficult":
                dispatch(handleDifficultyChange(event.target.value));
                break;
        
            default:
                return;
        }
    };
    console.log(handleChange);

    return (
        <Box mt={3} width="100%" >
            <FormControl size="small" fullWidth>
                <InputLabel>{label}</InputLabel>
                <Select 
                    value={value}
                    label={label}
                    onchange={handleChange}
                >
                    {options.map(({ id, name }) => (
                        <MenuItem value={id} key={id}> 
                            {name} 
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>            
        </Box>
    )
}

export default SelectField
