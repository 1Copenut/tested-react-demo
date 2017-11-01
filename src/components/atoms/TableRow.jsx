import React from 'react';

const TableRow = (props) => {
    return (
        <tr>
            { this.props.map(function(cellValue) {
                return <td>{ cellValue }</td>;
            })}
        </tr>
    );
}

export default TableRow;