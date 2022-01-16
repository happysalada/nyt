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
</script>

<div class="example" style="width: 100%; height: 100%;">
  <LeafletMap bind:this={leafletMap} options={mapOptions}>
    <TileLayer url={tileUrl} options={tileLayerOptions} />
    <Marker latLng={[40.7369, -74.2937]}>
      <Popup><b>Alpaca farm!</b></Popup>
    </Marker>
  </LeafletMap>
</div>