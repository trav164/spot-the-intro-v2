<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	$: ({ artist, track, url } = data.result);
</script>

<p>Game code page works with: {artist}</p>
