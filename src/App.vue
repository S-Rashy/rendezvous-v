<script > 
import Banner from './components/Banner.vue';
import Discover from './components/Discover.vue';
import Footer from './components/Footer.vue';
import TrendingEvents from './components/TrendingEvents.vue';
import Details from './components/Details.vue';
export default {
  components: {
    Banner,
    TrendingEvents,
    Discover,
    Footer,
    Details
  },
  data(){
    return{
      selectedEvent: null
      
    }
  },
  methods: {
    getSelection(event){
      this.selectedEvent = event
      console.log(event);     
    },
  }
 
};
</script>

<template>
 
 
<Banner />
<!-- <div class="p-10 font-semibold text-lg" > Selected Event: {{ selectedEvent? selectedEvent.title : 'no event selected' }} </div> -->
<TrendingEvents @select-event ="getSelection"/>
<Discover/>
<Footer/>
<!-- <Details/> -->
 <!-- <router-link to="/details"> <div>details</div> </router-link> -->
 <!-- <RouterView/> -->

</template>

<style scoped></style>
