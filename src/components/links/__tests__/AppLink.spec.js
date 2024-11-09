import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { createRouter, createWebHistory } from 'vue-router'

import AppLink from '../AppLink.vue'

const MockView = {
  template: '<div></div>',
}

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'index',
      component: MockView,
    },
  ],
})

const createAppLinkWrapper = (to) => {
  return mount(AppLink, {
    props: {
      to: to,
    },
    slots: {
      default: 'Test Link',
    },
    global: {
      plugins: [router],
    },
  })
}

describe('AppLink', () => {
  const wrapper = createAppLinkWrapper({ name: 'index' })

  test('it renders the text given in the slot', () => {
    expect(wrapper.text()).toContain('Test Link')
  })

  test('it renders an <a> tag', () => {
    expect(wrapper.findAll('a')).toHaveLength(1)
  })

  describe("if the 'to' prop is external", () => {
    const wrapper = createAppLinkWrapper('http://example.test')
    const link = wrapper.get('a')

    test("it sets the attributes 'noreferrer' and 'noopener'", () => {
      expect(link.attributes()).toHaveProperty('rel')
      expect(link.attributes().rel).toContain('noreferrer')
      expect(link.attributes().rel).toContain('noopener')
    })

    test("it sets the target to '_blank'", () => {
      expect(link.attributes()).toMatchObject({ target: '_blank' })
    })
  })
})
