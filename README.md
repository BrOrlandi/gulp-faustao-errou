# gulp-faustao-errou

Play "Errou" sound for errors.

## Install

    npm install --save-dev gulp-faustao-errou

## Usage

```javascript
var gulp = require('gulp');
var faustaoErrou = require('gulp-faustao-errou');

gulp.src('./src/*.js')
    .pipe(faustaoErrou())
    ...,
    .pipe(gulp.dest('./dist'));
```

## API

###  faustaoErrou()
[Plumber] stream with `errou` as [`errorHandler`][plumber-handler].

### faustaoErrou.errou(error)
Logs `error` to console and plays errrrouuu sound.
```javascript
var errou = require('gulp-faustao-errou').errou;

errou(new Error('Something happened!'));
```

### faustaoErrou.handleError(stream)
Plays on `stream` `'error'` event and stops it from further executing.

To be used with [SASS] and [Browserify].
```javascript
var gulp = require('gulp');
var faustaoErrou = require('gulp-faustao-errou')
var sass = require('gulp-sass');

gulp.src('./src/*.scss')
    .pipe(faustaoErrou.handleError(sass()))
    .pipe(gulp.dest('./dist'));
```
[plumber]: https://github.com/floatdrop/gulp-plumber
[plumber-handler]: https://github.com/floatdrop/gulp-plumber#optionserrorhandler

[sass]: https://github.com/dlmanning/gulp-sass
[browserify]: http://browserify.org/

----
Based on [gulp-error-notifier](https://github.com/feradjs/gulp-error-notifier)
