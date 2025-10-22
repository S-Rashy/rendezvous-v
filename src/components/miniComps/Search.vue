<script>
export default {
  name: "Search",
};
</script>

<template>
  <form
    action=""
    class="bg-white flex items-center justify-between w-[640px] h-[100px] rounded-[20px] px-5"
  >
    <div class="text-[#4F4F4F] font-[Gilroy-Regular]">
      <img
        src="../../assets/Search.svg"
        alt="Search"
        class="relative top-8 left-2"
      />

      <input
        type="search"
        placeholder="Search for an event"
        class="w-[280px] h-[51px] pl-10 border-r border-[#4F4F4F] outline-none"
      />
    </div>

    <select
      name=""
      id=""
      class="w-[150px] px-4 outline-none text-[#4F4F4F] font-[Gilroy-Regular]"
    >
      <option value="">Categories</option>
      <option value="">All</option>
      <option value="">Comedy</option>
      <option value="">Religious</option>
      <option value="">Tech</option>
      <option value="">Health</option>
      <option value="">Fitness</option>
      <option value="">Sports</option>
      <option value="">Education</option>
    </select>

    <a
      href="#"
      class="w-[120px] h-[44px] px-6 py-3 bg-[#783EAD] flex items-center justify-center text-white rounded-[10px] hover:bg-[#5e2f89] hover:scale-105 transition duration-300 hover:shadow-lg"
    >
      Search</a
    >
  </form>
</template>
