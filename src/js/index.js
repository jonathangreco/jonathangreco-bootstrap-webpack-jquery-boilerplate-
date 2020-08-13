import 'bootstrap';
import Person from './classes/Person';
import '../scss/index.scss';

$('#alert').on('click', () => {
  alert('jQuery works!');
});

let oPerson = new Person('me', 'myself and I', 20, {});
console.log(oPerson);
// Your jQuery code
