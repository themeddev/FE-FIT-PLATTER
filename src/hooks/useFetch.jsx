import { useEffect, useState } from 'react';

const useFetch = () => {
    const [foods, setFoods] = useState([])
    const img = 'https://images.unsplash.com/photo-1588551650401-234f93734337?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    useEffect(() => {
    //     fetch(foods)
    //         .then(res => res.json())
    //         .then(data => setFoods(data))
    // }, [foods])

            // Example food data
        const initialFoodData = [ 
            {
              category: "Breakfast",
              calories: 525,
              protein: 38,
              carbs: 59,
              fat: 15,
              ingredients: [
                "4-6 egg whites with 2 whole eggs",
                "1 serving Cream of Wheat cereal",
                "1 banana",
              ],
              image: img,
              price: 10
            },
            {
                category: "Lunch",
                calories: 525,
                protein: 38,
                carbs: 59,
                fat: 15,
                ingredients: [
                  "4-6 egg whites with 2 whole eggs",
                  "1 serving Cream of Wheat cereal",
                  "5 banana",
                ],
                image: img,
                price: 13
            },
              {
                category: "Dinner",
                calories: 234,
                protein: 22,
                carbs: 54,
                fat: 5,
                ingredients: [
                  "4-6 egg whites with 2 whole eggs",
                  "1 serving Cream of Wheat cereal",
                  "7 banana",
                ],
                image: img,
                price: 12
              },
            // Add more food items as needed
        ];

        setFoods([...initialFoodData,...initialFoodData,...initialFoodData, ...initialFoodData, ...initialFoodData]);
    },[]);

    return [foods, setFoods]
}

export default useFetch