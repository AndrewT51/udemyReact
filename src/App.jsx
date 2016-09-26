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