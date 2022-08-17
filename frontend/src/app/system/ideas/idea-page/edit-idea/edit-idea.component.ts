import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Button } from 'src/app/shared/model/button.model';
import { User } from 'src/app/shared/model/user.model';
import { UrlImgService } from 'src/app/shared/services/url-img.service';
import { Idea } from 'src/app/system/shared/models/idea.model';
import { IdeaService } from 'src/app/system/shared/services/idea.service';
import { UnloadService } from 'src/app/system/shared/services/unload.service';
@Component({
  selector: 'app-edit-idea',
  templateUrl: './edit-idea.component.html',
  styleUrls: ['./edit-idea.component.scss', '../idea-page.component.scss'],
})
export class EditIdeaComponent implements OnInit {
  @Output() onIdeaEdit = new EventEmitter<Idea>();
  @Output() cancel = new EventEmitter<boolean>();
  @ViewChild('f')
  form: NgForm | undefined;
  currentDate: number = Date.now();
  image: any;
  @Input()
  idea: Idea | null = null;
  @Input()
  showTopPanel: boolean = false;

  btns: Button[] = [
    {
      text: 'Отмена',
      urlWhite: '../../../../../assets/img/EditImgWhite.png',
      urlRed: '../../../../../assets/img/EditImgRed.png',
      func: () => {
        this.cancel.emit(true);
      },
    },
  ];

  clickToButton(event: number) {
    this.btns[event].func();
  }

  constructor(
    private ideaService: IdeaService,
    private unloadService: UnloadService,
    private URLImgService: UrlImgService
  ) {}

  ngOnInit(): void {}

  getUrlImg(url: string | undefined): string | undefined {
    return this.URLImgService.getURLImg(url);
  }

  onOpenFileDialog() {
    document.getElementById('edit-img')?.click();
  }

  async editIdea(form: NgForm) {
    try {
      const { name, description } = form.value;
      let idea: Idea;
      let date = new Date();
      date.setHours(0, 0, 0, 0);
      if (this.image) {
        const { data } = await this.unloadService.unload(this.image);
        idea = new Idea(
          name,
          date.getTime(),
          description,
          this.idea?.user.id,
          data
        );
      } else {
        idea = new Idea(
          name,
          date.getTime(),
          description,
          this.idea?.user.id,
          this.idea?.imgUrl
        );
      }
      idea.id = this.idea?.id;
      this.ideaService.updateIdea(idea).subscribe((returnIdea: any) => {
        returnIdea.user = this.idea?.user;
        this.onIdeaEdit.emit(returnIdea);
      });
    } catch (error) {}
  }

  fileChange(event: any) {
    let fileList: FileList = event.target.files;
    if (!fileList.length) {
      return;
    }
    this.image = fileList[0];
  }
}
