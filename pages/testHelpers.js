
import { shallowMount } from "@vue/test-utils";
var getInitialised = async function (Page, params, $axios) {
  if (!Page.asyncData) {
    return shallowMount(Page);
  }

  let originalData = {}
  if (Page.data != null) {
    originalData = Page.data()
  }
  const asyncData = await Page.asyncData({
    params,
    error: jest.fn(),
    $axios
  })
  Page.data = function () {
    return {
      ...originalData,
      ...asyncData
    }
  }

  return shallowMount(Page)
}

export {getInitialised}
