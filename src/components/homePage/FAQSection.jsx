import React from 'react'
import AccordionItem from './AccordionItem'

const FAQSection = () => {
    return (
        <section className="relative z-20 overflow-hidden pb-12 pt-20  lg:pb-[90px] lg:pt-[120px]">
            <div className="container mx-auto">
                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4">
                        <div className="mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20">
                            <span className="mb-2 block text-lg font-semibold text-primary">
                                FAQ
                            </span>
                            <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-[40px]/[48px]">
                                Any Questions? Look Here
                            </h2>
                            <p className="text-base text-body-color dark:text-dark-6">
                                There are many variations of passages of Lorem Ipsum available
                                but the majority have suffered alteration in some form.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4 lg:w-1/2">
                        <AccordionItem
                            header="Can I customize this template for my own needs?"
                            text="Yes, you can customize this template to fit your specific requirements."
                        />
                        <AccordionItem
                            header="Are there any restrictions on how I can use this template?"
                            text="No, there are no restrictions. You can use it for both personal and commercial projects."
                        />

                    </div>
                    <div className="w-full px-4 lg:w-1/2">
                        <AccordionItem
                            header="How often is this template updated?"
                            text="We update our templates periodically to ensure compatibility with the latest web standards and technologies."
                        />
                        <AccordionItem
                            header="Can I share this template with others?"
                            text="Yes, you are free to share with others. We encourage you to spread the word!"
                        />

                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 right-0 z-[-1]">
                <svg
                    width="1480"
                    height="886"
                    viewBox="0 0 1480 886"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        opacity="0.5"
                        d="M193.307 -273.321L1480.87 1014.24L1121.85 1373.26C1121.85 1373.26 731.745 983.231 478.513 729.927C225.976 477.317 -165.714 85.6993 -165.714 85.6993L193.307 -273.321Z"
                        fill="url(#paint0_linear)"
                    />
                    <defs>
                        <linearGradient
                            id="paint0_linear"
                            x1="1308.65"
                            y1="1142.58"
                            x2="602.827"
                            y2="-418.681"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stop-color="#3056D3" stop-opacity="0.36" />
                            <stop offset="1" stop-color="#E7EBFC" stop-opacity="0" />
                            <stop offset="1" stop-color="#E7EBFC" stop-opacity="0.096144" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
        </section>
    )
}

export default FAQSection;