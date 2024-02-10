import socialNetworking from "../../../src/assets/socialNetworking.svg";

const Contact = () => {
    return (
        <div>
            <div className="max-w-screen-xl md:my-12 p-4 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 md:py-8 mx-auto bg-bkg text-txt rounded-lg shadow-lg">
                <div className="flex flex-col justify-between">
                    <div>
                        <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                            Lets talk about everything!
                        </h2>
                    </div>
                    <div className="mt-8 text-center">
                        <img src={socialNetworking} alt="" />
                    </div>
                </div>
                <form className="">
                    <div>
                        <span className="uppercase text-sm text-gray-600 font-bold">
                            Full Name
                        </span>
                        <input
                            className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                            type="text"
                            placeholder=""
                        />
                    </div>
                    <div className="mt-8">
                        <span className="uppercase text-sm text-gray-600 font-bold">
                            Email
                        </span>
                        <input
                            className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                            type="text"
                        />
                    </div>
                    <div className="mt-8">
                        <span className="uppercase text-sm text-gray-600 font-bold">
                            Message
                        </span>
                        <textarea className="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
                    </div>
                    <div className="mt-8">
                        <button
                            type="submit"
                            className="uppercase text-sm font-bold tracking-wide bg-accent text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;
