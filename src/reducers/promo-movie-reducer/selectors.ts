import Movie from '../../models/movie';
import { Store } from '../../store/store';

const getPromoMovie = (state: Store): Movie => state.promoMovie.data;

export { getPromoMovie };
