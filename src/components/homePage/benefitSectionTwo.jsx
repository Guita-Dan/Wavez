import SectionBenefit from "./sectionBenefit";
import { FaMap } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";
import { FaWaveSquare } from "react-icons/fa";
import { FaList } from "react-icons/fa";

const BenefitItem = ({ icon, title, text }) => {
    return (
        <div className="flex mb-12 space-x-8">
            <div className="flex h-fit bg-[#E7EBFC] rounded-full  items-center p-2">
                {icon}
            </div>
            <SectionBenefit title={title} text={text} />
        </div>
    )
};

const BenefitSectionTwo = () => {



    return (
        <>
            <div className="flex flex-wrap lg:justify-between mb-28">

                <h3 className="text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">Benefits of working with us</h3>

                <div className="w-full px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 mt-12">
                    <BenefitItem
                        icon={<FaLocationArrow color="red" size={50} style={{ padding: '12px'}} />}
                        title="Time zones ain’t no thing"
                        text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat."
                    />
                    <BenefitItem
                        icon={<FaMap color="red" size={50} style={{ padding: '12px'}} />}
                        title="Impossible? We’re on it"
                        text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat."
                    />

                    <BenefitItem
                        icon={<FaWaveSquare color="red" size={50} style={{ padding: '12px'}} />}
                        title="Full spectrum of services"
                        text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat."
                    />
                    <BenefitItem
                        icon={<FaList color="red" size={50} style={{ padding: '12px'}} />}
                        title="Flexible work terms"
                        text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat."
                    />
                </div>
            </div>
        </>
    )
}

export default BenefitSectionTwo;