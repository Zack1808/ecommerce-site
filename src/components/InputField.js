import React from 'react'
import { TextField } from '@mui/material';

// Importing the style file
import '../css/InputField.css';

const InputField = ({ name, label, required, value, onChange }) => {

    return (
        <>
            <TextField name={name} value={value} onChange={e => onChange(e.target.value)} label={label} required={required} fullWidth variant="filled"></TextField>
        </>
    )
}

export default InputField