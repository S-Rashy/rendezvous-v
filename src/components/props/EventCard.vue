<script>
export default {
  name: "EventCard",
  emits: ["select-event"],

  props: {
    event: {
      type: Object,
      required: true,
    },
  },
  methods: {
    selectEvent() {
      this.$emit("select-event", this.event);
    },
  },
};
</script>

<template>
  <div
    class="max-w-[421px] rounded-[10px] shadow-lg flex flex-col border-2 border-transparent hover:border-[#9B51E0] transition-all duration-300 group"
    @click="selectEvent"
  >

    <img
      :src="event.image"
      :alt="event.title"
      class="rounded-t-[10px] border-b-2 border-transparent group-hover:border-[#9B51E0] transition-colors duration-300"
    />

    <div class="flex flex-col justify-center px-6 gap-4 py-4">
      <div>
        <h4 class="font-[Gilroy-Bold]">{{ event.title }}</h4>
        <p class="font-[Gilroy-Medium]">{{ event.date }}</p>
      </div>

      <p class="text-sm font-[Gilroy-Regular]">
        {{ event.description }}
      </p>

      <a
        :href="event.dLink"
        class="text-[#432361] flex gap-2 font-[Gilroy-Medium] transition-all duration-300 ease-in-out hover:font-[Gilroy-Bold] hover:tracking-wide"
        >View details
        <img
          src="../../assets/Arrow--up-right.svg"
          alt="Arrow"
          class="group-hover:animate-ping"
        />
      </a>
    </div>
  </div>
</template>
