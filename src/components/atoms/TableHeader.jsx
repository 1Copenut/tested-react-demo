import React from 'react';

const TableHeader = (props) => {
    let ancillaryRow = null;
    let primaryRow = props.primaryHeader.map(function(cellValue, i) {
        return (
            <th key={`${cellValue}-${i}`}>
                { cellValue }
            </th>
        );
    });

    if (ancillaryRow) {
        return (
            <thead>
                <tr>{ ancillaryRow }</tr>
                <tr>{ primaryRow }</tr>
            </thead>
        );
    } else {
        return (
            <thead>
                <tr>{ primaryRow }</tr>
            </thead>
        );
    }
}

export default TableHeader;