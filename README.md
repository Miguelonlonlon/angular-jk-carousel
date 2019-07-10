# For Stake
The carousel package we were using broke - feel free to use. 

Demo : https://embed.plnkr.co/ovBExhpO40yzWPJ47QFE/

## Install :

### bower
`bower install angular-jk-carousel-stake`

## Usage :

 - Add a `jk-carousel` tag to your html, set the data array, the item template url and the carousel max width and height.
```html
<jk-carousel data="ctrl.arrayData" item-template-url="'item-template.html'" max-width="700" max-height="400" >
</jk-carousel>
```

  NOTE: If a maxWidth and a maxHeight is not set, the component will work, but, it will not be responsive, this feature requires those properties to be properly set ('100%' is not an accepted value, a specific size in pixels needs to be set).

 - The data array can be pretty much any collection of any kind of objects that you like
```js
vm.arrayData = [
  { src: 'image1.png' },
  { src: 'image2.png' },
  { src: 'image3.png' },
  { src: 'image4.png' }
];
```
 - A very simple example of an item template looks like this:
```html
<div>
  <img ng-src="{{slideItem.src}}" >
</div>
```
 - It is possible to set the component to auto slide, if the auto slide time is not set, we use the default of 5 seconds:
 ```html
 <jk-carousel data="ctrl.arrayData" item-template-url="'item-template.html'" auto-slide="true" auto-slide-time="1000" max-width="700" max-height="400" >
 </jk-carousel>
 ```


