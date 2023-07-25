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
    $(document).ready(() => {
      $('#animateButton').on('click', () => {
        $('#animateTarget').animate({ fontSize: '24px', opacity: 0.5 }, 1000);
      });
    });
  }
}
