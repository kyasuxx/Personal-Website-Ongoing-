<!-- src/lib/DiscordStatus.svelte -->
<script lang="ts">
  import { onMount, onDestroy } from 'svelte';


  const DISCORD_ID = '462478650676084747';
  interface LanyardData {
    discord_status: 'online' | 'idle' | 'dnd' | 'offline';
    activities: Array<{
      name: string;
      details?: string;
      state?: string;
      type: number;
    }>;
    spotify?: {
      song: string;
      artist: string;
      album_art_url: string;
    };
  }

  let lanyard: LanyardData | null = null;
  let socket: WebSocket;
  let isOpen = false;

  const statusColors = {
    online: 'bg-green-500 shadow-[0_0_10px_#22c55e]',
    idle: 'bg-amber-500 shadow-[0_0_10px_#f59e0b]',
    dnd: 'bg-red-500 shadow-[0_0_10px_#ef4444]',
    offline: 'bg-gray-500'
  };

  function toggleSidebar() {
    isOpen = !isOpen;
  }

  onMount(() => {
    socket = new WebSocket('wss://api.lanyard.rest/socket');

    socket.onopen = () => {
      socket.send(
        JSON.stringify({
          op: 2,
          d: { subscribe_to_id: DISCORD_ID }
        })
      );
    };

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.op === 1) {
        setInterval(() => {
          socket.send(JSON.stringify({ op: 3 }));
        }, data.d.heartbeat_interval);
      } else if (data.t === 'INIT_STATE' || data.t === 'PRESENCE_UPDATE') {
        lanyard = data.d;
      }
    };
  });

  onDestroy(() => {
    if (socket) socket.close();
  });
</script>

<!-- Fixed Top-Right Container -->
<div class="fixed top-5 right-5 z-50 flex flex-col items-end gap-3 font-['Poppins',sans-serif]">
  <!-- Mini Clickable Button -->
  <button
    on:click={toggleSidebar}
    class="flex items-center gap-3 bg-black/60 backdrop-blur-md border border-purple-500/40 hover:border-purple-400 px-4 py-2.5 rounded-full shadow-[0_0_15px_rgba(127,0,255,0.4)] hover:shadow-[0_0_20px_rgba(255,20,147,0.6)] hover:scale-105 transition-all duration-300 cursor-pointer"
  >
    <div class="relative flex items-center justify-center">
      {#if lanyard}
        <span class="w-3.5 h-3.5 rounded-full {statusColors[lanyard.discord_status]} transition-all duration-300"></span>
      {:else}
        <span class="w-3.5 h-3.5 rounded-full bg-gray-500 animate-pulse"></span>
      {/if}
    </div>
    <span class="text-white font-['Supermercado_One',sans-serif] text-sm tracking-wide">
      {isOpen ? 'close status' : 'live status'}
    </span>
  </button>

  <!-- Floating Mini Sidebar Dropdown -->
  {#if isOpen}
    <div
      class="w-72 bg-black/80 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-4 text-white shadow-[0_10px_30px_rgba(0,0,0,0.8)] flex flex-col gap-3 transition-all duration-300 animate-in fade-in slide-in-from-top-2"
    >
      <!-- Header -->
      <div class="flex items-center justify-between border-b border-purple-500/20 pb-2">
        <span class="font-['Supermercado_One',sans-serif] text-purple-300 text-lg">Discord Activity</span>
        {#if lanyard}
          <span class="text-xs uppercase tracking-widest text-gray-400 font-bold">{lanyard.discord_status}</span>
        {/if}
      </div>

      <!-- Spotify Listening -->
      {#if lanyard?.spotify}
        <div class="flex items-center gap-3 bg-purple-950/50 p-2.5 rounded-xl border border-purple-500/30">
          <img src={lanyard.spotify.album_art_url} alt="Album Art" class="w-12 h-12 rounded-lg shadow-md shrink-0" />
          <div class="overflow-hidden text-xs">
            <p class="text-fuchsia-400 font-bold truncate">🎵 Spotify</p>
            <p class="text-white font-medium truncate">{lanyard.spotify.song}</p>
            <p class="text-gray-400 truncate">by {lanyard.spotify.artist}</p>
          </div>
        </div>
      {:else if lanyard?.activities && lanyard.activities.length > 0 && lanyard.activities[0].name !== 'Custom Status'}
        <!-- Game Activity -->
        <div class="bg-purple-950/40 p-3 rounded-xl border border-purple-500/20 text-xs">
          <p class="text-purple-300 font-semibold mb-0.5">Currently Playing</p>
          <p class="text-white text-sm font-bold truncate">{lanyard.activities[0].details}</p>
          <!-- {#if lanyard.activities[0].details}
            <p class="text-gray-400 text-xs truncate mt-1">{lanyard.activities[0].details}</p>
          {/if} -->
        </div>
      {:else}
        <!-- Chilling / Inactive -->
        <div class="text-center py-2 text-gray-400 text-xs italic">
          No active games or Spotify tracks right now.
        </div>
      {/if}
    </div>
  {/if}
</div>
