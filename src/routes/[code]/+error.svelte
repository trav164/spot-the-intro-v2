<script lang="ts">
	import { page } from '$app/stores';
</script>

<span>Something went wrong!</span>
<h1>{$page.status}: {$page.error?.message}</h1>
