import CONFIG from '../../globals/config';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const createRestoDetailTemplate = (detail) => `
    <h2 class="restoTitle">${detail.restaurant.name}</h2>
    <img class="restoImg" src="${detail.restaurant.pictureId ? CONFIG.BASE_IMAGE_URL + detail.restaurant.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}" alt="${detail.name}" />
    <div class="restoInfo">
        <h3>Informasi</h3>
        <h3>Alamat</h3>
        <p>${detail.restaurant.address}, ${detail.restaurant.city}</p>
        <div class="restoOverview">
            <h3>Overview</h3>
            <p>${detail.restaurant.description}</p>
        </div>
        <div class="kategori">
            <div class="kategoriMenu">
                <h3>Kategori Menu</h3>
                <ul>
                ${detail.restaurant.categories
    .map(
      (categorie) => `
                    <li class="namaKategori">${categorie.name}</li>
                    `,
    )
    .join('')}
                </ul>
            </div>
            <div class="kategoriMakanan">
                <h3>Menu Makanan</h3>
                <ul>
                ${detail.restaurant.menus.foods
    .map(
      (food) => `
                <li class="namaKategori">${food.name}</li>
                `,
    )
    .join('')}
                </ul>
            </div>
            <div class="kategoriMinuman">
                <h3>Menu Minuman</h3>
                <ul>
                ${detail.restaurant.menus.drinks
    .map(
      (drink) => `
                    <li class="namaKategori">${drink.name}</li>
                  `,
    )
    .join('')}
                </ul>
            </div>
            <div class="kategoriRating">
                <h3>Rating</h3>
                <p>⭐️ ${detail.restaurant.rating}</p>
            </div>
        </div>
    </div>

    <h3 class="customerReview">Customer Review</h3>
    <div class="review">
        ${detail.restaurant.customerReviews
    .map(
      (review) => `
    <div class="reviewCard">
        <i class="fas fa-user-circle"></i>
        <p class="reviewName">${review.name}</p>
        <p class="reviewComment">${review.review}</p>
        <p class="reviewDate">${review.date}</p>
    </div>
    `,
    )
    .join('')}
    </div>
`;

const createRestoItemTemplate = (resto) => `
        <article class="katalogItem">
            <img class="katalogItemThumbnail lazyload" data-src="${resto.pictureId ? CONFIG.BASE_IMAGE_URL + resto.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}" alt="${resto.name}">
            <div class="ratingResto" tabindex="0">⭐️ ${resto.rating}</div>
            <div class="katalogItemContent">
                <p class="locationResto">${resto.city}</p>
                <h1 class="katalogItemName"><a href="${`/#/detail/${resto.id}`}">${resto.name}</a></h1>
                <div class="katalogItemDescription" tabindex="0">${resto.description}</div>
            </div>
        </article>
  `;

const createLikeRestoButtonTemplate = () => `
    <button aria-label="like this resto" id="likeButton" class="like">
        <i class="far fa-heart" aria-hidden="true"></i> 
    </button>
`;

const createUnlikeRestoButtonTemplate = () => `
    <button aria-label="unlike this resto" id="likeButton" class="like">
        <i class="fas fa-heart" aria-hidden="true"></i> 
    </button>
`;

const createEmptyFavorite = () => `
    <h3 class="emptyFavorite">Favorite restaurant kosong!</h3>
`;

export {
  createRestoDetailTemplate,
  createRestoItemTemplate,
  createLikeRestoButtonTemplate,
  createUnlikeRestoButtonTemplate,
  createEmptyFavorite,
};
