# Private Lectures - ***Rocketseat*** challenges

This is the ***Private Lectures*** series of challenges, from the ***launchbase course*** from ***Rocketseat***, (a javascript course).  

All challenges relate to *building a site* of teacher/student *private lectures*.

Branch names correspond to those challenges.

Please check the description of previous *private lectures* challenges in [previous_challenges.md](previous_challenges.md)

### ***Eighth Challenge*** (portuguese):

https://github.com/rocketseat-education/bootcamp-launchbase-desafios-05/blob/master/desafios/05-1-refatorando-aplicacao.md

#### Summary

* This is the beginning of the implementation of a data base.
* Create in Postbird a database with the teachers' fields
* Structure the app subfolders
  - src:
    * files: *routes.js* and *server.js*
    * folders:
      * *app*: *controllers* and *views*
      * *config*: *db.js* (`pg Pool`)
      * *lib*: *utils.js*
* In the app connect to the database with library `pg`
* As this app cannot read/save data, a docker was not produced, see next challenge
* version 0.5.1

### ***Ninth Challenge*** (portuguese):

https://github.com/rocketseat-education/bootcamp-launchbase-desafios-05/blob/master/desafios/05-2-interagindo-bd.md

#### Summary

* Use INSERT, SELECT, UPDATE, SET and WHERE, for the new methods to CRUD the database
* version 0.5.2
* A new repository with docker-compose file has been created to run the database

### How to run 0.5

- docker
  * Instal *git* on your system
  * Install and test *docker* on your system
  * If you are in Windows (WSL2) don't use `/mnt/c/User/path`, go to `/home/user` with `cd ~`
  * `git clone --recurse-submodules https://github.com/fernandoroa/private_lectures_parent_db`
  * `cd private_lectures_parent_db`
  * `docker compose up`
  * In the browser, open `http://localhost:5040`