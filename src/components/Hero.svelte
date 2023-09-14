<script>
	import Wave from './Wave.svelte';
</script>

<div class="text-center bg-zinc-800 h-[600px]">
	<div class="container pt-24">
		<div class="flex flex-col gap-6">
			<h1 class="text-8xl uppercase font-bold">spot the intro</h1>
			<h2 class="text-3xl text-rose-500">Automated Song Finder</h2>

			<p>The quickest and easiest way to play your favourite music quiz</p>

			<button
				class="mt-12 lowercase px-6 py-4 bg-rose-500 hover:bg-rose-600 text-zinc-900 font-bold m-auto"
				>Start Playing</button
			>
		</div>
	</div>
</div>

<Wave />

<div class="container text-center">
	<div class="flex flex-col gap-6 items-center justify-center">
		<h3 class="text-3xl">Your title here</h3>

		<p class="md:w-1/2 w-full">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus nobis facilis itaque tempora
			maiores aspernatur nemo! Repellat unde officia quam?
		</p>

		<div class="flex flex-col items-center justify-center gap-48 mt-24">
			<div class="flex flex-row items-center justify-center gap-6">
				<div class="flex flex-col">
					<h4 class="text-2xl">Scan a game card</h4>
					<p>Lorem ipsum dolor sit amet.</p>
				</div>
				<div class="bg-rose-500 w-60 h-60 rounded-full" />
			</div>

			<div class="flex flex-row items-center justify-center gap-6">
				<div class="bg-rose-500 w-60 h-60 rounded-full" />
				<div class="flex flex-col">
					<h4 class="text-2xl">Scan a game card</h4>
					<p>Lorem ipsum dolor sit amet.</p>
				</div>
			</div>

			<div class="flex flex-row items-center justify-center gap-6">
				<div class="flex flex-col">
					<h4 class="text-2xl">Scan a game card</h4>
					<p>Lorem ipsum dolor sit amet.</p>
				</div>
				<div class="bg-rose-500 w-60 h-60 rounded-full" />
			</div>
		</div>
	</div>
</div>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"
	><path
		fill="#27272a"
		fill-opacity="1"
		d="M0,224L288,256L576,320L864,288L1152,256L1440,128L1440,320L1152,320L864,320L576,320L288,320L0,320Z"
	/></svg
>

<div class="p-12 md:1/4 w-full bg-zinc-800 text-center">
	<h4 class="text-2xl">Disclaimer</h4>
	<p class="">
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid accusantium, libero quos cumque
		delectus iste impedit quaerat distinctio illo quo.
	</p>
</div>
