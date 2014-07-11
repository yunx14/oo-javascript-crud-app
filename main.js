var allPeople = [];

function Person(id, name, age, weight) {
	this.id = id;
	this.name = name;
	this.age = age;
	this.weight = weight;

	this.addToPage = function() {
		$("#display").append("<div class='person' id='person"+id+"'><i class='fa fa-pencil-square-o'></i><h3>"+name+"</h3><input type='text' class='age' value='"+age+"' /> / <input type='text' class='weight' value='"+weight+"' /></div>");
	}

	this.alertId = function() {
		$(".person").bind('click', function() { 
			$(this).toggleClass('edit');
			//$(this).children('input').prop('disabled', true);
		});
	}

	this.update = function() {
		$('input').bind('change', function() {
			var newAge = $('.age').val();
			var newWeight = $('.weight').val();
			console.log(newAge);
			console.log(newWeight);
		});
	}

};


function init() {
	var numcounter = 0; // counter for the amount of Persons

	$('#submit').click(function() {
		var name = $('#name').val();
		var age = $('#age').val();
		var weight = $('#weight').val();

		//alert(counter+" "+name+" "+age+" "+weight);
		if(name == '') {
			alert('Please type a name in.');
			return;
		}

		if(age == '') {
			alert("Please type in an age.");
			return;
		}

		if (weight == '') {
			alert("Please type in a weight.");
			return;
		}

		var people = new Person(numcounter, name, age, weight);
		people.addToPage();
		people.alertId();
		people.update();
		allPeople.push(people);
		numcounter++;

		$('#name').value = '';
		$('#age').value = '';
		$('#weight').value = '';

	});


}

$(document).ready(function() {
	init();
})