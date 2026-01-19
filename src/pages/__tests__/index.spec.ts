import { describe, expect, it } from 'vitest'

import Index from '@/pages/index.vue'
import { mount } from '@vue/test-utils'

describe('App', () => {
  it('mounts renders properly', () => {
    const wrapper = mount(Index)
    expect(wrapper.text()).toContain('index')
  })
})
