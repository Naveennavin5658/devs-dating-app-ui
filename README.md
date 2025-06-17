# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



# UI Outline

Body
    NavBar
    Route=/ => Feed
    Route=/login => Login Page
    Route=/connections => Connections component
    Route=/profile => Profile




# DevTinder
- Created a Vit + React project
- Remove uynnecessary code and create a namaste app
- Install tailwind css
- Install daisy ui
- Add a nav bar component to App.jsx
- Create a separate NavBar file and separate the component
- Install react router dom
- Create broswer router > Routes > Route Children
- Create Outlet in body component
- Create a common footer
- Crate a login page
- Install axios 
- Handling CORS - Install cors npm package. In backend => add middleware with configurations: origin, credentials
- Whenever you are making any api call, pass axios {withCredentials:true}
- Install redux tool-kit + react/redux package
- configureStore => add a Provider to app.jsx => createSlice & export it => add reducer to store
- Add redux dev tools extension to chrome
- Login and check the updated profile photo of the user and add a welcome banner message
- Refactor base url to group constants and group all components to a common components folder
