import Card from "@/components/card";
import Link from "next/link";

export default function NoficationArchive(){
    return(
        <Card>
            <div>Archived Notifications</div>
            <Link href="/complex-dashboard">Archived Notifications</Link>

        </Card>
    )
}