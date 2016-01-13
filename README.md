# Plato Creative - SilverStripe Installer #
A custom installer for a SilverStripe based project, includes commonly used files and settings.

### Requirements ###
This installer requires you have the following:
- Composer
- Bower
- Compass
- Bundle
- Gulp

### Installation ###
Use composer to quickly create a new project:
```
composer create-project plato-creative/plato-silverstripe-installer . @dev
```
Composer loads the installer which works through is logic.  Asking the following questions:
- Do you want to install all base modules? Yes or No (see base modules below)
- Do you want to install <specific module>? Yes or No
- Please specify the theme name
- Please specify the database name

### Gulp ###

In terminal cd to your theme directory. Run
```
npm install --save-dev
```

Start watching the theme
```
Gulp
```

### Base Modules ###
The base modules are listed below:
- [Home page slides](https://github.com/PlatoCreative/plato-silverstripe-homeslides)
- [Home page tiles](https://github.com/PlatoCreative/plato-silverstripe-hometiles)
- [Gallery](https://github.com/PlatoCreative/plato-silverstripe-gallery)
- [Banner](https://github.com/PlatoCreative/plato-silverstripe-banners)
- [Page section](https://github.com/PlatoCreative/plato-silverstripe-sections)
