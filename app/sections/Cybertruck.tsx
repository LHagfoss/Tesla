import cybertruck from "@public/cybertruck.avif"
import logo from "@public/cybertruck.svg"

export default function Cybertruck() {
    return (
        <div className="w-vw-full h-vh-full">
            {/* <div className="absolute w-[100%] mt-[7vw] flex justify-center items-center flex-col">
                <h1 className="text-[#000] text-[50px] font-bold">Model 3</h1>
                <h3 className="text-[#000] text-[30px] font-semibold">$7,500 Federal Tax Credit Available <span className="text-[#000] text-[20px]">( 1 )</span></h3>
                <h3 className="balls text-[#000] text-[30px] font-semibold cursor-pointer">From $33,990 After Est. Savings <span className="text-[#000] text-[20px]">( 2 )</span></h3>
            </div> */}
            <div className="absolute h-[200px] mt-[75vh] left-[50%] translate-x-[-50%] flex justify-center items-center gap-[50px]">
                <button type="button" className="bg-[#fff] w-[400px] h-[70px] font-bold rounded-md px-10 py-5 hover:translate-y-[-10px] duration-300 ease-in-out">Order Now</button>
                <button type="button" className="bg-[--button] w-[400px] h-[70px] font-bold rounded-md px-10 py-5 text-[#fff] hover:translate-y-[-10px] duration-300 ease-in-out">Demo Drive</button>
            </div>
            <div className="w-[100vw] flex justify-center"><img src={logo.src} alt="" className="absolute w-[50vw] mt-[100px]" /></div>
            <div className=""><img src={cybertruck.src} alt="" className="object-cover w-[100vw] h-[100vh]" /></div>
        </div>
    );
  }
  