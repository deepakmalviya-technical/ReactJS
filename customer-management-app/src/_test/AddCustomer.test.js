import React from "react";
import { setupServer } from "msw/node";
import { rest } from 'msw';
import { customRender } from "./util";
import AddCustomer from "../components/AddCustomer";

const server = setupServer(
    rest.post('http://localhost:5000/', (req, res, ctx) => {
        return res(ctx.json({ msg: 'Customer Added Successfully' }))
    })
)

describe("Add Customer", () => {
    beforeAll(()=>{
        server.listen()
    })
    beforeEach(()=>{
        server.resetHandlers()
    })
    afterAll(()=>{
        server.close()
    })

    test('Customer Add Form', () => {
        customRender(<div>Add Customer Form</div>)
    })
})