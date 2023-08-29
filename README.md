# Private Lectures - ***Rocketseat*** challenges

This is the ***Private Lectures*** series of challenges, from the ***launchbase course*** from ***Rocketseat***, (a javascript course).  

All challenges relate to building a site of teacher/student private lectures.

Branch names correspond to those challenges.


### ***First Challenge*** (portuguese):

https://github.com/rocketseat-education/bootcamp-launchbase-desafios-04/blob/master/desafios/04-1-header.md

#### Summary

* Create a header with *Teachers* and *Students* links
* Use a background color
* Use `Roboto` font
* Use css *box-sizing* for centralizing
* Use css *after* and *transition* for the header links
* docker image: `fercyto/private_lectures_rs:4.1`, see `How to run`

### ***Second Challenge*** (portuguese):

https://github.com/rocketseat-education/bootcamp-launchbase-desafios-04/blob/master/desafios/04-2-card-teacher.md

#### Summary

* Use browsersync
* Create card for a teacher
* Add teacher photo and fields: name, age, etc.
* Use css *nth-child* and border-top
* Use css *@keyframes*, *animation* *box-shadow*
* docker image: `fercyto/private_lectures_rs:0.4.2`, see `How to run`

### How to run

- Option 1 - node
  * clone this repository
  * Install node.js
  * `npm install`
  * `npm start`
  * In the browser open `http://localhost:5040`  
- Option 2 - docker
  * Install and test docker on your system
  * `docker pull fercyto/private_lectures_rs:0.4.2`
  * `docker run -p 5040:5040 fercyto/private_lectures_rs:0.4.2`
  * In the browser open `http://localhost:5040`  
