
<script lang="ts">
    let username = "";

    function handleInput(event : any) {
        username  = event.target.value;
    }
</script>



<h1>Syötä nimesi: </h1>
<form method="POSt" action="/kirjautuminen">
    <input type="text" bind:value={username} name="kayttajanimi" on:input={handleInput} />
    <button type="submit">Kirjaudu</button>
</form>


