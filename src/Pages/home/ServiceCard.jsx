import { Link } from "react-router-dom";

const ServiceCard = ({eventData}) => {
  
    const {title,img,description} = eventData;
    return (
        <div >
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={img} alt="" className="rounded-xl h-40 w-64" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{title}!</h2>
    <p>{description}</p>
    <div className="card-actions">
      <Link to={'/services'} className="btn btn-info">Details</Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default ServiceCard;