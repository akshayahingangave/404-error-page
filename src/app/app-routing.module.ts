import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { BlogComponent} from './blog/blog.component';
import { GalleryComponent} from './gallery/gallery.component';
import { HelpComponent} from './help/help.component';
import { NotfoundComponent} from './notfound/notfound.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'blog',
    component:BlogComponent
  },
  {
    path:'gallery',
    component:GalleryComponent
  },
  {
    path:'help',
    component:HelpComponent
  },
  {
    path:'**',
    component:NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
