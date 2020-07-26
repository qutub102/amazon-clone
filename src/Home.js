import React from "react";
import "./Home.css";
import Product from "./Product";
import item from "./item";
function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />
      <div className="home__product">
        {item.map((cval, index) => {
          if (index < 2 || index == 6) {
            return (
              <Product
                id={cval.id}
                title={cval.title}
                price={cval.price}
                rating={cval.rating}
                image={cval.image}
              />
            );
          }
        })}
      </div>

      <div className="home__product">
        {item.map((cval, index) => {
          if (index > 1 && index < 5) {
            return (
              <Product
                id={cval.id}
                title={cval.title}
                price={cval.price}
                rating={cval.rating}
                image={cval.image}
              />
            );
          }
        })}
      </div>

      <div className="home__product">
        {item.map((cval, index) => {
          if (index > 4 && index <= 5) {
            return (
              <Product
                id={cval.id}
                title={cval.title}
                price={cval.price}
                rating={cval.rating}
                image={cval.image}
              />
            );
          }
        })}
      </div>
    </div>
  );
}

export default Home;
