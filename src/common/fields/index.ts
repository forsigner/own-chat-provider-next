import { FomirPlugin } from 'fomir'

export const FomirCustom: FomirPlugin = {
  components: {},
  validators: {
    moreThan(value, validator, { form }) {
      const [prop, msg] = validator
      const target = form.getValues<any>()?.[prop]
      return Number(value) > Number(target) ? '' : msg
    },
    isJSON: (value: any, msg) => {
      try {
        JSON.parse(value)
        return undefined
      } catch (error) {
        return msg
      }
    },
  },
}

export default FomirCustom
