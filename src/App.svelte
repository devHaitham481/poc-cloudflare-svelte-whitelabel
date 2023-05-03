<script>
  export let name;

  import { onmount } from "svelte";
  let brandconfig = {};

  onmount(async () => {
    const branddomain = window.location.hostname;
    const response = await fetch(
      `http://localhost:4000/api/customizations/${domain}`
    );

    brandconfig = await response.json();
  });
</script>

<div style="background-color: {brandconfig.primarycolor}">
  <img src={brandconfig.logo} alt="brand logo" />
  <ul>
    {#each brandconfig.menuitems as menuitem}
      <li><a href={menuitem.link}>{menuitem.label}</a></li>
    {/each}
  </ul>
</div>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

