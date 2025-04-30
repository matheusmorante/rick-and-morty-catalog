interface PaginationProps {
    totalPages: number,
    currentPage: number;
    setCurrentPage:  React.Dispatch<React.SetStateAction<number>>;
}

const Pagination = ({totalPages, currentPage, setCurrentPage}: PaginationProps) => {
  
    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(prev => prev - 1);
        }
    };

    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(prev => prev + 1);
        }
    }

    return (
        <div className="flex justify-between items-center w-60 mx-auto bg-gray-100 mt-4 rounded-2xl">
            <div className="bg-blue-400 p-2">
                <i className="bi bi-arrow-left" onClick={prevPage}/>
            </div>
            <div>{currentPage + '/' + totalPages}</div>
            <div className="bg-blue-400 p-2">
                <i className="bi bi-arrow-right" onClick={nextPage}/>
            </div>
        </div>
    )
}

export default Pagination