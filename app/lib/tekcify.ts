import { Tekcify, SCOPES, RESPONSE_TYPES } from 'tekcify-auth';

if (!process.env.TEKCIFY_CLIENT_ID) {
  throw new Error('TEKCIFY_CLIENT_ID is not defined in environment variables');
}

if (!process.env.TEKCIFY_CLIENT_SECRET) {
  throw new Error('TEKCIFY_CLIENT_SECRET is not defined in environment variables');
}

export const tekcifyClient = new Tekcify(
  process.env.TEKCIFY_CLIENT_ID,
  process.env.TEKCIFY_CLIENT_SECRET
);

export const TEKCIFY_CONFIG = {
  redirectUrl: process.env.NEXTAUTH_URL 
    ? `${process.env.NEXTAUTH_URL}/api/auth/callback`
    : 'http://localhost:3000/api/auth/callback',
  scope: [SCOPES.EMAIL, SCOPES.PROFILE, SCOPES.OPENID],
  responseType: RESPONSE_TYPES.CODE,
};

export { SCOPES, RESPONSE_TYPES };
