
<script lang="ts">
  import rikka from '../assets/img/rikka.jpg'
</script>

<section id="about" class="min-h-screen flex items-center justify-center p-4 md:p-8">

  <div class="w-full max-w-6xl border border-white/20 rounded-3xl p-8 md:p-16 flex flex-col gap-12 bg-black/20 backdrop-blur-sm shadow-2xl">
    <div class="flex flex-col md:flex-row items-center gap-12 w-full">
      <div class="flex-1 flex flex-col items-start text-white">
        <h2 class="text-5xl md:text-7xl font-bold font-['Supermercado_One',sans-serif] leading-tight mb-8">
          about me.
        </h2>
        <p class="text-sm md:text-base text-gray-300 leading-relaxed font-manrope max-w-lg">
          Computer Science graduate and full-stack developer with a strong focus on backend architecture, API design, and system security. Experienced in building web applications with Python, Flask, PHP, and React, alongside data-driven tools and NLP integrations. Passionate about clean code, scalable database management, and intuitive user experiences.
        </p>
        <div class="w-full pt-6 border-white/10 flex flex-col justify-center">
          <h3 class="text-xs uppercase tracking-widest text-gray-400 font-manrope mb-4">languages used</h3>
          <ul class="flex flex-wrap gap-3  font-manrope text-sm text-gray-200">
            <li class="badge-item text-orange-400 hover:scale-110 transition-transform ease-in-out">HTML</li>
            <li class="badge-item text-cyan-500 hover:scale-110 transition-transform ease-in-out">CSS</li>
            <li class="badge-item text-yellow-300 hover:scale-110 transition-transform ease-in-out">JavaScript</li>
            <li class="badge-item hover:scale-110 transition-transform ease-in-out">
              <span class="bg-linear-to-r from-cyan-400 to-yellow-300 bg-clip-text text-transparent">
                Python
              </span>
            </li>
            <li class="badge-item text-cyan-200 hover:scale-110 transition-transform ease-in-out">React</li>
            <li class="badge-item text-purple-500 hover:scale-110 transition-transform ease-in-out">PHP</li>
            <li class="badge-item text-pink-500 hover:scale-110 transition-transform ease-in-out">SQL</li>
            <li class="badge-item text-blue-400 hover:scale-110 transition-transform ease-in-out">Flask</li>
          </ul>
        </div>
      </div>

      <div class="flex-1 w-full flex justify-center md:justify-end">
        <div class="relative w-full max-w-sm md:max-w-md">
          <img src="{rikka}" alt="Avatar" class="w-full h-full rounded-3xl object-cover shadow-[0_0_30px_rgba(0,0,0,0.5)]">
          <div class="absolute inset-0 bg-black/10 rounded-3xl"></div>
        </div>
      </div>
    </div>


  </div>

</section>
