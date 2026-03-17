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
  "id": "L",
  "level": "1",
  "url": "L.html",
  "type": "Section",
  "number": "1.1",
  "title": "Vectors as Lists of Quantities",
  "body": " Vectors as Lists of Quantities  Text of section.    For more information on how to use PreTeXt, please visit https:\/\/pretextbook.org\/doc\/guide\/html\/ .    "
},
{
  "id": "L-3",
  "level": "2",
  "url": "L.html#L-3",
  "type": "Fact",
  "number": "1.1.1",
  "title": "",
  "body": "  For more information on how to use PreTeXt, please visit https:\/\/pretextbook.org\/doc\/guide\/html\/ .   "
},
{
  "id": "L",
  "level": "1",
  "url": "L.html",
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
