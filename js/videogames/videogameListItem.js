var VideogameListItem = React.createClass({

    handleClick: function(event) {
        console.log('an item is clicked', this.props.card)
        this.props.onListItemClicked(this.props.card.id)
    },

    render: function() {

        var card = this.props.card

        return ( 
            <div className="card row" >
                <div className="cardName six columns" onClick={this.handleClick}>
                    {card.name}                    
                </div>
            </div>
        )
  }
})