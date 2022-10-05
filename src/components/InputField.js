import React from 'react'
import { TextField } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

// Importing the style file
import '../css/InputField.css';

const InputField = ({ name, label, required }) => {

    const { control } = useFormContext();

    return (
        <>
            <Controller 
                control={control}
                name={name}
                render={() =>  (<TextField label={label} required={required} fullWidth variant='filled' />)}
            />
        </>
    )
}

export default InputField