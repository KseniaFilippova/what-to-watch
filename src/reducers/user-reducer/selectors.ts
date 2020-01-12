import Movie from '../../models/movie';
import User from '../../models/user';
import { Store } from '../../store/store';

const getUser = (state: Store): User => state.user.user;

const getFavoriteMovies = (state: Store): Movie[] => state.user.favoriteMovies;

export { getUser, getFavoriteMovies };
