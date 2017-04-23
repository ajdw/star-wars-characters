 function getStarwarsPeople() {
        var personsList = document.getElementById('js-names');
        var personsListContent = '';
        var people;

        $.ajax({
          url: 'http://swapi.co/api/people',
          dataType: 'JSON',
          method: 'GET',
          success: function(starwarsPeople) {
            console.log('starwarsPeople: ', starwarsPeople);

            people = starwarsPeople.results;

            for(var i = 0; i < people.length; i++){
              console.log('for loop is working');
              personsListContent += '<h2>' + people[i].name +'</h2>';
              personsListContent += '<h3>' + people[i].skin_color+'</h3>';
              personsListContent += '<h3>' + people[i].gender +'</h3>';
              personsListContent += '<h3>' + people[i].hair_color +'</h3>';
            }

              personList.innerHTML = personsListContent;


          },
          error: function(err) {
            console.log('err: ', err);
          }
        });
      }