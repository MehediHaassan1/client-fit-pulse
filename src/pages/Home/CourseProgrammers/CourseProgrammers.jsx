import { FaFacebook, FaInstagram, FaGoogle } from "react-icons/fa";

const CourseProgrammers = () => {
    return (
        <div
            className="min-h-screen bg-cover bg-no-repeat object-cover relative"
            style={{
                backgroundImage:
                    "url(https://i.ibb.co/LPD9tTd/programmers.jpg)",
            }}
        >
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-black/30"></div>
            <div className="max-w-screen-xl mx-auto p-2 md:p-10">
                <h1 className="text-3xl lg:text-8xl uppercase font-black opacity-20 tracking-widest">
                    Programmers...
                </h1>
                <div className="grid gap-2 md:grid-cols-2 md:gap-5 lg:grid-cols-4 lg:gap-10 mt-10">
                    <div className="relative overflow-hidden group">
                        <img
                            src="https://i.ibb.co/gPX6rjB/trainser-gill.jpg"
                            alt=""
                            className="h-96 object-cover w-full lg:group-hover:scale-110 duration-300"
                        />
                        <div className="absolute bottom-0 bg-black opacity-70 w-full h-10 flex items-center justify-evenly lg:h-0 lg:group-hover:h-10 origin-bottom duration-500">
                            <FaFacebook className="w-6 h-6 text-accent cursor-pointer lg:h-0 lg:group-hover:h-6 origin-bottom duration-500" />
                            <FaInstagram className="w-6 h-6 text-accent cursor-pointer lg:h-0 lg:group-hover:h-6 origin-bottom duration-500" />
                            <FaGoogle className="w-6 h-6 text-accent cursor-pointer lg:h-0 lg:group-hover:h-6 origin-bottom duration-500" />
                        </div>
                    </div>
                    <div className="relative overflow-hidden group">
                        <img
                            src="https://i.ibb.co/pv74qR3/trainer-spencer-davis.jpg"
                            alt=""
                            className="h-96 object-cover w-full lg:group-hover:scale-110 duration-300"
                        />
                        <div className="absolute bottom-0 bg-black opacity-70 w-full h-10 flex items-center justify-evenly lg:h-0 lg:group-hover:h-10 origin-bottom duration-500">
                            <FaFacebook className="w-6 h-6 text-accent cursor-pointer lg:h-0 lg:group-hover:h-6 origin-bottom duration-500" />
                            <FaInstagram className="w-6 h-6 text-accent cursor-pointer lg:h-0 lg:group-hover:h-6 origin-bottom duration-500" />
                            <FaGoogle className="w-6 h-6 text-accent cursor-pointer lg:h-0 lg:group-hover:h-6 origin-bottom duration-500" />
                        </div>
                    </div>
                    <div className="relative overflow-hidden group">
                        <img
                            src="https://i.ibb.co/47RN52S/trainer-white-bro.jpg"
                            alt=""
                            className="h-96 object-cover w-full lg:group-hover:scale-110 duration-300"
                        />
                        <div className="absolute bottom-0 bg-black opacity-70 w-full h-10 flex items-center justify-evenly lg:h-0 lg:group-hover:h-10 origin-bottom duration-500">
                            <FaFacebook className="w-6 h-6 text-accent cursor-pointer lg:h-0 lg:group-hover:h-6 origin-bottom duration-500" />
                            <FaInstagram className="w-6 h-6 text-accent cursor-pointer lg:h-0 lg:group-hover:h-6 origin-bottom duration-500" />
                            <FaGoogle className="w-6 h-6 text-accent cursor-pointer lg:h-0 lg:group-hover:h-6 origin-bottom duration-500" />
                        </div>
                    </div>
                    <div className="relative overflow-hidden group">
                        <img
                            src="https://i.ibb.co/3Ym8NM2/trainer-vadim-paripa.jpg"
                            alt=""
                            className="h-96 object-cover w-full lg:group-hover:scale-110 duration-300"
                        />
                        <div className="absolute bottom-0 bg-black opacity-70 w-full h-10 flex items-center justify-evenly lg:h-0 lg:group-hover:h-10 origin-bottom duration-500">
                            <FaFacebook className="w-6 h-6 text-accent cursor-pointer lg:h-0 lg:group-hover:h-6 origin-bottom duration-500" />
                            <FaInstagram className="w-6 h-6 text-accent cursor-pointer lg:h-0 lg:group-hover:h-6 origin-bottom duration-500" />
                            <FaGoogle className="w-6 h-6 text-accent cursor-pointer lg:h-0 lg:group-hover:h-6 origin-bottom duration-500" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseProgrammers;
