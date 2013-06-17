 [AJLogo](https://github.com/ajlopez/AjLogoJs) command line interpreter and renderer.

![](https://dl.dropboxusercontent.com/u/1525624/blog/canvas-logo.png)

## Installation

First you need to follow the [instructions for node-canvas](https://github.com/LearnBoost/node-canvas/wiki). 

Once you have every pre-requisite for node-canvas install tortu as follows:

~~~
npm install -g tortu
~~~

## Usage

Create a file named `test.logo`:

~~~
to square :side
	repeat 4 [ forward :side left 90 ]
end

to figure
	repeat 36 [ square 40 left 10 ]
end

home figure
~~~

then you can run it as:

~~~
tortu test.logo
~~~

Alternatively you can use __shebang__:

~~~
#!/usr/bin/env tortu

to square :side
	repeat 4 [ forward :side left 90 ]
end

to figure
	repeat 36 [ square 40 left 10 ]
end

home figure
~~~

## Note

Improve rendering by using an small font in your terminal.

## License

MIT
