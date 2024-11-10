import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import IndexTagline from '../IndexTagline.vue'

describe('IndexTagline', () => {
  const wrapper = mount(IndexTagline)

  it('renders an p element', () => {
    expect(wrapper.findAll('p')).toHaveLength(1)
  })

  it('renders a tagline', () => {
    expect(wrapper.text()).toContain('Never forget to feed your pet again')
  })
})
