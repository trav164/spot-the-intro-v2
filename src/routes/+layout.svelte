<script>
	import '../app.postcss';
</script>

<div class="bg-zinc-900 py-6 text-zinc-300 p-4">
	<nav class="container flex items-center justify-between">
		<a class="font-bold text-2xl text-rose-400" href="/">spot the intro</a>

		<div class="flex flex-row gap-2 items-center">
			<a class="font-semibold px-4 py-2 hover:text-rose-400" href="/">home</a>
			<a class="font-semibold px-4 py-2 hover:text-rose-400" href="/">history</a>
			<a class="font-semibold px-4 py-2 hover:text-rose-400" href="/">tutorial</a>
		</div>
	</nav>
</div>

<div class="container mt-8 p-4">
	<slot />
</div>

<!-- Footer -->
<div class="bottom-0 fixed bg-blue-500">
	<div class="">
		<span class="font-semibold text-lg">Disclaimer</span>
		<p class="text-xs">
			We are not affiliated, associated, authorized, endorsed by, or in any way officially connected
			with the brands we illustrate, and those listed on our site. All names, marks, emblems and
			images are registered trademarks of their respective owners. This is a personal project
			designed to speed up rounds of the board game.
		</p>
	</div>
</div>
