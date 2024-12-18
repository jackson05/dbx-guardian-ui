import { Token } from './../../../../node_modules/acorn/dist/acorn.d';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})

export class TokenService {

  private readonly TOKEN_VALUE = 'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJydjdUMjhnS0luTHdNYjMzSzBhOEJxbk4zd3BsQ0w2QTdOcHlwajZhU1hrIn0.eyJleHAiOjE3MzQzOTY3NjIsImlhdCI6MTczNDM5NjQ2MiwianRpIjoiZWEyM2I0NDYtMmIxOS00ZjFmLTgxODAtYzBjZWE2MTM4ZmViIiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo4MDgxL3JlYWxtcy9kYngtZ3VhcmRpYW4iLCJhdWQiOiJhY2NvdW50Iiwic3ViIjoiNzM5OGRkMWUtZGUxZS00ZDFjLWIxM2QtZTA1NjA1Yjg2NjQ2IiwidHlwIjoiQmVhcmVyIiwiYXpwIjoiZGJ4LWd1YXJkaWFuLWFwaSIsInNpZCI6IjE3ZDdlMzE4LTEwNDEtNGE1MS1hYjJkLTAzYWU0ODc0MDM3ZCIsImFjciI6IjEiLCJhbGxvd2VkLW9yaWdpbnMiOlsiKiJdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiZGVmYXVsdC1yb2xlcy1kYnggZ3VhcmRpYW4iLCJvZmZsaW5lX2FjY2VzcyIsImFkbWluIiwidW1hX2F1dGhvcml6YXRpb24iXX0sInJlc291cmNlX2FjY2VzcyI6eyJkYngtZ3VhcmRpYW4tYXBpIjp7InJvbGVzIjpbImNsaWVudF9hZG1pbiJdfSwiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJwcm9maWxlIGVtYWlsIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsIm5hbWUiOiJKYWNrc29uIFJ1Z2FtYmEiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJqYWNrc29uIiwiZ2l2ZW5fbmFtZSI6IkphY2tzb24iLCJmYW1pbHlfbmFtZSI6IlJ1Z2FtYmEiLCJlbWFpbCI6ImphY2tzb241Zy5iaUBnbWFpbC5jb20ifQ.U0BDWfymX2DkS7MLI8-Q1rpakerHejvj6r-Cxs4uMvKZKQQBehqAJ0F2ElvGHW73uZG10mmzIGH0JlMD2mX_bKGQuuP22kdcQdIze0pnh4_jA_698bepCrKF9mEv240pk2VvU_KMzeOgUVf2FaOlkNcqp7pYTUmt7Uy2pJYEpWrKg-niVd299kOVeG6nNITn5eq8no2RweLt2QP78Woh-QV2PqK386VBvk2PsgNo7sNGiPev2pcrQToAWWaHzboHrxn7DsVcK8Ym2Z3PGwvCvtKPR1k6GSqe6Yii-irb1-6fQ9GC5bwn1NycyqtVXti4CHCidzGxUO1EQsu9uL-2NQ';
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
