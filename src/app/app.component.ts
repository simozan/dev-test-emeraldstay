import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { YieldNetSimulatorComponent } from './yield-net-simulator/yield-net-simulator.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, YieldNetSimulatorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'yield-net-return-simulator';
}
