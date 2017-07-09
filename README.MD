# Check

### Test app

![Check](http://i.imgur.com/bVSjO8p.png)

---

### Tech
Weather forecast uses several open source projects to work properly:

* [Node.js] - JavaScript runtime built on Chrome's V8 JavaScript engine
* [Webix] - Cross platform and cross browser UI library

---

### Requirements

* [Node.js](https://nodejs.org/) v4.4+

---

### Installation

* Download and extract the [latest version of Check (https://github.com/paratagas/check)
* Install the dependencies and devDependencies:
```sh
$ cd check
$ npm install
```

* **Run Node.js server:**
```sh
$ npm start
```

After that your web application is available on:

```sh
http://localhost:4488
```

---

### Development


* To create your bundle.js (if source code is modified) run:
```sh
$ gulp bundle
```

* To watch your source code changing and restarting server in development run:
```sh
$ npm run nodemon
$ gulp watch
```

---


### License

GNU GPLV3

 [Node.js]: <https://nodejs.org/>
 [Webix]: <http://webix.com/>
 