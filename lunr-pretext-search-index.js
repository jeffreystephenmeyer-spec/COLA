var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "chp1sec1",
  "level": "1",
  "url": "chp1sec1.html",
  "type": "Section",
  "number": "1.1",
  "title": "Vectors as Lists of Quantities",
  "body": " Vectors as Lists of Quantities  Welcome students! Before we can begin learning linear algebra, we need to establish the ontology of this book. In this book, I take the perspective that objects and situations exist external to us everywhere. These objects and situations possess many types of attributes . An attribute, together with an agreed upon unit of measurement, is a quantity .   Object-Attribute-Quantity (OAQ) Analysis of a Glass of Water  With my lunch, I am drinking a glass of water. This glass of water exists, external to me, sitting beside me on my table. The water has many attributes: size, mass, temperature, color, and many more. For the moment, I will focus on its size. We could agree on many ways to measure size, for example by measuring its volume in liters, cups, ounces, or cubic inches. Let's pick ounces. The volume of the water in my glass, measured in ounces, is a quantity.   Water in a glass.     If I want to measure the mass of my sandwich, then I put it on a scale, select units (e.g. grams, pounds, etc), and then read off the number. If I want to measure the distance I traveled in my car, then I look at my odometer, select units (miles or kilometers), and then read off the number. If I want to measure the temperature at my home, then I look at my thermometer, select my units (Fahrenheit or Celsius), and then read off the number.  When we measure a quantity, we obtain a real number . For example, positive integers (e.g. 1, 2, 3, …), ratios of integers (e.g. ), square roots of positive integers (e.g. ), and transcendental numbers like and are all real numbers.  You do not need to know the value of a real number to reason about it. In Example , the volume of the water in my glass, measured in ounces is a number. We can reason about that volume of water without ever knowing its value. Sometimes I will name a real number with an italicized lower case letter. For example, I might name the volume of water in my glass, measured in ounces, with the letter , for volume. I denote the collection of all real numbers as and use the symbols to mean  is a real number.   Quantities in my kitchen  I walk into my kitchen to see what food I have to eat. As I look through my food, I suddenly realize that they are quite literally covered in lists of quantities! Pretty much every packaged food item has a box called Nutrition Facts. This box lists the masses of nutrients (either measured in grams g, milligrams mg, or micrograms mcg) contained within one serving size of the given food item. The box always lists the masses of the three most essential nutrients called macronutrients : total fat, total carbohydrates, and protein. Sometimes masses of other nutrients such as vitamin B, vitamin C, vitamin D, calcium, iron, and potassium are also listed.   On the side of a box of cereal, we see the the \"Nutrition Facts.\"   For example, the Nutrition Facts on the side of my box of Sugar-Os cereal is depicted on the right of Figure.    Quantities as I travel  I am always driving where I need to go. Today alone I will drive to campus, to lunch, to the grocery store, and then home. Even if I know directions, I often use my GPS in case there is something like traffic or a road closure. As I put in my destinations today, I realize that I am staring at list of quantities! In a given trip, each step of the travel instructions is the distance I drive, either in miles or feet, on a given road, until I turn onto the next street.  For example, in Figure , are depicted the travel instructions to get from my home to the math department.    Quantities outside  I want to plan out my day tomorrow and I look at my phone to get the forecast for the day. It is then that I realize that the forecast is a list of quantities! At first I see the following table.  |l|*8c| Hour & 12am & 3am & 6am & 9am & 12pm & 3pm & 6pm & 9pm Today & 42 & 39 & 38 & 48 & 56 & 59 & 53 & 46   I scroll down a little further and see the following visual representation.  I really like being able to see both the table and the visual. The table is nice and concise, but the visual gives me an excellent sense of how the temperature varies.  I wonder, what other lists of quantities are useful in describing the weather ?   Observe that in each vignette, we encountered many quantities, naturally grouped together, all at once.  Lists of quantities are united, tied together, by a single object or situation.  "
},
{
  "id": "chp1sec1-2",
  "level": "2",
  "url": "chp1sec1.html#chp1sec1-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "objects situations attributes quantity "
},
{
  "id": "chp1sec1-3",
  "level": "2",
  "url": "chp1sec1.html#chp1sec1-3",
  "type": "Example",
  "number": "1.1.1",
  "title": "Object-Attribute-Quantity (OAQ) Analysis of a Glass of Water.",
  "body": " Object-Attribute-Quantity (OAQ) Analysis of a Glass of Water  With my lunch, I am drinking a glass of water. This glass of water exists, external to me, sitting beside me on my table. The water has many attributes: size, mass, temperature, color, and many more. For the moment, I will focus on its size. We could agree on many ways to measure size, for example by measuring its volume in liters, cups, ounces, or cubic inches. Let's pick ounces. The volume of the water in my glass, measured in ounces, is a quantity.   Water in a glass.    "
},
{
  "id": "chp1sec1-5",
  "level": "2",
  "url": "chp1sec1.html#chp1sec1-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "real number "
},
{
  "id": "chp1sec1-6",
  "level": "2",
  "url": "chp1sec1.html#chp1sec1-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "name "
},
{
  "id": "chp1sec1-7",
  "level": "2",
  "url": "chp1sec1.html#chp1sec1-7",
  "type": "Example",
  "number": "1.1.3",
  "title": "Quantities in my kitchen.",
  "body": " Quantities in my kitchen  I walk into my kitchen to see what food I have to eat. As I look through my food, I suddenly realize that they are quite literally covered in lists of quantities! Pretty much every packaged food item has a box called Nutrition Facts. This box lists the masses of nutrients (either measured in grams g, milligrams mg, or micrograms mcg) contained within one serving size of the given food item. The box always lists the masses of the three most essential nutrients called macronutrients : total fat, total carbohydrates, and protein. Sometimes masses of other nutrients such as vitamin B, vitamin C, vitamin D, calcium, iron, and potassium are also listed.   On the side of a box of cereal, we see the the \"Nutrition Facts.\"   For example, the Nutrition Facts on the side of my box of Sugar-Os cereal is depicted on the right of Figure.  "
},
{
  "id": "chp1sec1-8",
  "level": "2",
  "url": "chp1sec1.html#chp1sec1-8",
  "type": "Example",
  "number": "1.1.4",
  "title": "Quantities as I travel.",
  "body": " Quantities as I travel  I am always driving where I need to go. Today alone I will drive to campus, to lunch, to the grocery store, and then home. Even if I know directions, I often use my GPS in case there is something like traffic or a road closure. As I put in my destinations today, I realize that I am staring at list of quantities! In a given trip, each step of the travel instructions is the distance I drive, either in miles or feet, on a given road, until I turn onto the next street.  For example, in Figure , are depicted the travel instructions to get from my home to the math department.  "
},
{
  "id": "chp1sec1-9",
  "level": "2",
  "url": "chp1sec1.html#chp1sec1-9",
  "type": "Example",
  "number": "1.1.5",
  "title": "Quantities outside.",
  "body": " Quantities outside  I want to plan out my day tomorrow and I look at my phone to get the forecast for the day. It is then that I realize that the forecast is a list of quantities! At first I see the following table.  |l|*8c| Hour & 12am & 3am & 6am & 9am & 12pm & 3pm & 6pm & 9pm Today & 42 & 39 & 38 & 48 & 56 & 59 & 53 & 46   I scroll down a little further and see the following visual representation.  I really like being able to see both the table and the visual. The table is nice and concise, but the visual gives me an excellent sense of how the temperature varies.  I wonder, what other lists of quantities are useful in describing the weather ?  "
},
{
  "id": "chp2sec1",
  "level": "1",
  "url": "chp2sec1.html",
  "type": "Section",
  "number": "2.1",
  "title": "Linear Combination as Mixture",
  "body": " Linear Combination as Mixture  Text of section.  "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
