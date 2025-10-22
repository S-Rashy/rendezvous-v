<script>
export default {
  name: "Header",
};
</script>
<template>
  <header
    class="w-[90%] h-20 flex justify-between items-center mx-auto py-3 px-6 bg-white/60 rounded-[20px]"
  >
    <a href="#">
      <img src="../../assets/ren-logo.svg" alt="logo" />
    </a>

    <nav
      class="w-[356px] h-[52px] flex justify-between items-center gap-2 p-2 text-[#432361]"
    >
      <!-- <a
              href="#"
              class="relative group text-[#432361] font-[Gilroy-Bold]"
            >
              Discover
              <span
                class="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#432361] transition-all duration-300 ease-in-out group-hover:w-full"
              ></span>
            </a> -->
      <a
        href="#"
        class="p-2 hover:scale-105 hover:border-b-2 transition duration-300"
        >Discover</a
      >
      <a
        href="#"
        class="p-2 hover:scale-105 hover:border-b-2 transition duration-300"
        >About us</a
      >
      <a
        href="#"
        class="p-2 hover:scale-105 hover:border-b-2 transition duration-300"
        >FAQs</a
      >
      <a
        href="#"
        class="p-2 hover:scale-105 hover:border-b-2 transition duration-300"
        >Contact us</a
      >
    </nav>

    <div class="w-[205px] h-[44px] flex justify-between items-center gap-6">
      <a
        href="#"
        class="w-[61px] h-9 p-2 text-[#432361] hover:text-[#2a143d] hover:scale-105 transition duration-300"
      >
        Log in</a
      >
      <a
        href="#"
        class="w-[120px] h-[44px] px-6 py-3 bg-[#783EAD] flex items-center justify-center text-white rounded-[10px] hover:bg-[#5e2f89] hover:scale-105 transition duration-300 hover:shadow-lg"
      >
        Sign up</a
      >
    </div>
  </header>
</template>
