# sprite-generator

## Installation

- [Download](../../releases/latest/download/sprite-generator.sketchplugin.zip) the latest release of the plugin
- Un-zip
- Double-click on sprite-generator.sketchplugin

## Development Guide

_This plugin was created using `skpm`. For a detailed explanation on how things work, checkout the [skpm Readme](https://github.com/skpm/skpm/blob/master/README.md)._

### Usage

Install the dependencies

```bash
npm install
```

Once the installation is done, you can run some commands inside the project folder:

```bash
npm run build
```

To watch for changes:

```bash
npm run watch
```

Additionally, if you wish to run the plugin every time it is built:

```bash
npm run start
```

### Custom Configuration

#### Babel

To customize Babel, you have two options:

- You may create a [`.babelrc`](https://babeljs.io/docs/usage/babelrc) file in your project's root directory. Any settings you define here will overwrite matching config-keys within skpm preset. For example, if you pass a "presets" object, it will replace & reset all Babel presets that skpm defaults to.

- If you'd like to modify or add to the existing Babel config, you must use a `webpack.skpm.config.js` file. Visit the [Webpack](#webpack) section for more info.

#### Webpack

To customize webpack create `webpack.skpm.config.js` file which exports function that will change webpack's config.

```js
/**
 * Function that mutates original webpack config.
 * Supports asynchronous changes when promise is returned.
 *
 * @param {object} config - original webpack config.
 * @param {boolean} isPluginCommand - whether the config is for a plugin command or a resource
 **/
module.exports = function(config, isPluginCommand) {
  /** you can change config here **/
}
```

### Debugging

To view the output of your `console.log`, you have a few different options:

- Use the [`sketch-dev-tools`](https://github.com/skpm/sketch-dev-tools)
- Run `skpm log` in your Terminal, with the optional `-f` argument (`skpm log -f`) which causes `skpm log` to not stop when the end of logs is reached, but rather to wait for additional data to be appended to the input

### Publishing your plugin

```bash
skpm publish <bump>
```

(where `bump` can be `patch`, `minor` or `major`)

`skpm publish` will create a new release on your GitHub repository and create an appcast file in order for Sketch users to be notified of the update.

You will need to specify a `repository` in the `package.json`:

```diff
=cssSprite( $spriteVals )
	width: nth( $spriteVals, 1 )
	height: nth( $spriteVals, 2 )
	background-repeat: no-repeat
	background-image: url( #{ nth( $spriteVals, 3 ) } )
	background-position: nth( $spriteVals, 4 ) nth( $spriteVals, 5 )
	@media only screen and ( -webkit-min-device-pixel-ratio: 2 ), only screen and ( min-device-pixel-ratio: 2 ) 
		background-image: url( #{ nth( $spriteVals, 6 ) } )
		background-size: $bgiSizeW $bgiSizeH
	

$th_flat_iconPath: '../img/th_flat_icon'
$th_flat_iconURL: $th_flat_iconPath + '.png'
$th_flat_iconx2URL: $th_flat_iconPath + '@2.png'
$bgiSizeW: 439px
$bgiSizeH: 422px
$menu outlined #777777: 24px 24px $th_flat_iconURL -286px -356px $th_flat_iconx2URL
$menu filled #ffffff: 24px 24px $th_flat_iconURL -216px -356px $th_flat_iconx2URL
$menu filled #777777: 24px 24px $th_flat_iconURL -6px -356px $th_flat_iconx2URL
$save outlined #777777: 24px 24px $th_flat_iconURL -286px -286px $th_flat_iconx2URL
$save filled #ffffff: 24px 24px $th_flat_iconURL -216px -286px $th_flat_iconx2URL
$save filled #cccccc: 24px 24px $th_flat_iconURL -146.5px -286px $th_flat_iconx2URL
$save filled #777777: 24px 24px $th_flat_iconURL -6px -286px $th_flat_iconx2URL
$email outlined #777777: 24px 24px $th_flat_iconURL -286px -216px $th_flat_iconx2URL
$email filled #ffffff: 24px 24px $th_flat_iconURL -216px -216px $th_flat_iconx2URL
$email filled #cccccc: 24px 24px $th_flat_iconURL -146px -216px $th_flat_iconx2URL
$email filled #777777: 24px 24px $th_flat_iconURL -6px -216px $th_flat_iconx2URL
$folder outlined #777777: 24px 24px $th_flat_iconURL -286px -146px $th_flat_iconx2URL
$folder filled #ffffff: 24px 24px $th_flat_iconURL -216px -146px $th_flat_iconx2URL
$folder filled #cccccc: 24px 24px $th_flat_iconURL -146px -146px $th_flat_iconx2URL
$folder filled #777777: 24px 24px $th_flat_iconURL -6px -146px $th_flat_iconx2URL
$bell outlined #777777: 24px 24px $th_flat_iconURL -286px -76px $th_flat_iconx2URL
$bell filled #ffffff: 24px 24px $th_flat_iconURL -216px -76px $th_flat_iconx2URL
$bell filled #777777: 24px 24px $th_flat_iconURL -76px -76px $th_flat_iconx2URL
$print outlined #777777: 24px 24px $th_flat_iconURL -286px -6px $th_flat_iconx2URL
$print filled #ffffff: 24px 24px $th_flat_iconURL -216px -6px $th_flat_iconx2URL
$print filled #cccccc: 24px 24px $th_flat_iconURL -146px -6px $th_flat_iconx2URL
$print filled #777777: 24px 24px $th_flat_iconURL -6px -6px $th_flat_iconx2URL
$th_flat_iconList: $menu outlined #777777 menu outlined #777777, $menu filled #ffffff menu filled #ffffff, $menu filled #777777 menu filled #777777, $save outlined #777777 save outlined #777777, $save filled #ffffff save filled #ffffff, $save filled #cccccc save filled #cccccc, $save filled #777777 save filled #777777, $email outlined #777777 email outlined #777777, $email filled #ffffff email filled #ffffff, $email filled #cccccc email filled #cccccc, $email filled #777777 email filled #777777, $folder outlined #777777 folder outlined #777777, $folder filled #ffffff folder filled #ffffff, $folder filled #cccccc folder filled #cccccc, $folder filled #777777 folder filled #777777, $bell outlined #777777 bell outlined #777777, $bell filled #ffffff bell filled #ffffff, $bell filled #777777 bell filled #777777, $print outlined #777777 print outlined #777777, $print filled #ffffff print filled #ffffff, $print filled #cccccc print filled #cccccc, $print filled #777777 print filled #777777
@each $icon in $th_flat_iconList 
	$th_flat_iconName: nth( $icon, 2 )
	$th_flat_iconClass: nth( $icon, 1 )
	.icon-#{$th_flat_iconName} 
		+cssSprite( $th_flat_iconClass )
	


```
