import { screen, waitForElementToBeRemoved } from "@testing-library/react";
import React from "react";
import CustomerList from "../components/CustomerList";
import { customRender } from "./util";

describe("CustomerList", () => {
  test("Show Loading till customer list load", () => {
    customRender(<CustomerList />);
    const text = screen.queryByTestId("loading-spinner");
    expect(text).toHaveTextContent("Loading...");
  });

  test("Show Customer list", async () => {
    customRender(<CustomerList />);
    await waitForElementToBeRemoved(() =>
      screen.queryByTestId("loading-spinner")
    );
    const arr = [
      {
        id: 1,
        firstName: "Deepak",
        lastName: "Malviya",
      },
    ];
    const data = screen
      .getAllByTestId("customer-list")
      .map((td) => td.textContent);
    expect(arr).toMatchInlineSnapshot(`
      Array [
        Object {
          "firstName": "Deepak",
          "id": 1,
          "lastName": "Malviya",
        },
      ]
    `);
  });
});
