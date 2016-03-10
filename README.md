# Zombie Service Scale 

Scale up and down [zombies]() with a `scale` property.

## Install

```sh
npm install --save @zombiec0rn/zombie-service-scale
```

## Use

```js
var scale = require('@zomebic0rn/zombie-service-scale')
var up = scale.up({
    id    : 'app',
    image : 'org/app',
    scale : 3
})
console.log(up)
// =>
// [
//    {
//        id    : 'app',
//        image : 'org/app',
//        scale : 3
//    },
//    {
//        id    : 'app-scale-1',
//        image : 'org/app'
//    },
//    {
//        id    : 'app-scale-2',
//        image : 'org/app'
//    }
// ]

var down = scale.down(up)
console.log(down)
// =>
// [
//    {
//        id    : 'app',
//        image : 'org/app',
//        scale : 3
//    }
// ]
```

## Changelog

### 1.0.0

* Initial release :tada:

enjoy.
