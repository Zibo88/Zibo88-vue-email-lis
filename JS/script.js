
// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
// Bonus
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.


var app = new Vue ({
    
    el: '#root',
    data: {
        
        arrayEmail: []
    },
    methods: {
        newEmailRandom(){
            for(let i = 0; i < 10; i ++){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response) => {
                    
                    let thisEmail = [i]
                    thisEmail = response.data.response
                    console.log(response.data.response)
                    this.arrayEmail.push(thisEmail)
    
                }
                )
                
            }
        }
        
    },
    mounted(){
        this.newEmailRandom()
      
    }

    

})

