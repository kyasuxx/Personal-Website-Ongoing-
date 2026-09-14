
<script lang="ts">
  import { onMount } from 'svelte';
  import { projects, CarouselController } from './logics/projects';
  import './logics/projects.css';

  let carouselElement: HTMLDivElement;
  const controller = new CarouselController();

  onMount(() => {
    if (carouselElement) {
      controller.bind(carouselElement);
    }
  });
</script>

<section id="projects" class="min-h-screen flex flex-col justify-center p-4 md:p-8 max-w-7xl mx-auto overflow-hidden">

  <div class="mb-8 px-4">
    <h2 class="text-5xl md:text-7xl font-bold text-white font-['Supermercado_One',sans-serif]">
      projects.
    </h2>
    <p class="text-xs md:text-sm uppercase tracking-widest text-gray-400 font-manrope mt-6">
      Projects I have worked on throughout my academic journey
    </p>
  </div>

  <div
    bind:this={carouselElement}
    on:mousedown={controller.handleMouseDown}
    on:mouseleave={controller.handleMouseLeave}
    on:mouseup={controller.handleMouseUp}
    on:mousemove={controller.handleMouseMove}
    role="region"
    aria-label="Projects showcase carousel"
    class="carousel-track"
  >
    {#each projects as project}
      <div class="project-card border border-white/20 rounded-3xl p-6 bg-black/20 backdrop-blur-sm shadow-2xl flex flex-col justify-between hover:border-white/40 hover:-translate-y-1 transition-all duration-300">

        <div class="w-full h-48 rounded-2xl overflow-hidden bg-white/5 border border-white/10 mb-6 flex items-center justify-center">
          {#if project.isVideo}
            <video
              src={project.media}
              autoplay
              loop
              muted
              playsinline
              class="w-full h-full object-cover pointer-events-none"
            ></video>
          {:else}
            <img
              src={project.media}
              alt={project.title}
              class="w-full h-full object-cover pointer-events-none"
            />
          {/if}
        </div>

        <div class="flex-1 flex flex-col justify-between">
          <div>
            <h3 class="text-2xl font-bold text-white font-['Supermercado_One',sans-serif] leading-tight mb-1">
              {project.title}
            </h3>
            <p class="text-xs text-[#E9D5FF] font-manrope mb-3">{project.subtitle}</p>
            <p class="text-xs md:text-sm text-gray-300 font-manrope leading-relaxed line-clamp-3 mb-6">
              {project.description}
            </p>
          </div>

          <div class="flex flex-wrap gap-2 pt-4 border-t border-white/10">
            {#each project.tags as tag}
              <span class="px-2.5 py-1 rounded-full text-[10px] font-manrope bg-[#1E1035] text-[#E9D5FF] border border-[#3B185F]">
                #{tag}
              </span>
            {/each}
          </div>
        </div>

      </div>
    {/each}
  </div>

</section>
