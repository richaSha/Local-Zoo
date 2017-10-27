import {Component} from "@angular/core";

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <div *ngIf="!pagination" >
        <button class="btn btn-info" (click)="goToPage('new')">Add New Animal</button>
        <button class="btn btn-info" (click)="goToPage('all')">View All Animal</button>
        <button class="btn btn-info" (click)="goToPage('young')">View Young Animal</button>
        <button class="btn btn-info" (click)="goToPage('mature')">View Mature Animal</button>
      </div>
      <div *ngIf="pagination">
        <div *ngIf="pagination != 'new'">
          <h1>{{title}}</h1>
          <div class="menu">
            <div class='menuTitle'>
              <span *ngIf="editMode">
                Select
              </span>
              <span class='species'>Species</span>
              <span class='name'>Name</span>
              <span class='age'> Age</span>
              <span class='diet'>Diet</span>
              <span class='location'>Location</span>
              <span class='caretakers'> Caretakers</span>
              <span class='sex'>Sex</span>
              <span class='likes'>Likes</span>
              <span class='dislikes'>Dislikes</span>
            </div>
            <div *ngFor='let animal of animals'>
              <div *ngIf="ageRestriction(animal)">
                <span *ngIf="editMode"><p (click)="editInfo(animal)" [class]="checkboxBackground()"></p></span>
                <span class='species'>{{animal.species}}</span>
                <span class='name'>{{animal.name}}</span>
                <span class='age'>{{animal.age}}</span>
                <span class='diet'>{{animal.diet}} </span>
                <span class='location'>{{animal.location}} </span>
                <span class='caretakers'>{{animal.caretakers}}</span>
                <span class='sex'>{{animal.sex}}</span>
                <span class='likes'>{{animal.likes}} </span>
                <span class='dislikes'>{{animal.dislikes}} </span>
              </div>
            </div>
          </div>
        </div>
        <div *ngIf="pagination == 'new'">
          <form>
            <div class="form-group">
              <label>Enter Species</label>
              <input type="text" class="species" placeholder="Species">
            </div>
            <div class="form-group">
              <label>Enter Name</label>
              <input type="text" class="name" placeholder="Name">
            </div>
            <div class="form-group">
              <label>Enter Age</label>
              <input type="number" class="age" placeholder="Age">
            </div>
            <div class="form-group">
              <label>Enter Diet</label>
              <input type="text" class="diet" placeholder="Diet">
            </div>
            <div class="form-group">
              <label>Enter Location</label>
              <input type="text" class="location" placeholder="Location">
            </div>
            <div class="form-group">
              <label>Enter Caretakers</label>
              <input type="number" class="caretakers" placeholder="Caretakers">
            </div>
            <div class="form-group">
              <label>Enter Sex</label>
              <input type="text" class="sex" placeholder="Sex">
            </div>
            <div class="form-group">
              <label>Enter Likes</label>
              <input type="text" class="likes" placeholder="Likes">
            </div>
            <div class="form-group">
              <label>Enter Dislikes</label>
              <input type="text" class="dislikes" placeholder="Dislikes">
            </div>
            <div class="form-group">
              <input type="button" class="btn btn-success submitForm" value="Submit">
            </div>
          </form>
        </div>
        <hr>
        <input type="button" *ngIf="pagination != 'new'" class="btn btn-success" value="Edit" (click)="edit()">
        <input type="button" class="btn btn-success" value="Home" (click)="goToPage('home')">
      </div>
    </div>
  `
})
export class AppComponent{
  pagination :string = null;
  editMode: boolean = false;
  selectedAnimal: Animals = null;
  goToPage(value: string){
    if(value == 'home'){
      this.pagination = null;
    }else{
      this.pagination = value;
    }
  }
  animals: Animals[] = ANIMALS;
  ageRestriction(animal: Animals){
    let returnValue = false;
    if((this.pagination == "young" && animal.age < 2) ||(this.pagination == "mature" && animal.age > 1) || (this.pagination == "all")){
      returnValue = true;
    }
    return returnValue;
  }
  edit(){
    this.editMode = true;
  }
  checkboxBackground(animal:Animals){
    if(this.selectedAnimal == animal){
      return 'checked';
    }else{
      return 'unChecked';
    }
  }
  editInfo(animal:Animals){
    this.selectedAnimal = animal;
  }
}
export class Animals{
  constructor(public species: string, public name: string, public age: number, public diet: string, public location: string, public caretakers: string, public sex: string, public likes: string, public dislikes: string){}
}
const ANIMALS: Animals[] =[
   new Animals('Arctic Fox','Moon', 2,'Carnivore','Northern Trail',5,'Female','Cool shade','Loud noises'),
   new Animals('Arctic Fox','Moon', 3,'Carnivore','Northern Trail',5,'Female','Cool shade','Loud noises'),
   new Animals('Arctic Fox','Moon', 1,'Carnivore','Northern Trail',5,'Female','Cool shade','Loud noises')
 ]
