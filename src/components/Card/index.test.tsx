import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Card from './index';

test('Correct text in the document', () => {
    const currentWorker = {
        "gender": "male",
        "name": {
            "title": "mr",
            "first": "cursino",
            "last": "lima"
        },
        "location": {
            "street": "5211 rua rio de janeiro ",
            "city": "bagé",
            "state": "maranhão",
            "postcode": 49002,
            "coordinates": {
                "latitude": "-25.3160",
                "longitude": "-28.2571"
            },
            "timezone": {
                "offset": "-1:00",
                "description": "Azores, Cape Verde Islands"
            }
        },
        "email": "cursino.lima@example.com",
        "dob": {
            "date": "1945-08-07T23:01:20Z",
            "age": 73
        },
        "registered": {
            "date": "2003-11-05T12:17:47Z",
            "age": 15
        },
        "phone": "(23) 2275-1779",
        "cell": "(58) 0434-1546",
        "picture": {
            "large": "https://randomuser.me/api/portraits/men/85.jpg",
            "medium": "https://randomuser.me/api/portraits/med/men/85.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/men/85.jpg"
        }
    }
    render(<Card currentWorker={currentWorker} />);
    expect(screen.getByText('cursino lima')).toBeInTheDocument();
    expect(screen.getByText(`Gender: ${currentWorker?.gender}`)).toBeInTheDocument();
    expect(screen.getByText(`Country: ${currentWorker?.location.timezone?.description}`)).toBeInTheDocument();;
    expect(screen.getByText(`Birthday: ${currentWorker?.dob.date}`)).toBeInTheDocument();
    expect(screen.getByText(`Age: ${currentWorker?.dob.age}`)).toBeInTheDocument();
    expect(screen.getByText(`Age: ${currentWorker?.dob.age}`)).toBeInTheDocument();
    expect(screen.getByText(`Cell: ${currentWorker?.cell}`)).toBeInTheDocument();
})