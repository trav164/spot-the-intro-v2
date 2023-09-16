<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	$: ({ artist, track } = data.res.details);
	$: ({ spotify, image } = data.res.link);
</script>

<p>Game code page works with: {JSON.stringify(image)}</p>
