<script>
import EventCard from "./props/EventCard.vue";
import Event1 from "../assets/event1.svg";
import Event2 from "../assets/event2.svg";
import Event3 from "../assets/event3.svg";

export default {
  name: "TrendingEvents",

  components: {
    EventCard,
  },
  emits: ["select-event"],

  data() {
    return {

      events: [
        {
          image: Event1,
          title: "ISWIS Live show",
          date: "Sun, Oct 3rd ● 6pm",
          // dLink: "/Details",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
          image: Event2,
          title: "NATIV5 show",
          date: "Tue, Oct 5th ● 8pm",
          // dLink: "details.html",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
          image: Event3,
          title: "Basket Mouth Unprovoked",
          date: "Wed, Oct 6th ● 7pm",
          // dLink: "details.html",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
      ],
    };
  },
  methods: {
    passSelected(event) {
      this.$emit("select-event", event);
    },
  },
};
</script>
<template>
  <section class="p-[30px] max-w-[1440px] mx-auto">

    <div class="flex justify-between items-center px-[20px] pb-[30px]">
      <h3 class="text-[32px]">Trending events</h3>
      <a
        href=""
        class="text-[#432361] flex gap-2 group font-[Gilroy-Medium] transition-all duration-300 ease-in-out hover:font-[Gilroy-Bold] hover:tracking-wide"
      >
        View all trending events
        <img
          src="../assets/Arrow--up-right.svg"
          alt="Arrow"
          class="mt-1 group-hover:animate-ping"
        />
      </a>
    </div>

    <section id="eventContainer" class="grid grid-cols-3 px-[20px] gap-6">
      <EventCard
        v-for="(event, index) in events"
        :key="index"
        :event="event"
        @select-event="passSelected"
      />
    </section>
  </section>
</template>
