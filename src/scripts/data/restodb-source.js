import API_ENDPOINT from '../globals/api-endpoint';

class RestoDbSource {
  static async katalogResto() {
    const response = await fetch(API_ENDPOINT.KATALOG);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailResto(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }
}

export default RestoDbSource;
