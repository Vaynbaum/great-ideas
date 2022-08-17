import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';
import { Input } from 'src/app/shared/model/input.model';
import { Message } from 'src/app/shared/model/message.model';
import { User } from 'src/app/shared/model/user.model';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-edit-account',
  templateUrl: './edit-account.component.html',
  styleUrls: ['./edit-account.component.scss'],
})
export class EditAccountComponent implements OnInit {
  //@ts-ignore
  form: FormGroup;
  constructor(
    private title: Title,
    private meta: Meta,
    private authService: AuthService,
    private userService: UserService
  ) {
    title.setTitle('Изменение личных данных');
    meta.addTags([
      { name: 'keywords', content: 'изменение,редактирование,личные,данные' },
      { name: 'description', content: 'Страница для изменения данных' },
    ]);
  }
  message: Message = {
    text: '',
    type: '',
  };
  inputs: Input[] = [
    {
      field: 'lastname',
      type: 'name',
      placeholder: 'Фамилия',
      messageError: () => {
        console.log('lastname');
        return 'Поле фамилия должно быть заполнено.';
      },
    },
    {
      field: 'firstname',
      type: 'name',
      placeholder: 'Имя',
      messageError: () => {
        return 'Поле имя должно быть заполнено.';
      },
    },
    {
      field: 'residency',
      type: 'text',
      placeholder: 'Населенный пункт',
      messageError: () => {
        return 'Поле населенный пункт должно быть заполнено.';
      },
    },
    {
      field: 'password',
      type: 'text',
      placeholder: 'Пароль',
      messageError: () => {
        if (this.form?.get?.('password')?.['errors']?.['required']) {
          return 'Пароль не может быть пустым.';
        }
        if (
          this.form?.get?.('password')?.['errors']?.['minlength'] &&
          this.form?.get?.('password')?.['errors']?.['minlength'][
            'requiredLength'
          ]
        )
          return `Пароль должен быть больше ${
            this.form.get('password')?.['errors']?.['minlength']?.[
              'requiredLength'
            ]
          } символов. Сейчас ${
            this.form.get('password')?.['errors']?.['minlength']?.[
              'actualLength'
            ]
          }.`;
        return '';
      },
    },
  ];
  private showMessage(message: Message) {
    this.message = message;

    window.setTimeout(() => {
      this.message.text = '';
    }, 5000);
  }

  public get user() {
    return this.authService.user;
  }

  public set user(value: any) {
    this.authService.user = value;
  }

  onSubmit() {
    const { lastname, firstname, residency, password } = this.form.value;
    let newUser = new User(
      this.user?.email as string,
      password,
      lastname,
      firstname,
      residency,
      this.user?.ideas as number,
      this.user?.balls as number,
      this.user?.url,
      this.user?.id
    );
    this.userService.updateUser(newUser).subscribe(() => {
      this.showMessage({
        text: 'Данные успешно изменены',
        type: 'success',
      });
      this.user = newUser;
    });
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      lastname: new FormControl(this.user?.lastname, [Validators.required]),
      firstname: new FormControl(this.user?.firstname, [Validators.required]),
      residency: new FormControl(this.user?.residency, [Validators.required]),
      password: new FormControl(this.user?.password, [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }
}
