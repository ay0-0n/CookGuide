import PropTypes from 'prop-types';
import CurrentlyCooking from "./CurrentlyCooking";
import WantToCook from "./WantToCook";

const Cooking = ({cookList,handleCooklist,cooking}) => {
    const handlePrepare = (recipe) => {
        handleCooklist(recipe);
    };

    return (
        <div className="w-[80%] mx-auto m:w-[50%] lg:w-[39%] mt-9 md:mt-0 flex flex-col pt-6 md:pt-3 lg:pt-6 border-2 rounded-2xl space-y-6 h-full">
            <WantToCook WantToCook={cookList} handlePrepare={handlePrepare}></WantToCook>
            <CurrentlyCooking cooking = {cooking}></CurrentlyCooking>
        </div>
    );
};

Cooking.propTypes = {
    cookList: PropTypes.array,
    handleCooklist: PropTypes.func,
    cooking: PropTypes.array

};

export default Cooking;