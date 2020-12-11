var data, i, x = "";
data = '/movie_data.json';
fetch(data)
    .then(res => res.json())
    .then((result) => {
        console.log(result[1]);
        console.log(result[1].title);
        console.log(result[1].img_url);
        console.log(result[1].media_category);
        console.log(result[1].video_url);

        for (i = 0; i < 50; i++) {


            document.getElementById("movieloop").innerHTML += "<div class='card' style='width: 18rem;'><img src='" + result[i].img_url + "' class='card-img-top' alt=''...'><div class='card-body'><h5 class='card-title'>" + result[i].title + "</h5><p class='card-text'>" + result[i].content + "</p><a href='#' class='btn btn-primary'>Go somewhere</a></div></div>";

        }

    })
    .catch(err => { throw err });