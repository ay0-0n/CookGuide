import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import Recipe from './Recipe';

const Recipes = ({handleCook}) => {
    const [recipes, updateRecipes] = useState([]);
    
    useEffect(() => {
        fetch('recipes.json')
        .then(response => response.json())
        .then(data => updateRecipes(data));
    },[]);

    


    return (
        <div className='w-[80%] mx-auto md:w-[70%] lg:w-[59%] grid md:grid-cols-1 lg:grid-cols-2 gap-6'>
            {recipes.map(recipe => <Recipe key={recipe.id} recipe={recipe} handleCook={handleCook} />)}
        </div>
    );
};

Recipes.propTypes = {
    handleCook: PropTypes.func.isRequired
};

export default Recipes;