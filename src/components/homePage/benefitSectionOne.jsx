import SectionBenefit from "./sectionBenefit";
import BookAMeeting from "../BookAMeetingBtn";
import Container from "../Container";
import { FaStar } from "react-icons/fa";
import { FaTableCellsLarge } from "react-icons/fa6";
import { FaLayerGroup } from "react-icons/fa";



export default function BenefitSectionOne() {
    return (
        <section className="py-4 bg-[#E7EBFC] dark:bg-[#0B4130] sm:py-16 my-4 sm:my-8 ">
            <Container className="flex flex-wrap lg:justify-between ">
                <div className="w-full md:px-4 lg:w-1/2 xl:w-5/12 flex flex-col space-y-12">
                    <div className="flex flex-row">
                        <div className="w-min px-3">
                            <div className="mx-auto w-[54px] h-[54px] bg-[#E7EBFC] rounded-full flex justify-center items-center" >
                                <FaStar color="blue" size={24} />
                            </div>
                        </div>

                        <SectionBenefit
                            title=" First Benefit"
                            text="Gorgeous, high-quality design system for mobile, tablet & desktop devices a few"
                        />

                    </div>
                    <div className="flex flex-row">
                        <div className="w-min px-3">
                            <div className="mx-auto w-[54px] h-[54px] bg-[#E7EBFC] rounded-full flex justify-center items-center" >
                                <FaTableCellsLarge color="blue" size={24} />
                            </div>
                        </div>

                        <SectionBenefit
                            title="Third Benefit"
                            text="Gorgeous, high-quality design system for mobile, tablet & desktop devices a few"
                        />

                    </div>
                    <div className="flex flex-row">
                        <div className="w-min px-3">
                            <div className="mx-auto w-[54px] h-[54px] bg-[#E7EBFC] rounded-full flex justify-center items-center" >
                                <FaLayerGroup color="blue" size={24} />
                            </div>
                        </div>

                        <SectionBenefit
                            title=" Third Benefit"
                            text="Gorgeous, high-quality design system for mobile, tablet & desktop devices a few"
                        />

                    </div>


                </div>
                <div className=" flex flex-col  w-full px-4 lg:w-1/2 xl:w-6/12 mt-12 lg:mt-0 space-y-4">
                    <h3 className="max-w-2xl text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">Headline of Modern and Digital Lending Platform Seconds</h3>
                    <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">You can use this space to highlight your first benefit or a feature of your product. It can also contain an image or Illustration like in the example along with some bullet points.</p>
                    <div className="flex"><BookAMeeting title="Learn More" /></div>
                </div>
            </Container>


        </section>
    )
}

