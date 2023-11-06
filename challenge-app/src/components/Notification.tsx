import { useAppSelector } from '../store/hooks';
import Alert from '@mui/material/Alert';

const Notification = (): JSX.Element => {
	const status = useAppSelector(state => state.items.status);
	const notification = useAppSelector(state => state.items.notification);

	if (status === 'success')
		return (
			<Alert sx={{ my: 2 }} severity='success'>
				{notification}
			</Alert>
		);
	if (status === 'error')
		return (
			<Alert sx={{ my: 2 }} severity='error'>
				{notification}
			</Alert>
		);
	else return <></>;
};

export default Notification;
