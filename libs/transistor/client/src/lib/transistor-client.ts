import 'isomorphic-fetch'

import type { User } from './types'

type TransistorClientOptions = {
  apiKey?: string
  apiUrl?: string
}

interface TransistorRequestOptions {
  headers: Record<string, any>
}

export class TransistorClient {
  private _apiKey?: string
  private _apiUrl = 'https://api.transistor.fm/v1'
  private _options: TransistorClientOptions

  public constructor(options: TransistorClientOptions) {
    this._options = options

    const { apiKey, apiUrl } = options

    if (apiKey) {
      this._apiKey = apiKey
    }

    if (apiUrl) {
      this._apiUrl = apiUrl
    }
  }

  public _request<T>(
    path: string,
    method = 'GET',
    options?: TransistorRequestOptions,
  ): Promise<T> {
    const headers = {
      ...(options?.headers || {}),
    }

    if (this._apiKey) {
      headers['x-api-key'] = this._apiKey
    }

    return fetch(`${this._apiUrl}${path}`, {
      method,
      ...(options || {}),
      headers,
    }).then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText)
      }

      return response.json() as Promise<T>
    })
  }

  // public analytics(
  //   id: string,
  //   start_date?: string,
  //   end_date?: string,
  // ): Promise<EpisodeAnalytics> {
  //   return this._request<EpisodeAnalytics>(`/analytics/${id}`)
  // }

  public episodes(showId: string): Promise<any> {
    return this._request(`/episodes?showId=${showId}`)
  }

  public me(): Promise<User> {
    return this._request('/')
  }

  public show(id: string): Promise<any> {
    return this._request(`/shows/${id}`)
  }

  public shows(): Promise<any> {
    return this._request('/shows')
  }
}
