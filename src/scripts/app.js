// import core libraries
import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import init from './init'

// import views
import DashboardView from './views/DashboardView'
import HomeView from './views/HomeView'
import LoginView from './views/LoginView'
import MyProductsView from './views/MyProductsView'
import SingleProductView from './views/SingleProductView'

//import models
import {User} from './models/models'

console.log('YOLO136')

const app = function() {
  const AppRouter = Backbone.Router.extend ({
  	routes: {
  		'home':'handleHome',
  		'dashboard':'handleDashboard',
  		'login':'handleLogin',
  		'myproducts':'handleMyProducts',
  		'myproducts/:id':'handleSingleView',
  		'*redirect':'handleRedirect'
  	},

  	handleHome: function(){
  		ReactDOM.render(<HomeView />, document.querySelector('.container'))
  	},

  	handleDashboard: function(){
  		ReactDOM.render(<DashboardView />, document.querySelector('.container'))
  	},

  	handleMyProducts: function(){
  		ReactDOM.render(<MyProductsView />, document.querySelector('.container'))
  	},

  	handleSingleView: function(id){
  		ReactDOM.render(<SingleProductView id={id} />, document.querySelector('.container'))
  	},

  	handleLogin: function(){
  		ReactDOM.render(<LoginView />, document.querySelector('.container'))
  	},

  	handleRedirect: function(){
  		location.hash = 'home'
  	},

  	initialize: function(){
  		Backbone.history.start()
  		// listen for event on Backbone Router itself
		this.on('route', function(handlerName){
			if(!User.getCurrentUser()){
				location.hash = 'login'
			}
		})
  	}
  })
  new AppRouter()
}

// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..
// NECESSARY FOR USER FUNCTIONALITY. DO NOT CHANGE. 
export const app_name = init()
app()
// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..