import PropTypes from 'prop-types';
import { VscCircleSmallFilled } from "react-icons/vsc";
import { CiClock2 } from "react-icons/ci";
import { AiOutlineFire } from "react-icons/ai";
import Button from '../../Button';



const Recipe = ({recipe, handleCook}) => {
    const {name, image, description, ingredients, preparing_time,calories} = recipe;

    const handleButton = () => {
        handleCook(recipe);
    }

    return (
        <div className="flex flex-col p-6 md:p-3 lg:p-6 border-2 rounded-2xl space-y-6">
            <img  className="rounded-2xl" src={image}/>
            <h1 className='text-xl font-medium'>{name}</h1>
            <p className="font-light text-txt4 font-fira">{description}</p>
            <div className=' border-t-2 border-b-2 py-5'>
                <h3 className='text-xl font-normal'>Ingredients: {ingredients.length}</h3>
                <ul className='font-fira pl-2 pt-4 text-txt4 font-light space-y-2'>
                    {ingredients.map((ingredient,idx) => 
                    <li key={idx} className='text-txt3a flex items-center'>
                        <VscCircleSmallFilled />  {ingredient}</li>)}
                </ul>
            </div>
            <div className='flex flex-row justify-start gap-8 items-center '>
                <h3 className='flex items-center gap-2 text-txt3b text-base font-light'>
                    <span className='text-2xl'><CiClock2/></span>
                     {preparing_time} minutes
                </h3>
                <h3 className='flex items-center gap-2 text-txt3b text-base font-light'>
                    <span className='text-2xl'><AiOutlineFire /></span>
                     {calories} calories
                </h3>
            </div>
            <div onClick={handleButton}>
                <Button type="mid" text="Want to Cook"></Button>
            </div>
        </div>
    );
};

Recipe.propTypes = {
    recipe: PropTypes.object.isRequired,
    handleCook: PropTypes.func
};


export default Recipe;