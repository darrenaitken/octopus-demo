// FILE IS USED FOR GLOBAL STUFF TO BE ACROSS ALL TESTS

// Node Modules
import "@testing-library/jest-dom/extend-expect";
import fetchMock from "jest-fetch-mock";

// Use a fake fetch call instead for tests
fetchMock.enableMocks();
