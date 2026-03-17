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
  "body": " Vectors as Lists of Quantities  Welcome students! Before we can begin learning linear algebra, we need to establish the ontology of this book. In this book, I take the perspective that objects and situations exist external to us everywhere. These objects and situations possess many types of attributes . An attribute, together with an agreed upon unit of measurement, is a quantity .   Object-Attribute-Quantity (OAQ) Analysis of a Glass of Water  With my lunch, I am drinking a glass of water. This glass of water exists, external to me, sitting beside me on my table. The water has many attributes: size, mass, temperature, color, and many more. For the moment, I will focus on its size. We could agree on many ways to measure size, for example by measuring its volume in liters, cups, ounces, or cubic inches. Let's pick ounces. The volume of the water in my glass, measured in ounces, is a quantity.    Object: glass of water  Attribute: amount of water contained in the glass  Quantity: volume of water in ounces       Water in a glass.  Water in a glass.      OAQ Analysis  With a group, take a few minutes to look around and identify some objects, some attributes they possess, and agree upon a way to measure them. After a few minutes, share some of your findings with the class.   If I want to measure the mass of my sandwich, then I put it on a scale, select units (e.g. grams, pounds, etc), and then read off the number. If I want to measure the distance I traveled in my car, then I look at my odometer, select units (miles or kilometers), and then read off the number. If I want to measure the temperature at my home, then I look at my thermometer, select my units (Fahrenheit or Celsius), and then read off the number.  When we measure a quantity, we obtain a real number . For example, positive integers (e.g. 1, 2, 3, …), ratios of integers (e.g. ), square roots of positive integers (e.g. ), and transcendental numbers like and are all real numbers.  You do not need to know the value of a real number to reason about it. In Example , the volume of the water in my glass, measured in ounces is a number. We can reason about that volume of water without ever knowing its value. Sometimes I will name a real number with an italicized lower case letter. For example, I might name the volume of water in my glass, measured in ounces, with the letter , for volume. I denote the collection of all real numbers as and use the symbols to mean  is a real number.   Quantities in my kitchen  I walk into my kitchen to see what food I have to eat. As I look through my food, I suddenly realize that they are quite literally covered in lists of quantities! Pretty much every packaged food item has a box called Nutrition Facts. This box lists the masses of nutrients (either measured in grams g, milligrams mg, or micrograms mcg) contained within one serving size of the given food item. The box always lists the masses of the three most essential nutrients called macronutrients : total fat, total carbohydrates, and protein. Sometimes masses of other nutrients such as vitamin B, vitamin C, vitamin D, calcium, iron, and potassium are also listed.    On the side of a box of cereal, we see the the \"Nutrition Facts.\"    For example, the Nutrition Facts on the side of my box of Sugar-Os cereal is depicted on the right of Figure.    Quantities as I travel  I am always driving where I need to go. Today I will drive to campus, to lunch, to the grocery store, and then home. Even if I know directions, I often use my GPS in case there is something like traffic or a road closure. As I put in my destinations today, I realize that I am staring at list of quantities! In a given trip, each step of the travel instructions is the distance I drive, either in miles or feet, on a given road, until I turn onto the next street.  For example, in , are depicted the travel instructions to get from my home to the math department.   GPS directions to campus.   A graphical representation of my path to campus.    Travel Instructions:  Drive 1500 ft on Euclid Rd. Then Take a left.  Drive 500 ft on University Ave. You have reached your destination.      Quantities outside  I want to plan out my day tomorrow and I look at my phone to get the forecast for the day. It is then that I realize that the forecast is a list of quantities! At first I see the following table.   Today's Forcast    Hours after midnight  Temperature in Fahrenheit (°F)    0  42°F    3  39°F    6  38°F    9  48°F    12  56°F    15  59°F    18  53°F    21  46°F     I scroll down a little further and see the following visual representation.   Weather forecast.   A graphical representation of a weather forecast.    I really like being able to see both the table and the visual. The table is nice and concise, but the visual gives me an excellent sense of how the temperature varies.  I wonder, what other lists of quantities are useful in describing the weather ?   Observe that in each quantitative situation above, we encountered many quantities, naturally grouped together, all at once.   Vectors and List-Length   A vector is an ordered list of quantities. The number of entries in the list is its list-length .    Lists of quantities are united, tied together, by a single object or situation. Right now, we are interested in analyzing objects and situations and identifying lists of quantities.   Quantities in my kitchen - Revisited  An object here is one serving size of cereal. An attribute of one serving size of cereal is nutrition. I can measure nutrition in many ways, for example: grams of fat, grams of carbs, grams of protein, etc. The list of macronutrients , below, has list-length 3.   Grams of fat in one serving size  Grams of carbs in one serving size  Grams of protein in one serving size   A different attribute is my daily consumption. I can quantify consumption in many ways, for example: the number of serving sizes I consume each day of the week. The list of servings consumed, below, is a list of list-length 7.   Number of serving sizes consumed on Sunday,  Number of serving sizes consumed on Monday,  Number of serving sizes consumed on Tuesday,  Number of serving sizes consumed on Wednesday,  Number of serving sizes consumed on Thursday,  Number of serving sizes consumed on Friday,  Number of serving sizes consumed on Saturday,     Quantities outside - Revisited  An object is the air outside my home. An attribute of air is temperature. I can quantify temperature in many ways, for example measure the temperature in degrees Fahrenheit in 3 hour intervals throughout the day. The corresponding list of temperatures, below, has list-length 8.   Degrees Fahrenheit at 12am,  Degrees Fahrenheit at 3am,  Degrees Fahrenheit at 6am,  Degrees Fahrenheit at 9am  Degrees Fahrenheit at 12pm,  Degrees Fahrenheit at 3pm,  Degrees Fahrenheit at 6pm,  Degrees Fahrenheit at 9pm.   A different attribute is humidity. I can quantify humidity in many ways, for example measure the relative humidity (in percents) in 4 hour intervals throughout the day. The corresponding list of humidities, below, has list-length 6.   Percent humidity at 12am,  Percent humidity at 4am,  Percent humidity at 8am,  Percent humidity at 12pm,  Percent humidity at 4pm,  Percent humidity at 8pm,     Identifying Lists of Quantities  Consider each of the following situations. With your group, write down several lists of quantities that might naturally come up when analyzing the situation. Be sure to clearly specify each quantity (include object, attribute, and agreed way to measure). Note that these are intentionally vague and open-ended prompts.   The most recent time you went grocery shopping.  Your phone.  Your social media account.  The houses on your block.  A recording of a song by your favorite band.  The voting precincts in your region.  A single website that is comprised of 17 distinct pages.  Your favorite sports team.  Your favorite video game.    Throughout our day, we are constantly coming across vectors: nutrition facts in cereal, prices of our groceries, populations in cities, temperatures outside, internet search rankings, and even the color data for the pixels on our electronic displays. In fact, a single image on a 4K LCD display is encoded within a list of many numbers!   Meaningful vectors can have large list-length!  People often think of vectors as only being geometric coordinates and limit their thinking to list-lengths of 1, 2, or 3. While these are important examples of vectors, they can also constrain our thinking. I hope you see already that vectors of potentially large list-length are natural and everywhere .    Constructing Feature Vectors (Machine Learning)  In the photo below is a photo of my very sweet cat. In a quick glance, I can recognize him.   (Left) A photo of my cat. (Right) Image depicting Snout-Eye ratio.       I bet many of you have cats and dogs too. Pull up some pictures of them for this activity. When you look at them, you probably do not have any difficulty identifying which photos are of cats and which photos are of dogs. How do you think a computer might be able distinguish between photos of cats and photos of dogs? Computers cannot analyze images like we can - we need to tell them what to look for. We need to identify a list of useful quantities from which the computer can learn to make the distinction between cats and dogs. In the area of machine learning, this emergent vector is sometimes called a feature vector .  Let me give you an example of one quantity we may wish to include in our feature vector. Usually (but not always) dogs have longer snouts than cats, so snout length is a promising attribute to include in our feature vector. Unfortunately we cannot measure the absolute length of the snout from the photo, since we do not know the scale of the photo. Instead, we could measure the relative length of the snout compared to the distance between the eyes. For each photo, computers can compute and record this snout-to-eye ratio.  While this is a promising quantity, it is probably not enough for the computer the learn the difference between cats and dogs. (Why do you think this is the case?) In groups, come up with other promising quantities which you can read from a picture, and for which will be useful in trying to tell the difference between cats and dogs.  When you are done, share with the class your feature vector. What quantities comprise your feature vector? What is its list-length? Do you think that you have given the computer enough quantities that it should be able to distinguish pictures of cats from pictures of dogs by looking at their feature vectors? Feature vectors form the starting point for machine learning.   "
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
  "body": " Object-Attribute-Quantity (OAQ) Analysis of a Glass of Water  With my lunch, I am drinking a glass of water. This glass of water exists, external to me, sitting beside me on my table. The water has many attributes: size, mass, temperature, color, and many more. For the moment, I will focus on its size. We could agree on many ways to measure size, for example by measuring its volume in liters, cups, ounces, or cubic inches. Let's pick ounces. The volume of the water in my glass, measured in ounces, is a quantity.    Object: glass of water  Attribute: amount of water contained in the glass  Quantity: volume of water in ounces       Water in a glass.  Water in a glass.    "
},
{
  "id": "chp1sec1-4",
  "level": "2",
  "url": "chp1sec1.html#chp1sec1-4",
  "type": "Activity",
  "number": "1.1.2",
  "title": "OAQ Analysis.",
  "body": " OAQ Analysis  With a group, take a few minutes to look around and identify some objects, some attributes they possess, and agree upon a way to measure them. After a few minutes, share some of your findings with the class.  "
},
{
  "id": "chp1sec1-6",
  "level": "2",
  "url": "chp1sec1.html#chp1sec1-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "real number "
},
{
  "id": "chp1sec1-7",
  "level": "2",
  "url": "chp1sec1.html#chp1sec1-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "name "
},
{
  "id": "chp1sec1-8",
  "level": "2",
  "url": "chp1sec1.html#chp1sec1-8",
  "type": "Example",
  "number": "1.1.3",
  "title": "Quantities in my kitchen.",
  "body": " Quantities in my kitchen  I walk into my kitchen to see what food I have to eat. As I look through my food, I suddenly realize that they are quite literally covered in lists of quantities! Pretty much every packaged food item has a box called Nutrition Facts. This box lists the masses of nutrients (either measured in grams g, milligrams mg, or micrograms mcg) contained within one serving size of the given food item. The box always lists the masses of the three most essential nutrients called macronutrients : total fat, total carbohydrates, and protein. Sometimes masses of other nutrients such as vitamin B, vitamin C, vitamin D, calcium, iron, and potassium are also listed.    On the side of a box of cereal, we see the the \"Nutrition Facts.\"    For example, the Nutrition Facts on the side of my box of Sugar-Os cereal is depicted on the right of Figure.  "
},
{
  "id": "chp1sec1-9",
  "level": "2",
  "url": "chp1sec1.html#chp1sec1-9",
  "type": "Example",
  "number": "1.1.4",
  "title": "Quantities as I travel.",
  "body": " Quantities as I travel  I am always driving where I need to go. Today I will drive to campus, to lunch, to the grocery store, and then home. Even if I know directions, I often use my GPS in case there is something like traffic or a road closure. As I put in my destinations today, I realize that I am staring at list of quantities! In a given trip, each step of the travel instructions is the distance I drive, either in miles or feet, on a given road, until I turn onto the next street.  For example, in , are depicted the travel instructions to get from my home to the math department.   GPS directions to campus.   A graphical representation of my path to campus.    Travel Instructions:  Drive 1500 ft on Euclid Rd. Then Take a left.  Drive 500 ft on University Ave. You have reached your destination.    "
},
{
  "id": "chp1sec1-10",
  "level": "2",
  "url": "chp1sec1.html#chp1sec1-10",
  "type": "Example",
  "number": "1.1.6",
  "title": "Quantities outside.",
  "body": " Quantities outside  I want to plan out my day tomorrow and I look at my phone to get the forecast for the day. It is then that I realize that the forecast is a list of quantities! At first I see the following table.   Today's Forcast    Hours after midnight  Temperature in Fahrenheit (°F)    0  42°F    3  39°F    6  38°F    9  48°F    12  56°F    15  59°F    18  53°F    21  46°F     I scroll down a little further and see the following visual representation.   Weather forecast.   A graphical representation of a weather forecast.    I really like being able to see both the table and the visual. The table is nice and concise, but the visual gives me an excellent sense of how the temperature varies.  I wonder, what other lists of quantities are useful in describing the weather ?  "
},
{
  "id": "def-list-length",
  "level": "2",
  "url": "chp1sec1.html#def-list-length",
  "type": "Definition",
  "number": "1.1.9",
  "title": "Vectors and List-Length.",
  "body": " Vectors and List-Length   A vector is an ordered list of quantities. The number of entries in the list is its list-length .   "
},
{
  "id": "chp1sec1-14",
  "level": "2",
  "url": "chp1sec1.html#chp1sec1-14",
  "type": "Example",
  "number": "1.1.10",
  "title": "Quantities in my kitchen - Revisited.",
  "body": " Quantities in my kitchen - Revisited  An object here is one serving size of cereal. An attribute of one serving size of cereal is nutrition. I can measure nutrition in many ways, for example: grams of fat, grams of carbs, grams of protein, etc. The list of macronutrients , below, has list-length 3.   Grams of fat in one serving size  Grams of carbs in one serving size  Grams of protein in one serving size   A different attribute is my daily consumption. I can quantify consumption in many ways, for example: the number of serving sizes I consume each day of the week. The list of servings consumed, below, is a list of list-length 7.   Number of serving sizes consumed on Sunday,  Number of serving sizes consumed on Monday,  Number of serving sizes consumed on Tuesday,  Number of serving sizes consumed on Wednesday,  Number of serving sizes consumed on Thursday,  Number of serving sizes consumed on Friday,  Number of serving sizes consumed on Saturday,   "
},
{
  "id": "chp1sec1-15",
  "level": "2",
  "url": "chp1sec1.html#chp1sec1-15",
  "type": "Example",
  "number": "1.1.11",
  "title": "Quantities outside - Revisited.",
  "body": " Quantities outside - Revisited  An object is the air outside my home. An attribute of air is temperature. I can quantify temperature in many ways, for example measure the temperature in degrees Fahrenheit in 3 hour intervals throughout the day. The corresponding list of temperatures, below, has list-length 8.   Degrees Fahrenheit at 12am,  Degrees Fahrenheit at 3am,  Degrees Fahrenheit at 6am,  Degrees Fahrenheit at 9am  Degrees Fahrenheit at 12pm,  Degrees Fahrenheit at 3pm,  Degrees Fahrenheit at 6pm,  Degrees Fahrenheit at 9pm.   A different attribute is humidity. I can quantify humidity in many ways, for example measure the relative humidity (in percents) in 4 hour intervals throughout the day. The corresponding list of humidities, below, has list-length 6.   Percent humidity at 12am,  Percent humidity at 4am,  Percent humidity at 8am,  Percent humidity at 12pm,  Percent humidity at 4pm,  Percent humidity at 8pm,   "
},
{
  "id": "chp1sec1-16",
  "level": "2",
  "url": "chp1sec1.html#chp1sec1-16",
  "type": "Activity",
  "number": "1.1.12",
  "title": "Identifying Lists of Quantities.",
  "body": " Identifying Lists of Quantities  Consider each of the following situations. With your group, write down several lists of quantities that might naturally come up when analyzing the situation. Be sure to clearly specify each quantity (include object, attribute, and agreed way to measure). Note that these are intentionally vague and open-ended prompts.   The most recent time you went grocery shopping.  Your phone.  Your social media account.  The houses on your block.  A recording of a song by your favorite band.  The voting precincts in your region.  A single website that is comprised of 17 distinct pages.  Your favorite sports team.  Your favorite video game.   "
},
{
  "id": "chp1sec1-18",
  "level": "2",
  "url": "chp1sec1.html#chp1sec1-18",
  "type": "Remark",
  "number": "1.1.13",
  "title": "Meaningful vectors can have large list-length!",
  "body": " Meaningful vectors can have large list-length!  People often think of vectors as only being geometric coordinates and limit their thinking to list-lengths of 1, 2, or 3. While these are important examples of vectors, they can also constrain our thinking. I hope you see already that vectors of potentially large list-length are natural and everywhere .  "
},
{
  "id": "chp1sec1-19",
  "level": "2",
  "url": "chp1sec1.html#chp1sec1-19",
  "type": "Activity",
  "number": "1.1.14",
  "title": "Constructing Feature Vectors (Machine Learning).",
  "body": " Constructing Feature Vectors (Machine Learning)  In the photo below is a photo of my very sweet cat. In a quick glance, I can recognize him.   (Left) A photo of my cat. (Right) Image depicting Snout-Eye ratio.       I bet many of you have cats and dogs too. Pull up some pictures of them for this activity. When you look at them, you probably do not have any difficulty identifying which photos are of cats and which photos are of dogs. How do you think a computer might be able distinguish between photos of cats and photos of dogs? Computers cannot analyze images like we can - we need to tell them what to look for. We need to identify a list of useful quantities from which the computer can learn to make the distinction between cats and dogs. In the area of machine learning, this emergent vector is sometimes called a feature vector .  Let me give you an example of one quantity we may wish to include in our feature vector. Usually (but not always) dogs have longer snouts than cats, so snout length is a promising attribute to include in our feature vector. Unfortunately we cannot measure the absolute length of the snout from the photo, since we do not know the scale of the photo. Instead, we could measure the relative length of the snout compared to the distance between the eyes. For each photo, computers can compute and record this snout-to-eye ratio.  While this is a promising quantity, it is probably not enough for the computer the learn the difference between cats and dogs. (Why do you think this is the case?) In groups, come up with other promising quantities which you can read from a picture, and for which will be useful in trying to tell the difference between cats and dogs.  When you are done, share with the class your feature vector. What quantities comprise your feature vector? What is its list-length? Do you think that you have given the computer enough quantities that it should be able to distinguish pictures of cats from pictures of dogs by looking at their feature vectors? Feature vectors form the starting point for machine learning.  "
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
