import { tokens } from '@meu-ecommerce/shared-ui';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  // Definindo explicitamente para o HTML enxergar com clareza
  public primaryColor = tokens.colors.primary;
  protected title = 'catalogo';

}
