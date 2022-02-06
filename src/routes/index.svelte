<script lang="ts">
  import { browser } from '$app/env'
  import { onMount } from 'svelte'
  import Search from '$lib/Search.svelte'
  import SidePanel from '$lib/SidePanel.svelte'
  import allAgents from '$lib/data/agents.json'

  let MapComponent
  onMount(async () => {
    if (browser) {
      MapComponent = (await import('$lib/Map.svelte')).default
    }
  })
  let agents = allAgents;
  console.log(agents)
  let displayAgents = [...agents]
  let panelInfo: any
</script>

{#if browser}
  <div class="relative h-full w-full">
    <svelte:component this={MapComponent} agents={displayAgents} bind:panelInfo />
	  <Search bind:allData={agents} bind:displayData={displayAgents} />
    {#if panelInfo }
      <SidePanel bind:panelInfo />
    {/if}
  </div>
{/if}

