import React, { useState, useEffect } from 'react'
import { InputLabel, Select, MenuItem } from '@mui/material';
import { useForm, FormProvider } from 'react-hook-form';
import { commerce } from '../api/commerce';

// Importing the costume made components
import InputField from './InputField';

// Importing the style file
import '../css/AddressForm.css';

// Creating the AddressForm component
const AddressForm = ({ checkoutToken }) => {

    const [shippingCountries, setShippingCountries] = useState([]);
    const [shippingCountrie, setShippingCountrie] = useState("");
    const [shippingRegions, setShippingRegions] = useState([]);
    const [shippingRegion, setShippingRegion] = useState("");
    const [shippingOptions, setShippingOptions] = useState([]);
    const [shippingOption, setShippingOption] = useState("");

    useEffect(() => {
        fetchShippingCountries(checkoutToken);
    }, [])

    // Function that will get all the countries to which the items can be shipped
    const fetchShippingCountries = async (checkoutToken) => {
        const { countries } = await commerce.services.localeListShippingCountries(checkoutToken);
        console.log(countries)
        setShippingCountries(countries)
    }

    const methods = useForm();

    return (
        <div className="address-form">
            <h2>Shipping Address</h2>
            <FormProvider {...methods}>
                <form onSubmit="">
                    <div className="field-container">
                        <InputField required name="firstName" label="First name" />
                    </div>
                    <div className="field-container">
                        <InputField required name="lastName" label="Last name" />
                    </div>
                    <div className="field-container">
                        <InputField required name="address1" label="Address" />
                    </div>
                    <div className="field-container">
                        <InputField required name="email" label="E-mail" />
                    </div>
                    <div className="field-container">
                        <InputField required name="city" label="City" />
                    </div>
                    <div className="field-container">
                        <InputField required name="ZIP" label="ZIP / Postal code" />
                    </div>
                    <div className="field-container">
                        <InputLabel>Shipping Country</InputLabel>
                        <Select value="" fullWidth onChange="" variant='filled'>
                            <MenuItem key="" value=""></MenuItem>
                        </Select>
                    </div>
                    <div className="field-container">
                        <InputLabel>Shipping Region</InputLabel>
                        <Select value="" fullWidth onChange="" variant='filled'>
                            <MenuItem key="" value=""></MenuItem>
                        </Select>
                    </div>
                    <div className="field-container">
                        <InputLabel>Shipping Options</InputLabel>
                        <Select value="" fullWidth onChange="" variant='filled'>
                            <MenuItem key="" value=""></MenuItem>
                        </Select>
                    </div>
                </form>
            </FormProvider>
        </div>
    )
}

export default AddressForm