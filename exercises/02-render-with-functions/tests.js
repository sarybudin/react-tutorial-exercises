
import ReactDOM from 'react-dom';
import { WhatToRender } from './index';
import renderer from 'react-test-renderer';

jest.mock('react-dom', () => ({ render: jest.fn() }));

test('ReactDOM needs to be called once', () => {
    expect(ReactDOM.render.mock.calls.length).toBe(1);
});

test('The component should return <h1>I Love React</h1>', () => {
    const tree = renderer
        .create(ReactDOM.render.mock.calls[0][0])
        .toJSON();
        console.log(tree);
    expect(tree).toMatchSnapshot();
});