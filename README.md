<h2>Using Redux</h2>


- [Basic Redux](#basic-redux)
- [using redux in an application](#using-redux-in-an-application)



----
# Basic Redux

Take a look at this code:

![alt-text](/photo-examples/redux-1.PNG)

This is a basic example of redux, but a couple things to note:

1. we have to install the package first, using `npm install redux` to save to our node modules folder.
2. we need to build a reducer function to call when we dispatch an action from our store.
3. If there is no action, we return the original state
4. our store variable is assigned to `redux.createStore()` which is advised against for bugs, but we'll be using the redux toolkit instead.
5. Then we use our subscriber to give us the current state of our counter, which output when or reducer runs.
6. finally, we can dispatch the function as it corresponds to the action type.

----

# using redux in an application

first we should enter these to commands to import redux to our project:
- `npm install redux`
- `npm install react-redux`

The second command is to let react know that we using redux. Redux is ignorant of the existence of react, so this is how we associte the two.

#   R E D U X - R E F R E S H E R  
 