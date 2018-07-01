# Personal react snippets 

General philosophy
* 1 component per file 
* tests should come with (snippets are not great for that)
  * tests in same file are not a great idea for tests would be part of the bundle
* simple templates are great but often insuficient, more complete snippets with removable parts are prefered 
* design patterns are a good way to enforce code consistency

## Getting started

generate templates (`node templateConverter.js), then copy file content to VSCode snippets related files. 

<!-- ## Available 

| snippet key | template | 
| --- | --- | 
| js | |
| 

## TODO  -->

### [x] react 

* [x] entry (ReactDom + Redux) initiator file
* [x] pure class
* [x] class
  * with proptypes by default
* [x] connect class 
  * [ ] with loading mechanism (see about HOC or render props pattern)
  * [x] redux connected class with actions/state
* [x] index file for component
* [x] ErrorBoundary component
* hot reload code

### Unit testing

* test file
* section method
* test method

### JS

* fetch/axios
* sagas fetch template 
* reducer template
* 