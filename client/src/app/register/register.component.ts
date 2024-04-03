import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { response } from 'express';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{
  @Output() cancelregister = new EventEmitter();
  model: any = {}

   constructor(private accountService: AccountService) {}

   ngOnInit(): void {

   }

   register() {
    this.accountService.register(this.model).subscribe({
      next: () => {
        this.cancel();
      },
      error: error => console.log(error)
    })
   }
   cancel() {
    this.cancelregister.emit(false);
   }
}