var gulp = require('gulp');
var watch = require('gulp-watch');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');
var reactify = require('reactify');

gulp.task('browserify', [], function(){
	var bundler = browserify({
		entries: ['./Focas/app/js/app.js'], // Only need initial file, browserify finds the dependencies
		transform: [reactify], // We want to convert JSX to normal javascript <--> !!This is pretty important!!
		debug: true, // Gives us sourcemapping
		cache: {},
		packageCache: {},
		fullPaths: true
	});

	var watcher = watchify(bundler);

	return watcher
		.on('update', function() { // When any files update
			var updateStart = Date.now();
			console.log('Updating!');
			watcher.bundle() // Create new bundle that uses the cache for high performance
				.on('error', function(err){
		      console.log(err.message);
		    })
				.pipe(source('app.js'))
				// This is where you add uglifying etc.
				.pipe(gulp.dest('./app/js'));
			console.log('Updated!', (Date.now() - updateStart) + 'ms');
		})
		.bundle() // Create the initial bundle when starting the task
		.on('error', function(err){
      console.log(err.message);
    })
		.pipe(source('app.js'))
		.pipe(gulp.dest('./app/js'));
});

gulp.task('default', ['browserify']);
