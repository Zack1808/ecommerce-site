import React, { useState, useEffect } from 'react'
import { InputLabel, Select, MenuItem } from '@mui/material';
import { useForm, FormProvider } from 'react-hook-form';
import { commerce } from '../api/commerce';
import { Link } from 'react-router-dom'

// Importing the costume made components
import InputField from './InputField';

// Importing the style file
import '../css/AddressForm.css';

// Creating the AddressForm component
const AddressForm = ({ checkoutToken, submit }) => {

    const [shippingCountries, setShippingCountries] = useState([]);
    const [shippingCountry, setShippingCountry] = useState("");
    const [shippingRegions, setShippingRegions] = useState([]);
    const [shippingRegion, setShippingRegion] = useState("");
    const [shippingOptions, setShippingOptions] = useState([]);
    const [shippingOption, setShippingOption] = useState("");
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [city, setCity] = useState('');
    const [zip, setZip] = useState('');

    const countries = Object.entries(shippingCountries).map(([ code, name ]) => ({ id: code, label: name }));
    const regions = Object.entries(shippingRegions).map(([ code, name ]) => ({ id: code, label: name }));
    const options = shippingOptions.map(sO => ({ id: sO.id, label: `${sO.description} - ${sO.price.formatted_with_code}`}));

    useEffect(() => {
        fetchShippingCountries(checkoutToken);
    }, []);

    useEffect(() => {
        if(shippingCountry) fetchRegions(shippingCountry)
    }, [shippingCountry]);

    useEffect(() => {
        if(shippingRegion) fetchOptions(checkoutToken, shippingCountry, shippingRegion);
    }, [shippingRegion])

    // Function that will get all the countries to which the items can be shipped
    const fetchShippingCountries = async (checkoutToken) => {
        const { countries } = await commerce.services.localeListShippingCountries(checkoutToken.id);
        setShippingCountries(countries);
        setShippingCountry(Object.keys(countries)[0])
    }

    // Function that will fetch all regions of a country
    const fetchRegions = async (countryCode) => {
        const { subdivisions}  = await commerce.services.localeListSubdivisions(countryCode);
        setShippingRegions(subdivisions);
        setShippingRegion(Object.keys(subdivisions)[0])
    }

    // Function that will fetch the shipping options for the specific country and region
    const fetchOptions = async (checkoutToken, country, region) => {
        const options  = await commerce.checkout.getShippingOptions(checkoutToken.id, { country, region });
        console.log(checkoutToken)
        setShippingOptions(options);
        setShippingOption(options[0].id)
    }


    const methods = useForm();

    return (
        <div className="address-form">
            <h2>Shipping Address</h2>
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit((data) => submit({ firstName, lastName, address, email, zip, city,  shippingCountry, shippingRegion, shippingOption }))}>
                    <div className="input-container">
                        <div className="field-container">
                            <InputField required name="firstName" label="First name" value={firstName} onChange={setFirstName} />
                        </div>
                        <div className="field-container">
                            <InputField required name="lastName" label="Last name" value={lastName} onChange={setLastName} />
                        </div>
                        <div className="field-container">
                            <InputField required name="address1" label="Address" value={address} onChange={setAddress} />
                        </div>
                        <div className="field-container">
                            <InputField required name="email" label="E-mail" value={email} onChange={setEmail} />
                        </div>
                        <div className="field-container">
                            <InputField required name="city" label="City" value={city} onChange={setCity} />
                        </div>
                        <div className="field-container">
                            <InputField required name="ZIP" label="ZIP / Postal code" value={zip} onChange={setZip} />
                        </div>
                        <div className="field-container">
                            <InputLabel>Shipping Country</InputLabel>
                            <Select value={shippingCountry} fullWidth onChange={e => setShippingCountry(e.target.value)} variant='filled'>
                                {countries.map(country => {
                                    return <MenuItem key={country.id} value={country.id}>{country.label}</MenuItem>
                                })}
                                
                            </Select>
                        </div>
                        <div className="field-container">
                            <InputLabel>Shipping Region</InputLabel>
                            <Select value={shippingRegion} fullWidth onChange={e => setShippingRegion(e.target.value)} variant='filled'>
                                {regions.map(region =>{
                                    return <MenuItem key={region.id} value={region.id}>{region.label}</MenuItem>
                                })}
                            </Select>
                        </div>
                        <div className="field-container">
                            <InputLabel>Shipping Options</InputLabel>
                            <Select value={shippingOption} fullWidth onChange={e => setShippingOption(e.target.value)} variant='filled'>
                                {options.map(option =>{
                                    return <MenuItem key={option.id} value={option.id}>{option.label}</MenuItem>
                                })}
                            </Select>
                        </div>
                    </div>

                    <div className="form-buttons">
                        <Link to="/cart">Back to cart</Link >
                        <button type="submit">Next Step</button>
                    </div>
                </form>
            </FormProvider>
        </div>
    )
}

export default AddressForm