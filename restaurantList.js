import "./restaurantlist.css";
import { Link} from "react-router-dom";
const Restaurants = (props) => {   
  return (
    <>
    <div className="mainDiv">
        <div className="div1">
        <Link className="link" to={props.Rou}>  
          <div className="Title">
            <h2>{props.Name}</h2>
            <p>Ratings({props.Ratings})</p>
            <p className="product__rating">
              {Array(props.Ratings)
                .fill()
                .map((_, i) => (
                  <p>🌟</p>
                ))}
            </p>
            <p>Service options:{props.ServiseOptions}</p>
          </div>
          <img className="Img" src={props.Img} alt={props.alt} />
          <p>Address:{props.Address}</p>
          </Link>
        </div>
      </div>
   
    </>
  );
};
export default Restaurants;
