<script>
    export let data;
</script>

<h1>Welcome to SvelteKit</h1>
<p>
    Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the
    documentation
</p>

<h2>Supabase Daten:</h2>
<ul>
    {#each data.items as item}
        <li>{item.name}</li>
    {/each}
</ul>
