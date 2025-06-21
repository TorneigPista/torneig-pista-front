export default function TableHeader({headers, headerBackgroundColor}) {
  
  return (
    <thead className={`${headerBackgroundColor} text-black text-sm font-semibold`}>
      <tr>
        {
          headers.map((header,index) => {
            const title = typeof header == 'string' ? header : header.title;
            const styles = typeof header !== 'string' ? header.style : '';
            return (
            <th key={index} className={`px-4 py-2 ${styles}`}>{title}</th>
          )
          })
        }
      </tr>
    </thead>
  );
}
// bg-green-400