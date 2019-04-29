import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes = [
    new Quote(1, "The best preparation for tomorrow is doing your best today.", "Jackson Brown Jr", 0, 0, "Faith"),
    new Quote(2, "When you have a dream, you’ve got to grab it and never let go.", "Carol Burnett", 0, 0, "Val"),
  ]
  toggleDetails(index) {
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
  }
  deleteQuote(isDelete, index) {

    if (isDelete) {
      let toDelete = confirm("To go ahead please click ok, otherwise cancel.");
      if (toDelete) {
        this.quotes.splice(index, 1)
      }
    }
  }

  addNewQuote(quote) {
    if (quote.enterQuote == "" || quote.author == "" || quote.submitter == "") {
      alert("Empty field");
    }
    else {
      let quoteLength = this.quotes.length;
      quote.id = quoteLength + 1;
      quote.submitDate = new Date();
      this.quotes.push(quote);
    }
  }
  plusVote(isPlus, index) {
    if (isPlus) {
      this.quotes[index].upVote += 1;
    }
  }

  minusVote(isMinus, index) {
    if (isMinus) {
      this.quotes[index].downVote += 1;
    }
  }

  constructor() { }


  ngOnInit() {
  }
}
