import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})



export class HeaderComponent implements OnInit {
  title = 'My List';

  constructor() { 
   
  }

  ngOnInit() {
    this.rows = JSON.parse(localStorage.getItem('rows'))

   
    // localStorage.setItem('items', JSON.stringify(this.rows))
    // const data = JSON.parse(localStorage.getItem('items'))

    //this.moveToDone()
  }
  todosValue: string;
  checkedItem: boolean = false;
  Items: any = [];
  removedItems: any = [];
  
  addItem() {
    this.Items.push(this.todosValue);
    this.todosValue = '';
    console.log(this.todosValue)
  }
  moveToDone() {
   // if(this.checkedItem == true) {
      //this.Items.push(this.removedItems)
    //}
  }


  name: string = ''
  surname: string = ''
  country: string = ''
  city: string = ''
  position: string = ''
  age: number = 0
  public searchText;
  public rows = [
                  { name: "Nick", 
                    surname: "Wilsher",
                    country: "USA",
                    city: "NYC",
                    position: "sales",
                    age: "48"
                  },
                  { name: "Jack", 
                    surname: "Wilsher",
                    country: "USA",
                    city: "NYC",
                    position: "web",
                    age: 55
                  },
                  { name: "Jack", 
                    surname: "Wilsher",
                    country: "USA",
                    city: "NYC",
                    position: "web",
                    age: 55
                  }
                ];
 public pagination = {
  constanta: '5',
  firstPage: '',
  lastPage:''
 }
  add() {
    if(
      this.name.length <= 0 ||
      this.surname.length <= 0 ||
      this.country.length <= 0 ||
      this.city.length <= 0 ||
      this.position.length <= 0 ||
      this.age <= 0
     ) {
      alert('Please fill out the form')
      return
    } else {
      this.rows.push( 
        { name: this.name, 
          surname: this.surname, 
          country: this.country, 
          city: this.city, 
          position: this.position, 
          age: this.age 
        } );
    localStorage.setItem('rows', JSON.stringify(this.rows));
    }
   
      this.name = null,
      this.surname = null,
      this.country = null,
      this.city = null,
      this.position = null,
      this.age = null
  }
  pageStart = 1;
  pageEnd = 3;
  currentPage:number;
  paginationArr = [this.pageStart,this.pageStart+1];
  status: boolean = false;
  NextData(el) {
    
    //this.pageStart += 100;  
    //this.pageStart = this.pageStart +  (this.pageEnd - this.pageStart)    // Get the next 100 records
  }

  prevData() {
    //this.pageStart +=this.pageStart
    //console.log(this.pageStart)

    //this.pageStart -= 100;          // Get the previous 100 records
  }
  //click on current number page
  currentData(el) {
     for(let i = 0;i < this.paginationArr.length;i++) {
       el = this.paginationArr[i];
     }
    // this.status = !this.status;  
    console.log(el)
  }


 
 
}
