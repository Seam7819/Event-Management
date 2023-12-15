import { useLoaderData } from "react-router-dom";
import Slider from "./Slider";
import ServiceCard from "./ServiceCard";


const Home = () => {
    const eventData = useLoaderData();
    console.log(eventData)
    return (
        <div>
            <h1 className="text-4xl font-bold my-10 text-center">Social Events</h1>
           <div className="my-10">
           <Slider></Slider>
           </div>
           <div className="my-10 text-4xl font-bold text-center">
            Services
           </div>
           <div className="grid grid-cols-3 gap-3 mb-10">
            {
                eventData.map(aEventData => <ServiceCard key={aEventData.id} eventData={aEventData}></ServiceCard>  )
            }
           </div>
           
        </div>
    );
};

export default Home;