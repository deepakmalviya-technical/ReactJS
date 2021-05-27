import { render, screen } from "@testing-library/react";
import { Router, Switch, Route } from "react-router-dom";
import { createMemoryHistory } from "history";
import UserEvent from "@testing-library/user-event";

import App from "../App";
import { customRender } from "./util";
import Home from "../components/Home";
import AddCustomer from "../components/AddCustomer";

describe("App", () => {
  test("Renders project name", () => {
    customRender(<App />);
    const linkElement = screen.queryAllByText(/customer management/i);
    expect(linkElement).toMatchInlineSnapshot(`
      Array [
        <a
          class="navbar-brand"
          href="/"
        >
          Customer Management
        </a>,
        <h1
          class="mt-5 text-center"
        >
          Customer Management
        </h1>,
      ]
    `);
  });

  test("Check all Routes", () => {
    const history = createMemoryHistory(["/", "/add", "/list", "/edit/:id"]);
    const { debug } = render(
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/add" render={() => <div>Add Customer</div>} />
        </Switch>
      </Router>
    );
    debug();
  });
});
