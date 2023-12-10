/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
const LEFT_BUTTON = 'left';
const RIGHT_BUTTON = 'right';
const TABLE_1 = 'tabla2';
const TABLE_2 = 'tabla1';

// Funciones para manejar los botones
function moveToLeft() {
  btn.style.left = '0';
  localStorage.setItem('selectedButton', LEFT_BUTTON);
}

function moveToRight() {
  btn.style.left = '50%';
  localStorage.setItem('selectedButton', RIGHT_BUTTON);
}

// Función para establecer el estado de los botones
function setButtonState(selectedButton) {
  if (selectedButton === LEFT_BUTTON) {
    moveToLeft();
  } else if (selectedButton === RIGHT_BUTTON) {
    moveToRight();
  }
}

// Funciones para manejar las tablas
function showTable1() {
  tabla1.style.display = 'block';
  tabla2.style.display = 'none';
  localStorage.setItem('selectedTable', TABLE_1);
}

function showTable2() {
  tabla1.style.display = 'none';
  tabla2.style.display = 'block';
  localStorage.setItem('selectedTable', TABLE_2);
}

// Función para establecer el estado de las tablas
function setTableState(selectedTable) {
  if (selectedTable === TABLE_1) {
    showTable1();
  } else if (selectedTable === TABLE_2) {
    showTable2();
  }
}

// Manejo de los botones
document.getElementById('boton1').addEventListener('click', function() {
  showTable1();
});

document.getElementById('boton2').addEventListener('click', function() {
  showTable2();
});

// Obtener y establecer el estado de los botones y las tablas al cargar la página
var selectedButton = localStorage.getItem('selectedButton');
if (selectedButton) {
  setButtonState(selectedButton);
}

var selectedTable = localStorage.getItem('selectedTable');
if (selectedTable) {
  setTableState(selectedTable);
}

