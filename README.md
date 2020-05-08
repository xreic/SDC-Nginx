# SDC-Nginx

> Contains all the files to be served by Nginx along with the config file `front`.
> Webscaling on legacy codebase to handle large user load querying onto database of 10 million records

## Table of Contents

1. [Stats](#Stats)
2. [Usage](#Usage)
3. [Requirements](#requirements)
4. [Development](#development)
5. [Notes](#notes)

## Stats

### [Metrics](https://www.dropbox.com/sh/phjn0q34qhyuga7/AADk-Xl3LHUACw3AxrKRyDXTa?dl=0)


## Usage

  * Fork or clone
  * Install the dependencies
    * Scroll down to see installation procedure
  * `npm start` or `npm test`


## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 12.16.2 (I just put the version I run on. Good luck.)
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install
npm run react
```

### Nginx setup

1. Adjust `front` to your needs
2. Put it in `sites-available` of Nginx folder
3. Create a symbolic link from file to `sites-enabled`
