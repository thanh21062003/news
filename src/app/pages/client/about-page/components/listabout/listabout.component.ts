import { Component } from '@angular/core';
import { AboutService } from 'src/app/services/about/About.service';
import IAbout from 'src/app/types/about';

@Component({
  selector: 'app-listabout',
  templateUrl: './listabout.component.html',
  styleUrls: ['./listabout.component.scss']
})
export class ListaboutComponent {
  public abouts: IAbout[] = []
  constructor(private AboutsetService: AboutService) {
    this.AboutsetService.GetAllAbout().subscribe(({ data }: any) => {
      this.abouts = data
      console.log(this.abouts)
    })
  }
}
