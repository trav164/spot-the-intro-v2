<script>
	import '../app.postcss';
</script>

<div class="bg-zinc-800 py-6 text-zinc-300 p-4">
	<nav class="container flex items-center justify-between">
		<a class="font-bold text-lg text-rose-500" href="/">spot the intro</a>

		<div class="flex flex-row gap-6 items-center">
			<a class="hover:text-rose-500" href="/">home</a>
			<a class="hover:text-rose-500" href="/history">history</a>
		</div>
	</nav>
</div>

<!-- container mt-8 p-4 -->
<div class="">
	<slot />
</div>
