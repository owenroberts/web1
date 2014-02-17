Naavy = {
  
  setup: function(){
    
    // get current page and url
    
    var urlArray = document.location.href.split( '/' );
    var pageUrl = urlArray.pop();
    var dir = urlArray.pop();
    var urlPre = "";
    var urlPre2 = "";
    
    //alert(pageUrl)
    
    //begin nav structure
    nav = $( '<div>').attr( 'id', 'nav' );
    
    // add link to home page
    nav.append(
      $( '<h2>' ).append(
        $( '<a>' )
        .text( 'Home' )     
      ));
     
      //if home page is selected, make it "active", add href
      if (dir == 'notes') urlPre2 = "../";
      else urlPre = 'notes/';
      if (pageUrl == 'index.html' || pageUrl == '') {
        nav.find('a').attr('id','active').attr( 'href', 'index.html' );
        urlPre = "notes/";
        
        //if not homepage, add href
      }  else {
        nav.find('a').attr( 'href', urlPre2 + 'index.html' );      
      }
    
      //add extra links to bottom
      nav.append( $( '<ul>' ));    
      Naavy.linkers.forEach( function( link, linkNum ) {
        var ln = $( '<li>' );                  
        ln.append( 
          $( '<a>' )
          .text(link.name)
          .attr('href', urlPre2 + link.url)
        );
        if (link.url.split('/').pop() == pageUrl) {
          ln.find('a').attr('id', 'active');
        } 
        if (link.target != null) ln.find('a').attr('target', link.target)
        nav.append( ln );
      } );
    
      
      //adds rest of navigation links  
      Naavy.navigation.forEach( function( week, weekNum ) {
        wtext = 'Week ' + (weekNum + 1);
        nav.append(
          $( '<div>' ).attr('id', 'nav-item').append(
            $( '<h3>' )
            .text(wtext)
          )).append( $( '<ul>') );
    
         week.pages.forEach( function( page, pageNum ) {
              var li = $( '<li>' )
              li.append(
                $( '<a>' ).text(page[0])     
              );
              if (page[1] != null ) {
                linkUrl = week.url + '-' + page[1] + '.html';
                li.find('a').attr('href', urlPre + linkUrl);
                if (linkUrl == pageUrl) li.find('a').attr('id', 'active');
              } else {
                li.find('a').attr('id', 'ext');
              }          
              nav.append( li );
            }); 
          });
    
          $( 'nav' ).empty().append( nav );
    
        }, 
				 
        navigation: [
        {
          url:'week1',
          pages: [
          ['Introduction to JavaScript', 'lecture'],
          ['Assignment', 'assignment']
          ] 
        },
				{
					url:'week2',
					pages: [
					['HTML & CSS review', 'review'],
					['Data types & functions', 'lecture'],
					['Assignment', null]
					]
				},
				{
					url:'week3',
					pages:[
					['Document Object Model', 'lecture'],
					['Assignment', 'assignment']
					]
				},
				{
					url:'week4',
					pages:[
					['Logic and loops', 'lecture'],
					['JavaScript and CSS3', 'demo'],
					['Assignment', 'assignment']
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
          url: 'web2-syllabus.pdf',
          target: 'blank'
        },
        {
          name: 'FTP Instructions',
          url: 'notes/ftp.html'
        },
				{
					name:'Critiques',
					url: 'critiques.html'
				}
        ]
  
  
      }

      $( document ).ready( Naavy.setup )