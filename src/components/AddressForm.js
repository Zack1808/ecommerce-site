import React from 'react'
import { useForm, FormProvider } from 'react-hook-form';

// Importing the costume made components
import InputField from './InputField';

// Importing the style file
import '../css/AddressForm.css';

// Creating the AddressForm component
const AddressForm = () => {

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
                </form>
            </FormProvider>
        </div>
    )
}

export default AddressForm