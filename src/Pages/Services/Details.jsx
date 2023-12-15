
const Details = ({details}) => {
    const {event_name,organizer,date,location,price,vanue,img} = details;
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl">
  <figure><img className="w-72 h-64" src={img} alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title">{event_name}</h2>
    <p>{organizer}</p>
    <p>{price}</p>
    <p>{location}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Confirm</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Details;