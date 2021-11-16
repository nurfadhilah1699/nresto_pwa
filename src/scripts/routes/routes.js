import Katalog from '../views/pages/katalog';
import Detail from '../views/pages/detail';
import Favorite from '../views/pages/favorite';

const routes = {
  '/': Katalog,
  '/katalog': Katalog,
  '/detail/:id': Detail,
  '/favorite': Favorite,
};

export default routes;
