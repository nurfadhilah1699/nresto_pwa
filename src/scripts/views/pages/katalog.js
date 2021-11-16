import RestoDbSource from '../../data/restodb-source';
import { createRestoItemTemplate } from '../templates/template-creator';

const Katalog = {
  async render() {
    return `
    <section class="content">
      <div class="latest">
          <h1 class="latestLabel">restaurant katalogs</h1>
          <div class="katalogList" id="katalogList">

          </div>
      </div>
    </section>
      `;
  },

  async afterRender() {
    const katalogs = await RestoDbSource.katalogResto();
    const katalogContainer = document.querySelector('#katalogList');
    katalogs.forEach((katalog) => {
      katalogContainer.innerHTML += createRestoItemTemplate(katalog);
    });
  },
};

export default Katalog;
