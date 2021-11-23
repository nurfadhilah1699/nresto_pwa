const assert = require('assert');

Feature('Liking Restos');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('liking one resto', async ({ I }) => {
  I.seeElement('#katalogList');
  I.see('Favorite resto still empty', '.emptyFavorite');

  I.amOnPage('/');
  I.seeElement('.katalogItemName a');
  const firstResto = locate('.katalogItemName a').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.katalogList');
  const likedRestaurantTitle = await I.grabTextFrom('.katalogItemName');

  assert.strictEqual(firstRestoTitle, likedRestaurantTitle);
});

Scenario('unliking one resto', async ({ I }) => {
  // menuju page home untuk melakukan like terlebih dahulu
  I.amOnPage('/');
  I.seeElement('.katalogItemName a');
  I.click(locate('.katalogItemName a').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');

  // menuju page favorite
  I.amOnPage('/#/favorite');
  I.seeElement('.katalogItemName a');
  const firstLikedRestaurant = locate('.katalogItemName a').first();
  const firstLikedRestaurantTitle = await I.grabTextFrom(firstLikedRestaurant);
  I.click(firstLikedRestaurant);

  // menuju page detail untuk melakukan unlike
  I.seeElement('.restoTitle');
  const likedRestaurantTitle = await I.grabTextFrom('.restoTitle');
  assert.strictEqual(firstLikedRestaurantTitle, likedRestaurantTitle);

  I.seeElement('[aria-label="unlike this resto"]');
  I.click('[aria-label="unlike this resto"]');

  // menuju page favorit untuk memastikan berhasil melakukan unlike
  I.amOnPage('/#/favorite');
  I.see('Favorite resto still empty', '.emptyFavorite');
});
