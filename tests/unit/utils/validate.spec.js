import { validname, isExternal } from '@/utils/validate.js'

describe('Utils:validate', () => {
  it('validname', () => {
    expect(validname('admin')).toBe(true)
    expect(validname('editor')).toBe(true)
    expect(validname('xxxx')).toBe(false)
  })
  it('isExternal', () => {
    expect(isExternal('https://github.com/PanJiaChen/vue-element-admin')).toBe(true)
    expect(isExternal('http://github.com/PanJiaChen/vue-element-admin')).toBe(true)
    expect(isExternal('github.com/PanJiaChen/vue-element-admin')).toBe(false)
    expect(isExternal('/dashboard')).toBe(false)
    expect(isExternal('./dashboard')).toBe(false)
    expect(isExternal('dashboard')).toBe(false)
  })
})
