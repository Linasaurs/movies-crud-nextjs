import { useMemo, useState } from "react";

export function usePagination<T extends any>(data: T[], pageSize: number = 10) {
    const totalPages = useMemo(() => Math.ceil(data.length / pageSize), [
        pageSize,
        data.length
    ]);
    const [page, setPage] = useState(0);
    const pageData = useMemo(
        () => data.slice(page * pageSize, page * pageSize + pageSize),
        [pageSize, page]
    );

    return { pageData, page, totalPages, setPage };
};

