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
				},
				{
					url:'week5',
					pages:[
					['Arrays and Objects', 'lecture'],
					['Demo: jQuery dynamic grid', 'demo'],
					['Assignment', 'assignment']
					]
				},
				{
					url:'week6',
					pages:[
					['Review: SVG', 'review'],
					['Repetition and random', 'lecture'],
					['Assignment', 'assignment']
					]
				},
				{
					url:'week7',
					pages:[
					['Intro to d3', 'lecture'],
					['Assignment', 'assignment']
					]
				},
				{
					url:'week8',
					pages:[
					['d3 demo', 'demo'],
					['Assignment', 'assignment'],
					['Final concept', 'finals']
					]
				},
				{
					url:'week9',
					pages:[
					['JSON', 'demo'],
					['Final concept presentations', null],
					['Assignment', 'assignment']
					]
				},
				{
					url:'week10',
					pages:[
					['HTML5 Media', 'demo'],
					['Assignment', 'assignment']
					]
				},
				{
					url:'week11',
					pages:[
					['HTML5 Animation', 'demo']					
					]
				},
				{
					url:'week12',
					pages:[
					['Canvas interaction', 'demo']					
					]
				},
				{
					url:'week13',
					pages:[
					['Final', 'assignment']					
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