import teslaX from "@public/teslaX.avif"

export default function SectionThree() {
    return (
        <div className="w-vw-full h-vh-full">
            <div className="absolute w-[100%] mt-[7vw] flex justify-center items-center flex-col">
                <h1 className="text-[#000] text-[50px] font-bold">Model X</h1>
                <h3 className="text-[#000] text-[30px] font-semibold">From $63,990 <span className="text-[#000] text-[20px]">( 4 )</span></h3>
                <h3 className="text-[#000] text-[30px] font-semibold">After Est. Savings</h3>
            </div>
            <div className="absolute h-[200px] mt-[75vh] left-[50%] translate-x-[-50%] flex justify-center items-center gap-[50px]">
                    <button type="button" className="bg-[#fff] w-[400px] font-bold h-[70px] rounded-md px-10 py-5 hover:translate-y-[-10px] duration-300 ease-in-out">Order Now</button>
                    <button type="button" className="bg-[--button] w-[400px] font-bold h-[70px] rounded-md px-10 py-5 text-[#fff] hover:translate-y-[-10px] duration-300 ease-in-out">Demo Drive</button>
                </div>
            <div className=""><img src={teslaX.src} alt="" className="object-cover w-[100vw] h-[100vh]" /></div>
        </div>
    );
  }
  