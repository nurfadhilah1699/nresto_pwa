import UrlParser from '../../routes/url-parser';
import RestoDbSource from '../../data/restodb-source';
import { createRestoDetailTemplate, createLikeButtonTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

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

    LikeButtonInitiator.init({
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
