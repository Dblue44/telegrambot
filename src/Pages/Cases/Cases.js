import React, {useMemo, useState} from "react";
import CasesSkeleton from "./CasesSkeleton";
import PropTypes from "prop-types";
// MATERIAL UI
import {
    Box,
    Collapse,
    IconButton,
    styled,
    Table,
    TableBody,
    TableCell,
    tableCellClasses,
    TableContainer,
    TableHead,
    TablePagination,
    FormControl,
    TableRow,
    TableSortLabel,
    tableSortLabelClasses,
    formControlClasses,
    nativeSelectClasses, NativeSelect, tableBodyClasses, tablePaginationClasses
} from "@mui/material";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { visuallyHidden } from '@mui/utils';
// ICONS
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

// Каждую запись можно открыть чтобы посмотреть подробную информацию по заявке
function Row(props) {
    const {caseItem} = props;
    const [open, setOpen] = useState(false);

    return (
        <React.Fragment>
            <TableRow sx={{'& > *': {borderBottom: 'unset'}}}>
                <TableCell sx={{padding: 0}}>
                    <IconButton
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row" sx={{ padding: 1 }}>
                    {caseItem.number}
                </TableCell>
                <TableCell align="left" sx={{ padding: 1 }}>{caseItem.theme}</TableCell>
                {/*caseItem.solved && <CheckIcon/>*/}
                <TableCell align="left" sx={{ padding: 0 }}>{caseItem.solved}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{paddingBottom: 0, paddingTop: 0}} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{margin: 1}}>
                            <Typography variant="h6" gutterBottom component="div">
                                Тема: {caseItem.theme}
                            </Typography>
                            <Typography variant="body1" gutterBottom component="div">
                                Описание: {caseItem.problem}
                            </Typography>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}
Row.propTypes = {
    caseItem: PropTypes.shape({
        theme: PropTypes.string.isRequired,
        problem: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
        solved: PropTypes.string.isRequired,
    }).isRequired,
};

// Описание заголовков таблицы для фильтрации
const headCells = [
    {
        id: 'number',
        label: 'Номер',
    },
    {
        id: 'theme',
        label: 'Тема',
    }
];

// Структура заголовков таблицы
function EnhancedTableHead(props) {
    const { order, orderBy, onRequestSort } =
        props;
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };
    const StyledTableCell = styled(TableCell)(({theme}) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: "#33a938",
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.root}`]: {
            fontSize: 16,
        },
    }));
    const StyledTableSortLabel = styled(TableSortLabel)(({theme}) => ({
        [`&.${tableSortLabelClasses.root}`]: {
            color: theme.palette.common.white
        }
    }))

    const StyledNativeSelect = styled(NativeSelect)(({theme}) => ({
        [`&.${nativeSelectClasses.root}`]: {
            color: theme.palette.common.white,
        },
        [`&.${nativeSelectClasses.root} .MuiNativeSelect-select option`]: {
            backgroundColor: "#33a938",
            paddingBottom: "10px"
        }
    }))

    const StyledFormControl = styled(FormControl)(({theme}) => ({
        [`&.${formControlClasses.root}`]: {
            backgroundColor: "#33a938",
            color: theme.palette.common.white,
            height: '51px',
            display: 'flex',
            justifyContent: 'center'
        }
    }))
    return (
        <TableHead>
            <TableRow>
                <StyledTableCell sx={{padding: 0, width: "5px", borderTopLeftRadius: '15px'}}></StyledTableCell>
                {headCells.map((headCell) => (
                    <StyledTableCell
                        key={headCell.id}
                        align='center'
                        size="small"
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <StyledTableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <Box component="span" sx={visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </Box>
                            ) : null}
                        </StyledTableSortLabel>
                    </StyledTableCell>
                ))}
                <StyledTableCell sx={{width: '50px', borderTopRightRadius: '15px'}}>
                    <StyledFormControl variant="standard" sx={{minWidth: 80}}>
                        <StyledNativeSelect
                            value={props.statusFilter}
                            onChange={props.handleChangeStatusFilter}
                        >
                            <option value={"All"}>Статус</option>
                            <option value={"В работе"}>В работе</option>
                            <option value={"Решено"}>Завершена</option>
                        </StyledNativeSelect>
                    </StyledFormControl>
                </StyledTableCell>
            </TableRow>
        </TableHead>
    );
}

EnhancedTableHead.propTypes = {
    onRequestSort: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
};
function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}
function getComparator(order, orderBy) {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}
function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
            return order;
        }
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}
const Cases = (props) => {
    const [cases, setCases] = useState(props.cases);
    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('number');
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [status, setStatus] = useState("");

    const handleChangeStatusFilter = (event) => {
        setStatus(event.target.value);
        if (event.target.value === "All"){
            setCases(props.cases)
        } else{
            setCases(props.cases.filter((el) => el.solved === event.target.value));
        }
    }
    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const visibleRows = useMemo(() =>
            stableSort(cases, getComparator(order, orderBy)).slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage,
            ), [order, orderBy, page, cases, rowsPerPage],
    );

    if (props.isLoading) {
        return <CasesSkeleton/>
    }

    const StyledTableBody = styled(TableBody)(() => ({
        [`&.${tableBodyClasses.root}`]: {
            background: 'white'
        }
    }))

    const StyledTablePagination = styled(TablePagination)(() => ({
        [`&.${tablePaginationClasses.root}`]: {
            background: 'white'
        }
    }))

    return (
        <>
            <Container maxWidth="xl" sx={{ justifyContent: 'center', display: 'grid'}}>
                <TableContainer sx={{minWidth: '360px'}}>
                    <Table aria-label="collapsible table">
                        <EnhancedTableHead
                            order={order}
                            orderBy={orderBy}
                            onRequestSort={handleRequestSort}
                            rowCount={cases.length}
                            handleChangeStatusFilter={handleChangeStatusFilter}
                            statusFilter={status}
                        />
                        <StyledTableBody>
                            {visibleRows.map((Case) => (
                                <Row key={Case.id} caseItem={Case}/>
                            ))}
                        </StyledTableBody>
                    </Table>
                </TableContainer>
                <StyledTablePagination
                    sx={{ maxWidth: 390 }}
                    labelRowsPerPage={'Заявок'}
                    rowsPerPageOptions={[10, 20]}
                    component="div"
                    count={cases.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Container>
        </>
    );
};

export default Cases;