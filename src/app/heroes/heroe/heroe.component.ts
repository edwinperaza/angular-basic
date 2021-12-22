import { Component } from "@angular/core";

@Component({
    selector: 'app-heore',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent{

    heroName: string = "Ironman";
    heroAge: number = 35;

    getName(): string {
        return `${this.heroName} - ${this.heroAge}`;
    }

    get heroNameCapitalize(): string {
        return this.heroName.toUpperCase();
    }

    changeHeroName(): void {
        this.heroName = 'Spiderman';
    }

    changeHeroAge(): void {
        this.heroAge += 20;
    }
}