import RecipeMain from "./recipes/RecipeMain";

const RecipeSection = () => {
    return (
        <>
            <div className="container mx-auto mt-12 w-[70%] text-center">
                <h1 className=" text-[2.5rem] font-medium">Our Recipes</h1>
                <p className=" font-normal mt-5 text-nav-txt">Get ready to embark on a culinary journey filled with flavors and aromas with our collection of delicious recipes crafted with care by our team of culinary experts.</p>   
            </div>
            <RecipeMain></RecipeMain>
        </>
    );
};

export default RecipeSection;