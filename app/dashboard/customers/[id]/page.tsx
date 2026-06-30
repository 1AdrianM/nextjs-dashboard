import { fetchCustomersById } from "@/app/lib/data";
import CustomerDetailPage from "@/app/ui/customers/detail-page";

export default async  function Page(props: { params: Promise<{ id: string }> }){

    const params = await props.params;
    const id =  params.id
    const customer = await fetchCustomersById(id);

    return(
        <>
        <CustomerDetailPage customer={customer} />
        </>
    )

}