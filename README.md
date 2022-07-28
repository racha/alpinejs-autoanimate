# Alpine JS X-autoanimate

Alpine JS wrapper `x-autoanimate` allows you to use [FormKit AutoAnimate](https://auto-animate.formkit.com/) with [AlpineJS](https://alpinejs.dev/)

## Example

Example how to use `x-autoanimate`. For animations to work correctly you **MUST** use unique `:key`.

```html
<div x-data="{items: [1, 2, 3]}">
  <div x-autoanimate>
    <template x-for="(item, index) in items" :key="`${item}`">
      <div x-text="item" @click="items.splice(index, 1)"></div>
    </template>
  </div>
  <div @click="items.push(Math.floor((Math.random()*1000 + 1)))">Add Item</div>
</div>
```

You can pass settings object to `x-autoanimate` like this:

```html
<div x-data="{items: [1, 2, 3]}">
  <div x-autoanimate="{duration: 500, ease:'ease-in-out'}">
    <template x-for="(item, index) in items" :key="`${item}`">
      <div x-text="item" @click="items.splice(index, 1)"></div>
    </template>
  </div>
  <div @click="items.push(Math.floor((Math.random()*1000 + 1)))">Add Item</div>
</div>
```

Default settings are (if not provided):

```js
{
    // Animation duration in milliseconds (default: 250)
  duration: 250,
  // Easing for motion (default: 'ease-in-out')
  easing: 'ease-in-out'
}
```

## Install

### CDN

```html
<script src="https://cdn.jsdelivr.net/npm/alpinejs-autoanimate@latest/dist/autoanimate.cdn.js"></script>
<script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>
```

### NPM/Yarn

```shell
npm i -D alpinejs-autoanimate
or
yarn add -D alpinejs-autoanimate
```

Then you can register the plugin.

```js
import Alpine from "alpinejs";
import autoanimate from "alpinejs-autoanimate";
Alpine.plugin(autoanimate);
window.Alpine = Alpine;
Alpine.start();
```

### Stats

[![](https://data.jsdelivr.com/v1/package/npm/alpinejs-autoanimate/badge)](https://www.jsdelivr.com/package/npm/alpinejs-autoanimate)
![](https://img.shields.io/bundlephobia/min/alpinejs-autoanimate)
![](https://img.shields.io/npm/v/alpinejs-autoanimate)
![](https://img.shields.io/npm/dt/alpinejs-autoanimate)
![](https://img.shields.io/github/license/racha/alpinejs-autoanimate)
