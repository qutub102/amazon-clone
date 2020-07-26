import React, { useEffect, useState } from "react";
import { useStateValue } from "./StateProvider";
import item from "./item";
import Product from "./Product";
import "./SearchItem.css";

function SearchItem() {
  const [{ srch }] = useStateValue();
  const [ss, setSs] = useState([]);
  const [snf, setSnf] = useState(true);
  var arr = [];
  useEffect(() => {
    setSnf(true);
    item.map((cval) => {
      // var srchVar = cval.title.toLowerCase();
      var srchKeyword = cval.keyword;
      var srchTitle = cval.title.toLowerCase();
      srchKeyword.push(srchTitle);

      //   if (srch.toLowerCase().includes(srchVar)) {

      if (
        srchKeyword
          ?.toLocaleString()
          .toLowerCase()
          .split(",")
          .includes(srch.toLowerCase())
      ) {
        arr.push(cval);
        setSs(arr);
        setSnf(false);
      }
    });
  }, [srch]);
  return (
    <div className="searchItem">
      <br />
      {ss.map((cval) => {
        if (snf === false) {
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
      {snf && (
        <>
          <h1>Search Not Found</h1>
          <p>{srch}</p>
        </>
      )}
    </div>
  );
}

export default SearchItem;
