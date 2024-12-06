'use client'
import { FaArrowRight } from "react-icons/fa6";
import { IconContext } from "react-icons";
import Link from "next/link";
const BookAMeeting = (props) => {
    return (
        <Link
            href="/contact"
            rel="noopener"
            className="px-5 py-3 text-regular font-normal text-center text-white bg-indigo-600 rounded-md w-auto">
            <div className="flex justify-between items-center">
                {props.title}
                <IconContext.Provider value={{ size: "30px" }}>
                    <div>
                        <FaArrowRight size={16} style={{ marginLeft: '8px' }} />
                    </div>
                </IconContext.Provider>
            </div>

        </Link>
    );
}

export default BookAMeeting;