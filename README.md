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

##### <u>INSTALL: BACK END API ENDPOINT</u>

<details>
  <summary>MacOS</summary>

```bash
# Navigate into the django project
cd marketing-code-test/octopus/server
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

<details>
<summary>Windows</summary>

```bash
# Navigate into the django project
cd marketing-code-test/octopus/server
```

```bash
# Make a new virtual environment folder
mkdir "%localappdata%\Temp\Python Virtual Env"
```

```bash
# Make a python virtual environment
py -m venv "%localappdata%\Temp\Python Virtual Env"
```

```bash
# Activate the python environment
"%localappdata%\Temp\Python Virtual Env\Scripts\activate.bat"
```

(you should see Python Virtual Env in brackets afterwards)

Now we need to install all the packages used by the back end:

```bash
#  Install our dependencies
pip install -r requirements.txt
```

```bash
# Now run the migrate scripts
manage.py migrate
```

```bash
# Load dummy data
manage.py loaddata products
```

</details>

Now the API can use data.

##### <u>INSTALL: FRONT END APP</u>

```bash
# Change directory to the client folder
cd "marketing-code-test\octopus\client"
```

```bash
# Install the app dependencies so the front end can run
npm install
```

From now on, continue with the 'Getting started' section...

#### <u>GETTING STARTED</u>

#### Back End API

Make sure you are in the server directory

```bash
cd marketing-code-test\octopus\server
```

Also make sure you have a virtual Python environment running:

<details>
  <summary>MacOS</summary>

```bash
# Activate the python environment
virtualenv env
source env/bin/activate
```

</details>

<details>
  <summary>Windows</summary>

```bash
# Activate the python environment
"%localappdata%\Temp\Python Virtual Env\Scripts\activate.bat"
```

</details>

Run the following to allow the back end API to launch:

```bash
manage.py runserver 8000
```

You can now access the API endpoint with data here to test it works:
[API EndPoint URL](<http://127.0.0.1:8000/graphql#operationName=getProductById&query=query%20getProductById%20%7B%0A%20%20product(productId%3A%201)%20%7B%0A%20%20%20%20id%0A%20%20%20%20name%0A%20%20%20%20power%0A%20%20%20%20description%0A%20%20%20%20price%0A%20%20%20%20quantity%0A%20%20%20%20brand%0A%20%20%20%20weight%0A%20%20%20%20height%0A%20%20%20%20width%0A%20%20%20%20length%0A%20%20%20%20modelCode%0A%20%20%20%20colour%0A%20%20%20%20imgUrl%0A%20%20%7D%0A%7D%0A>)

#### Front End App

Make sure you are in the client directory

```bash
cd marketing-code-test\octopus\client
```

Run the following to allow the app to launch:

```bash
npm start
```
