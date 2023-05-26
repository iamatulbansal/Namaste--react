import "@testing-library/jest-dom"
import { render, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom/server';
import Body from '../Body';
import store from '../../redux/store';
import { restaurantList } from '../../constant';

test('Search Result on Homepage', async () => {
    //Create Mokes custom fetch
    //jest.fn() Dummy function giving by jest this is return a promise
    global.fetch = jest.fn(() => {
        return Promise.resolve({
            json: () => Promise.resolve(restaurantList),
        });
    });
    //Load Body Components
    const body = render(
        <StaticRouter>
            <Provider store={store}>
                <Body />
            </Provider>
        </StaticRouter>
    );

    await waitFor(() => expect(body.getByTestId('search-div')))
    const resList = body.getByTestId('res-list')
    expect(resList.children.length).toBe(15)

});
