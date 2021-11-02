# Octopus Front End Test

This example project was pinched from a
[graphene-django example app](https://github.com/graphql-python/graphene-django/tree/master/server/app).
and [Create React App](https://create-react-app.dev/docs/getting-started/).  
The project contains two apps - a django app named `products` and a react app
named `shop`.

In this code test, you'll be asked to:

-   Make a simple React app that follows the design in AppDesignMobile.png. Ideally the app should be responsive.
-   Fill out the front end tests and then make them pass by writing an app that consumes the API.

We've included a sample create react app project for your convenience, but you're welcome to swap
it out for another framework if you prefer. You're also welcome to write more tests for other
parts of the application - but design those however you like.

## Getting started

We assume you have access to a unix environment - if this poses a real problem please let us know.

First you'll need to install your dependencies

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

Here is the [query to run to get you started](http://127.0.0.1:8000/graphql#operationName=getProductById&query=query%20getProductById%20%7B%0A%20%20product(productId%3A%201)%20%7B%0A%20%20%20%20id%0A%20%20%20%20name%0A%20%20%20%20power%0A%20%20%20%20description%0A%20%20%20%20price%0A%20%20%20%20quantity%0A%20%20%20%20brand%0A%20%20%20%20weight%0A%20%20%20%20height%0A%20%20%20%20width%0A%20%20%20%20length%0A%20%20%20%20modelCode%0A%20%20%20%20colour%0A%20%20%20%20imgUrl%0A%20%20%7D%0A%7D%0A)


Once you have your server running, you're ready to install the front end dependencies

```bash
# Navigate into the react app
cd octopus/client

# install dependencies
yarn

# start the server
yarn start
```

You should be able to see the Hello World message.

## Running the tests

You can run the front end tests by navigating to the directory

```bash
cd octopus/client
yarn test
```

Press `a` to run all the tests. This should give you two failures:

```bash
 FAIL  src/App.test.js
  ✕ should be able to increase and decrease product quantity
  ✕ should be able to add items to the basket
```

So the task is to make the a client that passes these tests :)

Best of luck!
