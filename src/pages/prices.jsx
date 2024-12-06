import Container from "@/components/Container";
import Link from "next/link";

const PricingCard = ({
    children,
    description,
    price,
    type,
    subscription,
    buttonText,
    active,
}) => {
    return (
        <>
            <div className="w-full px-4 md:w-1/2 lg:w-1/3 ">
                <div className="relative dark:bg-[#0B4130] z-10 px-8 py-10 mb-10 overflow-hidden border rounded-xl border-[#2E4FD7] border-opacity-20 shadow-pricing sm:p-12 lg:py-10 lg:px-6 xl:p-12">
                    <span className="block mb-4 text-lg font-semibold text-[#2E4FD7]">
                        {type}
                    </span>
                    <h2 className="mb-5 text-[42px] font-bold text-dark dark:text-white">
                        {price}
                        <span className="text-base font-medium text-body-color">
                            / {subscription}
                        </span>
                    </h2>
                    <p className="mb-8 border-b border-[#F2F2F2] pb-8 text-base text-body-color">
                        {description}
                    </p>
                    <ul className="mb-7">

                        {children}

                    </ul>
                    <Link
                        href="/#"
                        className={` ${active
                            ? ` w-full block text-base font-semibold text-white bg-[#2E4FD7] border border-[#2E4FD7] rounded-md text-center p-4 hover:bg-opacity-90 transition`
                            : `block w-full rounded-md border  border-[#D4DEFF] bg-transparent p-4 text-center text-base font-semibold text-[#2E4FD7] dark:text-white transition hover:border-[#2E4FD7] hover:bg-[#2E4FD7] hover:text-white`
                            } `}
                    >
                        {buttonText}
                    </Link>


                    <div className="top-7 z-[100] right-5 opacity-40 absolute w-24 h-24 bg-white rounded-full bg-gradient-to-b from-white to-indigo-600"></div>


                </div >
            </div >
        </>
    );
};

const List = ({ children }) => {
    return (
        <>
            <li className="mb-1 text-base leading-loose text-body-color">{children}</li  >
        </>
    );
};

const Pricing = () => {
    return (
        <>
            <Container className="my-12">
                <section className="relative z-20 overflow-hidden pb-12">
                    <div className="container">
                        <div className="w-full px-4">
                            <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
                                <span className="block mb-2 text-lg font-semibold text-[#2E4FD7]">
                                    Pricing Table
                                </span>
                                <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px]">
                                    Our Pricing Plan
                                </h2>
                                <p className="text-base text-body-color">
                                    There are many variations of passages of Lorem Ipsum available but
                                    the majority have suffered alteration in some form.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-wrap justify-center">
                            <div className="flex flex-wrap">
                                <PricingCard
                                    type="Personal"
                                    price="$59"
                                    subscription="year"
                                    description="Perfect for using in a personal website or a client project."
                                    buttonText="Choose Personal"
                                >
                                    <List>1 User</List>
                                    <List>All UI components</List>
                                    <List>Lifetime access</List>
                                    <List> updates</List>
                                    <List>Use on 1 (one) project</List>
                                    <List>3 Months support</List>
                                </PricingCard>
                                <PricingCard
                                    type="Business"
                                    price="$199"
                                    subscription="year"
                                    description="Perfect for using in a personal website or a client project."
                                    buttonText="Choose Business"
                                    active
                                >
                                    <List>5 User</List>
                                    <List>All UI components</List>
                                    <List>Lifetime access</List>
                                    <List> updates</List>
                                    <List>Use on31 (Three) project</List>
                                    <List>4 Months support</List>
                                </PricingCard>
                                <PricingCard
                                    type="Professional"
                                    price="$256"
                                    subscription="year"
                                    description="Perfect for using in a personal website or a client project."
                                    buttonText="Choose Professional"
                                >
                                    <List>Unlimited User</List>
                                    <List>All UI components</List>
                                    <List>Lifetime access</List>
                                    <List> updates</List>
                                    <List>Unlimited project</List>
                                    <List>12 Months support</List>
                                </PricingCard>
                            </div>
                        </div>
                    </div>
                </section>
            </Container>

        </>
    );
};

export default Pricing;