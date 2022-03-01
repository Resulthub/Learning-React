import React from 'react';
import Person from './Person';

function NameList() {
    const persons = [
        {
            id: 1,
            name: 'Sadik',
            age: 30,
            skill: 'React'
        },
        {
            id: 2,
            name: 'Kabir',
            age: 25,
            skill: 'Angular'
        },
        {
            id: 3,
            name: 'Ahmad',
            age: 10,
            skill: 'Php'
        }
    ]
    const personList = persons.map(person => <Person key={person.id} person={person} />)
  return <div>{personList}</div> 
}

export default NameList;
