import { useEffect, useState } from 'react';
import FoodItem from './FoodItem';
import Skeleton from './Skeleton';
import useFetch from '../../../../hooks/useFetch';
import FoodDetail from './FoodDetail';

const Food = () => {
    const [loading, setLoading] = useState(false);
    const [showDetail, setShowDetail] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [foods] = useFetch();

    // Separate state for each section
    const [menuTabs, setMenuTabs] = useState({
        'section1': 'Pre-Workout',
        'section2': 'Pre-Workout',
        'section3': 'Pre-Workout',
    });

    // Loading
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);

    // Food menu tab
    const handleMenuTabs = (section, type) => {
        setMenuTabs((prevTabs) => ({ ...prevTabs, [section]: type }));
    };

    const section = (title, subtitle, sectionId) => {
        return (
            <>
                <div className='flex mt-8 justify-between items-center lg:mx-6 mx-auto lg:flex-row flex-col'>
                    <div>
                        <h3 className="font-Outfit text-2xl text-headersBlue font-semibold">
                            {title}
                        </h3>
                        <p className="font-sans text-sm text-gray-500 ">
                            {subtitle}
                        </p>
                    </div>
                    {/* Food Menu tab */}
                    <div className="bg-white lg:mr-3 mt-5 lg:mt-0 cursor-pointer w-96 flex items-center shadow-lg justify-center mx-auto py-2 rounded-3xl font-Outfit">
                        <p className={menuTabs[sectionId] === 'Pre-Workout' ? "bg-myOrange text-white font-Outfit px-6 py-1 rounded-xl" : "bg-white text-myBlue px-6 py-1"} onClick={() => handleMenuTabs(sectionId, 'Pre-Workout')}>Pre-Workout</p>
                        <p className={menuTabs[sectionId] === 'After-Workout' ? "bg-myOrange text-white font-Outfit px-8 py-1 rounded-xl" : "bg-white text-myBlue font-Outfit px-8 py-1"} onClick={() => handleMenuTabs(sectionId, 'After-Workout')}>After-Workout</p>
                    </div>
                </div>

                {/* All foods */}
                <div className="gap-10 mt-12 flex justify-center flex-row mx-auto flex-wrap">
                    {foods.filter((item) => menuTabs[sectionId] === item.category).map((item, index) => (
                        loading ? <Skeleton key={index} /> : <FoodItem key={index} item={item} setShowDetail={setShowDetail} setSelectedItem={setSelectedItem} />
                    ))}
                </div>
            </>
        );
    };

    return (
        <div className="relative">
            <section className='my-4 flex justify-center flex-col gap-4 mx-auto bg-[#FFF6EA] p-[5%] px-10 '>
                {section('Organic Produce', 'Fresh organic fruits and vegetables from Bay Farm at great prices', 'section1')}
                {section('Superfood Delights', 'Discover nutritious superfoods for a healthy lifestyle', 'section2')}
                {section('Gourmet Treats', 'Indulge in gourmet fruits and vegetables for a delightful experience', 'section3')}
            </section>
            {showDetail && <FoodDetail showDetail={showDetail} setShowDetail={setShowDetail} item={selectedItem} />}
        </div>
    );
};

export default Food;
