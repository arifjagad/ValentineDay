<script>
    import "../app.css";
    import CollectReward from './components/Reward.svelte';

    const bgImage = './static/assets/images/bg-valentine.jpg';
    const imageWelcome  = './static/assets/images/welcome2.png';
    const imageEnvelope  = './static/assets/images/envelope.png';
    const imageCloud  = './static/assets/images/single-cloud.png';
</script>

<div class="object-cover h-dvh" style="background-image: url({bgImage})">
    <div class="flex flex-col items-center justify-center h-full">

        <!-- Content -->
        <div class="absolute text-center xl:mt-20 lg:mt-20 md:mt-20 mt-12">
            <p class="happy-text">Happy</p>
            <p class="valentine-text">Valentine's</p>
            <p class="valentine-text">Day</p>

            <div class="xl:mt-16 lg:mt-16 md:mt-16 mt-4">
                <CollectReward />
            </div>
        </div>

        <!-- Image -->
        <img class="xl:w-1/2 lg:w-2/3 sm:w-10/12 p-1" src={imageWelcome} alt="Welcome"/>
    </div>

    <!-- Assets -->
    <img src="{imageCloud}" class="2xl:hidden xl:hidden lg:hidden md:hidden absolute top-0 left-0 w-1/4 ml-8 mt-28" alt="Cloud"/>
    <img src="{imageEnvelope}" class="2xl:hidden xl:hidden lg:hidden md:hidden absolute bottom-0 right-0 w-1/5" alt="Envelope"/>
    <img src="{imageEnvelope}" class="2xl:hidden xl:hidden lg:hidden md:hidden absolute top-0 right-0 rotate-45 w-1/6 mr-4 mt-40" alt="Envelope"/>
</div>