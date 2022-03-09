import {LapProvider, TimerProvider} from '.';
import React from 'react';

export function Provider({children}) {
	return (
		<TimerProvider>
			<LapProvider>{children}</LapProvider>
		</TimerProvider>
	);
}
