import FavoriteRestoIdb from '../../data/favoriteresto-idb';
import { createEmptyFavorite, createRestoItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
        <section class="content">
            <div class="latest">
                <h1 class="latestLabel">restaurants favorite</h1>
                <div class="katalogList" id="katalogList">

                </div>
            </div>
        </section>
  `;
  },

  async afterRender() {
    const katalogs = await FavoriteRestoIdb.getAllRestos();
    const katalogsContainer = document.querySelector('#katalogList');
    if (katalogs.length > 0) {
      katalogs.map((katalog) => {
        console.log(katalog.name);
        katalogsContainer.innerHTML += createRestoItemTemplate(katalog);
      });
    } else {
      katalogsContainer.innerHTML += createEmptyFavorite();
    }
  },
};

export default Favorite;
