const produto =[
   {
id: 1,
ds_produto:'Caneta',
price: '2.50'

},
{
id: 2,
ds_produto:'Borracha',
price: '3,50'

},
{
id: 3,
ds_produto:'Lapis',
price: '2,00'

},
{
id: 4,
ds_produto:'Apagador',
price: '4,50'

}
]

produto.map((element,index)=>{
  console.log(index+ ' - '+ element.ds_produto)
})
produto.forEach((element)=>{
  console.log(element.id)
})

