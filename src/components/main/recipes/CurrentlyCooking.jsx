import PropTypes from 'prop-types';

const CurrentlyCooking = ({ cooking }) => {
    const totalTime = cooking.reduce((accumulator, current) => {
        return accumulator + current.preparing_time;
    }, 0);

    const totalCalories = cooking.reduce((accumulator, current) => {
        return accumulator + current.calories;
    }, 0);

    return (
        <div className='w-full pb-9'>
            <div className='text-center'>
                <h1 className='text-2xl font-medium w-[70%] mx-auto border-b-2 pb-4'>Currently Cooking: {cooking.length}</h1>
            </div>
            <table className='w-full'>
                <thead className='text-txt3a font-fira font-light'>
                    <tr className='bg-white'>
                        <th></th>
                        <th>Name</th>
                        <th>Time</th>
                        <th>Calories</th>
                    </tr>
                </thead>
                <tbody>
                    {cooking.map((recipe, index) => {
                        return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{recipe.name}</td>
                                <td>{recipe.preparing_time}</td>
                                <td>{recipe.calories}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <div className='mt-3 text-right pr-5'>
                <h3>Total Time = {totalTime}</h3>
                <h3>Total Calories = {totalCalories}</h3>
            </div>
        </div>
    );
};

CurrentlyCooking.propTypes = {
    cooking: PropTypes.array
};

export default CurrentlyCooking;
