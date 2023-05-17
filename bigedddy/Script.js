document.getElementById('loveForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var name1 = document.getElementById('name1').value;
    var name2 = document.getElementById('name2').value;
    
    var loveScore = Math.random() * 100;
    loveScore = Math.floor(loveScore) + 1;

    if( loveScore >= 50){
        alert( name1+" your love compatibility score is " + loveScore+ "%," + " Your relationship is perfect, you and "+name2+ " are incredibly compatible.");
    }  else{ alert(name1+" your love score is "+loveScore+"%"+ " sorry to say, you and "+name2+" don't seem like a perfect match.");}
    
    
    
  });

  
  

 