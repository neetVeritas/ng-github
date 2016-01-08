# ng-Github
>A very small, simple, and lightweight Github adapter for AngularJS api queries.

ng-Github is a relatively simple and straight forward plugin/widget created and meant for usage with existing AngularJS based applications. The goal was simply to capture Github api information effortlessly and make it available in a clean and concise manner.

**Note:** *This project was created created with Angular 1.4.0, and will most probably not be updated in impending future.*

## Get Started

Usage is simple, just include the source within your project and include **ng-Github** in your target app module.
```javascript
angular.module('myApp', ['ng-github']);
```
Then you may proceed to use the widget/plugin via directive form,
```html
<h1 git-user gh-user="neetVeritas" ng-bind="'neetVeritas has ' + (gUser.followers) + ' followers!'"></h1>
```
Having trouble following along? A [sample](https://github.com/neetVeritas/ng-github/tree/master/sample) has been included with this repository.
