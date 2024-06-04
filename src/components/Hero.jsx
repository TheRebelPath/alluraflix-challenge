const Hero = ({id, title, category, image, video, description}) => {
  return (
    <div className="flex justify-center items-center max-w-7xl bg-cover bg-no-repeat bg-center bg-hero-pattern p-6 max-sm:flex max-sm:hidden">
      <div className="leading-7 text-white max-w-[48%]">
        <h2
          className={`${
            category === 'walkthrough'
              ? 'bg-blue-300'
              : category === 'game review'
              ? 'bg-green-500'
              : category === 'game ost'
              ? 'bg-yellow-500'
              : ''
          } ' bg-blue-300' max-w-56 text-center font-bold text-3xl mb-5 rounded-md py-3 uppercase`}
        >
          {category}
        </h2>
        <h3 className="font-bold text-2xl mb-2 uppercase">{title}</h3>
        <p className="max-w-[80%] text-sm ">{description}</p>
      </div>
      <div className="w-[48%] h-[40%]  ">
        <a href={video} target="_blank">
          <img src={image} alt={title} className="object-contain" />
        </a>
      </div>
    </div>
  );
};

export default Hero;
