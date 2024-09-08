import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-yield-net-simulator",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./yield-net-simulator.component.html",
  styleUrl: "./yield-net-simulator.component.css",
})
export class YieldNetSimulatorComponent {
  purchasePrice: number = 0;
  monthlyRent: number = 0;
  rentalFee: number = 0;
  result: any;

  calculateYield() {
    const annualRent = this.monthlyRent * 12;
    const incomeYear1 =
      annualRent * (1 - 0.3) - (this.rentalFee / 100) * this.purchasePrice;
    const incomeYear2 =
      annualRent * (1 - 0.25) - (this.rentalFee / 100) * this.purchasePrice;
    const incomeYear3 =
      annualRent * (1 - 0.2) - (this.rentalFee / 100) * this.purchasePrice;

    this.result = {
      incomeYear1: incomeYear1,
      incomeYear2: incomeYear2,
      incomeYear3: incomeYear3,
    };
  }
}
