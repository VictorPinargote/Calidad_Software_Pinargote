// src/api/http.test.ts (agregado al final del archivo del Módulo 4)
import { useToastStore } from '@/store/toast.store'

beforeEach(() => {
  useToastStore.setState({ message: null })
})

describe('http.ts — interceptor de response (toast de error)', () => {
  it('should show the message from the API response on error', async () => {
    useAuthStore.getState().setToken('fake-jwt-token')
    server.use(
      mswHttp.get(`${BASE_URL}/ping`, () =>
        HttpResponse.json({ success: false, message: 'Recurso no encontrado', data: null }, { status: 404 }),
      ),
    )

    await expect(http.get('/ping')).rejects.toMatchObject({ response: { status: 404 } })
    expect(useToastStore.getState().message).toBe('Recurso no encontrado')
  })

  it('should fall back to a generic message when the response has no body', async () => {
    useAuthStore.getState().setToken('fake-jwt-token')
    server.use(mswHttp.get(`${BASE_URL}/ping`, () => new HttpResponse(null, { status: 500 })))

    await expect(http.get('/ping')).rejects.toMatchObject({ response: { status: 500 } })
    expect(useToastStore.getState().message).toBe('Ocurrió un error inesperado')
  })
})