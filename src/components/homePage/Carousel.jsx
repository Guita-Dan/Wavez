'use client'
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function StoryItem() {
    return (
        <>
            <div className="lg:mt-0 flex min-h-[420px]">
                <div className="flex flex-col w-1/2">
                    <h3 className=" text-2xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">Success Story</h3>
                    <p className="max-w-2xl py-4 text-xl leading-[4rem] text-gray-700 lg:text-4xl xl:text-4xl dark:text-gray-300">Nowadays, it isn&apos;t uncommon to see lenders rapidly adopting a digital lending strategy to streamline the lending process</p>
                    {/* <AmazonLogo /> */}
                    <a
                        href="#"
                        target="_blank"
                        rel="noopener"
                        className="px-6 py-4 text-regular font-normal text-[#2E4FD7]">
                        Read Complete Case Study
                        <Image className="inline ml-2" src="/arrow-right.svg" alt="" width={0}
                            height={0}
                            sizes="100vw" />
                    </a>
                </div>

                <Image
                    src="/successStory.png"
                    width="380"
                    height="420"
                    alt="Success Illustration"
                    className="w-full"
                    loading="eager"
                    placeholder="blur"
                />


            </div>
        </>
    )
}





export default function Carousele() {
    const items = [0, 1, 2];
    return (
        <div className='bg-[#E7EBFC] py-[120px] px-[45px] w-full'>
            <ul className=''>
                <Carousel autoPlay showThumbs={false}>

                    {items.map((item) => (
                        <div key={item} className="">
                            <StoryItem />

                        </div>
                    ))}


                </Carousel>
            </ul>
        </div>
    )
};
