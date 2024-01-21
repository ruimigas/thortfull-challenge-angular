import { Component, OnInit } from '@angular/core';
import { User } from '../../../../../shared/models/user.model';
import { AuthService } from '../../../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProfileService } from '../../../../services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public userProfile: User | undefined;
  public userProfileForm: FormGroup | undefined;
  public showAlert: boolean = false;
  public loading: boolean = true;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private profileService: ProfileService) {}

  ngOnInit() {
    this.authService.getRandomUser().subscribe(data => {
      this.userProfile = data.results[0];
      this.loading = false;
      this.initForm();
    });
  }

  initForm() {
    if (this.userProfile) {
      this.userProfileForm = this.fb.group({
      first: [this.userProfile.name.first, Validators.required],
      last: [this.userProfile.name.last, Validators.required],
      gender: [this.userProfile.gender, Validators.required],
      email: [this.userProfile.email, [Validators.required, Validators.email]],
      phone: [this.userProfile.phone, Validators.required],
      city: [this.userProfile.location.city, Validators.required],
      });
    }
  }

  onSubmit() {
    if (this.userProfileForm) {
    if (this.userProfileForm.valid) {
      // Simulate API call to update user profile
      // this.profileService.updateProfile(this.userProfileForm).subscribe( resUpdatedProfile =>{
      // console.log(resUpdatedProfile);
      // });
      this.showBootstrapAlert()
      console.log('Form submitted:', this.userProfileForm.value);
    } else {
      // Handle form validation errors
      console.error('Form has validation errors.');
    }
  }
  }


  showBootstrapAlert() {
    this.showAlert = true;

    setTimeout(() => {
      this.showAlert = false;
    }, 5000);
  }

}
