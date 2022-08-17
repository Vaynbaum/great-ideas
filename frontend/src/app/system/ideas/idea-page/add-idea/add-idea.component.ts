import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Message } from 'src/app/shared/model/message.model';
import { User } from 'src/app/shared/model/user.model';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UrlImgService } from 'src/app/shared/services/url-img.service';
import { UserService } from 'src/app/shared/services/user.service';
import { Idea } from 'src/app/system/shared/models/idea.model';
import { IdeaService } from 'src/app/system/shared/services/idea.service';
import { UnloadService } from 'src/app/system/shared/services/unload.service';
@Component({
  selector: 'app-add-idea',
  templateUrl: './add-idea.component.html',
  styleUrls: ['./add-idea.component.scss', '../idea-page.component.scss'],
})
export class AddIdeaComponent implements OnInit {
  //@ts-ignore
  message: Message;
  image: any;

  currentDate: number = Date.now();
  constructor(
    private ideaService: IdeaService,
    private unloadService: UnloadService,
    private userService: UserService,
    private URLImgService: UrlImgService,
    private authService: AuthService
  ) {}
  @Output() onIdeaAdd = new EventEmitter<Idea>();
  ngOnInit(): void {
    this.message = new Message('success', '');
  }

  public get user() {
    return this.authService.user;
  }

  private showMessage(message: Message) {
    this.message = message;

    window.setTimeout(() => {
      this.message.text = '';
    }, 5000);
  }

  getUrlImg(): string | undefined {
    return this.URLImgService.getURLImg(this.user?.url);
  }

  onOpenFileDialog() {
    document.getElementById('file-input')?.click();
  }

  fileChange(event: any) {
    let fileList: FileList = event.target.files;
    if (!fileList.length) {
      return;
    }
    this.image = fileList[0];
  }

  getAuthor() {
    return `${this.user?.lastname} ${this.user?.firstname}`;
  }

  async createIdea(form: NgForm) {
    try {
      const { name, description } = form.value;
      let idea: Idea;
      let date = new Date();
      date.setHours(0, 0, 0, 0);
      if (this.image) {
        const { data } = await this.unloadService.unload(this.image);

        idea = new Idea(name, date.getTime(), description, this.user?.id, data);
      } else {
        idea = new Idea(name, date.getTime(), description, this.user?.id);
      }

      window.setTimeout(() => {
        this.message.text = '';
      }, 5000);
      this.ideaService.createIdea(idea).subscribe((returnedIdea: any) => {
        //@ts-ignore
        this.authService.user.balls += User.numberBallsForIdea;
        //@ts-ignore
        this.authService.user.ideas += 1;

        this.userService
          .updateUser(this.authService.user as User)
          .subscribe((user: any) => {

            this.showMessage({
              text: 'Новый пост успешно создан',
              type: 'success',
            });
            form.reset();
            returnedIdea.user = user;
            this.onIdeaAdd.emit(returnedIdea);
          });
      });
    } catch (error) {
      console.log(error);
    }
  }
}
