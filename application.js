  var options = {
    thumbnailData: [{
      title:'Inbox',
      number:32,
      header: 'Learn React',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis enim dolor.',
      imageUrl: 'http://blog.redpanthers.co/wp-content/uploads/2016/02/React.js-Flux-3.png'
    },{
      title:'Methods',
      number:12,
      header: 'Try Harder',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis enim dolor.',
      imageUrl: 'https://www.filepicker.io/api/file/xwCZZhShQLS247e9uC4D'
    }]
  };

  var element = React.createElement(ThumbnailList, options)

  ReactDOM.render(element, document.querySelector('.target'))
  

  // ReactDOM.render(<Badge title="Outbox" number="30" />, document.getElementById('root'))
 var Badge = React.createClass({displayName: "Badge",
    render: function (){
      this.props
      return (
        React.createElement("button", {className: "btn btn-primary", type: "button"}, 
         this.props.title, 
         React.createElement("span", {className: "badge"}, this.props.number)
        )    
      )
    }
  })
 var Thumbnail = React.createClass({displayName: "Thumbnail",
    render: function(){
      return (
        React.createElement("div", {className: "thumbnail"}, 
           React.createElement("img", {src: this.props.imageUrl}), 
           React.createElement("div", {className: "caption"}, 
             React.createElement("h3", null, this.props.header), 
             React.createElement("p", null, this.props.description), 
             React.createElement("p", null, 
               React.createElement(Badge, {title: this.props.title, number: this.props.number})
              )
           )
         )
      )
    }
  })
var ThumbnailList = React.createClass({displayName: "ThumbnailList",
  render:function(){
    var list = this.props.thumbnailData.map(function(thumbnailProps){
      return React.createElement(Thumbnail, React.__spread({},  thumbnailProps))
    })
    return (
      React.createElement("div", null, list)
    )
  }
})