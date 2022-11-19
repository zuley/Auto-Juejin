import useModule from "@/composables/useModule";
import { useBrowserLocation } from "@vueuse/core"
import { watch } from "vue";

const location = useBrowserLocation()
console.log('2', location.value.pathname)

watch(location.value, () => {
  console.log('自动', location.value.pathname)
}, {
  immediate: true,
  deep: true
})

useModule({
  rules: ["*"],
  load: () => import("@/module/setings")
})

useModule({
  rules: [
    "/user/center/signin"
  ],
  load: () => import("@/module/signin")
})
