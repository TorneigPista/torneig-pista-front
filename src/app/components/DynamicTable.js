import TableHeader from "./TableHeader";

export default function DynamicTable({ children, headers, borderColor = 'border-green-400', headerBackgroundColor = 'bg-green-400'}) {
  return (
    <div className={`rounded-lg border ${borderColor} overflow-auto mt-3`}>
      <table className={`border-t ${borderColor} text-sm w-full border-collapse`}>
        <TableHeader headers={headers} headerBackgroundColor={headerBackgroundColor}/>
        <tbody>
          {children}
        </tbody>
      </table>
    </div>
    
  );
}