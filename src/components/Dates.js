import React from "react";

export default function Dates({ invoiceNumber, invoiceDate, dueDate }) {
  return (
    <>
      <article className="mt-10 mb-14 flex items-end justify-end">
        <ul>
          <li className="p-1">
            <span className="font-bold">Invoice number:</span> {invoiceNumber}
          </li>
          <li className="bg-gray-200">
            <span className="font-bold">Invoice date:</span> {invoiceDate}
          </li>
          <li className="p-1">
            <span className="font-bold">Delivery date:</span> {dueDate}
          </li>
        </ul>
      </article>
    </>
  );
}
