"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { invoices } from '../lib/placeholder-data';


export default function Filter() {

   const invoicesStatus = Array.from(new Set(invoices.map(invoice => invoice.status)));
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();
   const handleFilter=useDebouncedCallback((filter: string) => {

  console.log(`Filtering by... ${filter}`);
  const params = new URLSearchParams(searchParams);

      params.set('page', '1');

    if (filter) {
      params.set('query', filter);
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`);
   },300)

 return (
    <div>
     <select name="query" id="query" onChange={(e)=>handleFilter(e.target.value)} className="rounded-md border border-gray-200 py-[9px] pl-3 text-sm outline-2 placeholder:text-gray-500">
      <option value="">All Statuses</option>
      {invoicesStatus.map((status) => (
        <option  value={status}>
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </option>
      ))}
     </select>
    </div>
 )    
}