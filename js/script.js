const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            contacts: [
                { 
                    name: 'Michele',
                    avatar: './img/avatar_1.jpg',
                    visible: true,
                    online: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: './img/avatar_2.jpg',
                    visible: true,
                    offline: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: './img/avatar_3.jpg',
                    visible: true,
                    online: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: './img/avatar_4.jpg',
                    visible: true,
                    busy: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: './img/avatar_5.jpg',
                    visible: true,
                    online: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: './img/avatar_6.jpg',
                    visible: true,
                    busy: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: './img/avatar_7.jpg',
                    visible: true,
                    offline: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: './img/avatar_8.jpg',
                    visible: true,
                    offline: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ],  
            contattoSelezionato: '',
            nuovoMessaggio: '',
            searchBar: ''
        }
    },
    methods: {
        // seleziona il contatto
        selezionaContatto(index) {
            if (this.contattoSelezionato !== index) {
                console.log("Selezionando contatto con indice:", index);
                this.contattoSelezionato = index;
                this.renderConversation();
            } else {
                console.log("Il contatto selezionato è già attivo.");
            }
        },
        // renderizza la conversazione
        renderConversation() {
            if (this.contattoSelezionato !== null) {
                console.log("Renderizzazione conversazione per contatto:", this.contattoSelezionato);
                const container = document.getElementById('conversation-container');
                const contact = this.contacts[this.contattoSelezionato];
                let conversationHTML = `
                    <div class="conversation">
                        <div class="contact-header">
                            <img src="${contact.avatar}" alt="${contact.name}" class="contact-avatar">
                            <h3>${contact.name}</h3>
                        </div>
                        <div class="messages-container">
                            ${contact.messages.map((message, index) => `
                                <div class="message ${message.status}">
                                    <p>${message.message}</p>
                                    <span class="message-time">${message.date}</span>
                                    <span class="delete" data-index="${index}">✖</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `;
                container.innerHTML = conversationHTML;
                
                const deleteButtons = container.querySelectorAll('.delete');
                deleteButtons.forEach(button => {
                    button.addEventListener('click', (event) => {
                        const index = event.target.getAttribute('data-index');
                        this.deleteMessage(parseInt(index));
                    });
                });
            }     
        },
        // invia il messaggio
        inviaMessaggio() {
            if (this.nuovoMessaggio.trim() && this.contattoSelezionato !== null) {
                const now = new Date();
                const formattedDate = `${now.getDate().toString().padStart(2, '0')}/${(now.getMonth() + 1).toString().padStart(2, '0')}/${now.getFullYear()} ${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`;
                
                this.contacts[this.contattoSelezionato].messages.push({
                    date: formattedDate,
                    message: this.nuovoMessaggio,
                    status: 'sent'
                });

                this.nuovoMessaggio = '';
                this.renderConversation();
                // ricevi la risposta automatico
                setTimeout(() => {
                    this.riceviMessaggioAutomatico();
                }, 1000);
            }
        },
        riceviMessaggioAutomatico() {
            const now = new Date(); 
            const formattedDate = `${now.getDate().toString().padStart(2, '0')}/
            ${(now.getMonth() + 1).toString().padStart(2, '0')}/
            ${now.getFullYear()} ${now.getHours().toString().padStart(2, '0')}:
            ${now.getMinutes().toString().padStart(2, '0')}:
            ${now.getSeconds().toString().padStart(2, '0')}`;
            
            if (this.contacts[this.contattoSelezionato].online === true) {
                this.contacts[this.contattoSelezionato].messages.push({
                    date: formattedDate,
                    message: 'I agree!',
                    status: 'received'
                });
            } else if (this.contacts[this.contattoSelezionato].offline === true) {
                this.contacts[this.contattoSelezionato].messages.push({
                    date: formattedDate,
                    message: "I'm sorry, I'm not available right now",
                    status: 'received'
                });
            } else if (this.contacts[this.contattoSelezionato].busy === true) {
                this.contacts[this.contattoSelezionato].messages.push({
                    date: formattedDate,
                    message: "I'm sorry, I'm busy right now",
                    status: 'received'
                });
            }

            this.renderConversation();
        },
        // funzionamento barra di ricerca
        filteredContacts() {
            return this.contacts.filter(contact => 
                contact.name.toLowerCase().includes(this.searchBar.toLowerCase())
            );
        },
        deleteMessage(index) {
            if (this.contattoSelezionato !== null) {
                this.contacts[this.contattoSelezionato].messages.splice(index, 1);
                this.renderConversation();
            }
        },
    }
});


app.mount('#app');