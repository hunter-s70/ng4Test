export class InMemoryDataService {
    createDb() {
        const users = [
            {"id": 6545, "name": "Иван", "date": "5/9/2016", "email": "bem@mail.ru", "phone": 24533267, "position": "Front-end" },
            {"id": 6546, "name": "Антон", "date": "6/10/2013", "email": "bem@mail.ru", "phone": 24533267, "position": "Front-end" },
            {"id": 6547, "name": "Стас", "date": "2/6/2017", "email": "bem@mail.ru", "phone": 24533267, "position": "Front-end" },
            {"id": 6548, "name": "Димас", "date": "3/10/2017", "email": "bem@mail.ru", "phone": 24533267, "position": "Front-end" }
        ];
        return { users };
    }
}