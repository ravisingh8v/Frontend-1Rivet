import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from "@angular/cdk/portal";
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ChangePasswordFormComponent } from 'src/app/users/change-password-form/change-password-form.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isOpen = false;
  @Output() clicked: EventEmitter<boolean>

  overlayRef!: OverlayRef;
  constructor(private route: Router, private overlay: Overlay) {
    this.clicked = new EventEmitter
  }

  ngOnInit(): void {
  }
  logout() {
    localStorage.clear()
    this.route.navigate(['login'])
    this.clicked.emit(false)
  }
  openPassword() {
    console.log('cliked');

    this.overlayRef = this.overlay.create()
    const componentPortal = new ComponentPortal(ChangePasswordFormComponent);
    this.overlayRef.addPanelClass('example-overlay');
    this.overlayRef.attach(componentPortal);

  }
}
