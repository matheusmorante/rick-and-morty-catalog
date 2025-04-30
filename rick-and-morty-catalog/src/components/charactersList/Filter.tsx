
interface FilterProps {
    filterText: string,

    onFilterChange: (text: string) => void
}

const Filter = ({ filterText, onFilterChange }: FilterProps) => {


    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onFilterChange(e.target.value)
    }
    return (
        <div className="relative inline-block my-4 bg-gray-200 p-2 rounded-xl">
            <input
                onChange={handleInputChange}
                value={filterText}
                className="bg-gray-200 focus:outline-none"
                placeholder="Search by name..."
            />
            <i className="bi bi-search text-black absolute right-2" />

        </div>

    )
}

export default Filter