/** @jest-environment node */
import type { NextApiRequest, NextApiResponse } from 'next'

const createContact = jest.fn()
jest.mock('resend', () => ({
  Resend: jest
    .fn()
    .mockImplementation(() => ({ contacts: { create: createContact } })),
}))

describe('newsletter subscriptions', () => {
  let handler: typeof import('../src/pages/api/newsletter/subscribe').default
  const originalAudienceId = process.env.RESEND_AUDIENCE_ID

  beforeAll(async () => {
    process.env.RESEND_AUDIENCE_ID = 'test-audience'
    handler = (await import('../src/pages/api/newsletter/subscribe')).default
  })
  afterAll(() => {
    if (originalAudienceId === undefined) delete process.env.RESEND_AUDIENCE_ID
    else process.env.RESEND_AUDIENCE_ID = originalAudienceId
  })
  beforeEach(() => createContact.mockReset())

  async function subscribe() {
    const json = jest.fn()
    const res = {
      status: jest.fn().mockReturnThis(),
      json,
    } as unknown as NextApiResponse
    await handler(
      {
        method: 'POST',
        body: JSON.stringify({ email: 'reader@example.com' }),
      } as NextApiRequest,
      res,
    )
    return { res, json }
  }

  it('does not acknowledge a subscription rejected by the provider', async () => {
    createContact.mockResolvedValue({
      data: null,
      error: { message: 'Rate limited' },
    })
    const { res, json } = await subscribe()
    expect(res.status).toHaveBeenCalledWith(502)
    expect(json).toHaveBeenCalledWith(
      expect.objectContaining({ success: false }),
    )
  })

  it('acknowledges a subscription accepted by the provider', async () => {
    createContact.mockResolvedValue({ data: { id: 'contact' }, error: null })
    const { res, json } = await subscribe()
    expect(res.status).toHaveBeenCalledWith(200)
    expect(json).toHaveBeenCalledWith({ success: true })
  })
})
