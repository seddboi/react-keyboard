import './App.css';
import { Box } from '@mui/material';
import { Board } from './components/Board/board';
import { TextArea } from './components/TextArea/textarea';

function App() {
	return (
		<Box className="App" sx={{ display: 'flex', alignItems: 'center' }}>
			<TextArea />
			<Board />
		</Box>
	);
}

export default App;
