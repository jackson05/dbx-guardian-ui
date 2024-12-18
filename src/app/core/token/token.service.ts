import { Token } from './../../../../node_modules/acorn/dist/acorn.d';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})

export class TokenService {

  private readonly TOKEN_VALUE = 'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJydjdUMjhnS0luTHdNYjMzSzBhOEJxbk4zd3BsQ0w2QTdOcHlwajZhU1hrIn0.eyJleHAiOjE3MzQ0ODQyODQsImlhdCI6MTczNDQ4Mzk4NCwianRpIjoiMWVmOTE4N2QtNWM0NS00YmFmLTg3OGUtYTI1MTc3ZGRjMTUwIiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo4MDgxL3JlYWxtcy9kYngtZ3VhcmRpYW4iLCJhdWQiOiJhY2NvdW50Iiwic3ViIjoiNzM5OGRkMWUtZGUxZS00ZDFjLWIxM2QtZTA1NjA1Yjg2NjQ2IiwidHlwIjoiQmVhcmVyIiwiYXpwIjoiZGJ4LWd1YXJkaWFuLWFwaSIsInNpZCI6IjM3NzFiN2Y3LThkYTEtNDdiZi1iOTc0LTYyMWM1MjU5ZjE5NCIsImFjciI6IjEiLCJhbGxvd2VkLW9yaWdpbnMiOlsiKiJdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiZGVmYXVsdC1yb2xlcy1kYnggZ3VhcmRpYW4iLCJvZmZsaW5lX2FjY2VzcyIsImFkbWluIiwidW1hX2F1dGhvcml6YXRpb24iXX0sInJlc291cmNlX2FjY2VzcyI6eyJkYngtZ3VhcmRpYW4tYXBpIjp7InJvbGVzIjpbImNsaWVudF9hZG1pbiJdfSwiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJwcm9maWxlIGVtYWlsIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsIm5hbWUiOiJKYWNrc29uIFJ1Z2FtYmEiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJqYWNrc29uIiwiZ2l2ZW5fbmFtZSI6IkphY2tzb24iLCJmYW1pbHlfbmFtZSI6IlJ1Z2FtYmEiLCJlbWFpbCI6ImphY2tzb241Zy5iaUBnbWFpbC5jb20ifQ.kiASlYjlCSMagL7vkG0Q8QUbOIyQVgHO5HTXWRhaUiLMMPYhap5yo1qKFGNlgzFx6f4hYfxNlr6qJd7SpJq36Z3lKBDDXdTNY0jfxo79jyhnp-zJBh0vVjPUKbFs4z6tKWbHkFJlEvbFerKgsc78C4jBqJaBqRKDiAz3QEUBN-U7C84EuFa--heaDdF21ZWRbgRDf2ZHJoiKU1SRObtg2u0RIiQKyGPF9-UmTAF2sNxPQ-jwlmFz-3qA8lb4Rdb11WPVhDmW6ECcKo_MfUMkWWKk57R4rQayDc-PPjWHoKU6x6vL_fXBM8sty7elGdWvGCRpMrenw6Cekypwwwlfxg';
  private readonly TOKEN_KEY="auth-token";

  saveToken(): void {
    localStorage.setItem(this.TOKEN_KEY, this.TOKEN_VALUE);
    console.log('Token saved: ', this.TOKEN_KEY);
  }

  // Retrieve the token
  getToken(): string | null {
    console.log('Token retrieved: ', this.TOKEN_KEY);
    return localStorage.getItem(this.TOKEN_KEY);
  }

  // Remove the token
  clearToken(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    console.log('Token removed');
  }
}
