<script lang="ts">
	import "../global.css";
  import Nav from '$lib/Nav.svelte'
  import { onMount } from 'svelte';

  let loaded = false

  import { page } from '$app/stores'

  onMount(async () => {
		loaded = true;
	});
</script>

{#if !loaded }
<section class="overflow-x-hidden w-screen relative">
  <div class="fade-in h-screen flex flex-col items-center justify-center">
    <h1 class="font-sans text-white sm:text-xl lg:text-3xl">
      loader here?
    </h1>
  </div>
</section>
{:else}
<div class="grid">
  <nav class="nav">
    <Nav path={$page.url.pathname} />
  </nav>

  <main class="main h-full">
    <slot />
  </main>
  
  <div class="footer">
  </div>

</div>
{/if}

<style>
  /* minmax on the nav is used for expansion on mobile */
  /* minmax on the main is used for long main content */
  .grid {
    display: grid;
    grid-template-columns: 5vw 90vw 5vw;
    grid-template-rows: 10vh minmax(80vh, auto) 10vh;
    grid-template-areas:
      'nav nav nav'
      '. main .'
      'footer footer footer'
  }
  
  
  @media (min-width: 700px) {
    .grid {
      grid-template-columns: 15vw 70vw 15vw;
    }
  }

  .nav {
    grid-area: nav;
  }

  .main {
    grid-area: main;
  }
  
  .footer {
    grid-area: footer;
  }

</style>
