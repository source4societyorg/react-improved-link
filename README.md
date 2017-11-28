# react-improved-link
Provides a means to dynamically specify whether or not a link will be router aware or external

## Requirements

Please be sure you have the following in your package.json:

   "dependencies": {
     "babel-polyfill": "6.23.0",
     "prop-types": "15.5.10",
     "react": "15.6.1",
     "react-router-dom": "4.1.1",
   }

## Installation

Pleas be sure you have the requirements mentioned in the previous section installed.

We recommending forking this repository and using as a submodule. To use as a git submodule in your project, navigate to your containers directory and run:

    git submodule add git@github.com:source4societyorg/react-improved-link.git ImprovedLink

Replace the url with the url of your fork as needed.

For more information on how to use submodules, refer to the [git submodule reference](https://git-scm.com/docs/git-submodule) and this article from [TechJini](http://www.techjini.com/blog/working-with-git-submodules/)

## Example

Add the component similar to how you would a normal link, but an optional prop `external` is set to false by default. Set it to true if you wish to link outside of your app and use an `<a>` tag instead of the `<Link>` component.

    <ImprovedLink to="/someurl" external={false}>Someplace in the App</ImprovedLink>
    <ImprovedLink to="www.somesite.com" external={true}>www.somesite.com</ImprovedLink>

