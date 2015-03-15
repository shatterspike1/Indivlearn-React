var VideogameList = React.createClass({displayName: 'VideogameList',

    getInitialState: function() {
        return {data: []};
    },
    
    componentDidMount: function() {
        $.ajax({
            url: this.props.url,
            type: 'GET',
            crossDomain: true,
            success: function(data) {
                this.setState({
                    data: data
                });
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },
    
    handleListItemClicked: function(id){
        var card = _.find(this.state.data, {id: id})
        this.refs.cardView.setState({card:card})
    },
    
    render: function() {

        var self = this

        var cards = this.state.data.map(function (card) {
        
        return (    
            <VideogameListItem card={card} onListItemClicked={self.handleListItemClicked}/>
            )
        })        

        return (
            <div className="cardPage">
                <div className="cardList six columns">
                    {cards}
                </div>
                <div className="cardView six columns">
                    <VideogameView ref="cardView"/>
                </div>
            </div>
        )
    }

})

/* function listVideogames(){

    console.log('listing MTG cards')    

    $.ajax({
        type: 'GET',
        url: "https://api.deckbrew.com/mtg/cards",
        crossDomain: true
    }).done(function (cards) {
        
            console.log(cards)
            
            $.get("templates/gameList.jade", function(template) {

                var html = jade.render(template, {items: cards})            

                $("#list").html(html)

                gameView(cards[1].id)

        })
    })
    
} */