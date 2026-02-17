<script>
  import { onMount } from "svelte";
  import json from "./test.json";
  // export let data;


  let personen = $state(json.personen);

  async function update(id, name) {
    const res = await fetch("/API/update", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, name }),
    });
    if (res.ok) {
      console.log("Gespeichert!", id, name);
      // Seite neu laden damit die aktualisierte JSON geladen wird
      location.reload();
    }
  }
</script>

<main class="w-4/5 m-auto">
  <li class="p-4 pb-2 text-xs opacity-60 tracking-wide">Einkaufsliste</li>
  <ul class=" list bg-base-100 rounded-box shadow-md max-w">
    {#each personen as item}
      <li class="list-row">
        <div class="text-4xl font-thin opacity-30 tabular-nums">
          {item.id}
        </div>
        <div class="self-center list-col-grow">
          <input
            type="text"
            class="input text-xl"
            bind:value={item.name}
            onkeydown={(e) => {
              if (e.key === "Enter") update(item.id, item.name);
            }}
          />
        </div>
        <button class="btn btn-ghost btn-sm btn-error"> delete </button>
        <button
          class="btn btn-ghost btn-sm btn-success"
          onclick={() => update(item.id, item.name)}
        >
          Update
        </button>
      </li>
    {/each}
  </ul>
  <div class="flex justify-center mt-4">
    <input type="text" placeholder="Type here" class="input" />
    <button class="btn btn-ghost btm-sm btn-success"> add </button>
  </div>
</main>

<footer></footer>
