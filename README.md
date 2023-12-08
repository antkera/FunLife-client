# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


NOTE: to copy this readme structure simply click on `Raw` on the top right of this gist. There you have the content in the basic [Markdown syntax](https://www.markdownguide.org/basic-syntax/) used in readme files. Then paste it on a README.md file in your repository and fill the information. Always do this directly from VS code, not from github. DON'T ADD THIS NOTE TO YOUR README. Also make sure to remove any notes from this template.

# FunLife

## [See the App!](https://funlifeapp.netlify.app/)



## Description

"Una innovadora red social centrada en eventos que conecta a usuarios con experiencias locales emocionantes. Descubre, comparte y participa en eventos cercanos, creando conexiones significativas con personas afines.".
#### [Client Repo here](https://github.com/antkera/FunLife-client)
#### [Server Repo here](https://github.com/antkera/FunLife-server)

## Backlog Functionalities
1. **User Authentication and Authorization:**
   - Implement secure user authentication mechanisms.
   - Manage user roles and permissions.

2. **Profile Customization:**
   - Allow users to personalize their profiles with profile pictures, cover photos, and bio descriptions.

3. **Social Interactions:**
   - Implement features like likes, comments, and shares for events.
   - Enable direct messaging between users.

4. **Event Management:**
   - Provide the ability for users to create, edit, and delete their events.
   - Include event categories and tags for better organization.

5. **Notifications:**
   - Implement real-time or push notifications for event updates, comments, and interactions.

6. **Search and Discovery:**
   - Create a robust search functionality to discover events and users.
   - Implement filters and sorting options for a better user experience.

7. **Geolocation Integration:**
   - Use geolocation services to display events based on the user's location.

8. **Integration with External APIs:**
   - Explore integrations with third-party services for additional features or data.

9. **Responsive Design:**
   - Ensure the application is responsive and works well on various devices and screen sizes.

10. **Analytics and Reporting:**
    - Integrate analytics tools to track user engagement and gather insights.
    - Implement reporting functionalities for inappropriate content or behavior.

11. **Accessibility:**
    - Ensure the platform is accessible to users with disabilities.

12. **Performance Optimization:**
    - Optimize the application for speed and performance.

13. **Internationalization (i18n):**
    - Provide multilingual support for a broader user base.

14. **Monetization Features:**
    - Explore options for monetization, such as premium memberships or sponsored events.

15. **Security Enhancements:**
    - Regularly update dependencies and address security vulnerabilities.



## Technologies used

- **Lenguajes:** JavaScript, JSX, CSS, HTML
- **Vite:** Versión 5.0.0
- **React:** Versión 18.2.0
- **React DOM:** Versión 18.2.0
- **React Router DOM:** Versión 6.20.0
- **Flaticon Uicons:** Versión 3.0.0
- **Axios:** Versión 1.6.2
- **React Spinners:** Versión 0.13.8



# Client Structure

## User Stories


- **404** - As a user, I want to see a nice 404 page when I go to a page that doesn’t exist so that I know it was my fault.
- **500** - As a user, I want to see a nice error page when the super team screws it up so that I know that it is not my fault.
- **Homepage** - As a user, I want to be able to access the homepage so that I can see what the app is about and log in and sign up.
- **Sign up** - As a user, I want to sign up on the webpage so that I can see all the events that I could attend.
- **Login** - As a user, I want to be able to log in on the webpage so that I can get back to my account.
- **Logout** - As a user, I want to be able to log out from the webpage so that I can make sure no one will access my account.
- **Create New Fun** - As a user, I want to create a new event (fun) so that I can invite others to attend.
- **View My Funs** - As a user, I want to see the events (funs) I have created.
- **View My Profile** - As a user, I want to view and edit my profile.
- **Find Friends** - As a user, I want to find and connect with friends on the platform.
- **View Public Funs** - As a user, I want to see public events (funs) on the platform.
- **View Messages** - As a user, I want to view my messages.

## Client Routes

**NOTE -** Use the table below to list your frontend routes

## React Router Routes (React App)

| Path                   | Page          | Components           | Permissions              | Behavior                                                      |
| ---------------------- | ------------- | -------------------- | ------------------------ | ------------------------------------------------------------  |
| `/`                    | Home          |                    | Public                   | Home page                                                     |
| `/signup`              | Signup        |                    | Anon only `<IsAnon>`    | Signup form, link to login, navigate to homepage after signup |
| `/login`               | Login         |                    | Anon only `<IsAnon>`    | Login form, link to signup, navigate to homepage after login  |
| `/user/newFun`         | NewFun        |                    | User only `<IsPrivate>` | Page for creating a new event (fun)                          |
| `/user/myFuns`         | MyFuns        |                    | User only `<IsPrivate>` | Page displaying user's own events (funs)                     |
| `/user/myProfile`      | MyProfile     |                    | User only `<IsPrivate>` | Page displaying user's profile                                 |
| `/user/findFriends`    | FindFriends   |                    | User only `<IsPrivate>` | Page for finding and connecting with friends                   |
| `/user/publicFuns`     | PublicFuns    |                    | User only `<IsPrivate>` | Page displaying public events (funs)                          |
| `/messages/`           | Messages      |                    | User only `<IsPrivate>` | Page for displaying messages                                   |
| `/error`               | Error         |                    | Public                   | Error page                                                    |
| `*`                    | NotFound      |                    | Public                   | 404 Not Found page                                            |

## Other Components

- Navbar
- Footer

## Services

- Auth Service
  - `auth.login(user)`
  - `auth.signup(user)`
  - `auth.verify()`

- Event Service
  - `event.list()`
  - `event.create(eventDetails)`

- External API
  - `eventApi.details`
  - `eventApi.list`

## Context

- `auth.context`
- `theme.context`
## Links



[Repository Link Client](https://github.com/antkera/FunLife-client)

[Repository Link Server](https://github.com/antkera/FunLife-server)

[Deploy Link](https://funlifeapp.netlify.app/)

