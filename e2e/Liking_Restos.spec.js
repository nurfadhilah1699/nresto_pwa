const assert = require('assert');

Feature('Favorite Restos');

// Perintah berjalan sebelum tiap metode tes dijalankan
Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

const emptyFavoriteRestoText = 'Favorite restaurant kosong!';

Scenario('showing empty favorite restaurant', ({ I }) => {
  I.seeElement('#katalogList');
  I.see(emptyFavoriteRestoText, '#katalogList');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see(emptyFavoriteRestoText, '#katalogList');

  // URL: /
  I.amOnPage('/');
  I.seeElement('.katalogItemName a');
  const firstRestoCard = locate('.katalogItemName a').first();
  const firstRestoCardTitle = await I.grabTextFrom(firstRestoCard);
  I.click(firstRestoCard);

  // URL: /resto/:id
  I.seeElement('#likeButton');
  I.click('#likeButton');

  // URL: /#/favorite
  I.amOnPage('/#/favorite');
  I.seeElement('.katalogItem');
  const likedCardTitle = await I.grabTextFrom('.katalogItemName');
  assert.strictEqual(firstRestoCardTitle, likedCardTitle); // membandingkan
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.see(emptyFavoriteRestoText, '#katalogList');

 // URL: /
 I.amOnPage('/');
 I.seeElement('.katalogItemName a');
 const firstRestoCard = locate('.katalogItemName a').first();
 const firstRestoCardTitle = await I.grabTextFrom(firstRestoCard);
 I.click(firstRestoCard);

 // URL: /resto/:id
 I.seeElement('#likeButton');
 I.click('#likeButton');

 // URL: /#/favorite
 I.amOnPage('/#/favorite');
 I.dontSee('.katalogItem');
 const likedCardTitle = await I.grabTextFrom('.katalogItemName');
 assert.strictEqual(firstRestoCardTitle, likedCardTitle);
});