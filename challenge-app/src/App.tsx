import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddPage from './pages/AddPage';
import EditPage from './pages/EditPage';
import { Container } from '@mui/material';

function App(): JSX.Element {
	return (
		<Container fixed>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/add' element={<AddPage />} />
					<Route path='/edit/:id' element={<EditPage />} />
				</Routes>
			</BrowserRouter>
		</Container>
	);
}

export default App;
