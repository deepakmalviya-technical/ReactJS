import { render } from "@testing-library/react";
import { Router,Route } from 'react-router-dom';
import {createMemoryHistory} from 'history';

const customRender = (componenet, options={})=> {
    render(
        componenet,options
    )
}

const customRenderRoute = (component, options = {}) => {
    const history = createMemoryHistory(['/','/add']);
    history.push('/');
    const{debug} = render(
        <Router history={history}>
            <Route exact path="/" render={()=><div>Home</div>} />
        </Router>,
        options
    )
    debug()
}

export { customRender,customRenderRoute };