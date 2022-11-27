import { useState } from "react";
import axios from "axios";

const Customers = () => {
  const [input, setInput] = useState({
    id1: "",
    name1: "",
    Ratings: "",
    Img: "",
    alt: "",
    Address: "",
    Route: "",
    ServiseOptions: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setInput((previousInput) => {
      return { ...previousInput, [name]: value };
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const newNote = {
      id1: input.id1,
      name1: input.name1,
      Ratings: input.Ratings,
      Img: input.Img,
      alt: input.alt,
      Address: input.Address,
      Route: input.Route,
      ServiseOptions: input.ServiseOptions
    };
    axios.post("http://localhost:3001/create", newNote);
  };
  return (
    <>
      <div style={{ height: "1000px" }}>
        <form>
          <div>
            <label>ID</label>
            <input
              name="id1"
              autoComplete="off"
              placeholder="Please Enter Your Name1 "
              onChange={handleChange}
              value={input.id1}
            />
          </div>
          <div>
            <label>Name</label>
            <textarea
              name="name1"
              autoComplete="off"
              placeholder="Please Enter Feed Back"
              onChange={handleChange}
              value={input.name1}
            />
          </div>
          <div>
            <label>Rating</label>
            <input
              name="Ratings"
              autoComplete="off"
              placeholder="Rating"
              onChange={handleChange}
              value={input.Ratings}
            />
          </div>
          <div>
            <label>ServiseOptions</label>
            <input
              name="ServiseOptions"
              autoComplete="off"
              placeholder="input.ServiseOptions "
              onChange={handleChange}
              value={input.ServiseOptions}
            />
          </div>
          <div>
            <label>Img</label>
            <input
              name="Img"
              autoComplete="off"
              placeholder="Img "
              onChange={handleChange}
              value={input.Img}
            />
          </div>
          <div>
            <label>alt</label>
            <input
              name="alt"
              autoComplete="off"
              placeholder="alt "
              onChange={handleChange}
              value={input.alt}
            />
          </div>
          <div>
            <label>Address</label>
            <input
              name="Address"
              autoComplete="off"
              placeholder="Address "
              onChange={handleChange}
              value={input.Address}
            />
          </div>
          <div>
            <label>Route</label>
            <input
              name="Route"
              autoComplete="off"
              placeholder="Route "
              onChange={handleChange}
              value={input.Route}
            />
          </div>

          <button onClick={handleSubmit}>Submmit</button>
        </form>
      </div>
    </>
  );
};
export default Customers;
