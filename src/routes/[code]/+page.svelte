<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	$: ({ artist, track, bonusUrl } = data.res.details);
	$: ({ spotify, image } = data.res.link);
</script>

<div class="container text-center h-screen">
	<div class="p-6 flex flex-col gap-6 items-center justify-center h-screen">
		<img alt="song cover" class="md:w-80 w-72" src={image} />
		<span class="md:text-5xl text-3xl font-bold">{artist}</span>
		<span class="md:text-3xl text-xl -mt-4">{track}</span>

		<a class="bg-rose-500 p-4 text-xl font-bold text-zinc-800 w-full md:w-52 mt-4" href={spotify}
			>Spotify</a
		>
		<a class="bg-zinc-800 p-4 w-full md:w-52" href={bonusUrl}>Bonus</a>
	</div>
</div>
