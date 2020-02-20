import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles(() => ({
	root: {
		minWidth: 400
	}
}));

export default function CharacterStats({ stats }) {
	const classes = useStyles();

	console.log('stats', stats);

	return (
		<TableContainer>
			<Table className={classes.table} aria-label="simple table">
				<TableHead>
					<TableRow>
						{Object.keys(stats).map((key, index) => (
							<TableCell key={index}>{key}</TableCell>
						))}
					</TableRow>
				</TableHead>
				<TableBody>
					<TableRow>
						{Object.keys(stats).map((key, index) => (
							<TableCell key={index} component="th" scope="row">
								{stats[key]}
							</TableCell>
						))}
					</TableRow>
				</TableBody>
			</Table>
		</TableContainer>
	);
}
