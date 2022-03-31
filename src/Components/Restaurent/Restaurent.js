import React, { useEffect, useState } from 'react';
import Meals from '../Meals/Meals';

const Restaurent = () => {
    const [searchText, setSearchText] = useState('')
    const [foods, setFoods] = useState([])

    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
        // console.log(url)
        fetch(url)
        .then(res => res.json())
        .then(data => setFoods(data.meals))

    }, [searchText])

    const handleSearch = (event) => {
        setSearchText(event.target.value)
    }
    return (
        <div>
            <h2 className="text-3xl font-bold">Welcome to my restautent</h2>
            <input onChange={handleSearch} className="border-2 w-3/4 mt-5 md:w-1/3 px-1 py-1" type="text" name="" id="" placeholder="What you want to eat?" />
            <p className='text-3xl font-bold py-5 text-orange-400'>Total Meals Found: {foods.length}</p>
            <div className='grid mx-5 gap-10 rounded grid-cols-1 md:grid-cols-3 md:mx-40'>
                {
                    foods.map(food=><Meals 
                        key={food.idMeal}
                        food={food}
                        ></Meals>)
                }
            </div>

        </div>
    );
};

export default Restaurent;