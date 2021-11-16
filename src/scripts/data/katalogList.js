import('../../DATA.json').then(({ default: katalogJson }) => {
  console.log(katalogJson);
  const katalogs = katalogJson.restaurants;
  let dataKatalog = '';
  katalogs.forEach((katalog) => {
    dataKatalog += `
        <article class="katalogItem">
            <img class="katalogItemThumbnail" src="${katalog.pictureId}" alt="${katalog.name}" title="${katalog.name}">
            <div class="ratingResto" tabindex="0">⭐️ ${katalog.rating}</div>
            <div class="katalogItemContent">
                <p class="locationResto">${katalog.city}</p>
                <h1 class="katalogItemName"><a href="#">${katalog.name}</a></h1>
                <div class="katalogItemDescription" tabindex="0">${katalog.description.slice(0, 300)}...</div>
            </div>
        </article>
        `;
  });
  document.querySelector('#katalogList').innerHTML = dataKatalog;
});
