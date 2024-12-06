
import Container from "@/components/Container";
import Link from "next/link";
const ContactPage = () => {
    return (
        <>
            <section className="relative py-10 bg-[#E7EBFC] dark:bg-[#0B4130] lg:max-h-[550px]">
                <div className="container mx-auto">
                    <div className="flex flex-wrap lg:justify-between ">
                        <div className="w-full px-4 lg:w-1/2 xl:w-6/12 ">
                            <div className="max-w-[570px] lg:mb-0">
                                <h2 className="mb-6 text-[32px] font-bold capitalize text-dark dark:text-white sm:text-[40px] lg:text-[40px] xl:text-[64px]">
                                    Contact Us
                                </h2>
                                <p className="text-lg tracking-wider text-[#64626A] dark:text-white mb-9 text-body-color">
                                    If you have any questions about the subscription or are not sure which plan is right for you, contact our team and let&apos;s schedule a call.
                                </p>
                                <div className="grid md:grid-cols-2 gap-8 lg:pt-28">
                                    <Link
                                        href="/contact"
                                        rel="noopener"
                                        className="px-6 py-3 text-regular font-normal text-white bg-indigo-600 rounded-sm ">
                                        <p className="font-bold">
                                            Call Us
                                        </p>
                                        <p >
                                            (083) 000-9999
                                        </p>
                                    </Link>
                                    <Link
                                        href="/contact"
                                        rel="noopener"
                                        className="px-6 py-3 text-regular font-normal text-[#2E4FD7] bg-white rounded-sm border-[1px] border-indigo-600">
                                        <p className="font-bold">
                                            Email us
                                        </p>
                                        <p className="">
                                            contact@DesiredWeb.com
                                        </p>
                                    </Link>
                                </div>
                            </div>
                            <div className="flex flex-wrap space-y-4 space-x-8 p-8 lg:mt-20 justify-center lg:justify-start">
                                <img src="/microsoft.svg" alt="" />
                                <img src="/amazon.svg" alt="" />
                                <img src="/netflix.svg" alt="" />
                                <img src="/sony.svg" alt="" />
                            </div>
                        </div>

                        <div className="w-full px-4 lg:w-1/2 xl:w-5/12 lg:z-20">
                            <div className="relative p-8 rounded-lg shadow-lg sm:p-12 bg-white dark:bg-[#0B4130]">
                                <h2 className="text-2xl lg:text-3xl pb-3">
                                    Let&apos;s Talk 👋
                                </h2>
                                <p className="py-3 text-lg tracking-wider text-[#64626A] dark:text-white">If you have any question or issue&apos;s to use our product. Fill the form below. We&apos;ll help you.</p>
                                <form>
                                    <ContactInputBox
                                        type="text"
                                        name="name"
                                        placeholder="Your Name"
                                    />
                                    <ContactInputBox
                                        type="text"
                                        name="email"
                                        placeholder="Your Email"
                                    />
                                    <ContactInputBox
                                        type="text"
                                        name="phone"
                                        placeholder="Your Phone"
                                    />
                                    <ContactTextArea
                                        row="6"
                                        placeholder="Your Message"
                                        name="details"
                                        defaultValue=""
                                    />
                                    <div>
                                        <button
                                            type="submit"
                                            className="w-full p-3 text-white bg-[#2E4FD7] transition border rounded border-[#2E4FD7]"
                                        >
                                            Send Message
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <Container>

                <section className="flex my-4 lg:mt-64">
                    <h3 className="max-w-2xl text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">Our offices</h3>
                </section>
                <section className="flex my-12 lg:my-24 justify-center">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="relative rounded-lg">
                            <img src="/contact-placeholder.png" alt="" />
                            <div className="absolute left-0 w-full text-center bottom-2">
                                <div className="relative px-2 py-4 mx-5 bg-white rounded-lg">
                                    <h3 className="text-base font-semibold text-black">Vancouver Office</h3>
                                    <p className="text-sm text-black">1085 Homer St. Vancouver BC, Canada V6B 2X5</p>
                                    <div>
                                        <span className="absolute bottom-0 left-0">
                                            <svg
                                                width={61}
                                                height={30}
                                                viewBox="0 0 61 30"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <circle
                                                    cx={16}
                                                    cy={45}
                                                    r={45}
                                                    fill="#13C296"
                                                    fillOpacity="0.11"
                                                />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative overflow-hidden rounded-lg">
                            <img src="/contact-map.png" alt="" />
                            <div className="absolute left-0 w-full text-center bottom-2">
                                <div className="relative px-2 py-4 mx-5 bg-white rounded-lg">
                                    <h3 className="text-base font-semibold text-black">San Fransisco</h3>
                                    <p className="text-sm text-black">1085 Homer St. Vancouver BC, Canada V6B 2X5</p>
                                    <div>
                                        <span className="absolute bottom-0 left-0">
                                            <svg
                                                width={61}
                                                height={30}
                                                viewBox="0 0 61 30"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <circle
                                                    cx={16}
                                                    cy={45}
                                                    r={45}
                                                    fill="#13C296"
                                                    fillOpacity="0.11"
                                                />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
            </Container>


        </>
    );
};

const ContactTextArea = ({ row, placeholder, name, defaultValue }) => {
    return (
        <>
            <div className="mb-6">
                <textarea
                    rows={row}
                    placeholder={placeholder}
                    name={name}
                    className="border-[f0f0f0] w-full resize-none rounded border py-3 px-[14px] text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none"
                    defaultValue={defaultValue}
                />
            </div>
        </>
    );
};

const ContactInputBox = ({ type, placeholder, name }) => {
    return (
        <>
            <div className="mb-6">
                <input
                    type={type}
                    placeholder={placeholder}
                    name={name}
                    className="border-[f0f0f0] w-full rounded border py-3 px-[14px] text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none"
                />
            </div>
        </>
    );




};

export default ContactPage;