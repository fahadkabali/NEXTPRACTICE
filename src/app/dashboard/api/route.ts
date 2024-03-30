import { type NextRequest } from "next/server"
import { headers, cookies} from "next/headers"

export async function GET(req: NextRequest){
    const reqHeaders = new Headers(req.headers);
    const headerList = headers()
    cookies().set("resultsPaerPage", "20")
    const theme = req.cookies.get("theme")

    console.log(reqHeaders.get("Authorization"))
    console.log(headerList.get("Authorization"))
    console.log(theme)
    console.log(cookies().get("resultsPerPage"))
    return new Response("<h1>This Dashboard Api</h1>",{
        headers:{
            "Content-Type": "text/html",
            "Set-Cookie":"theme=dark"
        }
    });
}