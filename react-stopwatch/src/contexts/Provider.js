import {LapProvider, TimerProvider} from '.';

export function Provider({children}) {
	return (
		<TimerProvider>
			<LapProvider>{children}</LapProvider>
		</TimerProvider>
	);
}
