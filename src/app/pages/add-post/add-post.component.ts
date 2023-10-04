import { Component, OnInit } from '@angular/core';
import { GetAllUserModel } from 'src/app/models/user/getAllUserModel';
import { PostService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  users: GetAllUserModel[] = [];

  title: string = '';
  body: string = '';
  userId: number = 0;

  addForm!: FormGroup;


  constructor(private userService: UserService
    , private postService: PostService
    , private formBuilder: FormBuilder) {
  }

  buildForm() {
    this.addForm = this.formBuilder.group({
      title: new FormControl('', [Validators.required, Validators.minLength(3)]),
      body: new FormControl('', [Validators.required,Validators.maxLength(25)]),
      userId: new FormControl(0, [Validators.min(1)]),
    });
  }

  ngOnInit(): void {
    this.fetchUser();
    this.buildForm();
  }

  fetchUser() {
    this.userService.getAll().subscribe((response) => {
      this.users = response;
    });
  }

  submit() {
    this.addForm.markAllAsTouched();
    if (this.addForm.invalid) {
      console.log('Validasyon hatası');
      return;
    }
    let request = this.addForm.value;
    console.log(request);
    this.postService.add(request).subscribe();
  }

  hasValidationError(controlName: string, errorType: string) {
    if (
      this.addForm.controls[controlName].touched &&
      this.addForm.controls[controlName].errors != null &&
      this.addForm.controls[controlName].getError(errorType) != null
    ) {
      return true;
    }
    return false;
  }

  hasAnyError(controlName: string) {
    return (
      this.addForm.controls[controlName].touched &&
      this.addForm.controls[controlName].errors != null
    );
  }


}
