<script>
  import { onMount } from "svelte";
  let customizations = {};

  onMount(async () => {
    const domain = window.location.hostname;
    const workerUrl = `https://${process.env.CF_ACCOUNT_ID}.${process.env.CF_WORKERS_SUBDOMAIN}.workers.dev`;

    fetch(`${workerUrl}/`, {
      headers: { Host: domain },
    })
      .then((response) => response.json())
      .then((data) => {
        customizations = data;
      })
      .catch((err) => console.error(err));
  });
</script>

<main>
  <img src={brandconfig.logo} alt="brand logo" />
  <ul>
    {#each brandconfig.menuitems as menuitem}
      <li><a href={menuitem.link}>{menuitem.label}</a></li>
    {/each}
  </ul>
  <p>Hello World!</p>
</main>

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
