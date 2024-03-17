import PropTypes from 'prop-types';
import Button from '../../Button';

const WantToCook = ({WantToCook,handlePrepare}) => {

    const count = WantToCook.length;
    return (
        <div className='w-full'>
            <div className='text-center'>
                <h1 className='text-2xl font-medium w-[70%] mx-auto border-b-2 pb-4'>Want to cook: 0{count}</h1>
            </div>
            <table className='w-full'>
                <thead className='text-txt3a font-fira font-light'>
                    <tr className='bg-white'>
                        <th></th>
                        <th>Name</th>
                        <th>Time</th>
                        <th>Calories</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {WantToCook.map((recipe, index) => {
                        return (
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{recipe.name}</td>
                                <td>{recipe.preparing_time}</td>
                                <td>{recipe.calories}</td>
                                <td>
                                    <div onClick={()=> handlePrepare(recipe)}><Button type="sml" text='Prepare'></Button></div>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

WantToCook.propTypes = {
    WantToCook: PropTypes.array,
    handlePrepare: PropTypes.func
};

export default WantToCook;