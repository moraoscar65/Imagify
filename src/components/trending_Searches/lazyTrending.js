import React, { Suspense } from "react";
import useNearScreen from "../../hooks/useNearScreen";
const TrendingSearches= React.lazy(
    () => import ('./trendingSearches')
)

export default function LazyTrending() {
    const {isNearScreen,fromRef} = useNearScreen('100px')
    return (
    <Suspense fallback="Cargando...">
        <div ref={fromRef}>
            {isNearScreen ? <TrendingSearches /> : null}
        </div>
    </Suspense>
    )
}