import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-german',
  templateUrl: './german.component.html',
  styleUrls: ['./german.component.css']
})
export class GermanComponent implements OnInit {

  static trans: string;
  cors: string = "https://cors-anywhere.herokuapp.com/";
  static word: string;
  word1: string;
  trans1: string;
  static dataJson = {"sourceText": " goodmorning "};
  

  constructor() { }

  ngOnInit() {
    var word1;
    var link1: string = this.cors + "https://www.dictionary.com/e/word-of-the-day/";
    var indexRequest = new XMLHttpRequest();
    indexRequest.open('GET', link1);
    indexRequest.onload = function() {
        var res: string[] = (indexRequest.responseText).split(" ", 200);
        word1 = res[179];
        GermanComponent.word = word1;

        GermanComponent.dataJson.sourceText = word1
      var data = JSON.stringify(GermanComponent.dataJson);
      
      var xhr = new XMLHttpRequest();
      xhr.withCredentials = true;
      
      xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
          var response = (this.responseText);
          var res = response.split("\"");
          console.log(res[3]);
          GermanComponent.trans = res[3];
        }
      });
      
      xhr.open("POST", "https://my-translator-pro.p.rapidapi.com/api/translate");
      xhr.setRequestHeader("x-rapidapi-host", "my-translator-pro.p.rapidapi.com");
      xhr.setRequestHeader("x-rapidapi-key", "0d8ce3de65mshafcf99926226a2cp1f78e5jsn5f88341225c9");
      xhr.setRequestHeader("targetlanguage", "de");
      xhr.setRequestHeader("content-type", "application/json");
      xhr.setRequestHeader("accept", "application/json");
      
      xhr.send(data);
        
    }
    indexRequest.send();
      
  }

  

  posting() {
    this.word1 = GermanComponent.word;
    this.trans1 = GermanComponent.trans;
  }
}
