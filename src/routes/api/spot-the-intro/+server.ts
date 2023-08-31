import type { RequestHandler } from "@sveltejs/kit";

export const POST: RequestHandler = async ({ request }) => {
    let { code } = await request.json();

    return new Response(JSON.stringify({
        title: 'Out Getting Ribs',
        artist: 'King Krule',
        url: 'https://www.youtube.com/watch?v=UCUcR3HRQoo'
    }));
}
