import BookAMeeting from "../BookAMeetingBtn";

const CTAction = () => {
    return (
        <section className="py-10 bg-[#E7EBFC] dark:bg-[#0B4130] sm:py-16 lg:py-24">
            <div className="max-w-6xl  mx-auto text-center space-y-16 px-8 lg:px-0">
                <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl dark:text-white">The Is Closing Headline To Make A Impact For Call To Action</h2>
                <p className="mt-4 text-xl font-regular">Nowadays, it isn&apos;t uncommon to see lenders rapidly adopting a digital lending strategy to streamline the lending process nowadays, it isn&apos;t uncommon to see lenders rapidly</p>

                <div className="flex justify-center">
                    <BookAMeeting title="Book A Meeting" />
                </div>

                <hr className="h-[2px] my-12 bg-gray-400 border-0 dark:bg-gray-700"></hr>
                <div className="flex flex-wrap justify-center md:justify-around mt-auto py-8 lg:py-0 gap-8">
                    <img src="/microsoft.svg" alt="" />
                    <img src="/verizon.svg" alt="" />
                    <img src="/amazon.svg" alt="" />
                    <img src="/netflix.svg" alt="" />
                    <img src="/sony.svg" alt="" />
                </div>
            </div>
        </section>
    );
}

export default CTAction;