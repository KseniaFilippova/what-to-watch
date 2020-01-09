import User from '../../models/user';
import { Store } from '../../store/store';

const getUser = (state: Store): User => state.user.user;

export { getUser };
