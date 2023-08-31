import type { PageServerLoad } from './$types';

export const load = (async ({ params, fetch }) => {

    const data = await fetch('/api/spot-the-intro', {
        method: 'POST',
        body: JSON.stringify({
            code: 'REM',
        }),
    });

    const result = await data.json();

    if (!result) return {};

    return { result };
}) satisfies PageServerLoad;