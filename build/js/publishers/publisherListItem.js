var PublisherListItem = React.createClass({

    handleClick: function(event) {
        console.log('an item is clicked', this.props.set)
        this.props.onListItemClicked(this.props.set.id)
    },

    render: function() {

        var set = this.props.set

        return ( 
            <div className="set row" >
                <div className="setName six columns" onClick={this.handleClick}>
                    {set.name}                    
                </div>
            </div>
        )
  }
})