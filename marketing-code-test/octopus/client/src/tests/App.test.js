// Node Modules
import React from "react";
import { BrowserRouter } from "react-router-dom";
import {
  render,
  fireEvent,
  screen,
  act,
  cleanup,
} from "@testing-library/react";
import fetchMock, { enableFetchMocks } from "jest-fetch-mock";

// Redux
import { Provider } from "react-redux";
import store from "../store/allReducers";

// Mocked data for fetching
import MockProduct from "./__mocks__/product";

// Components
import App from "../App";
import ProductQuantity from "../routes/products/productQuantity";
import Product from "../routes/products/product";

// Start again from scratch after every test
afterEach(() => {
  cleanup();
});

// UNIT TESTS
describe("Example unit tests", () => {
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
});

describe("Example integration tests", () => {
  enableFetchMocks();

  it("should be able to add items to the basket", async () => {
    const myApp = AllTheProviders(<App />);

    // We will use this mock product object for our fetch result
    const mockProduct = JSON.stringify(MockProduct());
    fetchMock.mockResponseOnce(mockProduct);

    // We are on the home page so go to the product page by clicking on the demo button
    render(myApp);
    const btnDemo = screen.getByTestId("idBtnDemo");
    fireEvent.click(btnDemo);

    // This line has to be used as we change state in useEffect for Product component
    // (updates from 'loading...' to either error or components)
    await act(async () => render(myApp));

    // Wait until the product image appears
    expect(screen.getByTestId("idProductImage")).toBeInTheDocument();

    const btnIncrease = screen.getByTestId("idBtnIncreaseQuantity");
    const btnAddToBasket = screen.getByTestId("idBtnAddToBasket");

    fireEvent.click(btnIncrease); // 2
    fireEvent.click(btnIncrease); // 3
    fireEvent.click(btnAddToBasket); // save to basket

    // Get the last render of the basket counter
    const basketCounter = screen
      .getAllByTestId("idBasketCounter")
      .slice(-1)
      .pop();

    expect(basketCounter).toHaveTextContent("3");
  });
});

function AllTheProviders(children) {
  return (
    <Provider store={store}>
      <BrowserRouter>{children}</BrowserRouter>
    </Provider>
  );
}
