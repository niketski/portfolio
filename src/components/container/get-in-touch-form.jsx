import { useState } from "react";
import Button from "../ui/button";
import Input from "../ui/input";
import Textarea from "../ui/textarea";

export default function GetInTouchForm() {
    const [formData, setFormData] = useState({
        name: {
            value: ''
        },
        email: {
            value: ''
        },
        phoneNumber: {
            value: ''
        },
        message: {
            value: ''
        }
    });
    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [phoneNumber, setPhoneNumber] = useState('');
    // const [message, setMessage] = useState('');

    const handleChange = event => {
        const value = event.target.value;
        const name = event.target.name;

        setFormData(prevState => {
            return {
                ...prevState,
                [name]: {
                    value
                }
            }
        });
    };

    console.log(formData);

    return (
        <form>

            <div className="relative mb-[15px] lg:mb-[30px]">
                <Input
                    label="Name"
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                    value={formData.name.value}
                    onChange={handleChange}/>
            </div>

            <div className="lg:flex lg:mx-[-15px] mb-[15px] lg:mb-[30px]"> 

                <div className="relative lg:w-1/2 mb-[15px] lg:mb-0 lg:px-[15px]">
                    <Input
                        label="Email"
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                        value={formData.email.value}
                        onChange={handleChange}/>
                </div>

                <div className="relative lg:w-1/2 lg:px-[15px]">

                    <Input
                        label="Phone Number"
                        type="tel"
                        name="phoneNumber"
                        id="phoneNumber"
                        placeholder="Phone Number"
                        value={formData.phoneNumber.value}
                        onChange={handleChange}/>
                </div>
            </div>

            <div className="relative mb-[15px] lg:mb-[30px]">
                <Textarea
                    label="Message"
                    name="message" 
                    id="message"
                    placeholder="Message"
                    value={formData.message.value}
                    onChange={handleChange}/>
            </div>

            <div className=" text-right">
                <Button type='submit'>Submit</Button>
            </div>
            
        </form>
    );
}