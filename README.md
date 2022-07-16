# Frontend Mentor - Interactive rating component solution

This is my solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)

## Overview

### The challenge
- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot
![alt text](https://github.com/sinhashlok/Interactive-Rating-Component/blob/main/image.png)

### Links
- Live Site URL: https://sinhashlok.github.io/Interactive-Rating-Component/

## My process

### Built with
- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Javascript

### What I learned
- I learned how get the index of button clicked
```
document.addEventListener("click", (e) => {

    res.forEach(function(item, index) {
        if (e.target == item)
            ind = index;
    })
    
})
```
