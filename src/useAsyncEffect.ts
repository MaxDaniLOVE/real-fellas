import { useEffect } from 'react';

export const useAsyncEffect = (asyncCallback: Function, dependencies: Array<any> = []): void => useEffect(() => {
	(async (): Promise<void> => {
		await asyncCallback();
	})();
}, [ ...dependencies ]);