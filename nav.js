Naavy = {
  
  setup: function(){
    
    // get current page and url
    
    var urlArray = document.location.href.split( '/' )
    var pageUrl = urlArray.pop()
    var dir = urlArray.pop()
    var urlPre = ""
    var urlPre2 = ""
    
    //alert(pageUrl)
    
    //begin nav structure
    nav = $( '<div>').attr( 'id', 'nav' )
    
    // add link to home page
    nav.append(
      $( '<h2>' ).append(

        $( '<a>' )
        .text( 'Home' )
        
        
      ))
     
      //if home page is selected, make it "active", add href
      if (dir == 'notes') urlPre2 = "../"
      else urlPre = 'notes/'
      if (pageUrl == 'index.html' || pageUrl == '') {
        nav.find('a').attr('id','active').attr( 'href', 'index.html' )
        urlPre = "notes/"
        
        //if not homepage, add href
      }  else {
        nav.find('a').attr( 'href', urlPre2 + 'index.html' )      
      }
    
      //add extra links to bottom
      nav.append( $( '<ul>' ))    
      Naavy.linkers.forEach( function( link, linkNum ) {
        var ln = $( '<li>' )                  
        ln.append( 
          $( '<a>' )
          .text(link.name)
          .attr('href', urlPre2 + link.url)
        )
        if (link.url.split('/').pop() == pageUrl) {
          ln.find('a').attr('id', 'active')
        } 
        if (link.target != null) ln.find('a').attr('target', link.target)
        nav.append( ln )
        
      } );
    
      
      //adds rest of navigation links  
      Naavy.navigation.forEach( function( week, weekNum ) {
        wtext = 'Week ' + (weekNum + 1)
        nav.append(
          $( '<div>' ).attr('id', 'nav-item').append(
            $( '<h3>' )
            .text(wtext)
          )).append(
            $( '<ul>') )
        
            week.pages.forEach( function( page, pageNum ) {
 
              var li = $( '<li>' )
              li.append(
                $( '<a>' )
                .text(page[0])
                  
              )
              if (page[1] != null ) {
                linkUrl = week.url + '-' + page[1] + '.html'
                li.find('a').attr('href', urlPre + linkUrl)
                if (linkUrl == pageUrl) li.find('a').attr('id', 'active')
              } else {
                li.find('a').attr('id', 'ext')
              }
              
              
              nav.append( li )
            }) 
          }) 
    
          
      
          
      
    
          $( 'nav' ).empty().append( nav )
    
        },
  
        navigation: [

        {
          url:'week1',
          pages: [
          ['History of the Internet', 'lecture'],
          ['Getting started with HTML', 'demo'],
          ['Assignment', 'assignment']
          ] 
        },
        {
          url:'week2',
          pages: [
          ['Evolution of web design', 'lecture'],
          ['Introduction to CSS', 'demo'],
          ['Assignment', 'assignment']
          ]
        },
        {
          url:'week3',
          pages: [
          ['Web color', 'lecture-color'],
          ['Web typography', 'lecture-type'],
          ['Navigation menu with CSS box model, floats and pseudo classes', 'demo'],
          ['Assignment', 'assignment']
          ]
        },
        {
          url:'week4',
          pages: [
          ['Form & Grid', 'lecture'],
          ['Two column layout with HTML & CSS', 'demo'],
          ['Assignment', 'assignment']
          ]
        },
        {
          url:'week5',
          pages: [
          ['Wireframing', 'lecture'],
          ['Assignment', 'assignment']
          ]
        },
				{
					url:'week6',
					pages: [
					['CSS: Fixed position, drop down navs', 'demo'],
					['Wireframe swap', 'class'],
					['Assignment', 'assignment']
					]
				},
				{
					url:'week7',
					pages: [
					['Internet art', 'lecture'],
					['Advanced hyperlink styles & embedding media', 'demo'],
					['Assignment', 'assignment']
					]
				},
				{
					url:'week8',
					pages: [
					['Web standards', 'lecture'],
					['Responsive layout design', 'demo'],
					['Assignment', 'assignment']
					]
				},
				{
					url:'week9',
					pages: [
					['Final project presentations', null],
					['Assignment', 'assignment']
					]
				},
				{
					url:'week10',
					pages: [
					['Interactive design', 'lecture'],
					['Advanced CSS -- Media queries and animation', 'demo'],
					['Assignment', 'assignment']
					]
				},
				{
					url:'week11',
					pages: [
					['Intro to jQuery', 'lecture'],
					['jQuery image popup demo', 'demo'],
					['Assignment', 'class']
					]
				},
				{
					url:'week12',
					pages: [
					
					['More jQuery', 'lecture'],
					['jQuery slideshow', 'demo'],
					['Assignment', 'assignment']
					
					
					]
				},
				{
					url:'week13',
					pages: [
					['Intro to SVG', 'lecture'],
					['SVG animation', 'demo']
					]
					
				},
				{
					url:'week14',
					pages: [
					['Electronic literature', null],
					['Compatibility & backend', null]
					]
				}
        ],
        
        linkers: [
        {
          name: 'Student Work',
          url: 'student-work.html'
        },
        {
          name: 'Syllabus',
          url: 'web1-fall2013.pdf',
          target: 'blank'
        },
        {
          name: 'FTP Instructions',
          url: 'notes/ftp.html'
        }
        ]
  
  
      }

      $( document ).ready( Naavy.setup )