import { Component } from '@angular/core';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-overlay-loader',
  templateUrl: './overlay-loader.component.html',
  styleUrls: ['./overlay-loader.component.css']
})
export class OverlayLoaderComponent {
  isLoading: boolean = false;
  constructor(private loadingService: LoadingService) { }

  ngOnInit() {
    this.loadingService.isLoading$.subscribe(
      (value) => (this.isLoading = value)
    );
  }

}
