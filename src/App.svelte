<script>

  import { onmount } from "svelte";
  let customizations = {};

  onmount(async () => {
    const domain = window.location.hostname;
    const workerUrl = `https://${process.env.CF_ACCOUNT_ID}.${process.env.CF_WORKERS_SUBDOMAIN}.workers.dev`;


    fetch(`${workerUrl}/`, {
      headers: { Host: domain },
    })
      .then(response => response.json())
      .then(data => {
        customizations = data;
      })
      .catch(err => console.error(err));
  }
  });
</script>

<div>
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
