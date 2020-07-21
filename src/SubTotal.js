import React from "react";
import "./SubTotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
function SubTotal() {
  const [{ basket }] = useStateValue();

  return (
    <div className="subTotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.lenght} items): <strong>{`${value}`}</strong>{" "}
            </p>
            <small className="subTotal__gift">
              <input type="checkbox" />
              This Order Contain a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />
      <button>Proceed To Checkout</button>
    </div>
  );
}

export default SubTotal;
