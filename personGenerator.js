const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "№_1": "Умаров",
            "№_2": "Кольков",
            "№_3": "Шарипов",
            "№_4": "магомедов",
            "№_5": "Владимир",
            "№_6": "Шакалов",
            "№_7": "Незнайкин",
            "№_8": "Федоторов",
            "№_9": "Кракинов",
            "№_10": "Немыкин",
            "№_11": "Ашаков",
            "№_12": "Малыв",
            "№_13": "Романов",
            "№_14": "Юсупов",
            "№_15": "Смешнов",
            "№_16": "Холодов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "№_1": "Амир",
            "№_2": "Мага",
            "№_3": "Рамазан",
            "№_4": "Семен",
            "№_5": "Владимир",
            "№_6": "Шахмир",
            "№_7": "Михаил",
            "№_8": "Даниил",
            "№_9": "Егор",
            "№_10": "Семен"
        }
    }`,
    FemJson: `{
        "count": 10,
        "list": {     
            "№_1": "Александра",
            "№_2": "Мария",
            "№_3": "Марьям",
            "№_4": "Алина",
            "№_5": "Диана",
            "№_6": "Мая",
            "№_7": "Маржанат",
            "№_8": "Диана",
            "№_9": "патя",
            "№_10": "Аишат"
        }
    }`,

    profMale: `{
        "count": 10,
        "list": {     
            "№_1": "Сантехник",
            "№_2": "Строитель",
            "№_3": "Слесарь",
            "№_4": "Электрик",
            "№_5": "Программист",
            "№_6": "Нанотехнолог",
            "№_7": "Ученый",
            "№_8": "Доктор наук",
            "№_9": "Архиолог",
            "№_10": "пилот"
        }
    }`,

    profFemale: `{
        "count": 10,
        "list": {     
            "№_1": "Врач",
            "№_2": "Программист",
            "№_3": "Уборщица",
            "№_4": "Учительница",
            "№_5": "Парикмахер",
            "№_6": "Психолог",
            "№_7": "Продавщица",
            "№_8": "Менеджер",
            "№_9": "Продажник",
            "№_10": "Школьница"
        }
    }`,

    secondMale: `{
        "count": 10,
        "list": {     
            "№_1": "Александрович",
            "№_2": "Максимович",
            "№_3": "Иванович",
            "№_4": "Артемович",
            "№_5": "Платонович",
            "№_6": "Никитич",
            "№_7": "Михайлович",
            "№_8": "Даниилович",
            "№_9": "Егорович",
            "№_10": "Андреевич"
        }
    }`,

    secondFemale: `{
        "count": 10,
        "list": {     
            "№_1": "Александровна",
            "№_2": "Максимовна",
            "№_3": "Ивановна",
            "№_4": "Артемовна",
            "№_5": "Дмитриевна",
            "№_6": "Никитишна",
            "№_7": "Михайловна",
            "№_8": "Данииловна",
            "№_9": "Егоровна",
            "№_10": "Андреевна"
        }
    }`,


    GENDER_MALE: 'Мужчина, ',
    GENDER_FEMALE: 'Женщина, ',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomFirstName: function() {

        return this.randomValue(this.firstNameMaleJson);

    },


    randomSurname: function() {

        return this.randomValue(this.surnameJson);

    },
    randomGender: function () {
        if (this.randomIntNumber()===0){
            return this.GENDER_FEMALE;
        } else return this.GENDER_MALE;
    },
    randomFemname: function() {

        return this.randomValue(this.FemJson);

    },
    year: function(){
        return this.randomIntNumber(1960,2004);
    },

    randomprofmale: function() {
        return this.randomValue(this.profMale);
    },
    
    randomproffemale: function() {
        return this.randomValue(this.profFemale);
    },

    randomsecondmale: function() {
        return this.randomValue(this.secondMale);
    },
    randomsecondfem: function() {
        return this.randomValue(this.secondFemale);
    },

    month: function() {
        let b = this.randomIntNumber(12,1);
        if (b===1){
            return "Января";
        } if (b===2){
            return "Февраля";
        } if (b===3){
            return "Марта";
        } if (b===4){
            return "Апреля";
        } if (b===5){
            return "Мая";
        } if (b===6){
            return "Июня";
        } if (b===7){
            return "Июля";
        } if (b===8){
            return "Августа";
        } if (b===9){
            return "Сентября";
        } if (b===10){
            return "Октября";
        } if (b===11){
            return "Ноября";
        } if (b===12){
            return "Декабря";
        } else return ""
    },
    day: function() {
        if (this.month === "Январь" || "Март" || "Май" || "Июль" || "Август" || "Октябрь" || "Декабрь") {
            return this.randomIntNumber(31,1)
        } if (this.month === "Февраль"){
            return this.randomIntNumber(28,1)
        } else {
            return this.randomIntNumber(30,1)
        }
    },

   getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.fem = this.randomFemname();
        this.person.surname = this.randomSurname();
        this.person.year = this.year();
        this.person.profMale = this.randomprofmale();
        this.person.profFemale = this.randomproffemale();
        this.person.secondmale = this.randomsecondmale();
        this.person.secondfem = this.randomsecondfem();
        this.person.month = this.month();
        this.person.day = this.day();
        return this.person;
    }
};