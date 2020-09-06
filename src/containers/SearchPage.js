import React from 'react'
import '../components/SearchResult.css'
import SearchResult from '../components/SearchResult'
import { Button } from '@material-ui/core'

function SearchPage() {
    return (
        // Fantastic point to implement store
        <div>
            <div 
            className='searchPage_info'>
                <p>62 stays · 26 august to 30 august · 2 guest</p>
                <h1>Stays Nearby</h1>
                <Button 
                    variant="outlined">Cancellation Flexibility
                </Button>
                <Button 
                    variant="outlined">Type of place
                </Button>
                <Button 
                    variant="outlined">Price
                </Button>
                <Button 
                    variant="outlined">Rooms and beds
                </Button>
                <Button 
                    variant="outlined">More filters
                </Button>
            </div>
            <SearchResult 
                img="https://i.ytimg.com/vi/-rOqeFsGMcI/maxresdefault.jpg"
                location="Private room in the center of London"
                title="Stay at this spacious Edwardian House"
                description="1 guest · 1 bedrooom · 1 bed · 1.5 shared bathrooms · Wifi · Kitchen · Free Parking · Washing Machine"
                star={4.73}
                price="30USD / night"
                total=" 100USD total"
            />
            <SearchResult 
                img="https://i.ytimg.com/vi/-rOqeFsGMcI/maxresdefault.jpg"
                location="Private room in the center of London"
                title="Stay at this spacious Edwardian House"
                description="1 guest · 1 bedrooom · 1 bed · 1.5 shared bathrooms · Wifi · Kitchen · Free Parking · Washing Machine"
                star={4.73}
                price="30USD / night"
                total=" 100USD total"
            />
            <SearchResult 
                img="https://i.ytimg.com/vi/-rOqeFsGMcI/maxresdefault.jpg"
                location="Private room in the center of London"
                title="Stay at this spacious Edwardian House"
                description="1 guest · 1 bedrooom · 1 bed · 1.5 shared bathrooms · Wifi · Kitchen · Free Parking · Washing Machine"
                star={4.73}
                price="30USD / night"
                total=" 100USD total"
            />
            <SearchResult 
                img="https://i.ytimg.com/vi/-rOqeFsGMcI/maxresdefault.jpg"
                location="Private room in the center of London"
                title="Stay at this spacious Edwardian House"
                description="1 guest · 1 bedrooom · 1 bed · 1.5 shared bathrooms · Wifi · Kitchen · Free Parking · Washing Machine"
                star={4.73}
                price="30USD / night"
                total=" 100USD total"
            />
            <SearchResult 
                img="https://i.ytimg.com/vi/-rOqeFsGMcI/maxresdefault.jpg"
                location="Private room in the center of London"
                title="Stay at this spacious Edwardian House"
                description="1 guest · 1 bedrooom · 1 bed · 1.5 shared bathrooms · Wifi · Kitchen · Free Parking · Washing Machine"
                star={4.73}
                price="30USD / night"
                total=" 100USD total"
            />
            <SearchResult 
                img="https://i.ytimg.com/vi/-rOqeFsGMcI/maxresdefault.jpg"
                location="Private room in the center of London"
                title="Stay at this spacious Edwardian House"
                description="1 guest · 1 bedrooom · 1 bed · 1.5 shared bathrooms · Wifi · Kitchen · Free Parking · Washing Machine"
                star={4.73}
                price="30USD / night"
                total=" 100USD total"
            />
        </div>
    )
}

export default SearchPage