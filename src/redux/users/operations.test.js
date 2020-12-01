import moxios from 'moxios';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import {getUsersRequest, getUsersSuccess, getUsersFailure} from './actions';
import {getUsers} from './operations';

const startState = {};
const mockStore = configureMockStore([thunk]);
const makeMockStore = (state = {}) => {
  return mockStore({
    ...startState,
    ...state,
  });
};

const mockSuccess = data => ({status: 200, response: {data}});
const mockError = error => ({status: 500, response: error});

const data = [
  {
    id: '5e00928d91e7feaa9872ec08',
    firstName: 'Yang',
    lastName: 'Carson',
    dob: '2019-02-26T16:52:36.244Z',
    checked: false,
  },
  {
    id: '5e00928df892b0c84c82db9d',
    firstName: 'Dorsey',
    lastName: 'Meadows',
    dob: '2019-09-19T09:34:32.083Z',
    checked: true,
  },
];

describe('fetchUsers', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  it('dispatches getUsersSuccess with server data on success', () => {
    const response = data;
    const store = makeMockStore();
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith(mockSuccess(response));
    });
    const expected = [getUsersRequest(), getUsersSuccess(response)];
    store.dispatch(getUsers()).then(() => {
      const actual = store.getActions();
      expect(actual).toEqual(expected);
    });
  });

  it('dispatches getUsersError with server data on success', () => {
    const response = 'error message';
    const store = makeMockStore();
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith(mockError(response));
    });
    const expected = [getUsersRequest(), getUsersFailure(response)];
    store.dispatch(getUsers()).then(() => {
      const actual = store.getActions();
      expect(actual).toEqual(expected);
    });
  });
});
