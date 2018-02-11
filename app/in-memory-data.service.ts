import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const users = [
            {"id": 6545, "name": "Иван", "date": "15.09", "email": "bem@mail.ru", "phone": 24533267, "position": "Front-end" },
            {"id": 6546, "name": "Антон", "date": "6.10", "email": "bem@mail.ru", "phone": 24533267, "position": "Front-end" },
            {"id": 6547, "name": "Стас", "date": "22.06", "email": "bem@mail.ru", "phone": 24533267, "position": "Front-end" },
            {"id": 6548, "name": "Димас", "date": "3.10", "email": "bem@mail.ru", "phone": 24533267, "position": "Front-end" }
        ];
        return { users };
    }
}