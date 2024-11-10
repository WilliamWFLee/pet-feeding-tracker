import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import IndexHeading from '../IndexHeading.vue'

describe('IndexHeading', () => {
  const wrapper = mount(IndexHeading)

  it('renders an h1 element', () => {
    expect(wrapper.findAll('h1')).toHaveLength(1)
  })

  it('renders the text', () => {
    expect(wrapper.text()).toContain('Pet Feeding Tracker')
  })
})
