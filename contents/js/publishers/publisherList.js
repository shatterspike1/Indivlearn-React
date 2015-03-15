var PublisherList = React.createClass({displayName: 'PublisherList',

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
        var set = _.find(this.state.data, {id: id})
        this.refs.setView.setState({set:set})
    },
    
    render: function() {

        var self = this

        var sets = this.state.data.map(function (set) {
        
        return (    
            <PublisherListItem set={set} onListItemClicked={self.handleListItemClicked}/>
            )
        })        

        return (
            <div className="setPage">
                <div className="setList six columns">
                    {sets}
                </div>
                <div className="setView six columns">
                    <PublisherView ref="setView"/>
                </div>
            </div>
        )
    }

})

/*function listPublishers(){

    console.log('listing MTG sets')    

    $.ajax({
        type: 'GET',
        url: "https://api.deckbrew.com/mtg/sets",
        crossDomain: true
    }).done(function (sets) {
        
            console.log(sets)
            
            $.get("templates/publisherList.jade", function(template) {

                var html = jade.render(template, {items: sets})            

                $("#list").html(html)

                publisherView(sets[0].id)

        })
    })
    
}*/