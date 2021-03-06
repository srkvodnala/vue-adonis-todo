'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.group(() => {
  Route.post('/auth/register', 'UserController.register')
  Route.post('/auth/login', 'UserController.login')

  Route.get('/projects', 'ProjectController.index').middleware('auth'); //Using middleware to parse the jwt token from the request
  Route.post('/create', 'ProjectController.create').middleware('auth')
  Route.delete('/delete/:id', 'ProjectController.destroy').middleware('auth')
  Route.patch('/update/:id', 'ProjectController.update').middleware('auth');

  Route.get('/projects/:id', 'TaskController.index').middleware('auth');
  Route.post('/projects/:id/createTask', 'TaskController.create').middleware('auth');
  Route.delete('/projects/deleteTask/:id', 'TaskController.destroy').middleware('auth');
  Route.patch('/projects/updateTask/:id', 'TaskController.update').middleware('auth');


}).prefix('api')

