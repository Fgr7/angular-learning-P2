import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Input()
  public characterList: Character[] = [
    {
      name: 'Trunks',
      power: 100,
    },
  ];

  @Output()
  public onDelete: EventEmitter<number> = new EventEmitter();

  onDelectCharacter(index: number): void {
    //TODO: EMITIR EL ID del personaje
    this.onDelete.emit(index);
  }
}
