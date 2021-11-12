# AMIGO - A Mental Health App

   Amigo, your personal mental health tracker, has 3 main functionalities. The 'Journaling' feature offers a safe space for the users to pen down their thoughts and feelings. The 'Happiness Tracker' feature makes the user answer to a set of questions asked about his mood and then later provides an analysis of their mood. The 'Connect to Therapist' feature aks the user questions about their preference of the therapist they would like to consult, based on which the users are given a filtered list of therapists and their details.

## File Desription
### Front End (React js)
   * App.js : Starts the application and contains necessary links to naviagte to other pages
   * LoginForm.js : Login and registration forms including validation
   * Home.js : Home page 
   * mood-entry.js : Current mood based questions are present here
   * sleep-entry.js : Hours of sleep to be enterred here
   * appetite-entry.js : Question regarding quality of appetite
   * stress-entry.js : Question regarding user's stress levels
   * review-entry.js : A review based on the answers provided by the user is present here
   * dashboard.js : Mood graphs are displayed here and the user can be redirected to enter mood for that particular day from here too
   * Notepage.js : Text editor to create a new note/journal
   * NoteListPage.js : Displays the previous notes enterred by the user

### Back End (Django)
   * auth, authetication: Registration and Login using JWT token authentication
   * entry: Backend for Happiness Tracker which contains the table models and apis for mood entry and displaying charts
   * journal: Backend for Journaling Page which includes models and apis for working with notes
   * core: Backend for Therapist Connect where users can query using multiple filters on therapists
   * main: Backend for Biparitie matching which is yet to be integrated but implemented
   * mental_health_app: Main Driver Folder that contains the project configuration.
   
## Software tool requirements:
### Front end:
  * `ReactJS`
 
### Back end:
  * `Django`
  * `SQLite`

### IDE required:
   * Visual Studio Code : For React App
   * PyCharm : For Django
   * (Any other working IDE can be used too)

## How to run
### Backend end:
To populate the database of all the therapists, run the command : python manage.py create_data names
The name file here is a list of names and running this command adds all this data to the sqlite database.

To run the backend ensure to create a virtual environment using the command : virtualenv <name>
and then navigate into the environment of the <name> you gave. Activate the environment using the command : Scripts\activate
   
In the virtual env make sure to install dependencies using : `pip install -r requirements.txt`
Run backend using: `python manage.py runserver`
