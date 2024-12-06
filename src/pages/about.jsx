import Container from "@/components/Container";
import TeamCard from "@/components/aboutPage/TeamCard";
import Link from "next/link";
const AboutPage = () => {
    return (
        <>
            <Container className="my-12 space-y-20">
                <section className="overflow-hidden">
                    <div className="container">
                        <div className="flex flex-wrap items-center justify-between -mx-4">
                            <div className="w-full px-4 lg:w-6/12">
                                <div className="flex items-center -mx-3 sm:-mx-4">
                                    <div className="w-full px-3 sm:px-4 xl:w-1/2">
                                        <div className="py-3 sm:py-4">
                                            <img
                                                src="https://i.ibb.co/gFb3ns6/image-1.jpg"
                                                alt=""
                                                className="w-full rounded-2xl"
                                            />
                                        </div>
                                        <div className="py-3 sm:py-4">
                                            <img
                                                src="https://i.ibb.co/rfHFq15/image-2.jpg"
                                                alt=""
                                                className="w-full rounded-2xl"
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full px-3 sm:px-4 xl:w-1/2">
                                        <div className="relative z-10 my-4">
                                            <img
                                                src="https://i.ibb.co/9y7nYCD/image-3.jpg"
                                                alt=""
                                                className="w-full rounded-2xl"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
                                <div className="mt-10 lg:mt-0">
                                    <span className="block mb-2 text-lg font-semibold text-[#2E4FD7]">
                                        Why Choose Us
                                    </span>
                                    <h2 className="mb-8 text-3xl font-bold text-dark dark:text-white sm:text-4xl">
                                        Make your customers happy by giving services.
                                    </h2>
                                    <p className="mb-8 text-base text-body-color">
                                        It is a long established fact that a reader will be distracted
                                        by the readable content of a page when looking at its layout.
                                        The point of using Lorem Ipsum is that it has a more-or-less.
                                    </p>
                                    <Link
                                        href="/#"
                                        className="inline-flex items-center justify-center px-10 py-4 text-base font-normal text-center text-white rounded-lg bg-[#2E4FD7] hover:bg-opacity-90 lg:px-8 xl:px-10"
                                    >
                                        Get Started
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full px-4">
                            <div className="mx-auto mb-[60px] max-w-[510px] text-center">
                                <span className="block mb-2 text-lg font-semibold text-[#2E4FD7]">
                                    Our Team
                                </span>
                                <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px]">
                                    Our Awesome Team
                                </h2>
                                <p className="text-base text-body-color">
                                    There are many variations of passages of Lorem Ipsum available
                                    but the majority have suffered alteration in some form.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-center -mx-4">
                        <TeamCard
                            name="Coriss Ambady"
                            profession="Web Developer"
                            imageSrc="https://i.ibb.co/T1J9LD4/image-03-2.jpg"
                        />
                        <TeamCard
                            name="Coriss Ambady"
                            profession="Web Developer"
                            imageSrc="https://i.ibb.co/8P6cvVy/image-01-1.jpg"
                        />
                        <TeamCard
                            name="Coriss Ambady"
                            profession="Web Developer"
                            imageSrc="https://i.ibb.co/30tGtjP/image-04.jpg"
                        />
                        <TeamCard
                            name="Coriss Ambady"
                            profession="Web Developer"
                            imageSrc="https://i.ibb.co/yVVT0Dp/image-02-2.jpg"
                        />
                    </div>
                </section>
            </Container>

        </>
    );
};

export default AboutPage;