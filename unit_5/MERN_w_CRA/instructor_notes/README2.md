[![General Assembly Logo](/ga_cog.png)](https://generalassemb.ly)

# RAILS API - Frontend

<hr>
Title: Rails API frontend<br>
Type: Lesson<br>
Duration: A little while<br>
Creator: Thom Page<br>
Adapted for React: Karolin Rafalski<br>
Topics: React, Client/Server, CORS, AJAX/Fetch, ~~Angular~~, Flexbox<br>
<hr>

### Lesson Objectives

_After this lesson, students will be able to:_

- Use Flexbox to lay out a page
- Post data to our API using React
- Update the page with new data
- LAB: Deploy Rails API

<hr>

## SETUP

Open the `noticeboard_app` directory from this morning.

Inside it should be `noticeboard_app_api` and `noticeboard_app_frontend`.

<br>
<hr>

# &#x1F4D0; React

- Let's format our data on our page

### Display the AJAX'ed stuff

Notice, we have some placeholder html elements, that we'll fill in later.

<br>
<hr>

# &#x1F3CB; &#x1F371; STYLE

With React now 'consuming' our API, let's make a webpage using what was known as the "Holy Grail" layout with a header, footer, main section, and two sidebars.

## CSS

We'll just add this code this into `index.css`. Again for small projects this is totally fine. As your projects get bigger, you'll likely want to work with other ways that react can incorporate organized css.

We're gonna go for the Holy Grail layout. It is known as this because it was a really desirable layout, and before flexbox and grid it was nearly impossible to achieve

![](https://i0.wp.com/css-tricks.com/wp-content/uploads/2017/02/holy-grail-example.jpg?ssl=1)

![](https://i.imgur.com/36AhkCF.png)
<br>

<hr>

## POST REQUEST

### Add a Notice to the Database

#### SEND THE AJAX REQUEST

```javascript
// ...
handleAdd = (event, formInputs) => {
  axios
    .post('/notices', formInputs)
    .then(jsonedNotice =>
      this.setState({ notices: [jsonedNotice.data, ...this.state.notices] })
    )
    .catch(error => console.error(error))
}
//... and pass this into the Aside
<Aside handleSubmit={this.handleAdd} />
```
