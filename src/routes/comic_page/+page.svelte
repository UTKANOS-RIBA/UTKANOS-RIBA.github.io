<script lang="ts">
    import dayjs from "dayjs";
    import type { XKCDObject } from "../../lib/interface";
    async function getXKCD() {
            const url: string = `https://fwd.innopolis.app/api/hw2/?${new URLSearchParams({email: 'a.volkonitin@innopolis.university'})}`;
            const response: Response = await fetch(url);
            const id: string = await response.text();

            const request: string = `https://fwd.innopolis.university/api/comic?${new URLSearchParams({id})}`;
            const response2: Response = await fetch(request);

            return await response2.json() as XKCDObject;

    }

    async function setXKCDData() {
        const jsonData : XKCDObject = await getXKCD();
       const photoElement : HTMLImageElement = <HTMLImageElement>document.getElementById('photo');
        const dateElement : HTMLElement = <HTMLElement>document.getElementById('date');
       photoElement.src = jsonData.img;
        photoElement.alt = jsonData.alt;
        photoElement.title = jsonData.safe_title;
        dateElement.textContent = 'Date of publishing: ' + dayjs(jsonData.year.toString() + '-' + jsonData.month.toString() + '-' + jsonData.day.toString()).toDate();
    }
</script>

<svelte:head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Something strange</title>
    <link rel="stylesheet" href="../style_comic.css">
</svelte:head>
<div class="container">
    <img src="" alt="" id="photo">
    <div class="in-col">
        <p id="date"></p>
        <form action="../">
            <button id="back-button" class="button" type="submit">Go back</button>
        </form>
        <button id="joke-button" class="button" on:click={setXKCDData}>Get something</button>
    </div>
</div>