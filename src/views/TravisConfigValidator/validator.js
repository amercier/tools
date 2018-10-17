// @flow

import fetchPonyfill from 'fetch-ponyfill';

const { fetch, Headers } = fetchPonyfill();

type ValidationMessage = {
  level: string,
  message: string,
};

type ValidationResponse = {
  success: boolean,
  error?: string,
  messages: ValidationMessage[],
};

type TravisYmlValidatorConfig = {
  parserUrl: string,
  parserAuthUsername: string,
  parserAuthPassword: string,
};

export function normalize(jsonResponse: Object): ValidationResponse {
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

export class TravisYmlValidator {
<<<<<<< HEAD
  constructor(config) {
=======
  config: TravisYmlValidatorConfig;

  headers: Headers;

  constructor(config: TravisYmlValidatorConfig) {
>>>>>>> wip
    this.config = config;

    const { parserAuthUsername, parserAuthPassword } = config;
    const credentials = btoa(`${parserAuthUsername}:${parserAuthPassword}`);
    this.headers = new Headers();
    this.headers.set('Authorization', `Basic ${credentials}`);
  }

  async validate(input: string): Promise<ValidationResponse> {
    const { parserUrl } = this.config;

    let jsonResponse;
    try {
      const validationResponse = await fetch(parserUrl, {
        method: 'POST',
        headers: this.headers,
        body: input,
      });
      jsonResponse = await validationResponse.json();
    } catch (error) {
      // Normalize HTTP errors
      jsonResponse = { error_message: `Error: ${error}` };
    }
    return normalize(jsonResponse);
  }
}
