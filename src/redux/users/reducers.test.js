import {onGetUsers, onChangeChecked} from './reducers';

const state = [
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

const action = {
  payload: [
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
  ],
};

const stateWiyhEmptyArray = [];

it('should return the action.payload if the state is an empty array', () => {
  const newUsersState = onGetUsers(stateWiyhEmptyArray, action);
  expect(newUsersState.length).toBe(2);
});

it('should return the persisted state if the state is not an empty array', () => {
  const newUsersState = onGetUsers(state, action);
  expect(newUsersState.length).toBe(2);
});

it('the property CHECKED of the states object should be toggle on inversion', () => {
  const actionWithTrue = {
    type: 'checked/succsess',
    payload: {
      checked: true,
      id: '5e00928d91e7feaa9872ec08',
    },
  };
  const actionWithFalse = {
    type: 'checked/succsess',
    payload: {
      checked: false,
      id: '5e00928df892b0c84c82db9d',
    },
  };
  const newChangedCheckedTrue = onChangeChecked(state, actionWithTrue);
  const newChangedCheckedFalse = onChangeChecked(state, actionWithFalse);
  expect(newChangedCheckedTrue[0].checked).toBe(true);
  expect(newChangedCheckedFalse[1].checked).toBe(false);
});
