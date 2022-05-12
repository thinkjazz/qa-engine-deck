const fs = require('fs')
const path = require('path')
const chalk = require('chalk')

/**
 * Console wrappers
 */
const error = (...args) => {
  console.error(chalk.red(...args))
}

const success = (...args) => {
  console.log(chalk.green(...args))
}

// Arguments passed via terminal
const args = process.argv.slice(2)

// Default path for the modules
const modulesPath = 'src/store/modules'

// Bail out if there is no name for a module
if (!args.length) {
  error('You must provide a name for the module!')
  return
}

/**
 * Ensure that the modules directory exists
 */
const fullModulesPath = path.join(__dirname, '../', modulesPath)
if (!fs.existsSync(fullModulesPath)) {
  fs.mkdirSync(fullModulesPath)
}

// Get a full path for the module to be created
const moduleName = args[0]
const modulePath = path.join(__dirname, '../', modulesPath, moduleName)

if (fs.existsSync(modulePath)) {
  error(`${moduleName} directory already exists!`)
  process.exit(1)
}

// Content for each module file
const stateContent = `import getters from './${moduleName}Getters';
import actions from './${moduleName}Actions';
import mutations from './${moduleName}Mutations';

const state = {};

export default {
  state,
  getters,
  actions,
  mutations
};
`
const exportFileContent = `import * as ${moduleName}Types from './${moduleName}Types.js';

export default {

};
`

// Get full paths for each module file
const statePath = `${path.join(modulePath, `${moduleName}.js`)}`
const gettersPath = `${path.join(modulePath, `${moduleName}Getters.js`)}`
const actionsPath = `${path.join(modulePath, `${moduleName}Actions.js`)}`
const mutationsPath = `${path.join(modulePath, `${moduleName}Mutations.js`)}`
const typesPath = `${path.join(modulePath, `${moduleName}Types.js`)}`

// Create module files with content
fs.mkdirSync(modulePath)
fs.appendFileSync(statePath, stateContent)
fs.appendFileSync(gettersPath, exportFileContent)
fs.appendFileSync(actionsPath, exportFileContent)
fs.appendFileSync(mutationsPath, exportFileContent)
fs.appendFileSync(typesPath, '')

success('Module', moduleName, 'generated!')
