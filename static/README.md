# Display current playing song

## FM La Paz - <index.html>
Display and store in a playlist on the same page current song.<br>
The URL has some security issues (*expired* SSL certificate) but JavaScript fetch does not care and gets data without problems.

About the *expired* certificate:<br>
The URL I am using is hosted somewhere on the west (where the Sun sets), where I am the Sun is rising, there's a +13 hour difference. The URL's certificate is renewed every day at midnight, so by the time I am fetching data it already *expired*. Perhaps if the URL's server would be connected to some CloudFlare service, this issue might not matter. 

## ThirdRock Radio <thirdRock.html>
Display and store in a playlist on the same page current song.<br>
JavaScript seems to have a CORS issue with the URL I am fetching data from, it cannot parse anything. So I found a herokuapp website that appends the required *header* to the URL and JavaScript can fetch without problems.

I decided it was too much hassle on the herokuapp server, it says on its GitHub page, thus I decided to make a Python script to fetch data from the same URL and store it in a JSON file. Python's urllib doesnt care about headers and fetches data without problems.

I really do not understand why JavaScript has issues with the URL, I mean I wrote some scripts in Python, Gnome-JavaScript, and Shell (using curl) and they fetch data without problems.
