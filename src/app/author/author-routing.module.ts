import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OnewordtypeComponent } from './onewordtype/onewordtype.component';
import { SinglechoicetypeComponent } from './singlechoicetype/singlechoicetype.component';
import { MultichoicetypeComponent } from './multichoicetype/multichoicetype.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'onewordquestion',
        component: OnewordtypeComponent
    },
    {
        path: 'singlechoicequestion',
        component: SinglechoicetypeComponent
    },
    {
        path: 'multichoicequestion',
        component: MultichoicetypeComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorRoutingModule { }
