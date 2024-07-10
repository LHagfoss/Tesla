import panel from "@public/panel.avif"

export default function Panel() {
    return (
        <div className="w-vw-full h-vh-full">
            <div className="absolute w-[100%] mt-[7vw] flex justify-center items-center flex-col">
                <h1 className="text-[#fff] text-[50px] font-bold">Solar Panel</h1>
                <h3 className="ball text-[#fff] text-[30px] font-semibold cursor-pointer">Schedule a Virtual Consultation</h3>
            </div>
                <div className="absolute h-[200px] mt-[75vh] left-[50%] translate-x-[-50%] flex justify-center items-center gap-[50px]">
                    <button type="button" className="bg-[#fff] w-[400px] h-[70px] font-bold rounded-md px-10 py-5 hover:translate-y-[-10px] duration-300 ease-in-out">Order Now</button>
                    <button type="button" className="bg-[--button] w-[400px] h-[70px] font-bold rounded-md px-10 py-5 text-[#fff] hover:translate-y-[-10px] duration-300 ease-in-out">Learn More</button>
                </div>
            <div className=""><img src={panel.src} alt="" className="object-cover w-[100vw] h-[100vh]" /></div>
        </div>
    );
  }
  