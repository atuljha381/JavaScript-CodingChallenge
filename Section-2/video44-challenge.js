jonas = {
    name : 'Atul',
    age : '22',
    job: 'teacher',

    getSummary: function(){
        this.sent = `${this.name} is a ${this.age} year old ${this.job} and has a drivers license`;
        return this.sent
    }
}

console.log(jonas.getSummary());