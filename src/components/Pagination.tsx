interface Props {
  page: number;
  totalPages: number;
  setPage: (page: number) => void;
}
export const Pagination = ({ page, totalPages, setPage }: Props) => {
  return (
    <nav className="flex rounded-md justify-end mt-2" aria-label="Pagination">
      <button
        disabled={page <= 0}
        onClick={() => {
          setPage(page - 1);
        }}
        className={`inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 text-sm font-medium hover:bg-gray-50 ${page <= 0 ? "bg-gray-100 hover:bg-gray-100" : ""}`}
      >
        <span>Previous</span>
      </button>
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          disabled={page == index}
          onClick={() => {
            setPage(index);
          }}
          className={`inline-flex items-center px-2 py-2  border border-gray-300 text-sm font-medium hover:bg-gray-50 ${page == index ? "bg-gray-100 hover:bg-gray-100" : ""}`}
        >
          <span>{index + 1}</span>
        </button>
      ))}
      <button
        disabled={page >= totalPages}
        onClick={() => {
          setPage(page + 1);
        }}
        className={`inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 text-sm font-medium hover:bg-gray-50 ${page >= totalPages ? "bg-gray-100 hover:bg-gray-100" : ""}`}
      >
        <span>Next</span>
      </button>
    </nav>
  );
};
