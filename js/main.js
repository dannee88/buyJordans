// product constructor
function Jordan(name, size, color, stock, image) {
	this.name  = name
	this.size  = size
	this.color = color
	this.stock = stock
	this.image = image
}

// create new products from the product constructor
var jordanOnes = new Jordan("Jordan I", 11, "black/red", 15, "img/jordan1.png")
var jordansTens = new Jordan("Jordan X", 10.5, "white/grey", 12, "img/jordan10.png")
var jordanSevens = new Jordan("Jordan VII", 8, "white/red/gold", 5, "img/jordan7.png")
var jordanThirteens = new Jordan("Jordan XIII", 12, "black/red", 11, "img/jordan13.png")
var jordanElevens = new Jordan("Jordan XI", 11.5, "white/baby blue", 5, "img/jordan11.png")
var jordanFives = new Jordan("Jordan V", 10, "red", 1, "img/jordan5.png")


// create an array to add products to
var jordanArray = new Array

// add products to array of products
jordanArray.push(jordanOnes, jordansTens, jordanSevens, jordanThirteens,jordanElevens,jordanFives)

// loop through products array
for(var i = 0; i < jordanArray.length; i++) {
	// create new elements for each product
	var newItem  = document.createElement("div")
	var newDiv   = document.createElement("div")
	var nameH1   = document.createElement("h1")
	var sizeH4   = document.createElement("h4")
	var colorH4  = document.createElement("h4")
	var stockH4  = document.createElement("h4")
	var btn      = document.createElement("button")
	var image    = document.createElement("img")

	// create text for new elements
	var jName   = document.createTextNode(jordanArray[i].name)
	var jSize   = document.createTextNode("Available size: " + jordanArray[i].size)
	var jColor  = document.createTextNode("Color: " + jordanArray[i].color)
	var jStock  = document.createTextNode("In stock: " + jordanArray[i].stock)
	var jButton = document.createTextNode("Buy Now!")

	// update source attribute
	image.src = jordanArray[i].image

	// update class attributes
	image.className = "img-responsive"
	btn.className = "btn btn-primary btn-lg"
	newItem.className = "col-sm-4"
	newDiv.className = "tshirt shirtName" + [i] + " thumbnail"
	
	// add text to elements
	nameH1.appendChild(jName)
	sizeH4.appendChild(jSize)
	colorH4.appendChild(jColor)
	stockH4.appendChild(jStock)
	btn.appendChild(jButton)

	// add elements to new div
	newDiv.appendChild(nameH1)
	newDiv.appendChild(image)
	newDiv.appendChild(sizeH4)
	newDiv.appendChild(colorH4)
	newDiv.appendChild(stockH4)
	newDiv.appendChild(btn)

	// add new div to new item div
	newItem.appendChild(newDiv)

	// add new item to the element with id="shirts"
	document.getElementById("products").appendChild(newItem)
}

// Wrap every letter in a span
$('.ml1 .letters').each(function(){
  $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
});

anime.timeline({loop: true})
  .add({
    targets: '.ml1 .letter',
    scale: [0.3,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 800,
    delay: function(el, i) {
      return 70 * (i+1)
    }
  }).add({
    targets: '.ml1 .line',
    scaleX: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700,
    offset: '-=875',
    delay: function(el, i, l) {
      return 80 * (l - i);
    }
  }).add({
    targets: '.ml1',
    opacity: 0,
    duration: 2000,
    easing: "easeOutExpo",
    delay: 2000
  });