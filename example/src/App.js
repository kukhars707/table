import React from 'react';
import Table from 'table-pb/dist/index';
import './App.css';

function App() {
//example
  const add = itm => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Ok");
      }, 500);
    });
  }

  const onAdd = itm => {
    add(itm).then(data => console.log(data));
  }

  const del = itm => {
    console.log(itm)
  }

  const edit = itm => {
    console.log(itm)
  }

  const headers = [
    {title: 'Первая'},
    {title: 'Вторая'},
    {title: 'Третья'},
    {title: 'Четвертая'},
  ];

  const data = [
    {id: '1', label: 'label 1', description: 'description 1', date: '1.1.1.1', info: 'info 1'},
    {id: '2', label: 'label 2', description: 'description 2', date: '2.2.2.2', info: 'info 2'},
    {id: '3', label: 'label 3', description: 'description 3', date: '3.3.3.3', info: 'info 3'},
    {id: '4', label: 'label 4', description: 'description 4', date: '4.4.4.4', info: 'info 4'},
  ];
  return (
    <div className="App">
      <Table headers={headers} data={data} uniqId="id" handleRemove={del} handleAdd={onAdd} handleEdit={edit} />
    </div>
  );
}

export default App;
