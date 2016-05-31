# Responsive Design Testing With Heroku

This tool is for everyone who needs a quick and easy way to test their website design in multiple screen widths on Heroku.

This tool is based on Responsive Design Testing by (https://github.com/mattkersley/Responsive-Design-Testing) and Heroku Static Provider (https://github.com/nulltask/heroku-static-provider).

demo http://rdt-ssl.herokuapp.com/?https://ja.wikipedia.org

## Installation

You need sign-in or sign-up to Heroku.

    $ git clone https://github.com/mgka/Responsive-Design-Testing-With-Heroku my-site
    $ cd my-site
    $ heroku create
    $ git push -u heroku master
    $ heroku open

## Notes

###  Permalink style testing
You can test any website, and provide the link to anyone you like by adding their URL to the end of the testing page address. This may not work for external sites however due to browser security restrictions.

### Adding Basic Auth

    $ heroku config:set USER=username
    $ heroku config:set PASS=password

