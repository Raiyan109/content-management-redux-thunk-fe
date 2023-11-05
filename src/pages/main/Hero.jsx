import heroImg from '../../assets/pexels-snapeturemoments-5447202.jpg'
const Hero = () => {
    return (
        <div className="min-h-[70vh] flex flex-col md:flex-row md:justify-between items-center md:mx-32 mx-5 mt-10">
            <div className="md:w-2/4 text-center">
                <h1 className="text-5xl font-semibold leading-tight">Best of the week</h1>
                <p className="text-lightText mt-5 text-start">Get to your dream now destinations with us. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, impedit cumque assumenda quis sunt fuga ex ab alias reprehenderit odio ipsam dolorum voluptatibus minus maxime illo perferendis, est nemo deserunt.</p>
                <button className="bg-buttonBg py-2 px-5 rounded-full mt-3 outline hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">Read</button>
            </div>
            <div className="md:w-2/4 w-full">
                <img src={heroImg} alt="img" />
            </div>
        </div>
    );
};

export default Hero;