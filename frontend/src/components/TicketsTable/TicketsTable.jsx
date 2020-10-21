import React from "react";

import { getFormattedDate } from "utils/date";

const TicketsTable = ({ tickets, onRemove }) => {
    return (
        <table className="table dates-table">
            <thead>
                <tr>
                    <th scope="col">Date</th>
                    <th scope="col">Time</th>
                    <th scope="col">Price</th>
                    {onRemove && <th scope="col"></th>}
                </tr>
            </thead>
            <tbody>
                {tickets &&
                    tickets.map(({ date, price }, index) => (
                        <tr key={index}>
                            <td>{getFormattedDate(date, "MMM do, yyyy")}</td>
                            <td>{getFormattedDate(date, "HH:mm")}</td>
                            <td>${price}</td>
                            {onRemove && (
                                <td>
                                    <button
                                        className="btn btn-danger"
                                        onClick={(e) => onRemove(e, index)}
                                    >
                                        Remove
                                    </button>
                                </td>
                            )}
                        </tr>
                    ))}
            </tbody>
        </table>
    );
};

export default TicketsTable;
