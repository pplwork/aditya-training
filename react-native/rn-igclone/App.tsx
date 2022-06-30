import React from 'react';
import {StatusBar} from 'expo-status-bar';
import Index from 'src';

const App: React.FC = (): JSX.Element => {
	return (
		<>
			<StatusBar style='auto' />
			<Index />
		</>
	);
};

export default React.memo(App);
