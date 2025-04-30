import { Character, getCharacters } from '../../services/characters';
import { useEffect, useState } from 'react';
import CharacterCard from './CharacterCard';
import Pagination from './Pagination';
import Filter from './Filter';


const CharacterList = () => {
    const [filterText, setFilterText] = useState<string>('');
    const [characters, setCharacters] = useState<Character[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(0);
  
    const handleFilterChange = (text: string) => {
        setCurrentPage(1);        
        setFilterText(text); 
    }

    useEffect(() => {
        const fetchData = async () => {
            const response = await getCharacters(filterText, currentPage);
            if (response) {
                setCharacters(response.results)
                setTotalPages(Number(response.info.pages))
            }
        };
        fetchData();
    }, [currentPage, filterText]);

    return (
        <section className='px-2 lg:px-44'>
            <div className='flex justify-end px-6'>
            <Filter
                filterText={filterText}
                onFilterChange={handleFilterChange}
               
            />
            </div>
            <div className='grid md:grid-cols-3 xl:grid-cols-5 gap-4 lg:gap-5 px-2'>
                {characters.map(character =>
                    <CharacterCard
                        character={character}
                        key={character.id}
                    />
                )
                }
            </div>
            <Pagination
                totalPages={totalPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
        </section>
    );
};

export default CharacterList;