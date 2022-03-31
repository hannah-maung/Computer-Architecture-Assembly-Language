/*
 * Write your client-side JS code in this file.  Don't forget to include your
 * name and @oregonstate.edu email address below.
 *
 * Name: Hannah Maung
 * Email: maungh@oregonstate.edu

 
text = [];
conditions = [];
items = [];
min_price = null;
max_price = null;
city = null;


inputdescription = null;
inputcondition = "new";
inputcity = null;
inputphoto = null;
inputprice = null;


function create_new(url, title, price, condition, city) {


	var input_container = document.getElementById('posts');
	
	var input_card = document.createElement('div');
	input_card.classList.add('post');	

	var content = document.createElement('div');
	input_card.appendChild(content);
	content.classList.add('post-contents');


  	var input_photo = document.createElement('div');
        content.appendChild(input_photo);
        input_photo.classList.add('post-image-container');
	
	var input_info = document.createElement('div');
	content.appendChild(input_info);
	input_info.classList.add('post-info-container');

	var input_title = document.createElement('a');
	input_info.appendChild(input_title);
	input_title.classList.add('post-title');
	input_title.href = "#";
	input_title.appendChild(document.createTextNode(title));
	
	var span = document.createElement('span');
	input_info.appendChild(span);
	span.classList.add('post-price');
	span.appendChild(document.createTextNode("$" + price));
	

	var photo_url = document.createElement('img');
	input_photo.appendChild(photo_url);
	photo_url.alt = title;
	photo_url.src = url;

	var input_city = document.createElement('span');
	input_info.appendChild(input_city);
	input_city.classList.add('post-city');
	input_city.appendChild(document.createTextNode("(" + city + ")"));


	input_container.appendChild(input_card);
        input_card.dataset.price = price;
        input_card.dataset.condition = condition;
        input_card.dataset.city = city;	
}


var sell_button = document.querySelector( '#sell-something-button');
sell_button.addEventListener('click' , function(event) {

	var sell_modal = document.getElementById("sell-something-modal");
	sell_modal.style.display = "block";

	var backdrop_modal = document.getElementById("modal-backdrop");
	backdrop_modal.style.display = "block";

	}
)


var exit_x = document.querySelector('#modal-close');
exit_x.addEventListener('click' , function(event){

	var backdrop = document.getElementById("modal-backdrop");
	var sell = document.getElementById("sell-something-modal");
	var filtertext = document.getElementById("post-text-input");
	var filterprice = document.getElementById("post-price-input");	
	var filtercity = document.getElementById("post-city-price");
	var filterpicture = document.getElementById("post-photo-input");


	backdrop.style.display = "none";
	sell.style.display = "none";
	filtertext.value = null;
	filterprice.value = null;
	filtercity = null;
	filterpicture = null;

}
)

var exit_cancel = document.querySelector('#modal-cancel');
exit_cancel.addEventListener('click' , function(event){

        var backdrop = document.getElementById("modal-backdrop");
        var sell = document.getElementById("sell-something-modal");
        var filtertext = document.getElementById("post-text-input");
        var filterprice = document.getElementById("post-price-input");
        var filtercity = document.getElementById("post-city-price");
        var filterpicture = document.getElementById("post-photo-input");

	backdrop.style.display = "none";
        sell.style.display = "none";
        filtertext.value = null;
        filterprice.value = null;
        filtercity = null;
        filterpicture = null;
}
)


var accept_modal = document.querySelector('#modal-accept');
accept_modal.addEventListener('click', function() {

	var valid = 0;

	if ((inputdescription == null) || (inputphoto == null) || (inputprice == null) || (inputcity == null) || (inputcondition == null)) {
		alert("Fields left blank");
		valid = 0;

	}

	else {
		create_new(inputphoto,inputdescription, inputprice, inputcondition, inputcity);
		valid = 1;

	}

	if(valid) {

		var sell_modal = document.getElementById("sell-something-modal");
		sell_modal.style.display = "none";
		var backdrop_modal = document.getElementById("modal-backdrop");
		backdrop_modal.style.display = "none";
		
		var photos = document.getElementById("post-photo-input");
		photos.value = null;
		var descriptions = document.getElementById("post-text-input");
		descriptions.value = null;
		var prices = document.getElementById("post-price-input");
		prices.value = null;
		var citys = document.getElementById("post-city-input");
		citys.value = null;
	}
}
)

function filter() {
	

	items = document.getElementsByClassName('post');

	for(var x = 0; x < items.length; x++) {
		if(text.length != 0) {
			if(!((items[x].getElementsByClassName("post-title")[0].textContent.toLowerCase().includes(document.getElementById("filter-text").value.toLowerCase())))){
				items[x].remove();
				x--;
			}	
	
		}

		if(city != null){
			if(String(items[x].dataset.city) != String(city)) {
				items[x].remove();
				x--;
			}

		}

		if(min_price != null) {
			if(parseInt(items[x].dataset.price) < parseInt(min_price)) {
				items[x].remove();
				x--;
				}
		}

		if(max_price != null) {
			if(parseInt(items[x].dataset.price) > parseInt(max_price)) {
				items[x].remove();
				x--;	
			}
		}

		for (var i = 0; i < conditions.length; i++) {
			var j = 0;
			if(String(items[x].dataset.condition) == String(conditions[i])) {
				j++;
			}
			if(!j){
				items[x].remove();
				x--;
				continue;
			}
		}
	}	
}


function get_text(event){
	var user_words = event.currentTarget.value;
	text = user_words.replace(/[!"#$%&\\'()\*+,\-\.\/:;<=>?@\[\\\]\^_`{|}~]/g, '').toLowerCase().split(' ');

}

var textuser = document.getElementById('filter-text');
	textuser.addEventListener('change' , get_text);

function get_min(event){
	minimumprice.currentTarget.value;
}

var minimumprice = document.getElementById('filter-min-price');
	minimumprice.addEventListener('change', get_min);


function get_max(event){
	max_price = event.currentTarget.value;

}

var maximumprice = document.getElementById('filter-max-price');
	maximumprice.addEventListener('change', get_max);

function get_thecity(event){
	city = event.currentTarget.value;
}

var usercity = document.getElementById('filter-city');
usercity.addEventListener('change', get_thecity);


function get_condition(event){

	var pass = 0;

	for ( var i = 0; i < conditions.length; i++) {
		if(event.currentTarget.value == conditions[i]){
			conditions.splice(i,1);
			pass = 1;
		}

	}

	if(!pass) {
		conditions.push(event.currentTarget.value);
		
	}
}


var newprice_item = document.getElementById('post-price-input');
newprice_item.addEventListener('change', function(event){
	inputprice= event.currentTarget.value;
}
)

var newdescription_item = document.getElementById('post-text-input');
newdescription_item.addEventListener('change', function(event){
	inputdescription = event.currentTarget.value;	
}
)


var newcity_item = document.getElementById('post-city-input');
newcity_item.addEventListener('change' , function(event){
	inputcity = event.currentTarget.value;
}
)

var newphoto_item = document.getElementById('post-photo-input');
newphoto_item.addEventListener('change', function(event){
        inputphoto = event.currentTarget.value;
}
)


var newexcellent_condition = document.getElementById('post-condition-excellent');
newexcellent_condition.addEventListener('change' , function(event){
	inputcondition = event.currentTarget.value;
}
)

var newgood_condition = document.getElementById('post-condition-good');
newgood_condition.addEventListener('change' , function(event){
        inputcondition = event.currentTarget.value;
}
)


var new_condition = document.getElementById('post-condition-new');
new_condition.addEventListener('change' , function(event){
        inputcondition = event.currentTarget.value;
}
)

var fair_condition = document.getElementById('post-condition-fair');
fair_condition.addEventListener('change' , function(event){
        inputcondition = event.currentTarget.value;
}
)

var poor_condition = document.getElementById('post-condition-poor');
poor_condition.addEventListener('change' , function(event){
        inputcondition = event.currentTarget.value;
}
)


var excellent = document.getElementById('filter-condition-excellent');
excellent.addEventListener('click', get_condition);

var newc = document.getElementById('filter-condition-new');
newc.addEventListener('click', get_condition);

var good = document.getElementById('filter-condition-good');
good.addEventListener('click', get_condition);

var fair = document.getElementById('filter-condition-fair');
fair.addEventListener('click', get_condition);

var poor = document.getElementById('filter-condition-poor');
poor.addEventListener('click', get_condition);

var update_button = document.getElementById('filter-update-button');
update_button.addEventListener('click', filter);


**/


