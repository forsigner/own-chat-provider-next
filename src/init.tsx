import { Fomir } from 'fomir'
import { devtools } from 'stook-devtools'
import FomirCustom from './common/fields'
import FomirBoneUI from './common/fomir-bone-ui'
import { initFower } from './common/initFower'
import { initI18n } from './common/initI18n'

export function init() {
  initFower()
  initI18n()

  devtools.init()

  Fomir.use(FomirBoneUI)
  Fomir.use(FomirCustom)
}
