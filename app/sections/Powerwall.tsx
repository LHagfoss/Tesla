import powerwall from "@public/powerwall.avif"

export default function Powerwall() {
    return (
        <div className="w-vw-full h-vh-full">
            <div className="absolute w-[100%] mt-[7vw] flex justify-center items-center flex-col">
                <h1 className="text-[#000] text-[50px] font-bold">Powerwall</h1>
            </div>
            <div className="absolute h-[200px] mt-[75vh] left-[50%] translate-x-[-50%] flex justify-center items-center gap-[50px]">
                    <button type="button" className="bg-[#fff] w-[400px] h-[70px] font-bold rounded-md px-10 py-5 hover:translate-y-[-10px] duration-300 ease-in-out">Order Now</button>
                    <button type="button" className="bg-[--button] w-[400px] h-[70px] font-bold rounded-md px-10 py-5 text-[#fff] hover:translate-y-[-10px] duration-300 ease-in-out">Learn More</button>
                </div>
            <div className=""><img src={powerwall.src} alt="" className="object-cover w-[100vw] h-[100vh]" /></div>
        </div>
    );
  }
  