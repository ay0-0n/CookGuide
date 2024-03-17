import Button from "../Button";
const Hero = () => {
    return (
        <div className="container mx-auto mt-12 w-full rounded-3xl">
            <div className="bg-[url('https://i.ibb.co/DRP0d1Y/hero-img.jpg')] bg-cover bg-center h-full bg-no-repeat rounded-3xl">
                <div className="bg-gradient-to-b from-rgba-150B2BE6 to-rgba-150B2B00 rounded-3xl">
                    <div className="w-[70%] mx-auto flex flex-col gap-10 justify-center items-center py-12 md:py-32">
                        <h1 className="text-white text-center font-semibold text-5xl leading-[4.75rem]">
                            Discover an exceptional Cooking Guide tailored for you!
                        </h1>
                        <p className="text-white text-center font-lexend text-lg font-light leading-[1.875rem]">
                            Discover delicious recipes, master essential cooking techniques, and explore culinary creativity to become an exceptionally skilled chef.
                        </p>
                        <div className="flex gap-6">
                            <Button type="big" text="Get Started"></Button>
                            <Button type="big-t" text="Our Feedback"></Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;