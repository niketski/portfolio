import Button from "../ui/button";
import Input from "../input";

export default function GetInTouchForm() {
    return (
        <form>

            <div className="relative mb-[15px] lg:mb-[30px]">
                <Input
                    label="Name"
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"/>
            </div>

            <div className="lg:flex lg:mx-[-15px] mb-[15px] lg:mb-[30px]"> 

                <div className="relative lg:w-1/2 mb-[15px] lg:mb-0 lg:px-[15px]">
                    <Input
                        label="Email"
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"/>
                </div>

                <div className="relative lg:w-1/2 lg:px-[15px]">

                    <Input
                        label="Phone Number"
                        type="tel"
                        name="phone-number"
                        id="phone-number"
                        placeholder="Phone Number"/>
                </div>
            </div>

            <div className="relative mb-[15px] lg:mb-[30px]">
                <label htmlFor="message" className="hidden">Message</label>
                <textarea 
                    name="message" 
                    id="message"
                    placeholder="Message"
                    className="block w-full h-[221px] text-[15px] lg:text-[18px] text-[#fff] font-normal bg-[#03132A] px-[25px] border-none rounded-[10px] resize-none pt-[28px] outline-none focus:outline-2 focus:outline-primary"></textarea>
            </div>

            <div className=" text-right">
                <Button type='submit'>Submit</Button>
            </div>
            
        </form>
    );
}