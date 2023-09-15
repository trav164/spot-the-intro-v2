<script>
	import Wave from './Wave.svelte';
</script>

<div class="text-center bg-zinc-800 h-screen md:h-[600px]">
	<div class="container pt-24">
		<div class="flex flex-col gap-6">
			<h1 class="md:text-8xl text-6xl uppercase font-bold text-zinc-500">spot the intro</h1>
			<h2 class="text-3xl text-rose-500">Automated Song Finder</h2>

			<p class="text-lg text-zinc-300">
				The quickest and easiest way to play your favourite music quiz
			</p>

			<button
				class="mt-12 lowercase px-6 py-4 bg-rose-500 hover:bg-rose-600 text-zinc-900 font-bold text-lg italic m-auto"
				>Start Playing</button
			>
		</div>
	</div>
</div>

<Wave />

<div class="text-center my-24 md:m-0">
	<div class="flex flex-col gap-6 items-center justify-center">
		<h3 class="text-4xl">How to play</h3>

		<p class="md:w-1/2 w-full">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus nobis facilis itaque tempora
			maiores aspernatur nemo! Repellat unde officia quam?
		</p>

		<div class="flex flex-col items-center justify-center gap-48 mt-24 container">
			<div class="flex md:flex-row flex-col items-center justify-center gap-12 md:gap-24">
				<div class="flex flex-col gap-4">
					<h4 class="text-2xl">Setup the iOS Macro</h4>
					<span class="italic text-sm">
						Follow the <a
							class="underline hover:text-rose-500 italic font-semibold"
							href="https://camo.githubusercontent.com/0cc6fe3c8e158e7dce64fd47fd516462d5ca8a561deb887f71349f171ff8c9cb/68747470733a2f2f692e696d6775722e636f6d2f433169354f53592e6a706729"
							>instructions</a
						> to add the macro to your device
					</span>
				</div>
				<div class="bg-rose-500 w-72 h-72 rounded-full" />
			</div>

			<div class="flex flex-col-reverse md:flex-row items-center justify-center gap-12 md:gap-24">
				<div class="bg-rose-500 w-72 h-72 rounded-full" />
				<div class="flex flex-col">
					<h4 class="text-2xl">Scan a game card</h4>
					<p class="italic text-sm">
						Take your newly created macro and scan the QR code on a game card
					</p>
				</div>
			</div>

			<div class="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24">
				<div class="flex flex-col">
					<h4 class="text-2xl it">Check out your Spotify link</h4>
					<p class="italic text-sm">We'll manage the rest and find the song for you</p>
				</div>
				<div class="bg-rose-500 w-72 h-72 rounded-full" />
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

<div class="p-12 md:1/4 w-full bg-zinc-800 text-center pt-24">
	<h4 class="text-2xl">Disclaimer</h4>
	<p class="container mt-6">
		We are not affiliated, associated, authorized, endorsed by, or in any way officially connected
		with the brands we illustrate, and those listed on our site. All names, marks, emblems and
		images are registered trademarks of their respective owners. This is a personal project designed
		to speed up rounds of the board game.
	</p>
</div>
