import {getUsersSelector, getUsersCheckedSelector} from './selectors';

const state = {
  users: {
    employees: [
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
  },
};

it('slector should return array of users from current state', () => {
  const resultGetUserSelector = getUsersSelector(state);
  expect(resultGetUserSelector.length).toBe(2);
});

it('slector should return array of filtered users', () => {
  const resultGetFilteredUsersSelector = getUsersCheckedSelector(state);
  expect(resultGetFilteredUsersSelector.length).toBe(1);
  expect(resultGetFilteredUsersSelector[0].id).toBe('5e00928df892b0c84c82db9d');
});
