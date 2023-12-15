import { useLoaderData } from "react-router-dom";
import Details from "./Details";

const Services = () => {
    const details = useLoaderData()
    console.log(details)
    return (
        <div className="my-14 grid grid-cols-2 gap-5">
            
                {
                    details.map(detail => <Details details={detail} key={detail.id}></Details>)
                }
            
        </div>
    );
};

export default Services;