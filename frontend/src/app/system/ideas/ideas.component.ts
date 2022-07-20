import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Filter } from 'src/app/shared/model/filter.model';
import { User } from 'src/app/shared/model/user.model';
import { AuthService } from 'src/app/shared/servecies/auth.service';
import { ToggleService } from 'src/app/shared/servecies/toggle.service';
import { UserService } from 'src/app/shared/servecies/user.service';
import { Idea } from '../shared/models/idea.model';
import { IdeaService } from '../shared/services/idea.service';

@Component({
  templateUrl: './ideas.component.html',
  styleUrls: ['./ideas.component.scss'],
})
export class IdeasComponent implements OnInit {
  id: number | undefined;
  ideas: Idea[] = [];
  isLoaded: Boolean = false;
  isEditing = false;
  ideaEditing: Idea | null = null;
  filterValue: Filter = {
    value: '',
    field: 'name',
  };
  filters: Filter[] = [
    {
      placeholder: 'Название',
      value: '',
      field: 'name',
      type: 'name',
    },
    {
      placeholder: 'Дата',
      value: '',
      field: 'date',
      type: 'date',
    },
    {
      placeholder: 'Номер',
      value: '',
      field: 'id',
      type: 'number',
    },
  ];

  newIdeaAdded(Idea: Idea): void {
    this.ideas.unshift(Idea);
  }

  filter(event: any) {
    this.filterValue = event;
  }

  cancel(event: any) {
    this.isEditing = false;
    this.ideaEditing = null;
  }

  constructor(
    private title: Title,
    private meta: Meta,
    private IdeaService: IdeaService,
    private toggleService: ToggleService,
    private authService: AuthService,
    private userService: UserService
  ) {
    title.setTitle('Идеи пользователей');
    meta.addTags([
      {
        name: 'keywords',
        content:
          'отличные идеи,идея,добавление,редактирование,удаление,просмотр,активность',
      },
      { name: 'description', content: 'Страница с идеями пользователей' },
    ]);
  }

  ngOnInit(): void {
    this.IdeaService.getIdeas().subscribe((Ideas: any): void => {
      this.ideas = Ideas;
      this.isLoaded = true;
    });
    this.id = this.authService.user?.id;
    this.toggleService.toggle = true;
  }

  public get filterIdea() {
    return this.toggleService.toggle;
  }

  editIdea(idea: Idea) {
    this.isEditing = true;
    this.ideaEditing = idea;
  }

  async deleteIdea(idea: Idea) {
    this.IdeaService.deleteIdea(idea.id).subscribe(() => {
      //@ts-ignore
      this.authService.user.balls -= User.numberBallsForIdea;
      //@ts-ignore
      this.authService.user.ideas -= 1;

      this.userService
        .updateUser(this.authService.user as User)
        .subscribe((user: any) => {
          this.ideas = this.ideas.filter((item) => item != idea);
        });
    });
  }

  IdeaWasEdited(Idea: Idea) {
    this.isEditing = false;
    const idx = this.ideas.findIndex((idea) => idea.id === Idea.id);
    this.ideas[idx] = Idea;
    this.ideaEditing = null;
  }
}
