<script>
	import '../app.postcss';
</script>

<div class="md:bg-zinc-800 bg-zinc-900 py-6 text-zinc-300 p-4">
	<nav class="container flex items-center justify-between">
		<a class="font-bold md:text-2xl text-base text-rose-500" href="/">Spot The Intro</a>

		<div class="flex flex-row gap-6 items-center">
			<a class="hover:text-rose-500" href="/">Home</a>
			<a class="hover:text-rose-500" href="/history">History</a>
		</div>
	</nav>
</div>

<!-- container mt-8 p-4 -->
<div class="">
	<slot />
</div>
