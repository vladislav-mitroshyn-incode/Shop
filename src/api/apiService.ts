export default class PostService {
  static async get(url: string) {
    const data = await fetch(url);
    return data.json();
  }
}
