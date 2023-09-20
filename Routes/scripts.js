
let randomRoutes = {
    "routes": [

        {
            "route": "Seattle, Washington to Fargo, North Dakota", "author": "Kelci Fowler"
        },
        {
            "route": "Portland, Oregon to Roswell, New Mexico", "author": "Heather Whitt"
        },
        {
            "route": "Los Angeles, California to Wichita, Kansas", "author": "Kim Ochs"
        },
        {
            "route": "Reno , Nevada to Grand Island, Nebraska", "author": "Dre Caron"
        },
        {
            "route": "Bangor, Maine to Ann Arbor, Michigan", "author": "Love"
        },
        {
            "route": "Washington DC to Miami, Florida", "author": "Genis Butler"
        },
        {
            "route": "Las Vegas, Nevada to Broklyn, New York", "author": "Joey Matteucci"
        },
        {
            "route": "San Antonio,Texas to Memphis, Tennessee", "author": "Kelci Fowler"
        },
        {
            "route": "Norman, Oklahoma to Kansas City, Missouri", "author": "Princess Gilmore"
        },
        {
            "route": "Des Moines, Iowa to Bismarck, North Dakota", "author": "Ruben Valdez"
        },
        {
            "route": "Jacksonville, Florida to Rock Hill, South Carolina", "author": "Mrs. S"
        },
        {
            "route": "os Angeles, California to Las Vegas, Nevada", "author": "Starnesha Rolle "
        },
        {
            "route": "Phoenix, Arizona to Austin, Texas", "author": "Jessica Dickerson"
        },
        {
            "route": "San Francisco, California to Las Cruces, New Mexico ", "author": "Misty Gray"
        },
        {
            "route": "Phoenix, Arizona to Grand Rapids, Michigan", "author": "Leaha Corwin"
        },
        {
            "route": "Route 66", "author": "Corrina Ek"
        },
        {
            "route": "Kalisipie, Montana to Bend, Oregon", "author": "Heather Whitt"
        },
        {
            "route": "Sedona, Arizona to Billings, Montana", "author": "Dre Caron"
        },
        {
            "route": "Cincinnati, Ohio to Palm Springs, California", "author": "Allie Henz"
        },
        {
            "route": "Detroit, Michigan to Alanta, Georgia", "author": "Angela Hooker"
        },
        {
            "route": "Phoenix, Arizona to Charlotte, North Carolina", "author": "Amanda Fields"
        },
        {
            "route": "Boston, Massachusetts to Broklyn, New York ", "author": "Amanda"
        },
        {
            "route": "Phoenix, Arizona to Eureka, Montana ", "author": "Jess Bruner"
        },
        {
            "route": "Baltimore, Maryland to Tampa, Florida", "author": "Mrs. Wheeler"
        },


    ]
}

function getroute() {

    num = Math.floor(Math.random() * randomRoutes.routes.length)

    obj = randomRoutes.routes[num]


    document.getElementById('route').innerHTML = obj.route;
    document.getElementById('author').innerHTML = obj.author;


    return obj
}
getroute()
