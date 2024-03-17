import { useState } from 'react';
import Recipes from "./Recipes";
import Cooking from "./Cooking";
import Toast from "../../Toast";

const RecipeMain = () => {
    const [cookList, updateCookList] = useState([]);
    const [showToast, setShowToast] = useState(false);
    const [cooking, updateCooking] = useState([]);

    const handleCook = (recipe) => {
        if (cookList.includes(recipe)) {
            setShowToast(true);
        } else {
            updateCookList([...cookList, recipe]);
        }
    };
    
    const handleCooklist = (recipe) => {
        const newCookList = cookList.filter((item) => item !== recipe);
        updateCooking([...cooking, recipe]);
        updateCookList(newCookList);
    }

    const handleCloseToast = () => {
        setShowToast(false);
    };
    

    return (
        <div className="container mx-auto mt-12 flex flex-col md:flex-row justify-between">
            <Recipes handleCook={handleCook} />
            <Cooking cookList ={cookList} handleCooklist={handleCooklist} cooking={cooking}/>
            <Toast show={showToast} onClose={handleCloseToast} />
        </div>
    );
};

export default RecipeMain;
