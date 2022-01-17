<script lang="ts">
  import { LeafletMap, TileLayer, Marker, Popup } from 'svelte-leafletjs'
  import 'leaflet/dist/leaflet.css'
  const mapOptions = {
    center: [40.7431, -74.2484],
    zoom: 10
  }
  const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
  const tileLayerOptions = {
    minZoom: 0,
    maxZoom: 20,
    maxNativeZoom: 19,
    attribution: '© OpenStreetMap contributors'
  }
  let leafletMap
  export let markers: [{latLng: [number], popup: string, name: string}]
  export let panelInfo: any
</script>

<!-- This example requires Tailwind CSS v2.0+ -->
<LeafletMap bind:this={leafletMap} options={mapOptions}>
  <TileLayer url={tileUrl} options={tileLayerOptions} />
  {#each markers as {latLng, popup, name}}
  <Marker {latLng} on:click={() => {
    console.log("click")
    panelInfo = name
  }}>
    <Popup><b>{popup}</b></Popup>
  </Marker>
  {/each}
</LeafletMap>
