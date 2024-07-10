import teslaS from "@public/teslaS.avif"

export default function SectionOne() {
    return (
        <div className="w-vw-full h-vh-full">
            <div className="absolute w-[100%] mt-[7vw] flex justify-center items-center flex-col">
                <h1 className="text-[#fff] text-[50px] font-bold">Model S</h1>
                <h3 className="text-[#fff] text-[30px] font-semibold">From $66,500 <span className="text-[#fff] text-[20px]">( 5 )</span></h3>
                <h3 className="text-[#fff] text-[30px] font-semibold">After Est. Savings</h3>
            </div>
            <div className="absolute h-[200px] mt-[75vh] left-[50%] translate-x-[-50%] flex justify-center items-center gap-[50px]">
                    <button type="button" className="bg-[#fff] w-[400px] font-bold h-[70px] rounded-md px-10 py-5 hover:translate-y-[-10px] duration-300 ease-in-out">Order Now</button>
                    <button type="button" className="bg-[--button] w-[400px] font-bold h-[70px] rounded-md px-10 py-5 text-[#fff] hover:translate-y-[-10px] duration-300 ease-in-out">Demo Drive</button>
                </div>
            <div className=""><img src={teslaS.src} alt="" className="object-cover w-[100vw] h-[100vh]" /></div>
        </div>
    );
  }
  