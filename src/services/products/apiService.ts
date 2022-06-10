export default class ApiService {
  static async get(url: string) {
    const data = await fetch(url);
    return data.json();
  }
}
