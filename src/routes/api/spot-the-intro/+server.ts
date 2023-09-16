import { scrapeSong } from "$lib/scraper";
import { searchSong } from "$lib/spotify";
import type { RequestHandler } from "@sveltejs/kit";

export const POST: RequestHandler = async ({ request }) => {
    const { code } = await request.json();

    const details = await scrapeSong(code);

    if (!details) throw new Response(JSON.stringify('Something went wrong'));

    const link = await searchSong(details?.track, details?.artist);

    return new Response(JSON.stringify({
        details,
        link
    }));
}
