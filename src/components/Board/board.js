import React from 'react';
import { Container, Stack } from '@mui/material';
import './board.css';

export function Board() {
	return (
		<Container className="keyboard-background" maxWidth="md">
			<Stack
				direction="row"
				justifyContent="space-between"
				spacing={{ sm: 1, lg: 2 }}
				sx={{ mt: 2 }}
			>
				<button className="single-char-button">`</button>
				<button className="single-char-button">1</button>
				<button className="single-char-button">2</button>
				<button className="single-char-button">3</button>
				<button className="single-char-button">4</button>
				<button className="single-char-button">5</button>
				<button className="single-char-button">6</button>
				<button className="single-char-button">7</button>
				<button className="single-char-button">8</button>
				<button className="single-char-button">9</button>
				<button className="single-char-button">0</button>
				<button className="single-char-button">-</button>
				<button className="single-char-button">=</button>
				<button className="multi-char-button">delete</button>
			</Stack>

			<Stack direction="row" justifyContent="space-between" spacing={{ sm: 1, lg: 2 }}>
				<button className="multi-char-button">tab</button>
				<button className="single-char-button">q</button>
				<button className="single-char-button">w</button>
				<button className="single-char-button">e</button>
				<button className="single-char-button">r</button>
				<button className="single-char-button">t</button>
				<button className="single-char-button">y</button>
				<button className="single-char-button">u</button>
				<button className="single-char-button">i</button>
				<button className="single-char-button">o</button>
				<button className="single-char-button">p</button>
				<button className="single-char-button">[</button>
				<button className="single-char-button">]</button>
				<button className="single-char-button">\</button>
			</Stack>

			<Stack direction="row" justifyContent="space-between" spacing={{ sm: 1, lg: 2 }}>
				<button className="multi-char-button">caps</button>
				<button className="single-char-button">a</button>
				<button className="single-char-button">s</button>
				<button className="single-char-button">d</button>
				<button className="single-char-button">f</button>
				<button className="single-char-button">g</button>
				<button className="single-char-button">h</button>
				<button className="single-char-button">j</button>
				<button className="single-char-button">k</button>
				<button className="single-char-button">l</button>
				<button className="single-char-button">;</button>
				<button className="single-char-button">'</button>
				<button className="multi-char-button">return</button>
			</Stack>

			<Stack direction="row" justifyContent="space-between" spacing={{ sm: 1, lg: 2 }}>
				<button className="multi-char-button">shift</button>
				<button className="single-char-button">z</button>
				<button className="single-char-button">x</button>
				<button className="single-char-button">c</button>
				<button className="single-char-button">v</button>
				<button className="single-char-button">b</button>
				<button className="single-char-button">n</button>
				<button className="single-char-button">m</button>
				<button className="single-char-button">,</button>
				<button className="single-char-button">.</button>
				<button className="single-char-button">/</button>
				<button className="multi-char-button">shift</button>
			</Stack>

			<Stack
				direction="row"
				justifyContent="space-between"
				spacing={{ sm: 1, lg: 2 }}
				sx={{ mb: 2 }}
			>
				<button className="bottom-row-single-char-button">.com</button>
				<button className="bottom-row-single-char-button">@</button>
				<button className="space-button"></button>
			</Stack>
		</Container>
	);
}
