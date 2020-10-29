import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'
import { HeroCard } from './HeroCard';

export const HeroList = ({publisher}) => {
    //el use memo lo use si el procesa llega a ser pesado
    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);
    //const heroes = getHeroesByPublisher(publisher);

    return (
        <div className="card-columns animate__animated animate__swing">
            {
                heroes.map(hero => (
                    <HeroCard key={hero.id}
                        { ...hero }
                    />
                ))
            }  
        </div>
    )
}
