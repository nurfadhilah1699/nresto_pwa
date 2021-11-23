import UrlParser from '../../routes/url-parser';
import RestoDbSource from '../../data/restodb-source';
import { createRestoDetailTemplate, createLikeButtonTemplate } from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';

const Detail = {
  async render() {
    return `
    <div id="restoDetail" class="restoDetail"></div>
    <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await RestoDbSource.detailResto(url.id);
    const restoContainer = document.querySelector('#restoDetail');
    restoContainer.innerHTML = createRestoDetailTemplate(resto);

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      resto: {
        id: resto.restaurant.id,
        name: resto.restaurant.name,
        description: resto.restaurant.description,
        city: resto.restaurant.city,
        pictureId: resto.restaurant.pictureId,
        rating: resto.restaurant.rating,
      },
    });
  },
};

export default Detail;
