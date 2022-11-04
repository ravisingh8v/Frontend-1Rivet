import { ComponentType, Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';

@Injectable()
export class OverlayService {


  constructor(private overlay: Overlay) { }

  openOverlay<T>(component: ComponentType<T>) {
    // const positiionStrategy = this.overlay
    //   .position()
    //   .global()
    //   .centerHorizontally()
    //   .centerVertically()

    const overlayRef = this.overlay.create({
      positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically(),
      backdropClass: 'overlay-backdrop',
      hasBackdrop: true,
      panelClass: 'overlay-panel',
      width: 600,
      height: 300

    });

    const overlayPortal = new ComponentPortal(component);
    overlayRef.attach(overlayPortal);

    overlayRef.backdropClick().subscribe(() => {
      overlayRef.detach()
    })

  }
}
