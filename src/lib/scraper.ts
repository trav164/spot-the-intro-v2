import * as cheerio from 'cheerio';

export const scrapeSong = async (gameCode: string) => {
    try {
        const url = `https://spot-the-intro.com/${gameCode.toUpperCase()}`
        const res = await fetch(url);

        if (!res.ok) throw Error(await res.text());

        const html = await res.text();

        const $ = cheerio.load(html);

        // Find correct selector as spot the intro website something has different selectors for some reason.
        for (let i = 0; i < 6; i++) {
            const selector = $(`#stacks_in_559 > p > span:nth-child(${i}) > em > u`).text().trim();

            if (selector) {
                return {
                    track: removeSpecialCharacters($('#stacks_in_559 > p > span:nth-child(1)').text().trim()),
                    artist: removeSpecialCharacters(selector),
                    bonusUrl: url,
                }
            }
        }
    } catch (err) {
        console.error(err);
        throw new Error("Something went wrong scraping Spot The Intro");
    }
}

const removeSpecialCharacters = (string: string) => {
    return string.replace(/[^\w\s]/gi, '');
}