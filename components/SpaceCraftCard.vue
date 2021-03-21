<template>
  <div class="flex-1 bg-white flex flex-col justify-between">
    <div class="flex-1">
      <div class="flex-shrink-0">
        <img class="h-48 w-full object-cover" src="https://media-rd.s3.amazonaws.com/embedded_image/2018/02/Blue%20Origin.png" alt="">
      </div>
      <a href="#" class="block p-4">
        <h2 class="text-xl font-semibold text-gray-900 hover:underline">
          {{ data.capsule_serial }}
        </h2>
        <p class="text-xs">
          {{ launchDateTime }}
        </p>
        <span class="inline-flex items-center px-3 py-0.5 mt-3 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
          {{ data.status }}
        </span>
        <p class="mt-3 text-base text-gray-500">
          {{ data.details }}
        </p>
        <div class="mt-3">
          <h3 class="text-md text-gray-900 font-semibold">Missions:</h3>
          <ul class="list-decimal pl-5">
            <li v-for="mission in data.missions" class="text-xs">
              {{mission.name}} - {{mission.flight}}
            </li>
          </ul>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  props: ['data'],
  setup(props) {
    return { props }
  },
  computed: {
    launchDateTime(props) {
      let date = props.data.original_launch;
      return moment(date).format('DD.MM.YYYY HH:mm');//props.data.original_launch;
    }
  }

}
</script>

<style scoped>

</style>
