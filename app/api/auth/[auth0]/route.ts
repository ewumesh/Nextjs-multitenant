import { handleAuth } from '@auth0/nextjs-auth0';

const handler = handleAuth();

export { handler as GET, handler as POST };
