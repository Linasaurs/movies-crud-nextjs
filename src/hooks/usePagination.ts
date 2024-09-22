import { useMemo, useState, useEffect } from "react";

export function usePagination<T extends any>(data: T[], pageSize: number = 10) {
    const [page, setPage] = useState(0);
    const totalPages = Math.ceil(data.length / pageSize)
    const pageData = data.slice(page * pageSize, page * pageSize + pageSize)
    useEffect(() => {
        if (page > totalPages - 1 && page != 0) {
            setPage(totalPages - 1);
        }
    }, [totalPages])

    return { pageData, page, totalPages, setPage };
};

