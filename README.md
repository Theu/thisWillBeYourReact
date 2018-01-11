# thisWillBeYourReact
leanring material:
https://medium.com/@kayodeniyi/simplest-react-app-setup-a74277b99e43 (2017)
https://medium.com/@rajaraodv/webpack-the-confusing-parts-58712f8fcad9 (2016)
https://webpack.js.org/concepts/configuration/

to create a file in cli with content inside
    echo 'mycontent' > myfile

echo '{ "presets": ["react", "es2015"] }' > .babelrc
    in babel a preset is a set of plugins used to support particular language feature.
    in this case I am configuiring to support react and es2015


WEBPACK

    module.export in wp everything is a module. that make uploadable on demand.
    entry --> where the root module or the starting point is.

webpack is a static module bundle for JS. it ::RECURSIVELY:: builds a dependency graph including modules needed and it packs them in a bundle file
webpack's configuration file is a JS file that export an object so, dude, calm down and take it easy ;)
