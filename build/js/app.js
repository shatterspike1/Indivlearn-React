/*$( "#videogames" ).on( "click", function( event ) {
    listVideogames()
})

$( "#publishers" ).on( "click", function( event ) {
    listPublishers()
})*/

$( "#videogames" ).on( "click", function( event ) {
    React.render(
        <VideogameList url= 'https://api.deckbrew.com/mtg/cards'/>,
        document.getElementById('content')
    )
})

$( "#publishers" ).on( "click", function( event ) {
    React.render(
        <PublisherList url='https://api.deckbrew.com/mtg/sets'/>,
        document.getElementById('content')
    )
})
