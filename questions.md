1. In total I spent 3-3.5 hours on this assignment. If I were to add more features to this solution they would include:
  - fixed header content inside of the rendered table
  - update to the debounce method that is waiting for the user to finish typing (in case the user begins typing something different while the initial request is in progress)
  - I would add an on click for each column (except for the cover column) that renders a popover when clicked that displays the entire contents (due to longer author names or titles on mobile)
2. In relation to this project, the most usefull addition to ECMAScript would be the string replace all feature. For the input used in this application, all white spaces in the application were able to be replaced by addition signs for calling the API. This when used in combination with the String trim() method allows for a very clean query being passed to the API.
3. I would look into both the networking tab in my web browsers developer tools as well as using the Performance tab to measure which events are causing any slow down in performance. Also, using the React Developer Tools extension allows for highlighting component rerenders even in production. I have never had to diagnose an issue with front-end slowdown in production.
4. The field surrounding published date / year are not very consistent. There is a first_published_year but no first_published_date, in some cases the publish_date field returns an array that consists of all republish dates as well and the values in this array do not remain consistent (some are just a year and nothing else)
5. About Me:
```
{
  "firstName": "Chris",
  "lastName": "Doyle",
  "city": "Hamilton, Ontario",
  "developmentSkills": [
    "React",
    "Express",
    "JavaScript",
    "Python",
    "Java",
    "Structured Query Language",
    "Relational Databases"
  ],
  "otherInterests": [
    "Guitar",
    "Hockey",
    "Golf"
  ],
  "applicationDate": "2022-01-18T05:00:00.000Z"
}
```
*Note:* To run the project in development run: ```yarn start``` from the project root.