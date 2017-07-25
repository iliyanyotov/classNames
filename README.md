# classnames-bem
> Simple utility for combining DOM class names and converting them to BEM modifiers.

## What is a modifier?
Modifier is a flag on blocks or elements. It's used to change appearance, behavior or state.

[Read more about BEM and modifiers here.](http://getbem.com/naming/)

## Usage
```js
var classNames = require('classNames');
import classNames from 'classNames';
```

## Format
```js
var className = classNames(baseClass, ...modifiers)
```

## Examples

```js
classNames('button', 'white')
//=> 'button button--white'
```

```js
classNames('button', 4)
//=> 'button button--4'
```

```js
classNames('button', {
  'active': false,
  'disabled': true
})
//=> 'button button--disabled'
```

```js
classNames('button', [
  'blue',
  'disabled'
])
//=> 'button button--blue button--disabled'
```

```js
classNames('button', [
  null,
  undefined
])
//=> 'button'
```

The original idea for the utility without the modifiers comes from JedWatson.
https://github.com/JedWatson/classnames

##TODO

1. Add tests for the package
2. Work on the documentation
