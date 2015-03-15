var PublisherView = React.createClass({

    getInitialState: function() {
        return {set: null}
    },
    
    render: function() {
        
        if (this.state.set){

            return ( 
                <div className="setView" >
                    <h2 className="setName">
                        {this.state.set.name}
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

/* function publisherView(id){

    console.log('viewing set: ', id)

    $.ajax({
        type: 'GET',
        url: "https://api.deckbrew.com/mtg/sets/" + id,
        crossDomain: true
    }).done(function (set) {
        
        console.log(set)

        $.get("templates/gameView.jade", function(template) {

            var html = jade.render(template, {item: set})
            
            $("#details").html(html)

        })

    })

} */