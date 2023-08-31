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

### ***Third Challenge*** (portuguese):

https://github.com/rocketseat-education/bootcamp-launchbase-desafios-04/blob/master/desafios/04-3-form-and-routes-teacher.md

#### Summary

* Create a form, with a *post* route
* Form fields: avatar_url, name, birth, education_level (*select*), lecture_type (*radio*), subjects_taught
* Validate that all fields are filled with constructor *Object* and keys
* Use library *fs* to write to a json
* Note: data.js and data.json still not integrated
* docker image: `fercyto/private_lectures_rs:0.4.3`, see `How to run`
* *main URL*: `http://localhost:5040/teachers/create`

### ***Fourth Challenge*** (portuguese):

https://github.com/rocketseat-education/bootcamp-launchbase-desafios-04/blob/master/desafios/04-4-show-edit-format-teacher.md

#### Summary

* Create a route to show a teacher, and another to edit its data
* In utils, create the functions *age* to process birthday, and *graduation* to process the *select* input
* Use the *split* method to process *subjects_taught* generating an array
* Use constructor *Intl.DateTimeFormat* for pt-BR formatting
* Move fields template to fields.njk
* In utils, create a *date* function to return a proper input for HTML
* Note: data.js and data.json still not integrated
* docker image: `fercyto/private_lectures_rs:0.4.4`, see `How to run`
* *main URL*: `http://localhost:5040/teachers/2/edit`

### ***Fifth Challenge*** (portuguese):

https://github.com/rocketseat-education/bootcamp-launchbase-desafios-04/blob/master/desafios/04-5-put-delete-teacher.md

#### Summary

* Create a *PUT* route (*routes.js*) to get the edit form data and save them in the *.json* file, using lib *method-override*
* Create the methods *put* in *teachers.js* to search for a teacher by id.
* Create a *delete* button in the *show* page of the teacher, that calls a route to delete it from the *.json*, using lib *method-override*
* Note: data.js and data.json still not integrated
* docker image: `fercyto/private_lectures_rs:0.4.5`, see `How to run`
* *main URL*: `http://localhost:5040/teachers/2`

### ***Sixth Challenge*** (portuguese):

https://github.com/rocketseat-education/bootcamp-launchbase-desafios-04/blob/master/desafios/04-6-list-teachers.md

#### Summary

* Show teachers' data in *.json* file in a table, creating a route
* The table should show the picture
* docker image: `fercyto/private_lectures_rs:0.4.6`, see `How to run`

### ***Seventh Challenge*** (portuguese):

https://github.com/rocketseat-education/bootcamp-launchbase-desafios-04/blob/master/desafios/04-7-students.md

#### Summary

* Create for *students* the structure as in *teachers*
* Active menu: show which page is active, bold
* Move *teachers*' methods and *students* to folder *controllers*
* Add *buttons* to add new *teachers/students* in the table pages
* Fields for students: email, school year, hour intensity, birthday
* Process birthday to show only day and month
* In *confirm.njk* add script to confirm deletion (cancel form with *preventDefault*)
* docker image: `fercyto/private_lectures_rs:0.4.7`, see `How to run`

### How to run

- Option 1 - node
  * clone this repository
  * Install node.js
  * `npm install`
  * `npm start`
  * In the browser open `http://localhost:5040` or *main URL*
- Option 2 - docker
  * Install and test docker on your system
  * `docker pull fercyto/private_lectures_rs:0.4.7`
  * `docker run -p 5040:5040 fercyto/private_lectures_rs:0.4.7`
  * In the browser open `http://localhost:5040` or *main URL*

