import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable
} from "@tanstack/react-table";
import { useCallback } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import styles from "./tableStyles.module.scss";
import { Release } from "./types";

const columnHelper = createColumnHelper<Release>();

const columns = [
  columnHelper.display({
    id: "verion",
    header: "версия",
    size: 100,
    cell: ({ row }) => row.original.version
  }),
  columnHelper.display({
    id: "serviceName",
    header: "сервис",
    size: 200,
    cell: ({ row }) => {
      const release = row.original;
      return <a>{release.serviceName}</a>;
    }
  }),
  columnHelper.display({
    id: "releaseName",
    header: "имя релиза",
    size: 150,
    cell: ({ row }) => {
      return row.original.name;
    }
  }),
  columnHelper.display({
    id: "strategy",
    header: "стратегия",
    size: 110,
    cell: ({ row }) => row.original.deployStrategy
  }),
  columnHelper.display({
    id: "clusters",
    header: "",
    size: 60,
    cell: ({ row }) => row.original.clusters.join(" ")
  }),
  columnHelper.display({
    id: "time",
    header: "время",
    size: 200,
    cell: ({ row }) => row.original.startedAt
  }),
  columnHelper.display({
    id: "releaser",
    header: "релизер",
    size: 150,
    cell: ({ row }) => row.original.releaser
  }),
  columnHelper.display({
    id: "issues",
    header: "связанные задачи",
    // size: 250,
    cell: ({ row }) => row.original.issues.map((i) => i.fields.summary)
  })
];

type Props = {
  data: Array<Release>;
  isLoading: boolean;
  canFetchNext: boolean;
  fetchNext: () => void;
};

export function RTable({ data, isLoading, canFetchNext, fetchNext }: Props) {
  const { getHeaderGroups, getRowModel } = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel()
  });

  const fetchMoreOnBottomReached = useCallback(
    (containerRefElement?: HTMLDivElement | null) => {
      if (containerRefElement) {
        const { scrollHeight, scrollTop, clientHeight } = containerRefElement;
        //once the user has scrolled within 300px of the bottom of the table, fetch more data if there is any
        if (
          scrollHeight - scrollTop - clientHeight < 300 &&
          !isLoading &&
          canFetchNext
        ) {
          fetchNext();
        }
      }
    },
    [fetchNext, isLoading, canFetchNext]
  );

  return (
    <div
      className={styles.tableWrapper}
      // eslint-disable-next-line react/jsx-no-bind
      onScroll={(e) => fetchMoreOnBottomReached(e.target as HTMLDivElement)}
    >
      <table className={styles.table}>
        <thead>
          {getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  style={{ width: header.getSize() }}
                  className={styles.th}
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className={styles.td}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
          <tr>
            <td colSpan={50}>
              <Spin
                indicator={<LoadingOutlined spin />}
                spinning={true}
                size={"large"}
                style={{
                  height: 50,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
