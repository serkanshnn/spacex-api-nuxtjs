<template>
  <div class="relative bg-gray-50">
    <div class="relative max-w-7xl mx-auto">
      <div class="max-w-lg mx-auto grid gap-5 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 lg:max-w-none pt-4 pb-4">
        <div class="flex flex-col rounded-lg shadow-lg overflow-hidden" v-for="data in results">
          <space-craft-card :data="data"></space-craft-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "@nuxtjs/composition-api";
import usePromise from "@/plugins/use-promise";
import axios from "axios";
import SpaceCraftCard from "~/components/SpaceCraftCard";

export default {
  components: {
    SpaceCraftCard
  },
  setup() {
    let results = ref(null);
    const getSpaceCrafts = usePromise(() =>
      axios.get("https://api.spacexdata.com/v3/capsules"));
    getSpaceCrafts.createPromise();
    results = getSpaceCrafts.results;
    return {results};
  }
}
</script>
