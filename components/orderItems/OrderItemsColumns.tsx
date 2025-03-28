"use client";

import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";

export const columns: ColumnDef<OrderItemType>[] = [
  {
    accessorKey: "title",
    header: "Produto",
    cell: ({ row }) => (
      <Link
        href={`/products/${row.original.product._id}`}
        className="hover:text-red-1"
      >
        {row.original.product.title}
      </Link>
    ),
  },
  {
    accessorKey: "color",
    header: "Cor",
  },
  {
    accessorKey: "size",
    header: "Tamanho",
  },
  {
    accessorKey: "quantity",
    header: "Quantidade",
  },
];
