const SectionBenefit = (props) => {
  return (
    <div className="items-center justify-center transition duration-1000 scroll-smooth" id="features">

      {props.title && (
        <h2 className=" text-xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight dark:text-white">
          {props.title}
        </h2>
      )}

      {props.text && (
        <p className=" py-3 leading-normal text-gray-400 text-base dark:text-gray-300 ">
          {props.text}
        </p>
      )}
    </div>
  );
}

export default SectionBenefit;