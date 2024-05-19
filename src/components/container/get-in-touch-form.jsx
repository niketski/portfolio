import { useState } from "react";
import Button from "../ui/button";
import Input from "../ui/input";
import Textarea from "../ui/textarea";
import { debounce, isValidEmail, isValidPhone } from "../../utils";

export default function GetInTouchForm() {
    const [formData, setFormData] = useState({
        name: {
            value: '',
            error: '',
            label: 'Name',
            required: true,
        },
        email: {
            value: '',
            error: '',
            label: 'Email',
            required: false
        },
        phoneNumber: {
            value: '',
            error: '',
            label: 'Phone number',
            required: true
        },
        message: {
            value: '',
            error: '',
            label: 'Message',
            required: true
        }
    });

    const validateInput = (inputField) => {
        let error = '';

        switch(inputField.type) {

            case 'email': {

                error = !isValidEmail(inputField.value) ? `${inputField.value} is not valid email.` : '';

                break;
            }

            case 'tel': {

                error = !isValidPhone(inputField.value) ? `${inputField.value} is not a valid phone number.` : '';

                break;
            }

            case 'textarea': {

                let minimumChar = 20;

                error = inputField.value.length < minimumChar ? `You must input more than ${minimumChar} characters.` : '';

                break;
            }


        }

        return error;
    };

    const handleChange = debounce(event => {
        const inputField = event.target;
        const value = event.target.value;
        const name = event.target.name;
        const placeholder = event.target.placeholder;

        setFormData(prevState => {
            let error = prevState[name].required ? value === '' ? `${placeholder} is required.` : validateInput(inputField) : validateInput(inputField);

            return {
                ...prevState,
                [name]: {
                    ...prevState[name],
                    value,
                    error,
                }
            }
        });
        
    }, 1000);

    const handleSubmit = event => {
        event.preventDefault();
        
        const currentFormData = {...formData};
        let hasError = false;

        for (let key in currentFormData) {

           if(currentFormData[key].value === '' && currentFormData[key].required) {

                currentFormData[key].error = `${currentFormData[key].label} is required.`;
                hasError = true;
           }

        }

        if(hasError) {
            setFormData(currentFormData);
        }

    };

    console.log(formData);
    return (
        <form onSubmit={handleSubmit}>

            <div className="relative mb-[15px] lg:mb-[30px]">
                <Input
                    label={formData.name.label}
                    type="text"
                    name="name"
                    id="name"
                    placeholder={formData.name.label}
                    value={formData.name.value}
                    error={formData.name.error}
                    onChange={handleChange}/>
            </div>

            <div className="lg:flex lg:mx-[-15px] mb-[15px] lg:mb-[30px]"> 

                <div className="relative lg:w-1/2 mb-[15px] lg:mb-0 lg:px-[15px]">
                    <Input
                        label={formData.email.label}
                        type="email"
                        name="email"
                        id="email"
                        placeholder={formData.email.label}
                        value={formData.email.value}
                        error={formData.email.error}
                        onChange={handleChange}/>
                </div>

                <div className="relative lg:w-1/2 lg:px-[15px]">

                    <Input
                        label={formData.phoneNumber.label}
                        type="tel"
                        name="phoneNumber"
                        id="phoneNumber"
                        placeholder={formData.phoneNumber.label}
                        value={formData.phoneNumber.value}
                        error={formData.phoneNumber.error}
                        onChange={handleChange}/>
                </div>
            </div>

            <div className="relative mb-[15px] lg:mb-[30px]">
                <Textarea
                    label={formData.message.label}
                    name="message" 
                    id="message"
                    placeholder={formData.message.label}
                    value={formData.message.value}
                    error={formData.message.error}
                    onChange={handleChange}/>
            </div>

            <div className=" text-right">
                <Button type='submit'>Submit</Button>
            </div>
            
        </form>
    );
}