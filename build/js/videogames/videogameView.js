var VideogameView = React.createClass({

    getInitialState: function() {
        return {card: null}
    },
    
    render: function() {
        
        if (this.state.card){

            return ( 
                <div className="cardView" >
                    <h2 className="cardName">
                        {this.state.card.name}
                    </h2>
                </div>
            )

        }else{

            return (
                <h2>Click an item to see details</h2>
            )
        }
    }

})

/* function gameView(id){

    console.log('viewing card: ', id)

    $.ajax({
        type: 'GET',
        url: "https://api.deckbrew.com/mtg/cards/" + id,
        crossDomain: true
    }).done(function (card) {
        
        console.log(card)

        $.get("templates/gameView.jade", function(template) {

            var html = jade.render(template, {item: card})
            
            $("#details").html(html)

        })

    })

} */