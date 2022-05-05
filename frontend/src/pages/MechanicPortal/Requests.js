import React from 'react'
import RequestCard from './RequestCard';
import {
    ServicesWrapper,
} from "../../components/Services/ServicesElements";

const Requests = ({ requests, mechanic, fetch }) => {

    return(
         <ServicesWrapper>
        { requests.length > 0 && requests.map(request => <RequestCard
            key={request.id}
            fetch={fetch}
            request={request} 
            mechanic={mechanic}
        />)}
        </ServicesWrapper>
    )
}


export default Requests;