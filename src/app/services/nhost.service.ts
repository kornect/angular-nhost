import { Injectable } from '@angular/core';
import { NhostClient } from './nhost'; // Equivalent to '@nhost/nhost-js@2.0.2
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
/**
 * Extends base NhostClient from @nhost/nhost-js
 * Allows us to inject the NhostService into our components
 */
export class NhostService extends NhostClient {
  constructor() {
    super({
      subdomain: environment.nhost.subdomain,
      region: environment.nhost.region,
      autoRefreshToken: true,
      clientStorageType: 'localStorage',
      refreshIntervalTime: 300, // 5 minutes
      devTools: !environment.production
    });
  }
}
