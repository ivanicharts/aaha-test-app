This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Install

```
npm i
npm start
```


## Description

# We have an API for stats, an example url looks like:

https://example.com/stats/?f=referrer.host!=m.facebook.com;device_type==mobile;&fields=published,title,segment.slug,segment.path,referrer.host&enclosures=author&metrics=hits,sessions,bounce-rate&limit=5&from=-7d&interval=1d&b=author.id,date,article.id

You will find example results in the json file attached.

# Fields

 - `&f=` is a semicolon separated string of filters. The pattern is `field==something` or `field!=something`.
 - `&fields=` is list of fields to return data for
 - `&metrics=` is a list of calculated fields
 - `&enclosures=` is a list of fields that isn't listed nested in the data
 - `&limit=` is number of unique results to return at each level
 - `&from=`  is a relative date of the format `-[0-9]+(m|h|d|w|mo|y)` (`m` = minute, `h` is hour etc)
 - `&interval=` how to break down data by multiple days, uses the same format as `&from=` without the minus sign
 - '&b=' is a list of fields to breakdown results for

 So the test data asks for results from the last 7 days broken down by author, then day, then article for mobile devices and for traffic not referred from facebook. Article information is nested in the data, author information is in the enclosures array.

# Task:

We want to show a nice panel with a summary of what each author did the last week:

For each author, render an information panel with their name, avatar and total metrics, then for each day, render their top articles and the metrics for their articles. Create a circle graph to show the number of referrer.host at _each_ level, show metrics as numbers at each level also. 

# Requirements:

- vuejs or react
- data must be loaded asynchronously 
- use a graphing library of your choice
- it doesn't have to be beautiful but don't make it too ugly ( https://www.behance.net/search?field=102&content=projects&sort=appreciations&time=all&search=analytics%20dashboard )
- Form for all of the fields listed above BUT none of the fields need to be editable (we won't change any of them from the defaults).
- you must build and `console.log()` the url from the _hardcoded_ form inputs when the user clicks "search" 
- you do not need to mockup the server side and can hardcode the url of the .json response
- `&f=` should be generated from 2 separate ui inputs
