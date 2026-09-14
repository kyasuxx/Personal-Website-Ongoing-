
<script lang="ts">
  import rikka from '../assets/img/rikka.jpg'
  import avatarImg from '../assets/img/Carrera.jpg';
  import discordIcon from '../assets/img/discord-round-color-icon.png';
  import pixelCityBg from '../assets/img/pixel_city.png';
  import Projects from './Junky.svelte'
  import About from './About.svelte';
  import DiscordStatus from './status.svelte';
</script>

<main class="relative min-h-screen font-['Poppins',sans-serif]">

  <div
    class="fixed inset-0 -z-10 bg-center bg-cover bg-no-repeat before:absolute before:inset-0 before:bg-black/60"
    style="background-image: url({pixelCityBg});"
  ></div>


  <section class="h-screen flex flex-col items-center justify-center">

    <div class="z-10 text-center relative group inline-block rounded-[500px] overflow-hidden">
        <img src={rikka}  alt="Kyasu Avatar" class="w-87.5 block mx-auto" />
        <div class="absolute inset-0 bg-black/10"></div>
    </div>


    <div class="z-10 relative inline-block text-center">
      <h1 class="text-[100px] text-(--color-text-heading) font-['Supermercado_One',sans-serif] font-normal text-center relative inline-block mb-1 leading-none">
        ashumi
      </h1>
      <h3 class="absolute -bottom-3.75 right-2.5 m-0 flex items-center text-white font-['Supermercado_One',sans-serif] font-normal text-[20px] gap-1.25">
        <img src={discordIcon} alt="Discord Icon" class="w-6.5" />
        @kyasu_xx
      </h3>

      <DiscordStatus />
    </div>


    <div class="z-10 mt-10 flex flex-row gap-12.5">
      <a href="#uids" class="text-white bg-[#4B0082] bg-linear-to-br from-[#6a0dad] to-[#9b30ff] rounded-[10px] p-5 font-['Supermercado_One',sans-serif] font-normal text-[20px] shadow-[0_0_15px_#7f00ff,0_0_20px_#7f00ff,0_0_30px_#7f00ff] hover:shadow-[0_0_15px_#FF1493,0_0_30px_#FF1493,0_0_45px_#FF1493] hover:bg-white hover:-translate-y-2.5 transition-all duration-300 ease-in-out">
        <h2>projects</h2>
      </a>
      <a href="#about" class="text-white bg-[#4B0082] bg-linear-to-br from-[#6a0dad] to-[#9b30ff] rounded-[10px] p-5 font-['Supermercado_One',sans-serif] font-normal text-[20px] shadow-[0_0_15px_#7f00ff,0_0_20px_#7f00ff,0_0_30px_#7f00ff] hover:shadow-[0_0_15px_#FF1493,0_0_30px_#FF1493,0_0_45px_#FF1493] hover:bg-white hover:-translate-y-2.5 transition-all duration-300 ease-in-out">
        <h2>about me</h2>
      </a>
    </div>
  </section>

  <!-- about -->
  <About />

  <!-- projects list -->
  <Projects />
</main>
