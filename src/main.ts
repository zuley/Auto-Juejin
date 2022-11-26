import useModule from "@/composables/useModule";

useModule({
  rules: ["*"],
  load: () => import("@/module/global")
})

useModule({
  rules: [
    "/user/center/signin"
  ],
  load: () => import("@/module/signin")
})
