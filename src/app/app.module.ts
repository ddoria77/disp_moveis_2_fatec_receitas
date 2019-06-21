import { FeedPage } from '../pages/feed/feed';
import { ContatoPage } from '../pages/contato/contato';
import { LojaPage } from '../pages/loja/loja';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ProductProvider } from '../providers/contact/contact';
import { RecipeDetailPage } from '../pages/recipe-detail/recipe-detail';
import { RecipesPage } from '../pages/recipes/recipes';
import { RecipesService } from '../providers/recipes.service';
import { LoginPage } from '../pages/login/login';
import { IonicStorageModule } from '@ionic/storage';
import { RegistroPage } from '../pages/registro/registro';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LojaPage,
    ContatoPage,
    FeedPage,
    RecipeDetailPage,
    RecipesPage,
    LoginPage,
    RegistroPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyChouRkisSHonSwD8eFotnDIeENiadZsfc",
      authDomain: "provaionicfatec.firebaseapp.com",
      databaseURL: "https://provaionicfatec.firebaseio.com",
      projectId: "provaionicfatec",
      storageBucket: "",
      messagingSenderId: "175933655583"
    }),
    AngularFireDatabaseModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LojaPage,
    FeedPage,
    ContatoPage,
    RecipeDetailPage,
    RecipesPage,
    LoginPage,
    RegistroPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProductProvider,
    RecipesService
  ]
})
export class AppModule {}
