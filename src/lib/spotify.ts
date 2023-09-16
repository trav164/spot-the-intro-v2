import { CLIENT_ID, CLIENT_SECRET } from "$env/static/private"

export const getBearer = async (): Promise<string> => {
    try {
        const res = await fetch("https://accounts.spotify.com/api/token",
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET,
            });

        if (!res.ok) throw Error(await res.text());

        const data: Bearer = await res.json();

        return data.access_token;
    } catch (error) {
        throw Error('Something went wrong fetching the Spotify Bearer Token');
    }
}

export const searchSong = async (track: string, artist: string) => {
    const baseUrl = `https://api.spotify.com/v1/search?q=track%3A${encodeURIComponent(track)}%20artist%3A${encodeURIComponent(artist)}&type=track%2Cartist&market=GB&limit=1`;

    try {
        const res = await fetch(baseUrl, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${await getBearer()}`,
                'Content-Type': "application/json"
            }
        });

        if (!res.ok) throw Error('Something went wrong fetching the song from spotify');

        const data = await res.json();

        const spotify = data?.tracks?.items[0]?.external_urls?.spotify;
        const image = data?.tracks?.items[0]?.album.images[0]?.url;

        if (!spotify || !image) throw Error("Unable to find the request track on Spotify.");

        return { spotify, image };
    } catch (err) {
        throw Error("Unable to find the request track on Spotify.");
    }
}