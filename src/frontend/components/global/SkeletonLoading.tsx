import Skeleton from "react-loading-skeleton";

export default function SkeletonLoading() {
    return (
        <div>
            <Skeleton width={"100%"} height={360} />
            <Skeleton width={"100%"} height={360} />
            <div className="flex gap-2">
                <Skeleton width={"50%"} height={480} />
                <Skeleton width={"50%"} height={480} />
            </div>
        </div>
    )
}