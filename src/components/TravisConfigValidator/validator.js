import fetchPonyfill from 'fetch-ponyfill';

const { fetch, Headers } = fetchPonyfill();

export function normalize(jsonResponse) {
  if (jsonResponse.error_message) {
    return {
      success: false,
      error: jsonResponse.error_message,
      messages: [],
    };
  }

  const messages = jsonResponse.full_messages.map((rawMessage, i) => {
    const message = rawMessage.replace(/^\[\w+\] /, '');
    const { level } = jsonResponse.messages[i];
    return { level, message };
  });
  return { success: true, messages };
}

export default class TravisYmlValidator {
  constructor(config) {
    this.config = config;

    const { parserAuthUsername, parserAuthPassword } = config;
    const credentials = btoa(`${parserAuthUsername}:${parserAuthPassword}`);
    this.headers = new Headers();
    this.headers.set('Authorization', `Basic ${credentials}`);
  }

  async validate(input, normal = true) {
    const { parserUrl } = this.config;

    let jsonResponse;
    try {
      const validationResponse = await fetch(parserUrl, {
        method: 'POST',
        headers: this.headers,
        body: input,
      });
      jsonResponse = await validationResponse.json();
    } catch (e) {
      // Normalize HTTP errors
      jsonResponse = { error_message: `Error: ${e}` };
    }
    return normal ? normalize(jsonResponse) : jsonResponse;
  }
}
