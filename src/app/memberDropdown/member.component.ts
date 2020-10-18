import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormArray,FormGroup,Validators,FormControl} from '@angular/forms'

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {
data;
  constructor(private fb:FormBuilder) { }
  public addMember:FormGroup;
  ngOnInit() {
    this.addMember = this.fb.group({
      itemRows : this.fb.array([])
    })
  }
  fnAddMember(select){
 

  let formArray= this.addMember.get('itemRows') as FormArray;
  for(let i=formArray.length; i>0; i--){
    formArray.removeAt(i);
  }
  let value = select.value;
    console.log(value);

   let Group= this.fb.group({
      fName: new FormControl("",Validators.required),
      lName : new FormControl("",Validators.required),
      email:new FormControl("",Validators.required),
      place :new FormControl("",Validators.required),
      dob :new FormControl("",Validators.required)
    });

    for(let i=0;i<value;i++){
      formArray.push(Group);
    }
  }

  fnSubmit(){
    console.log(this.addMember);
    alert(JSON.stringify(this.addMember.get('itemsRows').value));
  }
}

