import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom/server';
import Header from '../Header';
import store from '../../redux/store';

//Test case For Logo
test('Logo should load on rendering header', () => {
    //load header
    const header = render(
        <StaticRouter>
            <Provider store={store}>
                <Header />
            </Provider>
        </StaticRouter>
    );
    //Check if logo is loaded
    const logo = header.getAllByTestId('logo');
    expect(logo[0].src).toBe('http://localhost/dummy.png');
});

//Test case For Cart 0
test('Header Cart should 0 on initial rendering face', () => {
    //load header
    const header = render(
        <StaticRouter>
            <Provider store={store}>
                <Header />
            </Provider>
        </StaticRouter>
    );
    //Check if Cart is 0 in initial face
    const cart = header.getAllByTestId('cart-0-item');
    expect(cart[0].children.length).toBe(0);
});

//Test case For onlineStatus
test('User should online when page is load !', () => {
    //load header
    const header = render(
        <StaticRouter>
            <Provider store={store}>
                <Header />
            </Provider>
        </StaticRouter>
    );
    //Check online Status
    const onlineStatus = header.getByTestId('online-status');
    expect(onlineStatus.innerHTML).toBe('🟢Online');
});
