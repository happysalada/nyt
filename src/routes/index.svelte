<script lang="ts">
  import { browser } from '$app/env';
  import { onMount } from 'svelte'
  let MapComponent;
	onMount(async () => {
		if (browser) {
			MapComponent = (await import('$lib/Map.svelte')).default;
		}
	});
</script>

{#if browser}
    <svelte:component this={MapComponent} />
{/if}