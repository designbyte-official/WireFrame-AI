import { auth } from '@insforge/nextjs';
import { createClient } from '@insforge/sdk';


export async function getAuthServer() {
  const { token, user } = await auth()

  const insforge = createClient({
    baseUrl: process.env.NEXT_PUBLIC_INSFORGE_BASE_URL || 'https://iu7n56j9.ap-southeast.insforge.app',
    edgeFunctionToken: token || undefined
  });

  return { insforge, user }

}
