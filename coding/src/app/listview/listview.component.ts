import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listview',
  templateUrl: './listview.component.html',
  styleUrls: ['./listview.component.css']
})
export class ListviewComponent implements OnInit {
  public items = [{
    image: "https://www.midamericanenergy.com/content/images/page-images/browsers/browser-icon-chrome.png",
    item: "Example One"
},{
  image: "https://www.midamericanenergy.com/content/images/page-images/browsers/browser-icon-chrome.png",
  item: "Example Two"
},{
  image: "https://www.midamericanenergy.com/content/images/page-images/browsers/browser-icon-chrome.png",
  item: "Example Three"
},{
  image: "https://www.midamericanenergy.com/content/images/page-images/browsers/browser-icon-chrome.png",
  item: "Example Four"
},{
  image: "https://www.midamericanenergy.com/content/images/page-images/browsers/browser-icon-chrome.png",
  item: "Example Five"
},{
  image: "https://www.midamericanenergy.com/content/images/page-images/browsers/browser-icon-chrome.png",
  item: "Example Six"
},{
  image: "https://www.midamericanenergy.com/content/images/page-images/browsers/browser-icon-chrome.png",
  item: "Example Seven"
}];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  delete(i) {
    this.items.splice(i,1);
  }


  changeview() {
    this.router.navigate([''])
  }

}


