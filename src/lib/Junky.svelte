<script lang="ts">
  import { projects } from './logics/projects';

  let activeIndex = 0;

  function select(i: number) {
    activeIndex = i;
  }
</script>

<section id="projects" class="min-h-screen flex flex-col justify-center p-4 md:p-8 max-w-6xl mx-auto">

  <div class="mb-10 px-4">
    <h2 class="text-5xl md:text-7xl font-bold text-white font-['Supermercado_One',sans-serif]">
      projects.
    </h2>
    <p class="text-xs md:text-sm text-gray-400 font-manrope mt-3">
      Projects I have worked on throughout my academic journey
    </p>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-[320px_1fr] gap-8 px-4 items-start">

    <ul role="listbox" aria-label="Project list" class="flex flex-col border-t border-white/10">
      {#each projects as project, i}
        <li>
          <button
            type="button"
            role="option"
            aria-selected={i === activeIndex}
            on:click={() => select(i)}
            on:mouseenter={() => select(i)}
            class="w-full text-left flex flex-col gap-1 py-4 pl-4 pr-2 border-b border-white/10 border-l-2 transition-colors duration-200
              {i === activeIndex
                ? 'border-l-[#8B6FF0] bg-[#8B6FF0]/[0.06]'
                : 'border-l-transparent hover:bg-white/[0.03]'}"
          >
            <span class="font-manrope text-base font-semibold {i === activeIndex ? 'text-orange-500' : 'text-gray-200'}">
              {project.title}
            </span>
            <span class="font-manrope text-xs text-gray-500">
              {project.subtitle}
            </span>
          </button>
        </li>
      {/each}
    </ul>

    <div class="flex flex-col">
      {#key activeIndex}
        <div class="w-full aspect-video overflow-hidden bg-white/[0.03] border border-white/10">
          {#if projects[activeIndex].isVideo}
            <video
              src={projects[activeIndex].media}
              autoplay
              loop
              muted
              playsinline
              class="w-full h-full object-cover"
            ></video>
          {:else}
            <img
              src={projects[activeIndex].media}
              alt={projects[activeIndex].title}
              class="w-full h-full object-cover"
            />
          {/if}
        </div>

        <p class="font-manrope text-sm leading-relaxed text-gray-300 max-w-[60ch] mt-5">
          {projects[activeIndex].description}
        </p>

        <div class="flex flex-wrap gap-2 mt-5">
          {#each projects[activeIndex].tags as tag}
            <span class="font-manrope text-[10px] text-[#C4B5FD] border border-[#8B6FF0]/35 px-2.5 py-1">
              #{tag}
            </span>
          {/each}
        </div>
      {/key}
    </div>

  </div>

</section>
