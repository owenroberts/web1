Naavy = {
  
  setup: function(){
    
    // get current page and url
    
    var pageUrl = document.location.href.split( '/' ).pop()
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
    if (pageUrl == 'index.html' || pageUrl == '') {
        nav.find('a').attr('id','active').attr( 'href', 'index.html' )
        urlPre = "notes/"
        
        //if not homepage, add href
    }  else {
      urlPre2 = "../"
      nav.find('a').attr( 'href', 'index.html' )
      
    }
      
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
              
              linkUrl = week.url + '-' + page[1] + '.html'
              var li = $( '<li>' )
              //console.log(li)
              li.append(
                  $( '<a>' )
                  .text(page[0])
                  .attr('href', urlPre + linkUrl)
                )
              
              if (linkUrl == pageUrl) li.find('a').attr('id', 'active')
              
              nav.append( li )
            }) 
          }) 
    
          //add extra links to bottom
          nav.append( $( '<ul>' ))    
          Naavy.linkers.forEach( function( link, linkNum ) {
            var ln = $( '<li>' )                  
            ln.append( 
                $( '<a>' )
                .text(link.name)
                .attr('href', urlPre2 + link.url)
            )
            console.log(linkNum, link.url, pageUrl)
            if (link.url == ('notes/'+pageUrl)) ln.find('a').attr('id', 'active')
            if (link.target != null) ln.find('a').attr('target', link.target)
            nav.append( ln )
            
          } )
      
          
      
    
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
        }
        ],
        
        linkers: [
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