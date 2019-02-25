import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes : Recipe[] =[
    new Recipe('A test Recipe','this a simply test','http://img.sndimg.com/food/image/upload/w_896,h_504,c_fill,fl_progressive,q_80/v1/img/recipes/99/15/6/picdGCJTF.jpg'),
    new Recipe('A test Recipe','this a simply test','http://img.sndimg.com/food/image/upload/w_896,h_504,c_fill,fl_progressive,q_80/v1/img/recipes/99/15/6/picdGCJTF.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
