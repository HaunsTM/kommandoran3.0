import Vue from 'vue'
import Router from 'vue-router'

import HomeAssistant from '@/components/HomeAssistant'
import ScreenSaver from '@/components/ScreenSaver'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home-assistant',
      component: HomeAssistant
    },
    {
      path: '/screen-saver',
      name: 'screensaver',
      component: ScreenSaver
    },
  ]
})