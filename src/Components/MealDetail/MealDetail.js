import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Meal from '../Meal/Meal';

const MealDetail = () => {

    const { idMeal } = useParams();

    const [singleMeal, setSingleMeal] = useState([])
    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setSingleMeal(data.meals)
            })
    }, [idMeal])

    return (


        <div>
            <h2 className='text-3xl p-2'>Meal Details Page</h2>
            {
                singleMeal.map(meal => <Meal

                    key={meal.idMeal}
                    meal={meal}

                ></Meal>)
            }
        </div>
    );
};

export default MealDetail;