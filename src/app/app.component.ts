import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GifsHomePageComponent } from "./features/gifs/pages/gifs-home-page/gifs-home-page.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, GifsHomePageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Find Your GIF';
  subtitle = "Quick and easy GIF search.";
}
