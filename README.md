# Movie & Details Display

![MIT LICENSE](https://img.shields.io/github/license/scottbromander/the_marketplace.svg?style=flat-square)
![REPO SIZE](https://img.shields.io/github/repo-size/scottbromander/the_marketplace.svg?style=flat-square)
![TOP_LANGUAGE](https://img.shields.io/github/languages/top/scottbromander/the_marketplace.svg?style=flat-square)
![FORKS](https://img.shields.io/github/forks/scottbromander/the_marketplace.svg?style=social)

## Description

_Duration: 2 day sprint_

This is an app to display a list of films sourced from a database along with a poster image. Clicking the poster image takes a user to a new page that displays the film's relevant genres (sourced from a separate table) and a description. 


## Screen Shot

![ScreenShot](./readme_images/Screenshot%202023-04-09%20at%207.03.28%20PM.png)
![ScreenShot](./readme_images/Screenshot%202023-04-09%20at%207.03.37%20PM.png)

### Prerequisites

- PostgreSQL v. 15 was used in the creation of this project.

## Installation

1. Create a database named `saga_movies_weekend`,
2. The queries in the `tables.sql` file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries, 
3. Open up your editor of choice and run an `npm install`
4. Run `npm run server` in your terminal
5. Run `npm run client` in your terminal
6. The `npm run client` command will open up a new browser tab for you!

## Usage
How does someone use this application? Tell a user story here.

1. Users can pull up a list of films
2. Clicking on a given film's poster opens up the details page
3. The user can return to the main page by selecting back on their browser or hitting the back button below the description

## Planned additions
1. ability for user to add films
1. ability for user to remove films
1. ability for user to edit film details
1. persistent data retrieval between page refreshes

## Built With

- React
- Redux (Sagas)
- pg-pool
- Axios
- Material UI


## License
[MIT](https://choosealicense.com/licenses/mit/)

_Note, include this only if you have a license file. GitHub will generate one for you if you want!_

## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality. (Thank your people)

## Support
If you have suggestions or issues, please email me at [youremail@whatever.com](www.google.com)