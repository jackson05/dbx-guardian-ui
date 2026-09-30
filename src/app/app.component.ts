import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './core/sidebar/sidebar.component';
import { KeycloakService } from './auth/keycloak/keycloak.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SidebarComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  constructor(private _keyCloakService: KeycloakService) {

  }

  title = 'dbx-guardian-ui';

  async ngOnInit(): Promise<void> {
    try {
      await this._keyCloakService.init();

      //Check if the user is authenticated
     if (!this._keyCloakService.isAuthenticated()) {
        await this._keyCloakService.login();
      }
    } catch (error) {
      console.error('Keycloak initialization failed:', error);
    }
  }




}
