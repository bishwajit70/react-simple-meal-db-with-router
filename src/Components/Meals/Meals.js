import { Link, useNavigate} from "react-router-dom";

const Meals = (props) => {
    
    const { idMeal, strMeal, strMealThumb, strCategory } = props.food
    
    const navigate = useNavigate();

     const showMealDetail = () => {
         navigate('/meal/' + idMeal)
     }


    return (

        <div className='border-2 mb-5 rounded'>
            <img className='w-full mx-auto' src={strMealThumb} alt="" />

            <div className='flex items-center justify-between p-2'>
                <h2 className='text-xl font-bold text-red-400 py-2'>Meal: {strMeal}</h2>
                <h3 className='py-2 text-xl font-semibold text-orange-400'> Cat: {strCategory}</h3>
            </div>

            <div className='flex justify-between items-center p-2'>
                <button onClick={showMealDetail} className='p-3 rounded bg-orange-400 text-xl font-semibold text-white'>See Details</button>
                <Link to={'/meal/'+idMeal}>Show Details</Link>
            </div>
        </div>

    );
};

export default Meals;