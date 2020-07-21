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
        {item.map((cval) => {
          return (
            <Product
              id={cval.id}
              title={cval.title}
              price={cval.price}
              rating={cval.rating}
              image={cval.image}
            />
          );
        })}
      </div>

      <div className="home__product">
        <Product
          id={123}
          title="Masks for Covid19.Stay Home, Stay Safe"
          price={500.96}
          rating={4}
          image="https://image.shutterstock.com/image-photo/medical-protective-mask-on-white-260nw-1643052535.jpg"
        />
        <Product
          id={123}
          title="Amazon.in AS-IT-IS Nutrition Whey Protein Concentrate 80% Unflavoured - 1Kg"
          price={1145}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/41e4HAIhy-L.jpg"
        />
        <Product
          id={123}
          title="Usha Cook Joy (3616) 1600-Watt Induction Cooktop (Black)"
          price={1200}
          rating={2}
          image="https://images-na.ssl-images-amazon.com/images/I/71%2Bdrtp5RSL._SL1500_.jpg"
        />
      </div>

      <div className="home__product">
        <Product
          id={123}
          title="Sony Bravia 108 cm (43 inches) Full HD Smart LED TV KDL-43W6603 (Black) (2020 Model)"
          price={37999}
          rating={1}
          image="https://images-na.ssl-images-amazon.com/images/I/81lpllAGcBL._SL1500_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
