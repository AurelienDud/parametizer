*“Parametizer arranges arguments according to your needs regardless of the order your function received them”*
===============

## Table of Contents
* [Installing](#installing)
* [Support](#support)
* [Usage and examples](#usage)
* [Parametizer API](#api)
* [Questions](#questions)
* [Use the badge](#use-the-badge)

---

## Installing

With Yarn
``` node
  $ yarn install --dev parametizer
```
Or with NPM
``` node
  $ npm install --save-dev parametizer
```

---

## Support

Parametizer is written in Javascript ECMAScript 2015 and exported as an UMD javascript module.

---

## Usage

### Overview
Imagine arguments received by a function are like a grain of sand. If the grain is small you want to use it for one usage and if it's big another usage. The shape of the grain have no importance here, the test is only based on the global size. Parametizer is like the sieve used to filter the grains of sand.

### In your code
Considering a function receiving spreads arguments. Parametizer allow you to set some mappings (named 'layout') between arguments and your internal declarations according to the count of arguments received by the function.
``` javascript
function myFunction(...someArguments) {
  const [const1, const2, const3] = parametizer( someArguments, [
    [2],
    [1, 2],
    [0, 1, 2]
  ])

  // use const1, const2, const3 as you need
  // ...
}
```
Parametizer read arguments in the order received and arranges them in the order define by the layout.

The numbers written in the layouts match with the index of declarations. So in the previous example ```[2]``` target ```const3```.

### Examples

With the previous example, if your function get only one parameter the layout ```[2]``` will be used:
``` javascript
const1 // undefined
const2 // undefined
const3 // = someArguments[1]
```
With two parameters that will be the layout ```[1, 2]```
``` javascript
const1 // undefined
const2 // = someArguments[1]
const3 // = someArguments[2]
```
And if your function receive three parameters that will be the layout ```[0, 1, 2]```
``` javascript
const1 // = someArguments[1]
const2 // = someArguments[2]
const3 // = someArguments[3]
```

So the function adapts to what is most logical for the user, not the other way around!

---
## API

parametizer( arguments, layouts )

### arguments:
Array of any

### layouts:
Array of array of int

---
## Questions

### Why that library?
When you are written a library you want to make the better as possible for people.

Sometimes a function could have some optional parameters and it could be more intuitive for users that the required parameters appear after optional ones.

But you will not want to force the user to write this:
```javascript
myFunction( undefined, undefined, required )
myFunction( optional, undefined, required )
myFunction( optional, another, required )
```
You will prefer something like this:
```javascript
myFunction( required )
myFunction( optional, required )
myFunction( optional, another, required )
```
Or maybe even this:
```javascript
myFunction( required )
myFunction( optional, required )
myFunction( required, optional, another )
```
This is crazy, dumb, strange? Maybe. But if this is better for usage so it's the good way.

So Parametizer is an effortlessly, easy-readable and optimized way for this:
```javascript
  const const1, const2, const3 = undefined

  switch ( someArguments.length ){
    case 1:
      const3 = someArguments[0]
      break
    case 2:
      const2 = someArguments[0]
      const3 = someArguments[1]
    case 3:
      const1 = someArguments[0]
      const2 = someArguments[1]
      const3 = someArguments[2]
  }
```
Is it not more simple with the following?
```javascript
const [const1, const2, const3] = parametizer( someArguments, [
  [2],
  [1, 2],
  [0, 1, 2]
])
```

---

### What about extra arguments?

What we are asked is to manage parameters according to layouts you give us. So we do nothing with arguments that are outside the layouts definitions.

But you can easily handle these additional arguments next to Parametizer
``` javascript
function myFunction(...someArguments) {
  const exceptedArgs = 3
  const extraArgs = someArguments.splice(exceptedArgs, )
  // ...
}
```
---

### What if several layouts have the same length?

Create layouts is your responsability. So Parametizer use the first layout that fit the arguments list. That will be not necessarily the first in the array of layouts.

One possibility was to set layout as an JSON object with mandaroty entries but this is more characters to write and that don't ensure the validity of layouts. Imagine by example the keys don't fit with the count of their values
``` javascript
// this is not a valid layouts object!
layouts = {
  1:[0, 1],
  2:[0, 1, 2],
  3:[0]
}
```

In all cases Parametizer sanitize values of its parameters. So as much to allow to be simple. But it's not impossible in the future that Parametizer allow you to choice between to use Array or Json object.

## Use the badge

[![parametizer](https://img.shields.io/badge/Enhanced%20by-Parametizer-brightgreen)](https://github.com/AurelienDud/parametizer)

```markdown
[![parametizer](https://img.shields.io/badge/Enhanced%20by-Parametizer-brightgreen)](https://github.com/AurelienDud/parametizer)
```