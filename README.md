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

**NOTE -**  List here all the actions a user can do in the app. Example:

- **404** - As a user I want to see a nice 404 page when I go to a page that doesn’t exist so that I know it was my fault 
- **500** - As a user I want to see a nice error page when the super team screws it up so that I know that is not my fault
- **homepage** - As a user I want to be able to access the homepage so that I see what the app is about and login and signup
- **sign up** - As a user I want to sign up on the webpage so that I can see all the events that I could attend
- **login** - As a user I want to be able to log in on the webpage so that I can get back to my account
- **logout** - As a user I want to be able to log out from the webpage so that I can make sure no one will access my account
- **events list** - As a user I want to see all the events available so that I can choose which ones I want to attend
- **events create** - As a user I want to create an event so that I can invite others to attend

## Client Routes

**NOTE -** Use below table to list your frontend routes

## React Router Routes (React App)
| Path                      | Page            | Components        | Permissions              | Behavior                                                      |
| ------------------------- | ----------------| ----------------  | ------------------------ | ------------------------------------------------------------  |
| `/`                       | Home            |                   | public                   | Home page                                                     |
| `/signup`                 | Signup          |                   | anon only `<IsAnon>`     | Signup form, link to login, navigate to homepage after signup |
| `/login`                  | Login           |                   | anon only `<IsAnon>`     | Login form, link to signup, navigate to homepage after login  |
| `/profile`                | Profile         | EditProfile       | user only `<IsPrivate>`  | Navigate to homepage after logout, expire session             |
| `/games/list`             | GameList        | AddGame, GameCard | user only `<IsPrivate>`  | Shows all films on backlog                                    |
| `/games/edit`             | GamesEdit       |                   | user only `<IsPrivate>`  | Shows all games on backlog                                    |
| `/games/favourites`       | FavouriteList   | GameCard          | user only `<IsPrivate>`  | Shows all games on backlog                                    |

## Other Components

- Navbar
- Footer

## Services

- Auth Service
  - auth.login(user)
  - auth.signup(user)
  - auth.verify()

- Backlog Service
  - game.filter(type, status)
  - game.detail(id)
  - game.add(id)
  - game.delete(id)
  - game.update(id)
  
- External API
  - gameApi.details
  - gameApi.list
  
## Context

- auth.context
- theme.context
  
## Links

### Collaborators

[Developer 1 name](www.github-url.com)

[Developer 2 name](www.github-url.com)

### Project

[Repository Link Client](www.your-github-url-here.com)

[Repository Link Server](www.your-github-url-here.com)

[Deploy Link](www.your-deploy-url-here.com)

### Trello

[Link to your trello board](www.your-trello-url-here.com)

### Slides

[Slides Link](www.your-slides-url-here.com)