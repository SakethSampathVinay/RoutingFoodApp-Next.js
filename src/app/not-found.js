import { Link } from "lucide-react";



export default function NotFound() {
    return (
        <div>
            <h1>This Page Does Not Exist</h1>
            <Link href = {"/"}>Go to Home</Link>
        </div>
    )
}