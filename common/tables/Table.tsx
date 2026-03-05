import { twMerge } from "tailwind-merge";

interface TableProps {
  items: Record<string, any>[];
  columns: {
    label: string;
    key: string;
    render?: (item: any) => React.ReactNode;
  }[];
  isLoading?: boolean;
  onSelect?: (item: any) => void;
}

export const Table = (props: TableProps) => {
  const { items, columns, isLoading, onSelect } = props;

  const tableTitles = columns.map((column) => (
    <th key={column.key}>{column.label}</th>
  ));

  const tableRows = items.map((item, index) => (
    <tr
      key={index}
      className={twMerge("hover:bg-bg3 cursor-pointer")}
      onClick={() => onSelect?.(item)}
    >
      {columns.map((column) => (
        <td key={column.key}>
          {column.render ? column.render(item) : item[column.key]}
        </td>
      ))}
    </tr>
  ));

  return (
    <div className="w-full overflow-x-auto">
      <table className="table">
        <thead className="bg-bg2">
          <tr>{tableTitles}</tr>
        </thead>
        <tbody data-loading={isLoading}>{tableRows}</tbody>
      </table>
    </div>
  );
};
