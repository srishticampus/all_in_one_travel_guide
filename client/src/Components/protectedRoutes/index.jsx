import {Navigate, Outlet} from 'react-router-dom';

export const TouristProtectedRoutes = () => {
    const touristId = localStorage.getItem('travel_guide_tourist_id');
    return touristId ? <Outlet /> : <Navigate to='/login' />
}

export const AgencyProtectedRoutes = () => {
    const agencyId = localStorage.getItem('travel_guide_agency_id');
    return agencyId ? <Outlet /> : <Navigate to='/login' />
}

export const HotelProtectedRoutes = () => {
    const hotelId = localStorage.getItem('travel_guide_hotel_id');
    return hotelId ? <Outlet /> : <Navigate to='/login' />
}
    