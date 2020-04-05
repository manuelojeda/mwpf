import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBullseye, faSkull, faCrosshairs, faSkullCrossbones, faPercentage, faCompressArrowsAlt, faCircle } from '@fortawesome/free-solid-svg-icons'
import { faVuejs, faBootstrap, faFontAwesome, faGithub, faBattleNet } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
  faSkull,
  faBullseye,
  faCrosshairs,
  faSkullCrossbones,
  faPercentage,
  faCompressArrowsAlt,
  faCircle,
  faVuejs,
  faBootstrap,
  faFontAwesome,
  faGithub,
  faBattleNet
)

Vue.component('font-awesome-icon', FontAwesomeIcon)
