import {LapProvider} from './lapContext';
import { TimerProvider } from './timerContext';
import React from 'react';

export const Provider:React.FC = ({children}):JSX.Element => {
	return (
		<TimerProvider>
			<LapProvider>{children}</LapProvider>
		</TimerProvider>
	);
}
