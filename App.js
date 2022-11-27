import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Restaurants from "./components/restaurantList";
import Customers from "./components/AddHotels";
import Contact from "./components/contactPage";
import { useEffect, useState } from "react";
const App = () => {
  const [notes,setNotes]=useState([{id1:"",name1:""}])
    useEffect(()=>{
        fetch("/notes").then(res=>{
            if(res.ok){
                return res.json()
            }
        }).then(jsonRes=>setNotes(jsonRes))
    })

  return (
    
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/Restaurants"
          element={notes.map((values) => {
            return (
              <>
                <Restaurants
              
                  Name={values.Name}
                  Ratings={values.Ratings}
                  ServiseOptions={values.ServiseOptions}
                  Img={values.Img}
                  alt={values.alt}
                  Address={values.Address}
                  Rou={values.Rou}
                />
              </>
            );
          })}
        />
        <Route path="/customers" element={<Customers />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
};
export default App;
