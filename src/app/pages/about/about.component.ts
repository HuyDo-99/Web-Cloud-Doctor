import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  show1 : boolean = false;
  show2 : boolean = false;
  show3 : boolean = false;
//screen
  screenWidth: any;
  checkScreen: boolean = false;
  constructor() { }
  ngOnInit(): void {
    this.windowWidth();
  }
  windowWidth(){
    this.screenWidth = window.innerWidth;
    console.log(this.screenWidth );
    
    
  }
  viewMore(id:number){
    const ID = id;
    console.log(ID);
    const view1 = document.getElementById('view1');
    const view2 = document.getElementById('view2');
    const view3 = document.getElementById('view3');
    this.show1 == !this.show1;
    if(this.show1 != false && ID == 1) {
      view1.style.height = "auto";

    } else {
      view1.style.height = "300px";

    }


    // switch (ID) {
    //   case 1:
    //       if(this.show1 != false) {
    //         view1.style.height = "auto";
    //       } else {
    //         view1.style.height = "300px";
    //       }
    //   break;
    //   case 2:
    //     view2.style.height = "auto";
    //   break;
    //   case 3:
    //     view3.style.height = "auto";
    //   break;
    
     
    // }
    
  }


  btnExtended1() {
    if(this.screenWidth > 450)return;
    this.show1 = !this.show1;
    let readmore = document.getElementById("view1");
    if (this.show1 != false) {
      readmore.style.height = "auto";
    }
     else {
      readmore.style.height = "300px";
    }
  }
  btnExtended2() {
    if(this.screenWidth > 450)return;
    this.show2 = !this.show2;
    let readmore = document.getElementById("view2");
    if (this.show2 != false) {
      readmore.style.height = "auto";
    } 
    else {
      readmore.style.height = "300px";
    }
  }
  btnExtended3() {
    if(this.screenWidth > 450)return;
    this.show3 = !this.show3;
    let readmore = document.getElementById("view3");
    if (this.show3 != false) {
      readmore.style.height = "auto";
    }
     else {
      readmore.style.height = "300px";
    }
  }
}
