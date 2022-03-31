import React from 'react';

const Meal = (props) => {
    const { strInstructions, strMealThumb, strMeal, strArea, strCategory, strYoutube } = props.meal
    return (
        <div className='row-reverse p-5 md:flex md:p-10 items-center justify-center'>
            <div className='w-full rounded-lg border-2 p-2 md:p-5'>
                <img className='rounded-lg' src={strMealThumb} alt="" />
            </div>
            <div className=' w-full px-5 text-left'>
                <p className='font-semibold py-3 text-3xl'>Name: <span className='font-normal'>{strMeal}</span> </p>
                <p className='font-semibold py-3 text-2xl'>Category: <span className='font-normal'>{strCategory}</span></p>
                <p className='font-semibold py-3 text-2xl'>Area:  <span className='font-normal'>{strArea}</span></p>
                <p></p>
                <p className='text-2xl font-bold pb-2'>Instruction: </p>
                <p>{strInstructions}</p>
            </div>
        </div>
    );
};

export default Meal;