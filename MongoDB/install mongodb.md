# Install mongodb

<https://docs.mongodb.com/manual/installation/>

## MacOS

<https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/>

Tap the MongoDB Homebrew Tap

```bash
brew tap mongodb/brew
```

Install MongoDB

```bash
brew install mongodb-community@4.0
```

Make directory to save database

```bash
sudo mkdir -p /data/db

sudo chmod 777 /data/db
```

Run MongoDB

```bash
# From a terminal, issue the following to run MongoDB (i.e. the mongod process) in the foreground.
mongod --config /usr/local/etc/mongod.conf
# Alternatively, to run MongoDB as a macOS service, issue the following (the process uses the /usr/local/etc/mongod.conf file, created during the install):

brew services start mongodb-community@4.0
```

Connect and Use MongoDB

```bash
mongo
```
