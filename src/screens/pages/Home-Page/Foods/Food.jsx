import { useEffect, useState } from 'react';
import FoodItem from './FoodItem';
import Skeleton from './Skeleton';
import useFetch from '../../../../hooks/useFetch';


const Food = () => {
    const [menuTab, setMenuTab] = useState('Breakfast')
    const [loading, setLoading] = useState(false)
    const [foods] = useFetch();

    //loading 
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        },1000)
    },[])

    //food menu tab 
    const handleMenuTabs = (type) => {
        setMenuTab(type)
    }

    return (

        <div className="relative">
            {/* SVG background */}
            {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
                className="absolute top-[-20%] left-0 w-full h-auto "
                style={{ zIndex: 1 }}
            >
                <path fill="#FFF6EA" fillOpacity="1" d="M0,64L80,96C160,128,320,192,480,202.7C640,213,800,171,960,154.7C1120,139,1280,149,1360,154.7L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
            </svg>
         */}
        <section className="flex justify-center flex-col  gap-4 mx-auto bg-[#FFF6EA] p-[5%]  px-10">

            <h3 className="font-Outfit text-2xl text-center mb-10 z-5 text-headersBlue font-semibold">
                Menu Highlights
            </h3>
            {/* food Menu tab  */}
            <div className="bg-white w-96 flex items-center shadow-lg justify-center mx-auto py-3 rounded-3xl  font-Outfit ">
                <p className={menuTab === 'Breakfast' ? "bg-myOrange text-white font-Outfit px-6 py-1 rounded-xl" : "bg-white text-black px-6 py-1"} onClick={() => handleMenuTabs('Breakfast')}>Breakfast</p>
                <p className={menuTab === 'Lunch' ? "bg-myOrange text-white font-Outfit px-8 py-1 rounded-xl" : "bg-white text-black font-Outfit px-8 py-1"} onClick={() => handleMenuTabs('Lunch')}>Lunch</p>
                <p className={menuTab === 'Dinner' ? "bg-myOrange text-white font-Outfit px-8 py-1 rounded-xl" : "bg-white text-black font-Outfit px-8 py-1"} onClick={() => handleMenuTabs('Dinner')}>Dinner</p>
            </div>

            {/* all foods  */}
            <div className="gap-10 mt-12 flex justify-center flex-row mx-auto flex-wrap">
                {foods.filter((item) => menuTab === item.category).map((item, index) => (
                    loading ? <Skeleton key={index} /> : <FoodItem key={index} item={item} />
                ))}
            </div>
        </section>
        
        </div>


    )
}

export default Food;