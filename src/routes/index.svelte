<script lang="ts">
  import { browser } from '$app/env'
  import { onMount } from 'svelte'
  import Search from '$lib/Search.svelte'
  import SidePanel from '$lib/SidePanel.svelte'

  let MapComponent
  onMount(async () => {
    if (browser) {
      MapComponent = (await import('$lib/Map.svelte')).default
    }
  })
  let farms = [
    {
      name: 'Alpaca farm',
      latLng: [40.7369, -74.2937],
      popup: 'Alpaca farm!',
      offers: [
        {
          quantity: 60,
          unit: 'pounds',
          resourceType: {
            color: 'brown',
            fabric: 'alpaca'
          }
        }
      ]
    },
    {
      name: 'Sheep farm',
      popup: 'Sheep farm!',
      latLng: [40.7571, -74.3424],
      offers: [
        {
          quantity: 60,
          unit: 'pounds',
          resourceType: {
            color: 'gray',
            fabric: 'wool'
          }
        }
      ]
    },
    {
      name: 'Swampy farm',
      popup: 'the swamps!',
      latLng: [40.7202, -74.4406],
      offers: [
        {
          quantity: 666,
          unit: 'pounds',
          resourceType: {
            color: 'indigo',
            fabric: 'squid'
          }
        }
      ]
    }
  ]
  let displayFarms = [...farms]
  let panelInfo: any
</script>

{#if browser}
  <div class="relative h-full w-full">
    <svelte:component this={MapComponent} markers={displayFarms} bind:panelInfo />
	  <Search bind:allData={farms} bind:displayData={displayFarms} />
    {#if panelInfo }
      <SidePanel bind:panelInfo />
    {/if}
  </div>
{/if}

