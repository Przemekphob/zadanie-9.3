var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
console.log(text);

var dinosaur = 'triceratops';
var dinosaurUpperCased = dinosaur.toUpperCase();
console.log(dinosaurUpperCased);



var dinosaurReplacedText = text.replace('Velociraptor', dinosaurUpperCased);
console.log(dinosaurReplacedText);


console.log('Final result:')
console.log(dinosaurReplacedText.slice(0,(dinosaurReplacedText.length/2)));