import { Skeleton } from "@/components/ui/skeleton"


export default function Loading() {
    return (
        <div className="w-full bg-black min-h-screen">
            <Skeleton className="w-[100px] h-[20px] rounded-full" />
        </div>
    )
}