# Auto Hive | A car dealer company project

- Client Side Live Link: [https://classroom.github.com/a/Y0bAS9YS](https://classroom.github.com/a/Y0bAS9YS)
- Server Side Live Link: [https://server-auto-hive.vercel.app/](https://server-auto-hive.vercel.app/)


## The things uses on this project

- I use here `React` `Node.js` `Express.js` `MongoDB`
- I also use some node package manager in client side. Like as:
    - `react-router` for setup routing on different page.
    - `tailwindCSS` for design UI and customize theme as my own.
    - `react-icons` for some icons.
    - `axios` for maintain http promised request properly arranged.
    - `firebase` for user authentication.
    - `react firebase hooks` for implement easy firebase authentication.
    - `custom hooks` for fetch data from the server.
    - `context api` for props drilling.
    - `json web token` for secure api and avoid repeatedly login.
    - `body-scroll-lock` for lock the parent when modal open.


## Some Features of the project

- Component and Pages
    1. The project have beautiful responsive header with `Navbar` and `Banner`
    2. In the project have different 9 pages where some of are public and some of are protected by user login.
    3. The project have a beautiful `Login` and `Register` page with `REGEX validation` of form and also handle `firebase` error.
    4. Here used my custom `carousel` header and two un protected route `About` which describe about company and a `Blog` page with some blog.
    5. The project have protected route/page `My Favourite` which contain `Add Item` and `WishList`
    6. I implement a `WishList` route which is user login protected and the unique user api is secured with the help of ***jwt token***.
    7. You can update full car description by clicking `update` button and also update just stock of the car by clicking `inventory/manage-stock`
    8. It is fully `responsive` with mobile, tabled, desktop screen.
    9. The project have an `Loading`, `processing`, some beautiful user experience increase component.