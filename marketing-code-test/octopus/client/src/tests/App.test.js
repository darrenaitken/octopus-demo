// Node Modules
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render, fireEvent, screen } from "@testing-library/react";

// Redux
import { Provider } from "react-redux";
import store from "../store/allReducers";

// Override the global fetch function to always return this set of data
//import fetch from "./__mocks__/fetch";

// Components
import App from "../App";
import ProductQuantity from "../routes/products/productQuantity";

// UNIT TESTS
describe("unit tests", () => {
  it("renders my app", async () => {
    const wrapper = AllTheProviders(<App />);
    // const { debug } = render(wrapper); // Incase we need to debug()
    const myApp = render(wrapper);

    const appElement = myApp.container.querySelector("#App");

    expect(appElement).toBeTruthy;
  });

  it("should be able to increase product quantity", async () => {
    const myElement = AllTheProviders(
      <ProductQuantity
        productId={1}
        productName="Dummy Product Name"
        unitPounds={12}
        unitPence={99}
      />
    );

    render(myElement);
    const btnIncrease = screen.getByTestId("idBtnIncreaseQuantity");
    fireEvent.click(btnIncrease);
    fireEvent.click(btnIncrease);

    const myValue = screen.getByTestId("idQuantity").textContent;

    expect(myValue).toBe("3");
  });

  it("should be able to decrease product quantity", async () => {
    const myElement = AllTheProviders(
      <ProductQuantity
        productId={1}
        productName="Dummy Product Name"
        unitPounds={12}
        unitPence={99}
      />
    );

    render(myElement);
    const btnIncrease = screen.getByTestId("idBtnIncreaseQuantity");
    const btnDecrease = screen.getByTestId("idBtnDecreaseQuantity");
    fireEvent.click(btnIncrease); // 2
    fireEvent.click(btnIncrease); // 3
    fireEvent.click(btnIncrease); // 4
    fireEvent.click(btnIncrease); // 5

    fireEvent.click(btnDecrease); // 4

    const myValue = screen.getByTestId("idQuantity").textContent;

    expect(myValue).toBe("4");
  });

  it("should be able to add items to the basket", async () => {
    const myElement = AllTheProviders(
      <ProductQuantity
        productId={1}
        productName="Dummy Product Name"
        unitPounds={12}
        unitPence={99}
      />
    );

    render(myElement);
    const btnIncrease = screen.getByTestId("idBtnIncreaseQuantity");
    const btnAddToBasket = screen.getByTestId("idBtnAddToBasket");
    fireEvent.click(btnIncrease); // 2
    fireEvent.click(btnIncrease); // 3
    fireEvent.click(btnAddToBasket); // save to basket

    const myValue = store.getState().basket.totalQuantity;

    expect(myValue).toBe(3);
  });
});

function AllTheProviders(children) {
  return (
    <Provider store={store}>
      <BrowserRouter>{children}</BrowserRouter>
    </Provider>
  );
}
