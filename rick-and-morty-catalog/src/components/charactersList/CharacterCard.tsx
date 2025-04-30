import { Character } from "../../services/characters"

interface CharacterCardProps {
    character: Character;

}

const CharacterCard = ({ character }: CharacterCardProps) => {


    return (

        <div
            className="border-4 bg-green-400 
                shadow-md rounded-lg"
        >
            <img className="w-full rounded-msm" src={character.image}
                alt={character.name} />

            <h1 className="flex-1 flex mt-2 font-medium items-center 
                justify-center text-center">
                {character.name}
            </h1>
            <div className='p-2'>
                <p>
                    <span className="font-medium md:font-bold">Status: </span>{character.status}.
                </p>
                <p>
                    <span className="font-medium md:font-bold">Origin: </span>{character.origin.name}.
                </p>
                <p>
                    <span className="font-medium md:font-bold">Current Location: </span>
                    {character?.location.name}.
                </p>
                <p><span className="font-medium md:font-bold">Gender: </span>{character.gender}.</p>
                <p><span className="font-medium md:font-bold">Species: </span>{character.species}.</p>
            </div>
        </div>
    )
}

export default CharacterCard