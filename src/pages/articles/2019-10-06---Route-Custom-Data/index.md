---
title: "Setting Custom Data on a Route in Angular"
date: "2019-09-06T12:00:00.000Z"
layout: post
draft: false
path: "/posts/setting-custom-data-on-a-route-in-angular/"
category: "Angular"
tags:
  - "Web Development, Angular"
description: "Looking at how to set up custom properties on your routes in Angular"
---

I've found myself in need of deciding what parts of layout to show on a particular route in an Angular application.
So, the way this works, in your routing module, you can define a **data** property on one of your routes, and anything in there you can then later get in the component's **Activated Route**.

```javascript
  constructor(private currentRoute: ActivatedRoute);
```

The only problem here happens when you want to make a decision about something based on that data property in some parent component. The thing is, when you look at the ActivatedRoute in the parent component, and look at it's data property, it will give you the one of the parent's component, not of the component that is being rendered for the actual route.

What you need to do, is go deep inside firstChild property, and then another firstChild and so on, until you get to the very last and actual one. Here is the little recursive method to do just that.

```javascript
  getFirstChild(route) {
    if (route.firstChild) {
      return this.getFirstChild(route.firstChild);
    }
    return route;
  }
```

## The other tricky part though.

After you have this method, unfortunately you can't just use it on ngOnInit or in the constructor, because at that time the route isn't loaded yet, and the property **firstChild** isn't ready yet. It would be null.
What you need to do is to subscribe to the router events and listen for changes, when the route is finished loading, then you can make this method call and make all necessary decisions in your code.

The router property here also needs to be injected in the constructor, same way as **ActivatedRoute**.

```javascript
this.router.events.subscribe((val: any) => {
  if (val instanceof NavigationEnd) {
    const myCurrentRoute = this.getFirstChild(this.currentRoute);
    if (myCurrentRoute.snapshot.data.myCustomProperty) {
      // make some important decision here
    }
  }
});
```