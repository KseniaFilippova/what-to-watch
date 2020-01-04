import Api from './api';

interface UserData {
  email: string;
  password: string;
}

export default class UserApi extends Api {
  constructor() {
    super();
  }

  public async authorize(formData: UserData) {
    return this.makeRequest('/login', 'post', formData);
  }
}
