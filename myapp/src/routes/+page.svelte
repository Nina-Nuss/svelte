<script>
    import { onMount } from "svelte";
    import json  from "./test.json";
    // export let data;
    console.log(json.personen);
    let { data } = $props();
</script>
<h1>Welcome to SvelteKit</h1>
<p>
    Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the
    documentation
</p>

<ul>
    {#each json as item}
        <li>{item.name}</li>
    {/each}
</ul>
