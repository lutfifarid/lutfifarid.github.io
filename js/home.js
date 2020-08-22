// TODO: Abstract loading?
// Clone from crissyw

// Cool loopy loop of adjectives I like :)
$(document).ready(function() {

var items = ["family guardian", "SQL-caster", "data enthusiast", "insight seeker", "code explorer"],
    $text = $( '#about-me span' ),
    delay = 2; //seconds

function loop ( delay ) {

    $.each( items, function ( i, elm ){
        console.log("aa")
        $text.delay( delay*1E3).fadeOut();
        $text.queue(function(){
            $text.html( items[i] );
            $text.dequeue();
        });
        $text.fadeIn();
        $text.queue(function(){
            if ( i == items.length -1 ) {
                loop(delay);   
            }
            $text.dequeue();
        });
    });
}

loop( delay );

});
  
// END Cool loopy loop of adjectives I like :)  