import { Component, OnInit } from '@angular/core';
declare var $: any; 
@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css']
})
export class AnimationComponent implements OnInit {

  ngOnInit(): void {
    // jQuery logic for animation
    $(document).ready(function(){
      $("button").click(function(){
        $("div").animate({left: '250px'});
      });
    });
  }
}
