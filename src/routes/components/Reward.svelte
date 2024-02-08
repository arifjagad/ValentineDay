<script>
    import { Button, Modal } from 'flowbite-svelte';

    // Image
    const imgRizzCat = 'src/assets/images/rizz-cat.jpg'
    const imgRejectCat1 = 'src/assets/images/reject-cat-1.jpg'
    const imgRejectCat2 = 'src/assets/images/reject-cat-2.png'
    const imgHappyCat = 'src/assets/images/happy-cat-dance.gif'

    // Audio
    const audioRizzCat = 'src/assets/audio/rizz-song.mp3';
    const audioHappyCat = 'src/assets/audio/happy-cat.mp3';
    const audioRejectCat1 = 'src/assets/audio/wha-wha-cat-song.mp3';

    let popupModal = false;

    let isAcceptDate = false;
    let isRejectDate1 = false;
    let isRejectDate2 = false;

    function handleAcceptDate() {
        isAcceptDate = true;
    }
    function handleRejectDate1() {
        isRejectDate1 = true;
    }
    function handleRejectDate2() {
        isRejectDate2 = true;
        isRejectDate1 = false;
    }

    function handleModalClose() {
        isAcceptDate = false;
        isRejectDate1 = false;
        isRejectDate2 = false;
    }
</script>

<Button on:click={() => (popupModal = true)} class="btn-adventure">collect reward!</Button>

<Modal bind:open={popupModal} size="xs" on:close={handleModalClose}>
    <div class="content text-center">
        {#if isAcceptDate}
            <img src="{imgHappyCat}" alt="Rizz Cat" class="w-full rounded mx-auto mb-5" />
            <h3 class="mb-5 text-3xl text-pink-600 font-bold">LESGOOOO!!!!!</h3>            

            <audio controls volume="0.25" autoplay loop hidden>
                <source src="{audioHappyCat}" type="audio/mpeg">
                Your browser does not support the audio element.
            </audio>
        {:else if isRejectDate1}
            <img src="{imgRejectCat1}" alt="Rizz Cat" class="w-full rounded mx-auto mb-5" />
            <h3 class="mb-5 text-lg text-pink-600 font-bold">Rejecting my offer, huh? Seriously?</h3>
            <Button on:click={handleAcceptDate} color="green" class="me-2">Nah, just kidding, let's do it!</Button>
            <Button on:click={handleRejectDate2} color="yellow">Yeah, I'm serious</Button>

            <audio controls volume="0.25" autoplay loop hidden>
                <source src="{audioRejectCat1}" type="audio/mpeg">
                Your browser does not support the audio element.
            </audio>
        {:else if isRejectDate2}
            <img src="{imgRejectCat2}" alt="Rizz Cat" class="w-full rounded mx-auto mb-5" />
            <h3 class="mb-5 text-lg text-pink-600 font-bold">I know you're feeling a bit shy about agreeing, but let's go for it!</h3>

            <audio controls volume="0.25" autoplay loop hidden>
                <source src="{audioRizzCat}" type="audio/mpeg">
                Your browser does not support the audio element.
            </audio>
        {:else}
            <img src="{imgRizzCat}" alt="Reject Cat 1" class="w-full rounded mx-auto mb-5" />
            <h3 class="mb-5 text-lg text-pink-600 font-bold">Let's spend the whole day together!</h3>
            <Button on:click={handleAcceptDate} color="green" class="me-2">Sure, let's do it!</Button>
            <Button on:click={handleRejectDate1} color="yellow">Nah, not really</Button>

            <audio controls autoplay loop hidden>
                <source src="{audioRizzCat}" type="audio/mpeg">
                Your browser does not support the audio element.
            </audio>
        {/if}
    </div>
</Modal>
