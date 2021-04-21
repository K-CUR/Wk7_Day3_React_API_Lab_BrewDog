import React, {useState, useEffect} from "react";
import BeerList from "../components/BeerList";
import BeerDetails from "../components/BeerDetails";

const BeerCrate = () => {
    const [beers, setBeers] = useState ([]);
    const [selectedBeer, setSelectedBeer] = useState(null);

    useEffect (() => {
        getBeers();
    },[])

    const getBeers = function(){
        fetch('https://api.punkapi.com/v2/beers')
        .then(results => results.json())
        .then(beers => setBeers(beers))
    }

    const onBeerClick = (beer) => {
        setSelectedBeer(beer);
    }

    return (
        <div>
            {beers ? <BeerList beers={beers} onBeerClick={onBeerClick}/> :null}
            {/* above passes beers prop and onBeerClick function to BeerList */}
            {/* In BeerList these */}
            {selectedBeer ? <BeerDetails selectedBeer={selectedBeer}/> :null}

        </div>
        )

        //ternary condition to
}


export default BeerCrate;