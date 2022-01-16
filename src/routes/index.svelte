<script lang="ts">
  import { onMount } from 'svelte'
  import { LeafletMap, TileLayer, Icon, Marker, Popup } from 'svelte-leafletjs'
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
  onMount(() => {
    // leafletMap.getMap().fitBounds([
    //   [40, -74],
    //   [41, -75]
    // ])
  })
</script>

<div class="example" style="width: 100%; height: 100%;">
  <LeafletMap bind:this={leafletMap} options={mapOptions}>
    <TileLayer url={tileUrl} options={tileLayerOptions} />
    <Marker latLng={[40.7369, -74.2937]}>
      <Icon
        options={{
          iconUrl: 'alpaca-svgrepo-com.svg',
          iconSize: [41, 41],
          iconAnchor: [20, 41],
          popupAnchor: [1, -34],
          tooltipAnchor: [16, -28]
        }}
      />
      <Popup><b>Alpaca farm!</b></Popup>
    </Marker>
  </LeafletMap>
</div>
