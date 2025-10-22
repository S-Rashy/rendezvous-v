<script>
export default {
  name: "Discover",
};
</script>

<template>
     <section
      class="flex py-[30px] px-[50px] my-10 gap-8 max-w-[1440px] mx-auto font-[Gilroy-Medium]"
    >
      <div class="w-[34%] mt-5 flex flex-col gap-6">
        <h3 class="text-[32px] max-w-[393px]">
          Discover a World of Events Tailored Just for You
        </h3>
        <a
          href="#"
          class="w-[154px] h-[44px] px-5 py-3 bg-[#783EAD] flex items-center justify-center text-white rounded-[10px] hover:bg-[#5e2f89] hover:scale-105 transition duration-300 hover:shadow-lg"
        >
          View all events</a
        >
      </div>

      <div class="grid grid-cols-2 gap-6 w-[64%]">
        <div
          class="bg-black/50 bg-[url('./assets/online.svg')] bg-cover bg-blend-multiply max-w-[421px] h-[240px] flex justify-center items-center rounded-[10px] hover:bg-black/10 transition duration-300 hover:scale-105 hover:shadow-2xl"
        >
          <p class="text-white text-2xl">Online Events</p>
        </div>
        <div
          class="bg-black/50 bg-[url('./assets/physical.svg')] bg-cover bg-blend-multiply max-w-[421px] h-[240px] flex justify-center items-center rounded-[10px] hover:bg-black/10 transition duration-300 hover:scale-105 hover:shadow-2xl"
        >
          <p class="text-white text-2xl">Physical Events</p>
        </div>
        <div
          class="bg-black/50 bg-[url('./assets/hybrid.svg')] bg-cover bg-blend-multiply max-w-[421px] h-[240px] flex justify-center items-center rounded-[10px] hover:bg-black/10 transition duration-300 hover:scale-105 hover:shadow-2xl"
        >
          <p class="text-white text-2xl">Hybrid Events</p>
        </div>
      </div>
    </section>
</template>