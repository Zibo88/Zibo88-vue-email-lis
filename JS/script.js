
// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
// Bonus
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.


var app = new Vue ({
    
    el: '#root',
    data: {
        randomEmail: null,
        arrayEmail: []
    },
    methods: {
        newEmailRandom(){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail',
                {
                    params: {
                        items: 10
                     }
                }

            )
            .then((response) => {
                this.randomEmail = response.data.response
                console.log(response.data.response)
            },
            this.arrayEmail.push(this.randomEmail)
            
            )
        }
        
    },
    mounted(){
        this.newEmailRandom()
    }

})