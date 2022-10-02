import { LRUCache } from 'typescript-lru-cache';
import axios from 'axios';

const TOKEN_KEY = 'cmsAuthToken';

class NestApi {
  apiUrl: string;

  username: string;

  password: string;

  cache: LRUCache;

  _accessToken: string;

  constructor(apiUrl: string, username: string, password: string, _accessToken: string) {
    this.apiUrl = apiUrl;
    this.username = username;
    this.password = password;
    this._accessToken = _accessToken;
    this.cache = new LRUCache<string, string>();
  }

  async getAuthToken(): Promise<string> {
    let token = this.cache.get(TOKEN_KEY);

    if (!token) {
      // login

      const { data } = await axios.post(`${this.apiUrl}/auth/login`, {
        username: this.username,
        password: this.password,
      });

      // get token
      token = data.jwt;

      // set token
      this.cache.set(TOKEN_KEY, token, { entryExpirationTimeInMS: 3600000 });
    }

    return token;
  }

  async get(endpoint: string) {
    const headers = { Authorization: `Bearer ${await this.getAuthToken()}` };

    return axios.get(`${this.apiUrl}${endpoint}`, { headers }).then((response) => response.data);
  }

  async post(endpoint: string, body: any) {
    const headers = {
      'Content-Type': 'application/json',
    };

    return axios
      .post(`${this.apiUrl}${endpoint}`, body, { headers })
      .then((response) => response.data);
  }

  get accessToken() {
    return this._accessToken ? this._accessToken : this.loadToken();
  }

  saveToken(accessToken) {
    this._accessToken = accessToken;
    return localStorage.setItem('accessToken', accessToken);
  }

  loadToken() {
    const token = localStorage.getItem('accessToken');
    this._accessToken = token;
    return token;
  }

  removeToken() {
    localStorage.removeItem('accessToken');
  }
}

export default NestApi;
