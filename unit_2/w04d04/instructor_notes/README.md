# Install Mongo

- Go to https://www.mongodb.com/download-center/community
- select the version/os/package and download. (e.g. use the current release for version and TGZ for package if on mac)
- unzip downloaded file
- in terminal, go to directory created by unzipping
	- You'll see a `bin` dir
	- run `chmod 777 bin/*`
- put those files in `/usr/local/bin/` (you may need to use `sudo`)
- create `~/dev/data/db` directories
- run `mongod --dbpath ~/dev/data/db/`
- create a new terminal tab (command+T)
- in this new terminal tab, run `mongo`
