const TeamCard = ({ imageSrc, name, profession }) => {
    return (
        <>
            <div className="w-full px-4 md:w-1/2 xl:w-1/4">
                <div className="mx-auto mb-10 w-full max-w-[370px]">
                    <div className="relative overflow-hidden rounded-lg">
                        <img src={imageSrc} alt="" className="w-full" />
                        <div className="absolute left-0 w-full text-center bottom-5">
                            <div className="relative px-3 py-5 mx-5 overflow-hidden bg-white rounded-lg">
                                <h3 className="text-base font-semibold text-black">{name}</h3>
                                <p className="text-sm text-black">{profession}</p>
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
            </div>
        </>
    )
}
export default TeamCard;
