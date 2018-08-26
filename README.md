# Rails React Chatroom
  * [Project Board](https://github.com/oscarcuihang/react-checkbox/projects/1)

## Development
### Install dependencies
* Node Version `>=8`
```
$ git https://github.com/oscarcuihang/react-checkbox.git
$ cd react-checkbox

$ yarn install
(this will install all react dependencies)
```


### Start servers
Start react server (FrontEnd)
`$ yarn start` 

Visit in broswer
* http://localhost:3000 

Test Data
* Test data is fetched from [HERE](https://github.com/oscarcuihang/react-checkbox/blob/master/data/hiring_position.json)
* You can build you own test data sets.

### File Structure
```
.
|-- data
|   |-- json files
|-- src
|   |-- App.js
|   |-- index.js
|   |-- components
|   |   |-- component and style files
|-- package.json
```

## Datamodel
### Hiring
* Hiring has many HiringDepartment, and HiringDepartment has many DepartmentPositions
```(json)
<!-- expampe data -->
{
  "departments": [{
      "department_name": "Some Department",
      "department_positions": [
        {
          "position_name": "Some Position",
          "position_count": 999
        }
      ]
    }
}
```

## How to run the test suite
Test to be added
* Unit Test for react component
* Linter

## ToDo
* Font colors
* Match Snapshot
* Webpack path resolver / loaders
* Tests

## Contributing 
Bug reports and pull requests are welcome on [GitHub](https://github.com/oscarcuihang/react-checkbox). This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.
