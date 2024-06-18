import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character-interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {

  @Output()
  public onNewcharacter: EventEmitter<Character> = new EventEmitter(); //con @output emitimos el character

  public character: Character = {
    name: '',
    power: 0
  };

  emitCharacter(): void {

    if (this.character.name.length === 0 ) return; //validacion para que no envien algo vacío en el formulario

    this.onNewcharacter.emit(this.character) //emitimos el character

    //con esto reseteamos el formulario después de agregar un personaje
    this.character = { name: '', power: 0};
  }
}
