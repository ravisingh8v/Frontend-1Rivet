import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from "@angular/cdk/portal";
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { OverlayService } from 'src/app/shared/service/overlay.service';
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
  constructor(private route: Router, private overlay: Overlay,
    private overlayService: OverlayService) {
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

    this.overlayService.openOverlay(ChangePasswordFormComponent)

    // this.overlayRef = this.overlay.create()
    // const componentPortal = new ComponentPortal(ChangePasswordFormComponent);
    // this.overlayRef.addPanelClass('example-overlay');
    // this.overlayRef.attach(componentPortal);

  }
}
