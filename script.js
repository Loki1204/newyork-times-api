const home = document.getElementById('home');
const world = document.getElementById('world');
const politics = document.getElementById('politics');
const magazine = document.getElementById('magazine');
const technology = document.getElementById('technology');
const science = document.getElementById('science');
const health = document.getElementById('health');
const sports = document.getElementById('sports');
const arts = document.getElementById('arts');
const fashion = document.getElementById('fashion');
const food = document.getElementById('food');
const travel = document.getElementById('travel');
const newsContainer = document.getElementById('newsContainer');



home.onclick = homeFun => {
    fetch('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=QG3AR3xGrjIzgD5dS0VrAJ6OCadIj6IA')
    .then(function(response){
        return response.json();
    }).then(function(jsonData){
        


        let output = '';
        jsonData.results.forEach(element => {
            let abstract = element.abstract;
            let byLine = element.byline;
            let createdDate = element.created_date;
            let itemType = element.item_type;
            let section = element.section;
            let title = element.title;
            let shortUrl = element.short_url;
            let image = element.multimedia[4].url;


            output += `<div class="card mb-3" style="max-width: none;">
        <div class="row no-gutters">
          <div class="img-thumbnail">
            <img src="${image}" alt="">
          </div>
          <div class="col-md-8">
            <div class="card-body">
                <h4 class="section-card">${section}</h4>
              <h5 class="card-title">${title}</h5>
              <p class="date-card"><small class="text-muted">${createdDate}</small></p>
              <p class="card-text">${abstract}</p>
              <a class="continueReading" href="${shortUrl}" target="_blank">Continue Reading</a>
              
            </div>
          </div>
        </div>
      </div>`;
        })
        
        newsContainer.innerHTML = output;
    })
    

}



world.onclick = homeFun => {
    fetch('https://api.nytimes.com/svc/topstories/v2/world.json?api-key=QG3AR3xGrjIzgD5dS0VrAJ6OCadIj6IA')
    .then(function(response){
        return response.json();
    }).then(function(jsonData){
        


        let output = '';
        jsonData.results.forEach(element => {
            let abstract = element.abstract;
            let byLine = element.byline;
            let createdDate = element.created_date;
            let itemType = element.item_type;
            let section = element.section;
            let title = element.title;
            let shortUrl = element.short_url;
            let image = element.multimedia[4].url;


            output += `<div class="card mb-3" style="max-width: none;">
        <div class="row no-gutters">
          <div class="img-thumbnail">
            <img src="${image}" alt="">
          </div>
          <div class="col-md-8">
            <div class="card-body">
                <h4 class="section-card">${section}</h4>
              <h5 class="card-title">${title}</h5>
              <p class="date-card"><small class="text-muted">${createdDate}</small></p>
              <p class="card-text">${abstract}</p>
              <a class="continueReading" href="${shortUrl}" target="_blank">Continue Reading</a>
              
            </div>
          </div>
        </div>
      </div>`;
        })
        
        newsContainer.innerHTML = output;
    })
    

}


politics.onclick = homeFun => {
    fetch('https://api.nytimes.com/svc/topstories/v2/politics.json?api-key=QG3AR3xGrjIzgD5dS0VrAJ6OCadIj6IA')
    .then(function(response){
        return response.json();
    }).then(function(jsonData){
        

        let output = '';
        jsonData.results.forEach(element => {
            let abstract = element.abstract;
            let byLine = element.byline;
            let createdDate = element.created_date;
            let itemType = element.item_type;
            let section = element.section;
            let title = element.title;
            let shortUrl = element.short_url;
            let image = element.multimedia[4].url;


            output += `<div class="card mb-3" style="max-width: none;">
        <div class="row no-gutters">
          <div class="img-thumbnail">
            <img src="${image}" alt="">
          </div>
          <div class="col-md-8">
            <div class="card-body">
                <h4 class="section-card">${section}</h4>
              <h5 class="card-title">${title}</h5>
              <p class="date-card"><small class="text-muted">${createdDate}</small></p>
              <p class="card-text">${abstract}</p>
              <a class="continueReading" href="${shortUrl}" target="_blank">Continue Reading</a>
              
            </div>
          </div>
        </div>
      </div>`;
        })
        
        newsContainer.innerHTML = output;
    })
    

}


magazine.onclick = homeFun => {
    fetch('https://api.nytimes.com/svc/topstories/v2/magazine.json?api-key=QG3AR3xGrjIzgD5dS0VrAJ6OCadIj6IA')
    .then(function(response){
        return response.json();
    }).then(function(jsonData){


        let output = '';
        jsonData.results.forEach(element => {
            let abstract = element.abstract;
            let byLine = element.byline;
            let createdDate = element.created_date;
            let itemType = element.item_type;
            let section = element.section;
            let title = element.title;
            let shortUrl = element.short_url;
            let image = element.multimedia[4].url;


            output += `<div class="card mb-3" style="max-width: none;">
        <div class="row no-gutters">
          <div class="img-thumbnail">
            <img src="${image}" alt="">
          </div>
          <div class="col-md-8">
            <div class="card-body">
                <h4 class="section-card">${section}</h4>
              <h5 class="card-title">${title}</h5>
              <p class="date-card"><small class="text-muted">${createdDate}</small></p>
              <p class="card-text">${abstract}</p>
              <a class="continueReading" href="${shortUrl}" target="_blank">Continue Reading</a>
              
            </div>
          </div>
        </div>
      </div>`;
        })
        
        newsContainer.innerHTML = output;
    })
    

}


technology.onclick = homeFun => {
    fetch('https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=QG3AR3xGrjIzgD5dS0VrAJ6OCadIj6IA')
    .then(function(response){
        return response.json();
    }).then(function(jsonData){


        let output = '';
        jsonData.results.forEach(element => {
            let abstract = element.abstract;
            let byLine = element.byline;
            let createdDate = element.created_date;
            let itemType = element.item_type;
            let section = element.section;
            let title = element.title;
            let shortUrl = element.short_url;
            let image = element.multimedia[4].url;


            output += `<div class="card mb-3" style="max-width: none;">
        <div class="row no-gutters">
          <div class="img-thumbnail">
            <img src="${image}" alt="">
          </div>
          <div class="col-md-8">
            <div class="card-body">
                <h4 class="section-card">${section}</h4>
              <h5 class="card-title">${title}</h5>
              <p class="date-card"><small class="text-muted">${createdDate}</small></p>
              <p class="card-text">${abstract}</p>
              <a class="continueReading" href="${shortUrl}" target="_blank">Continue Reading</a>
              
            </div>
          </div>
        </div>
      </div>`;
        })
        
        newsContainer.innerHTML = output;
    })
    

}



science.onclick = homeFun => {
    fetch('https://api.nytimes.com/svc/topstories/v2/science.json?api-key=QG3AR3xGrjIzgD5dS0VrAJ6OCadIj6IA')
    .then(function(response){
        return response.json();
    }).then(function(jsonData){


        let output = '';
        jsonData.results.forEach(element => {
            let abstract = element.abstract;
            let byLine = element.byline;
            let createdDate = element.created_date;
            let itemType = element.item_type;
            let section = element.section;
            let title = element.title;
            let shortUrl = element.short_url;
            let image = element.multimedia[4].url;


            output += `<div class="card mb-3" style="max-width: none;">
        <div class="row no-gutters">
          <div class="img-thumbnail">
            <img src="${image}" alt="">
          </div>
          <div class="col-md-8">
            <div class="card-body">
                <h4 class="section-card">${section}</h4>
              <h5 class="card-title">${title}</h5>
              <p class="date-card"><small class="text-muted">${createdDate}</small></p>
              <p class="card-text">${abstract}</p>
              <a class="continueReading" href="${shortUrl}" target="_blank">Continue Reading</a>
              
            </div>
          </div>
        </div>
      </div>`;
        })
        
        newsContainer.innerHTML = output;
    })
    

}


health.onclick = homeFun => {
    fetch('https://api.nytimes.com/svc/topstories/v2/health.json?api-key=QG3AR3xGrjIzgD5dS0VrAJ6OCadIj6IA')
    .then(function(response){
        return response.json();
    }).then(function(jsonData){


        let output = '';
        jsonData.results.forEach(element => {
            let abstract = element.abstract;
            let byLine = element.byline;
            let createdDate = element.created_date;
            let itemType = element.item_type;
            let section = element.section;
            let title = element.title;
            let shortUrl = element.short_url;
            let image = element.multimedia[4].url;


            output += `<div class="card mb-3" style="max-width: none;">
        <div class="row no-gutters">
          <div class="img-thumbnail">
            <img src="${image}" alt="">
          </div>
          <div class="col-md-8">
            <div class="card-body">
                <h4 class="section-card">${section}</h4>
              <h5 class="card-title">${title}</h5>
              <p class="date-card"><small class="text-muted">${createdDate}</small></p>
              <p class="card-text">${abstract}</p>
              <a class="continueReading" href="${shortUrl}" target="_blank">Continue Reading</a>
              
            </div>
          </div>
        </div>
      </div>`;
        })
        
        newsContainer.innerHTML = output;
    })
    

}


sports.onclick = homeFun => {
    fetch('https://api.nytimes.com/svc/topstories/v2/sports.json?api-key=QG3AR3xGrjIzgD5dS0VrAJ6OCadIj6IA')
    .then(function(response){
        return response.json();
    }).then(function(jsonData){


        let output = '';
        jsonData.results.forEach(element => {
            let abstract = element.abstract;
            let byLine = element.byline;
            let createdDate = element.created_date;
            let itemType = element.item_type;
            let section = element.section;
            let title = element.title;
            let shortUrl = element.short_url;
            let image = element.multimedia[4].url;


            output += `<div class="card mb-3" style="max-width: none;">
        <div class="row no-gutters">
          <div class="img-thumbnail">
            <img src="${image}" alt="">
          </div>
          <div class="col-md-8">
            <div class="card-body">
                <h4 class="section-card">${section}</h4>
              <h5 class="card-title">${title}</h5>
              <p class="date-card"><small class="text-muted">${createdDate}</small></p>
              <p class="card-text">${abstract}</p>
              <a class="continueReading" href="${shortUrl}" target="_blank">Continue Reading</a>
              
            </div>
          </div>
        </div>
      </div>`;
        })
        
        newsContainer.innerHTML = output;
    })
    

}


arts.onclick = homeFun => {
    fetch('https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=QG3AR3xGrjIzgD5dS0VrAJ6OCadIj6IA')
    .then(function(response){
        return response.json();
    }).then(function(jsonData){


        let output = '';
        jsonData.results.forEach(element => {
            let abstract = element.abstract;
            let byLine = element.byline;
            let createdDate = element.created_date;
            let itemType = element.item_type;
            let section = element.section;
            let title = element.title;
            let shortUrl = element.short_url;
            let image = element.multimedia[4].url;


            output += `<div class="card mb-3" style="max-width: none;">
        <div class="row no-gutters">
          <div class="img-thumbnail">
            <img src="${image}" alt="">
          </div>
          <div class="col-md-8">
            <div class="card-body">
                <h4 class="section-card">${section}</h4>
              <h5 class="card-title">${title}</h5>
              <p class="date-card"><small class="text-muted">${createdDate}</small></p>
              <p class="card-text">${abstract}</p>
              <a class="continueReading" href="${shortUrl}" target="_blank">Continue Reading</a>
              
            </div>
          </div>
        </div>
      </div>`;
        })
        
        newsContainer.innerHTML = output;
    })
    

}


fashion.onclick = homeFun => {
    fetch('https://api.nytimes.com/svc/topstories/v2/fashion.json?api-key=QG3AR3xGrjIzgD5dS0VrAJ6OCadIj6IA')
    .then(function(response){
        return response.json();
    }).then(function(jsonData){


        let output = '';
        jsonData.results.forEach(element => {
            let abstract = element.abstract;
            let byLine = element.byline;
            let createdDate = element.created_date;
            let itemType = element.item_type;
            let section = element.section;
            let title = element.title;
            let shortUrl = element.short_url;
            let image = element.multimedia[4].url;


            output += `<div class="card mb-3" style="max-width: none;">
        <div class="row no-gutters">
          <div class="img-thumbnail">
            <img src="${image}" alt="">
          </div>
          <div class="col-md-8">
            <div class="card-body">
                <h4 class="section-card">${section}</h4>
              <h5 class="card-title">${title}</h5>
              <p class="date-card"><small class="text-muted">${createdDate}</small></p>
              <p class="card-text">${abstract}</p>
              <a class="continueReading" href="${shortUrl}" target="_blank">Continue Reading</a>
              
            </div>
          </div>
        </div>
      </div>`;
        })
        
        newsContainer.innerHTML = output;
    })
    

}


food.onclick = homeFun => {
    fetch('https://api.nytimes.com/svc/topstories/v2/food.json?api-key=QG3AR3xGrjIzgD5dS0VrAJ6OCadIj6IA')
    .then(function(response){
        return response.json();
    }).then(function(jsonData){


        let output = '';
        jsonData.results.forEach(element => {
            let abstract = element.abstract;
            let byLine = element.byline;
            let createdDate = element.created_date;
            let itemType = element.item_type;
            let section = element.section;
            let title = element.title;
            let shortUrl = element.short_url;
            let image = element.multimedia[4].url;


            output += `<div class="card mb-3" style="max-width: none;">
        <div class="row no-gutters">
          <div class="img-thumbnail">
            <img src="${image}" alt="">
          </div>
          <div class="col-md-8">
            <div class="card-body">
                <h4 class="section-card">${section}</h4>
              <h5 class="card-title">${title}</h5>
              <p class="date-card"><small class="text-muted">${createdDate}</small></p>
              <p class="card-text">${abstract}</p>
              <a class="continueReading" href="${shortUrl}" target="_blank">Continue Reading</a>
              
            </div>
          </div>
        </div>
      </div>`;
        })
        
        newsContainer.innerHTML = output;
    })
    

}


travel.onclick = homeFun => {
    fetch('https://api.nytimes.com/svc/topstories/v2/travel.json?api-key=QG3AR3xGrjIzgD5dS0VrAJ6OCadIj6IA')
    .then(function(response){
        return response.json();
    }).then(function(jsonData){


        let output = '';
        jsonData.results.forEach(element => {
            let abstract = element.abstract;
            let byLine = element.byline;
            let createdDate = element.created_date;
            let itemType = element.item_type;
            let section = element.section;
            let title = element.title;
            let shortUrl = element.short_url;
            let image = element.multimedia[4].url;


            output += `<div class="card mb-3" style="max-width: none;">
        <div class="row no-gutters">
          <div class="img-thumbnail">
            <img src="${image}" alt="">
          </div>
          <div class="col-md-8">
            <div class="card-body">
                <h4 class="section-card">${section}</h4>
              <h5 class="card-title">${title}</h5>
              <p class="date-card"><small class="text-muted">${createdDate}</small></p>
              <p class="card-text">${abstract}</p>
              <a class="continueReading" href="${shortUrl}" target="_blank">Continue Reading</a>
              
            </div>
          </div>
        </div>
      </div>`;
        })
        
        newsContainer.innerHTML = output;
    })
    

}