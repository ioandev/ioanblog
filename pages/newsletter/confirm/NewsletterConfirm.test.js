
import { getInitialised } from "../../testHelpers";
describe('NewsletterConfirm', () => {
  const axiosGetMock = jest.fn()
  const axiosPostMock = jest.fn()

  var getInitialised2 = async function(thumbprint) {
    if (thumbprint == undefined) throw "thumbprint not provided"

    return await getInitialised(
      require('./_thumbprint').default,
      {
        thumbprint: thumbprint
      },
      {
        get: axiosGetMock,
        post: axiosPostMock
      })
  }

  it('calls axios', async () => {
    let result = await getInitialised2("thumbprint")
    expect(axiosPostMock.mock.calls).toEqual([
      ["/api/newsletter/confirm", {
        "thumbprint": "thumbprint"
      }]
    ])
  })
})
