import { Component, HostListener, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { WelcomePipe } from './welcome.pipe';
import { MyserviceService } from './myservice.service';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,StudentComponent, FormsModule, CommonModule,WelcomePipe,Comp1Component,Comp2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  preserveWhitespaces:true
})
export class AppComponent {
  title = 'Asan-project';

  









  // curr=12.25
  // CurrentDate= new Date
  // name= 'Rai Tahid Kharal'
  // Currentvalue=true;
  // massage= "Hello World"
  // togglebtn(){
  //   this.Currentvalue=!this.Currentvalue
  // }
  // amessage(val:any){
  //  this.massage=val;
  // }
       
  // // @HostListener('click',['$event'])
  // //   show(){
  // //     alert('hello');
  //   // }
  //   employee:any[]=[
  //     {id:100, Name:'Rai Tahid',Cuntry:'Pakistan'},
  //     {id:100, Name:'Rai Zahid',Cuntry:'England'},
  //     {id:100, Name:'Rai Asad',Cuntry:'Austaila'},
  //     {id:100, Name:'UMER',Cuntry:'London'},
  //     {id:100, Name:'Shah Muhammad',Cuntry:'Japan'},
  //     {id:100, Name:'Rizwan',Cuntry:'France'},
  //     {id:100, Name:'ALI',Cuntry:'America'}
    
  //    ]

  //   constructor(private Myservice:MyserviceService){
  //   // this.msg=Myservice.getmassage();
  //   }
  //   msg!: string;

  //   setmassage(){
  //    this.msg!=this.Myservice.getmassage();
  //   }
    
  }
