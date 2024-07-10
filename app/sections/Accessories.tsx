import accessories from "@public/accessories.avif"

export default function Accessories() {
    return (
        <div className="w-vw-full h-vh-full">
            <div className="absolute w-[100%] mt-[7vw] flex justify-center items-center flex-col">
                <h1 className="text-[#000] text-[50px] font-bold">Accessories</h1>
            </div>
            <div className="absolute h-[200px] mt-[75vh] left-[50%] translate-x-[-50%] flex justify-center items-center gap-[50px]">
                    <button type="button" className="bg-[#fff] w-[400px] h-[70px] font-bold rounded-md px-10 py-5 hover:translate-y-[-10px] duration-300 ease-in-out">Shop Now</button>
                </div>
            <div className=""><img src={accessories.src} alt="" className="object-cover w-[100vw] h-[100vh]" /></div>
        </div>
    );
  }
  