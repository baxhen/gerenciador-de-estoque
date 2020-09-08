import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';

import Root from '../Root';
import App from '../components/App';

beforeEach(() => {
  moxios.install();
  moxios.stubRequest('/api/fetch/todos', {
    status: 200,
    response: [
      { text: 'Todo #1', id: 'id01' },
      { text: 'Todo #2', id: 'id02' },
    ],
  });
  moxios.stubRequest('/api/add/todo', {
    status: 201,
    response: { text: 'Todo #3', id: '03' },
  });
  moxios.stubRequest('/api/delete/todo/id01', {
    status: 204,
  });
});
afterEach(() => {
  moxios.uninstall();
});

it('can fetch a list of todos and display them', (done) => {
  const wrappedComponent = mount(
    <Root>
      <App />
    </Root>
  );

  moxios.wait(() => {
    wrappedComponent.update();

    expect(wrappedComponent.find('.card-content').length).toEqual(2);

    done();
    wrappedComponent.unmount();
  });
});

it('can add a todo and display it', (done) => {
  const wrappedComponent = mount(
    <Root>
      <App />
    </Root>
  );

  wrappedComponent.find('#todo-bar-input').simulate('change', {
    target: { value: 'Todo #3' },
  });
  wrappedComponent.find('#todo-bar-btn').simulate('click');

  moxios.wait(() => {
    wrappedComponent.update();

    expect(wrappedComponent.find('.card-content').length).toEqual(3);

    done();
    wrappedComponent.unmount();
  });
});

it('can delete a todo and remove it from the todo list', (done) => {
  const wrappedComponent = mount(
    <Root>
      <App />
    </Root>
  );
  moxios.wait(() => {
    wrappedComponent.update();
    wrappedComponent.find('#id01').at(1).find('.btn').simulate('click');
  });

  moxios.wait(() => {
    wrappedComponent.update();
    expect(wrappedComponent.find('.card-content').length).toEqual(1);
    done();
    wrappedComponent.unmount();
  });
});
