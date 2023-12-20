console.log("hello world");
function printUserName(){var username = prompt("enter your name:")}
console.log(`your name is ${printUserName}`);



function handleSubmit(event) {
	event.preventDefault();
	
	console.log('form submit');
}
<script>
	var form = document.getElementById("contact");
	form.addEventListener("submit", function(event){event.preventDefault(); alert("The form has been submitted");});
</script>


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);