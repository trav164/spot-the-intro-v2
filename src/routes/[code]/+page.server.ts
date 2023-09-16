import type { PageServerLoad } from './$types';

export const load = (async ({ params, fetch }) => {

    const data = await fetch('/api/spot-the-intro', {
        method: 'POST',
        body: JSON.stringify({
            code: params.code,
        }),
    });

    const res = await data.json();

    return { res };
}) satisfies PageServerLoad;