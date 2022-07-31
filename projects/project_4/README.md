# Project #4: PHP/React - Group Project

## Overview

For your 4th project, you will be collaborating to make a full CRUD app built with a React frontend and a PHP backend.

## Attendance

There are only two mandatory attendance checks during project week, but as always please make sure you're working on your project every day!

- **Thursday, October 15 (Today)**: You have Outcomes at 4:30 PM ET
- **Tuesday, October 20**: Project presentation day! You're required to be in the class zoom starting at 10:00 AM ET

---

## Technical Requirements
### &#x1F534; Mandatory to pass:
#### MVP - minimum viable product

* **PHP backend**: Create a PHP backend with all CRUD operations available across your models.
	* Must have at least one model with full CRUD
* **React frontend**: Create a React frontend that consumes your PHP backend and preforms all CRUD operations in the browser.
* **Make sure to style your app!**
* **Deploy online:** Your app _must_ be deployed online to Heroku
* **Must be hosted on Github** with frequent commits dating back to the very beginning of the project. Commit early, commit often!
* At **least** one Github commit per day per member
* A **daily tracker** that all group members use (Trello, github issues, or another similar tracker)
* **A ``README.md`` file** with explanations of the technologies used, the approach was taken, unsolved problems, and notes to yourself/group members so you can come back to your project later and be able to pick up your train of thought, etc. As well as a **link to your hosted working app**

### &#x1F535; Not mandatory:
#### Recommended features - choose any

* Instead of a one-server build, try building the project with 2 separate servers (PHP api, create-react-app frontend)
* Include **two or more models**
* Include either a one-to-many or a many-to-many relationship
* Use a **third party API**
* What about using **graphs or visuals** on your data? Chart.js , D3.js
* **Include portfolio-quality styling**
* **Use a CSS framework** like skeleton or bootstrap
* **Include wireframes** that you designed during the planning process (uploaded to your github repo)

---

## Technical Demonstration 

All projects will be presented to the class. Your presentation should be:

- Approximately 5-10 minutes in length
- Shows off all features of the app
- Explains the technical details
- Explains the technical challenges
- Explains which improvements you might make

Additionally, we would like each group member to answer at least one of the following questions:

- What went well for your group?
- What was your groups biggest struggle?
- What was the most useful tool that your group relied on the most?

Lastly, everyone should ansewr the following question:

- What was one thing _I_ could have done better to benefit my group

## Meetings with Instructors 

**Today, Thursday October 15**

- Your group will talk with your dedicated project instructor for ~10 minutes to get your app idea approved. Be sure to write out what features you will need to build in order to meet MVP and some stretch goal ideas.

---

## Make A New Repo

Before you begin coding, make a new GitHub repo for your project.

❗ **You will be using [**GitHub**](https://github.com/), _not_ GitHub Enterprise!**

- One group member will make a new github repo for your project **outside** of our class repo on GitHub. This person will be the owner. The owner should add other members of the group as collaborators under the Settings tab of the repo. Collaborators should clone the repo. It's the same process as the previous group project!

- Make sure everyone has a .gitignore! [Here is a list of useful .gitignores, find what is relevant for your php and react (node) project](https://github.com/github/gitignore).

## Heroku Deployment

To deploy your app to heroku, [follow these notes from Heroku](https://devcenter.heroku.com/articles/getting-started-with-php)

To connect your heroku app to a postres database, there is a heroku add-on for that. Search for Heroku Postgres in the add-on search bar and provision it onto your app:

![](https://i.imgur.com/Ao0hSjB.png)
![](https://i.imgur.com/ANgfsbt.png)

Now in terminal inside your project directory, you should be able to start your heroku psql shell using the following command: `heroku pg:psql`
  - This Heroku psql shell is the exact same as your terminal psql shell, so you can do the following things using the same sql commands you used to set up your database locally:
    - Set-up your table
    - Add some data to the table
    - Test that you can see data on app

Once you have your heroku postgres database set up, you will need to connect it to your PHP app. In your model file, add this to the very top: 

```php
$dbconn = null;
if(getenv('DATABASE_URL')){ // if using the heroku database 
	$connectionConfig = parse_url(getenv('DATABASE_URL'));
	$host = $connectionConfig['host'];
	$user = $connectionConfig['user'];
	$password = $connectionConfig['pass'];
	$port = $connectionConfig['port'];
	$dbname = trim($connectionConfig['path'],'/');
	$dbconn = pg_connect(
		"host=".$host." ".
		"user=".$user." ".
		"password=".$password." ".
		"port=".$port." ".
		"dbname=".$dbname
	);
} else { // if using the local database, change the dbname to be whatever your local database's name is 
	$dbconn = pg_connect("host=localhost dbname=phpapi");
}
```

## How to Submit Your Project
Your project is due on Tuesday, October 20 by 10 AM Eastern.

:heavy_check_mark: *One* group member should fill out [this google sheet](https://docs.google.com/spreadsheets/d/1ZvwKj3dGQ-C89NDwyS3EuWw9zFeehAQ8K4vihJ8Emr4/edit?usp=sharing) with all information required as usual.

---

## Suggested Ways to Get Started

<details><summary>List of ways to get started</summary>

* **Wireframe** Make a drawing of what your app will look like on each page of your application (what does it look like as soon as you log on to the site? What does it look like once a user logs in, etc.).

<br>

* **Break the project down into different components** (data, presentation, views, style, DOM manipulation) and brainstorm each component individually.

<br>

* Create your **user stories**

<br>

* Create a **Trello board** and break down the user stories into cards

<br>

* **Use your Development Tools** (console.log, inspector, alert statements, etc) to debug and solve problems

<br>

* Work through the lessons in class for help and inspiration! Think about adding relevant code to your application each day - you are given 5 days so that you can work on it in small chunks, COMMIT OFTEN. We will be looking at your commit dates and comments are part of your scoring.

<br>

* **Commit early, commit often.** Don’t be afraid to break something because you can always go back in time to a previous version.

<br>

* **Consult documentation resources** (MDN, jQuery, etc.) at home to better understand what you’ll be getting into.

<br>

* **Don’t be afraid to write code that you know you will have to remove later.** Create temporary elements (buttons, links, etc) that trigger events if real data is not available. For example, if you’re trying to figure out how to change some text when the game is over but you haven’t solved the win/lose game logic, you can create a button to simulate that until then.

</details>

### Useful Resources

* **[Group Work](/projects/project_3/working_in_groups.md)**
* **[Heroku](http://www.heroku.com)** _(for hosting your project)_
* **[Writing Good User Stories](https://www.romanpichler.com/blog/10-tips-writing-good-user-stories/)** _(for a few user story tips)_
* **[Presenting Information Architecture](http://webstyleguide.com/wsg3/3-information-architecture/4-presenting-information.html)** _(for more insight into wireframing)_

### Where to go for help during project week

1. Seek out help online
2. Seek out help with your classmates
3. Seek out help with our class TA
  - TA Hours are the same usual ones 
