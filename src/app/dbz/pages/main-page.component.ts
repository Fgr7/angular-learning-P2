import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DBZService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main',
  templateUrl: './main-page.component.html',
})
export class MainComponet {
  constructor(public debzService: DBZService) {
    debzService;
  }
}
