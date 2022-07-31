# CRA PHP FULL CRUD PEOPLE APP

## Two Apps: Backend API and Front End Client

Remember, our PHP API is just that, an API. Our PHP server is a giant data farm. This data farm can be made accessible to any client or platform.

This is useful because then devs can develop front ends for mobile and desktop that can use the same backend.

For now, we are done with our API. Let's make a frontend that can interact with it.

![](https://i.imgur.com/zm4EeFX.png)

## Two Apps

We will have a top level folder

- contacts

This will contain our two separate apps. If we were hosting this on heroku, the top level `contacts` app would _NOT_ be a git repository. Rather both apps inside would be sibling git repos, hosted separately on git and on some web hosting service like heroku.

- contacts
- contacts_api
- contacts_client

## Style

We'll just add this code this into `index.css`. Again for small projects this is totally fine. As your projects get bigger, you'll likely want to work with other ways that react can incorporate organized css.

We're gonna go for the Holy Grail layout. It is known as this because it was a really desirable layout, and before flexbox and grid it was nearly impossible to achieve

![](https://i0.wp.com/css-tricks.com/wp-content/uploads/2017/02/holy-grail-example.jpg?ssl=1)

![](https://i.imgur.com/hcykW6J.png)

Navigate to today's student examples. `cd contacts`. There should be a `contacts_api` folder - this is your PHP backed that you have built over the last few days. Do not `cd` into it.

Let's instead go to into `contacts_client` - this is a CRA app with some starter code, so that our build will be faster.

Let's `npm install` to install the needed node modules

Next, we'll need to tell this react app where to fetch the data. In `package.json`, let's add a proxy (make sure it is proper json):

```
{
  "name": "contacts_client",
  "version": "0.1.0",
  "private": true,
  "proxy": "http://localhost:8888",
```

Additionally, we'll have to go into our PHP backend API and allow request from our React Front end.

in the `htaccess` file right at the top add

```
Header always set Access-Control-Allow-Origin "*"
Header always set Access-Control-Allow-Methods "POST, GET, OPTIONS, DELETE, PUT"
Header always set Access-Control-Allow-Headers "Content-Type"
```

We also have to add an options route to be able to correctly route or requests at the bottom of our `.htaccess` file

```

RewriteCond %{REQUEST_METHOD} ^OPTIONS$
RewriteRule ^(.*)$ $1 [R=200,L]
```

## Read: Index

Let's build a fetch request to get all the people and let's call it on page load

**App.js**

```js
getPeople = () => {
  axios
    .get('/people')
    .then(
      response => this.setState({ people: response.data }),
      err => console.error(err)
    )
    .catch(error => console.error(error))
}
```

And then let's call it on page load

```js
componentDidMount = () => {
  this.getPeople()
}
```

You should now see whatever people you already had in your database from your previous days' builds.

## Create

Let's build a fetch request to create a new person.

In the interest of time, the form has already been built for us, with the functionality needed, we just have to write our fetch request.

**App.js**

```js
handleAdd = (event, formInputs) => {
  axios
    .post('/people', formInputs)
    .then(
      response => this.setState({ people: response.data }),
      err => console.error(err)
    )
    .catch(error => console.error(error))
}
```

## Delete

```js
handleDelete = deletedPerson => {
  axios
    .delete(`/people/${deletedPerson.id}`)
    .then(
      () => {
        this.setState(state => {
          const people = state.people.filter(
            (notice, index) => notice.id !== deletedPerson.id
          )
          return { people }
        })
      },
      err => console.error(err)
    )
    .catch(error => console.log(error))
}
```
