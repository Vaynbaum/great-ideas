# great-ideas

This is a coursework on the subject of WEB 2021

The application is designed to express their `initiatives` for the improvement of the territory where a person lives. 
Provides the user with the ability to `add`, `modify` and `delete` their ideas, as well as `filter by field values`. 
For `more motivation`, points are awarded for added ideas, which can be exchanged for `sponsored goods`.

<img width="500px" src="https://user-images.githubusercontent.com/78900834/180047789-a53daa86-2da8-41ef-b521-300964988c11.png">

***
The application provides the following features:
1. Registration and authorization in the system
2. Creating ideas and editing ideas
3. Displaying the ideas of all users or only an authorized user
4. Filtering ideas by name, date and number
5. Displaying the user's personal data in the personal account
6. Editing user data
7. Deleting an account from the database
8. The opportunity to exchange points received for adding ideas for souvenirs and bonuses
9. Display of goods purchased in the bonus store in your personal account

## Application structure
The application includes 5 sections:
1. Login
2. Registration
3. Ideas
4. Bonus Shop
5. Personal account

<img width="500px" src="https://user-images.githubusercontent.com/78900834/180066715-95e17882-b7fc-44fc-ad31-ecb9128ea7bd.png">

## How it looks like
After downloading the application, the authorization page opens.

<img width="366" alt="image" src="https://user-images.githubusercontent.com/78900834/180062614-b7720502-db0d-443b-a606-8700dbbeeccf.png">

With this, the user can log in or go to the registration page.

<img width="335" alt="image" src="https://user-images.githubusercontent.com/78900834/180062654-dc8eecf5-9ef4-47c3-a92a-f1c6fb353ef3.png">

If the user was previously logged in to the system, then an automatic transition to the main page will occur.

There will be a transition to the main page, which contains brief information about the project and user statistics, if the user was previously authorized in the system or after authorization.

<img width="399" alt="image" src="https://user-images.githubusercontent.com/78900834/180062945-48299d75-619b-4b1b-862c-60a1a81590b8.png">

The Ideas page contains a form for adding a new idea, a field for filtering ideas and the ideas themselves, which can be changed or deleted by clicking on the appropriate buttons.

<img width="410" alt="image" src="https://user-images.githubusercontent.com/78900834/180063033-8c808bf8-be71-4748-b301-d2f7f7f852b8.png">

The "Bonus Store" page contains a list of products and a field for filtering them. When you click on the card,
the element will open this element separately. After that, you can buy this product for points or go back to the entire list of bonuses.

<img width="400" alt="image" src="https://user-images.githubusercontent.com/78900834/180063288-ea111fac-d063-44dc-becd-65e60d5540ac.png">

The "Personal Account" page displays the data of the authorized user, a list of purchased goods and a button to delete the account.

<img width="475" alt="image" src="https://user-images.githubusercontent.com/78900834/180063657-c0f05ee4-862b-4750-b0a6-e93f1a83441b.png">

By clicking on the profile in the left corner, you can get a drop-down list consisting of three items: account, change profile and log out.
On the user data editing page, it is possible to change the surname, first name, place of residence and password.

<img width="421" alt="image" src="https://user-images.githubusercontent.com/78900834/180063745-b7159669-d4b0-484f-854c-5fd5eabf4785.png">

## Technologies in the project
Frontend-part of the application is written using the Angular framework.

Backend-the part of the application that allows you to upload photos is written using the Express framework.

## How to start
After downloading the project, you need to install the dependencies. 
You need to write the command while in the frontend, backend/upload-image, backend/db directories

>npm install

To run, you need to write the command while in the frontend, backend/upload-image, backend/db directories

>npm run start

Open your browser at http://localhost:4200/
