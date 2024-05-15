import Button from "../ui/button";

export default function GetInTouchForm() {
    return (
        <form>

            <div className="relative mb-[15px] lg:mb-[30px]">
                <label htmlFor="name" className="hidden">Name</label>
                <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    placeholder="Name" 
                    className="block w-full h-[55px] lg:h-[75px] text-[15px] lg:text-[18px] text-[#fff] font-normal bg-[#03132A] px-[25px] border-none rounded-[10px] outline-none focus:outline-2 focus:outline-primary"/>
            </div>

            <div className="lg:flex lg:mx-[-15px] mb-[15px] lg:mb-[30px]"> 

                <div className="relative lg:w-1/2 mb-[15px] lg:mb-0 lg:px-[15px]">
                    <label htmlFor="email" className="hidden">Email</label>
                    <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    placeholder="Email" 
                    className="block w-full h-[55px] lg:h-[75px] text-[15px] lg:text-[18px] text-[#fff] font-normal bg-[#03132A] px-[25px] border-none rounded-[10px] outline-none focus:outline-2 focus:outline-primary"/>
                </div>

                <div className="relative lg:w-1/2 lg:px-[15px]">
                    <label htmlFor="phone-number" className="hidden">Phone number</label>
                        <input 
                        type="tel" 
                        name="phone-number" 
                        id="phone-number" 
                        placeholder="Phone number" 
                        className="block w-full h-[55px] lg:h-[75px] text-[15px] lg:text-[18px] text-[#fff] font-normal bg-[#03132A] px-[25px] border-none rounded-[10px] outline-none focus:outline-2 focus:outline-primary"/>
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