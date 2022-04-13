# 2022 Internship Coding Challenge

Github Repository: https://github.com/lucaspanwang/internship-exercise-lucas



## 1. **Work / Project Examples**

Three recent work and projects I've participated or been participating:

- **[Project] GameStation Responsive Website (Mar 2022 - Present)**

  Deployed Website: https://game-station-ca.herokuapp.com/ (still working on)

  Github Respository: https://github.com/Amadus/game-station

  1. **Details:** 

     ·   Working on a responsive website for customers to trade physical video games by posting, searching, buying, and selling games, as well as negotiating prices in the comment section

     ·   Developing the front-end using **React** v17.0 and **Material-UI**, with **Google Maps API** to get and display users’ location information, **Cloudinary API** to upload and process images

     ·   Building the back-end with **Node**.js and **Express**, and utilized **MongoDB** and **Mongoose** to operate the database

     ·   Insuring login security by using **Auth0** and implementing **unit tests** for each component

  2. **My Role**:

     ·   There are 3 people in our group, and I'm in charge of the front-end procedures. I **built up the responsive architecture** of the front-end project, including the **initial building** of all the pages, navigation bars and routers.

     ·   I was responsible for the **Home Page**, **Games Page** and **Game Details Page**. Also, I have helped with the Sell Page, To allow users to **upload their images** while posting games using Cloudinary API.

     

- **[Work] SDE Internship at SS&C Advent (Jun 2021 - Sep 2021)**

  1. **Details:** 

     ·   Worked with team members in Beijing and San Francisco, to develop a cross-platform browser-based research management system (Tamale) using **Angular**, **TypeScript**, **Sass**, **RxJS**, and **Kendo UI**

  2. **My Role:** 

     ·   As an intern, I was responsible for **an admin console feature** that allows administrators to manage users, notes, and entities using **AG Grid**, and utilized **REST API** to connect with the back-end.

     ·   I **enhanced a map tile feature** developed with Google Maps API by adding hiding and expanding functions for boxes

     ·   I **created and refined several widgets** such as split buttons and alert windows to improve user experience

     ·   I implemented **unit tests** for new code by writing and running unit tests using **Karma**; test coverage > 85%

  

- **[Project] Psychotherapy Responsive Website (Jan 2021 - May 2021)**

  Github Respository: https://github.com/PeiYumeng/Psychology_platform

  1. **Details:**

     ·   Developed a responsive website to provide professional psychology services like online counseling, live video broadcast, community communication, etc.

     ·   Built web pages based on **React**, using **Flex-Layout**, **Ant Design Grid** to implement the responsive layout

     ·   Implemented a database using **MySQL** and utilized **Node.js** and **Express Framework** to build the back-end

  2. **My Role:**

     ·  There are 2 people in our group, and I'm in charge of the front-end part, which includes **Home Page**, **Consult Page**, **Broadcast Page**, **Treehole Page** and **Profile Page**.

     ·   I created web services for online monitoring, live video chat, and broadcast, using **WebSocket** and **WebRTC**.

     

## 2. Inspiration

- **Video Chat Open Source Project by Adrian Hajdin**

  https://github.com/adrianhajdin/project_video_chat

  When doing the **Psychotherapy Responsive Website**, this open source project has profoundly inspired me on how to build a video chat project using tehcniques like **WebSocket** and **WebRTC**. Also, it inspired me on how to use **useContext** to make the global management of variables and ethods easier. Because of its inspiration, I was able to build a more complexed video chat project that allow multiple users and on-line doctors to video chat on a website.

  

- **Avatar Upload Component by Ant Design**

  https://codesandbox.io/s/71w1fb

  This component was originally used in my **Psychotherapy Responsive Website** for users to upload their avatars. Before using it, I've carefully read its source code and found how the upload icon, loading icon and avatar image change in the same box upon the change of states. And this design has inspired me a lot. So after that, when doing the project **GameStation Responsive Website**,  I tried to make a similar Image Upload component by my own with the Input and IconButtons provided by Material UI.

  

- **Responsive Design Blog Post by Mozilla**

  https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design

  Before designing the responsive feature of my recent project **GameStation Responsive Website**, I decided to read some reading material regarding to the diffrent methods to build responsive websites.This blog post made by Mozilla inspired me most by its abundant types of methods that can apply in different circumstances. So I decided to use **Media Queries **for all pages, **Flexible layout** for lots of components, and **Grid layout **for Games page, Game Details Page and Profile page. Also, this inspiration also helped me to choose Media Queries and **Multicol layout** for this **Fancy Italian Restaurant** website.

  

## 3. Focus

- I'm passionate about **web development** and of course I would love to **build responsive websites** on front-end or full-stack. I really hope to hone my skills of basic web development skills and more knowledge that I don't know about them,  so that I can help to make an impact and improve customers' lives with my knowledge and skills. **I will be very glad if I can use most of my time doing web development.**

- Despite of my experience of web development both in my internship and school projects, I know I still have some areas of techniques to solidify. For example, I didn't have many chances to get very familiar with some **reactive app** techniques like **Redux** and **RxJS**, and I hope maybe I can get chances to get more experience with them and be able to **complex async/side effects** well. Also, I would also love to learn **back-end skills** and **database skills** to help to build a high-performance and user-friendly full-stack project.

  

## 4. Code Challenge

- My solution: (A "TODO.md" file is also added in this repository)

  CodeSandbox URL: https://codesandbox.io/s/suspicious-sara-kxywhc

  Deployed Website: https://csb-fwtnf5.netlify.app/

  

- Solution Walkthrough:

  **Logics**

  1. I created 3 arrays to store the three categories of menu items. And used a For Loop to loop over menuItems and categorize them into the arrays based on each items assigned type.
  2. I sorted each category array with the built-in sort method and its optional comparator function to compare the menuOrder.
  3. I created a **renderMenuItems()** method to render the sorted results into the appropriate container with required formats. I wrote one ul into each section with different id, so that this method can render the items according to the menuId and the items array. The meethod loops over the items array and insert each one with styles into the suitable ul. Also, it checks if the item is spicy and add a "spicy" class into the classList of the item element.
  4. **[Bonus: Filtering]** When checking every item dom element in the **renderMenuItems**, I added the element into a **spicyElements** array if it is spicy. After that,  I created a **changeVisibility() **method to loop over the spicy elements and let it toggle the **hide** class with *element.classList.toggle("hide");* The **hide** class will make the element's display style become none if the check box is clicked. So I also added an event listener for the checkbox.

  **Styling**

  1. To make the menu fancier, I added a background image of parchment paper for it and added different border styles, shadow styles and font families for different titles and texts.
  2. To make the menu responsive and looks fancy for users using diffrent devices. I added a **Multicol layout** for the main section and used **Media Queries** to change styles according to the change of the width. If the screen width is **larger than 1000px**, there will be two columns and the width of the main content will be less than 70% of the viewport width. If it is **less than 1000px**, which is more frequent on mobile devices, there will be only one column and the font-size and content width will be more suitable for mobile device users.
