# Installation

## MAMP Installation

1. Download [MAMP] (https://www.mamp.info/en/downloads/)
1. Double click .pkg file and follow prompts
1. Double click /Applications/MAMP/MAMP
1. Tell MAMP to where your files are
	- Click on Preferences
	- Click on Web Server
	- Click the Select icon next to "Document Root" and find a suitable directory to work out of
	- Click OK
1. In your Document Root, create `index.php`.
1. Go to <http://localhost:8888/>
	- If no file is specified in the URL after the port, MAMP will look for `index.php`
1. Error logs are in /Applications/MAMP/logs/
	- use `tail -f php_error.log` to watch the end of the log file in case something breaks
1. MAMP stands for Mac, Apache, MySQL, PHP
	- Mac
		- Your OS
	- Apache
		- A pre-build web server that serves static files
		- It is extendable with various modules that allows it to do many things easily
	- MySQL
		- Your Database
	- PHP
		- A module for Apache that allows it to serve dynamic data

## Postgres

Postgres is a relational database (the opposite of MongoDB).  Let's install it:

- Go to https://postgresapp.com/downloads.html
- Click download button
- Double click package and follow prompts
- A new window in the Finder should open up, directing you to drag Postgres to the Applications folder.  Do that.
- Open up Applications in the Finder.  Find Postgres in the Applications folder and double click it
- If you don't see and servers in the left column of Postgres:
	- click `+` in the lower left of Postgres
	- click `Create Server`
	- click `Initialize`
- Click `Start`
- You should see several sub databases with icons and names.  Double click one
	- A terminal will open up, running `psql`
	- To exit `psql` run `\q`
