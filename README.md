## <u>OCTOPUS DEMO</u>

#### <u>ABOUT</u>

This is a prototype address book application built using JavaScript / React. This app is not production ready; it's simply available to showcase a small prototype demonstrating the underlying code with it.

You need to install nodeJS in order to use this: https://nodejs.org.

You will also need to install Python (version 3.8) so the back end can be installed and run.

It is recommended to use VSCode to run these steps successfully: https://code.visualstudio.com

#### <u>INSTALLATION</u>

You must install everything locally first before you can run anything. The following installation steps only need to be completed once (unless a new app update has been uploaded to GitHub).

You only need to complete this once. If you have already completed these steps jump straight to the Getting Started section.

1. Clone this repo so the files are on your local computer.
2. Open a new terminal in VSCode (Terminal > New Terminal)

##### <u>SETUP AND INSTALL: BACK END API ENDPOINT</u>

<details>
  <summary>##### MACOS</summary>
  ```bash
  # Navigate into the django project
  cd octopus/server
  ```

It is good idea (but not required) to create a virtual environment
for this project. We'll do this using
[virtualenv](http://docs.python-guide.org/en/latest/dev/virtualenvs/)
to keep things simple.

```bash
# Create a virtualenv in which we can install the dependencies
virtualenv env
source env/bin/activate
```

Now we can install our dependencies:

```bash
pip install -r requirements.txt
```

To add some data to your database do the following:

```bash
./manage.py migrate
# Load some example data
./manage.py loaddata products
```

Now you should be ready to start the server:

```bash
./manage.py runserver 8000
```

</details>

You can now continue on the 'Getting started' section...
