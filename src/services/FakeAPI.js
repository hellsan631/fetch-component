
export default class FakeAPI {
  static key = '5c6e116439b86d2811730fd2'
  static base = 'https://freshest-6407.restdb.io/rest'

  static getUsernameUrl() {
    return `${this.base}/todo/58552a1bb7085b74000007a0`;
  }
  
  static getOptions() {
    return  {
      headers: {
        'x-apikey': this.key,
      }
    };
  }

  static getTitle() {
    return async () => {
      const data = await fetch(
        `${this.base}/todo/58552314b7085b740000079a`,
        this.getOptions()
      )
  
      return await data.json()
    }
  }

  static updateUsername(username) {
    const controller = new AbortController();
    const { signal } = controller;
    const request = fetch(
      `${this.base}/todo/${username._id}`,
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          ...this.getOptions().headers,
        },
        method: 'PATCH',                                                         
        body: JSON.stringify(username),
        signal,
      }
    )

    request.controller = controller;

    return request;
  }
}