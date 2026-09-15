import { Component } from '@angular/core';

@Component({
  selector: 'app-powerbill',
  imports: [],
  templateUrl: './powerbill.html',
  styleUrl: './powerbill.css',
})
export class Powerbill {
  showmsg(billno: any) {
    // console.log(billno);

    // this.people.forEach

     people =[
    {
      name: 'mahendra',
      powerbilno: 8977,
      paid: true,
    },
    {
      name: 'pavithra',
      powerbilno: 1234,
      paid: true,
    }
  ];

    this.people.forEach((item) => {
      if (item.paid == true && item.powerbilno == billno) {
        
          console.log('you have paid the power bill');
        } else {
          console.log('please pay the power bill');
        }
      });
    
  

  //   type Person = {
  //     name:string;
  //   paid: boolean;
  //   powerbilno: string | number;
  // };
 
}
}