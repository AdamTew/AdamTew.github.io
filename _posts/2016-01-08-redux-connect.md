---
title: Connecting to the Redux Store
layout: post
---

In the world of `react.js`, it's difficult to bring everything together. There's just *too much stuff!*. Terminology for dozens of new ideas you need mentallymapped to code can almost give you an aneurysm. In order to take advantage of app-wide state management, you need to understand the [flux architechture](https://facebook.github.io/flux/docs/overview.html). 

## Overview

Redux is an implementation of the flux architecture. It's a really light dependency that offers a handful of methods which are used to make an application stateful. The [docs](http://rackt.org/redux/docs/introduction/index.html) are a great resource for getting at the heart of redux.

*Note: Because of terminology, I'm going to use the word __store__ to describe the __redux state__ because I don't want there to be confusion with the local state of a component*

In a nutshell, you have a `store` that houses data. This store would holds information you want to persist beyond changing routes, so stuff like username. This data sits inside the store until you need it. It's important to note that __you must explicity retreive this data if you want it__ via the `connect()` method.

## connect()

If the redux store were a river of data, flowing through your application, the connect function would be the water controller that routes the proverbial data into a given component. It changes a component from dumb to smart (more information on that [here](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.tcfx9ct67)).

By connecting a component to store data you are subscribing to that data. This means a couple of things:

- That component will always have access to the current version of the given data
- When the given data is updated your component will rerender

`connect()` lets you subscribe to as many objects in the store as you need. The way you manage this is through the first parameter of connect, `mapStateToProps(state)`. There are other methods in connect, you can read about them [here](https://github.com/rackt/react-redux/blob/master/docs/api.md)

*Note: Rarely, if ever, should you subscribe to the whole store on a given component because this can hurt perfomance*

## mapStateToProps(state)

`mapStateToProps` hooks into the river of redux data and maps a given object on the store to an object on the local `this.props`. The rest of redux needs to be setup already (reducers, actions, etc) but once that's taken care of, you only need to call `connect` and pass `mapStateToProps` in as an argument to pull out redux data.

## Examples

Here are some examples

~~~

// This maps the entire state to a component
// something you don't normally want to do
mapStateToProps(state) {
  return {
    state
  }
}

export default connect(mapStateToProps)(MyComponent)
~~~

~~~
// More ideal because you're only grabbing the object you need
mapStateToProps(state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(MyComponent)
~~~

~~~
// A little bit cleaner with the es6 lambda syntax
export default connect(
  (state) => ({
    user: state.user
  })
)(MyComponent)
~~~