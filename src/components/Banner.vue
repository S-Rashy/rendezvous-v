<script>
import Header from './miniComps/Header.vue';
import Search from './miniComps/Search.vue';
export default {
  name: 'Banner',
  components: {
    Header,
    Search
  }
};
</script>
<template>


 <main
      class="w-full max-w-[1440px] h-screen bg-[url('./assets/bg-img.svg')] bg-cover py-[4%] font-[Gilroy-Bold] flex flex-col justify-between mx-auto"
    >
         <Header/>


      <div class="flex justify-evenly items-end">
        <h3 class="text-white text-[32px] w-[531px]">
          Ready to Rock? Discover the Hottest Events Here – Your Calendar's New
          Best Friend!
        </h3>

            <Search/>

      </div>
    </main>


    
</template>

<style scoped>

</style>
