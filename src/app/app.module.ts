// Import core/native modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// Import third party modules
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoadingModule, ANIMATION_TYPES } from 'ngx-loading';

// Import custom modules
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';

// Import custom components/services/pipes
import { AppComponent } from './app.component';
import { TableComponent } from './components/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    CoreModule,

    LoadingModule.forRoot({
      animationType: ANIMATION_TYPES.wanderingCubes,
      backdropBackgroundColour: 'rgba(0,0,0,0.1)',
      backdropBorderRadius: '4px',
      primaryColour: '#444444',
      secondaryColour: '#444444',
      tertiaryColour: '#444444'
    })
    ,
    NgbModule.forRoot()
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
