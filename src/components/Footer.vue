<script>
export default {
  name: "Footer",
};
</script>

<template>
     <footer
      class="w-full max-w-[1440px] bg-[#432361] h-[343px] text-white px-10 py-10 flex justify-between font-[Gilroy-Bold] mx-auto"
    >
      <div class="flex flex-col gap-4 w-[300px]">
        <h2 class="text-[32px]">rendezvous</h2>
        <p class="font-[Gilroy-Regular]">
          Your Personal Event Sherpa: Curating Awesome, One Click at a Time.
        </p>
      </div>

      <div class="w-[622px] flex justify-between px-5">
        <div class="flex flex-col gap-4">
          <h4 class="text-[20px]">Feature</h4>
          <a href="#" class="hover:text-[#000000]">Events discovery</a>
          <a href="#" class="hover:text-[#000000]">Ticketing</a>
        </div>

        <div class="flex flex-col gap-4">
          <h4 class="text-[20px]">Company</h4>
          <a href="#" class="hover:text-[#000000]">About us</a>
          <a href="#" class="hover:text-[#000000]">FAQs</a>
          <a href="#" class="hover:text-[#000000]">Careers</a>
          <a href="#" class="hover:text-[#000000]">Support</a>
        </div>

        <div class="flex flex-col gap-4">
          <h4 class="text-[20px]">Contact us</h4>
          <a href="#" class="hover:text-[#000000]">info@events.com</a>
          <a href="#" class="hover:text-[#000000]">+234 701 345 6789</a>
          <a href="#" class="w-[240px] hover:text-[#000000]"
            >Race Course, 8/9 Marina, Onikan, Lagos Lagos, 4aa Force Rd, Lagos
            Island 102273, Lagos</a
          >
        </div>
      </div>
    </footer>
  
</template>