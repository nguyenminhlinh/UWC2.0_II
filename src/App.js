import React from 'react';
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ListMainJanitors from './pages/main/ListMainJanitor';
import ListMainCollector from './pages/main/ListMainCollector';
import Dashboard from './pages/main/Main';
import TaskAssignment from './pages/main1/App';
import Log from './pages/home/App';
import Home from "./Home"

//import Calendar from './pages/main1/Calendar';
import { CanvasProvider } from './pages/main1/utils/CanvasContext';
function App() {
return (
	<Router>
	<Routes>
	<Route path='/' element={<Home/>} />
	<Route path='/login' element={<Log/>} />


	<Route
		path='/home'
		element={
			<>
				<Home/>
				<Navbar />
			</>
		}
	/>
	<Route 
		path='/calendar' 
		element={
			<>
				<TaskAssignment index={0}/>
				<Navbar />
			</>
		}
	/>
    <Route 
		path='/employee/janitors' 
		element={
		<>
			<Navbar />
			<ListMainJanitors/>
		</>} 
	/>
	<Route 
		path='/employee/collector' 
		element={
			<>
				<ListMainCollector/>
				<Navbar />
			</>
		} 
	/>
	<Route 
		path='/employee/dashboard' 
		element={
		<>
			<Navbar />
			<Dashboard/>
		</>}
	/>
    <Route 
		path='/assignment' 
		element={
			<CanvasProvider>
				<Navbar />
				<TaskAssignment index={1}/>
			</CanvasProvider>} 
	/>
	</Routes>
	</Router>
);
}

export default App;
