const UserService = require('../user_service.js');
const UserClient = require('../user_client.js');
jest.mock('../user_client.js');

describe('UserService', () => {
  const login = jest.fn(async () => 'success');
  UserClient.mockImplementation(() => {
    return {
      login,
    };
  });

  let userService;

  beforeEach(() => {
    userService = new UserService(new UserClient());
  });

  it('로그인 시도 시 UserClient login 호출', async () => {
    await userService.login('abc', 'def');

    expect(login.mock.calls.length).toBe(1);
  });

  it('로그인 이후에는 UserClient의 login 호출 X', async () => {
    await userService.login('abc', 'def');
    await userService.login('abc', 'def');

    expect(login.mock.calls.length).toBe(1);
  });
});
