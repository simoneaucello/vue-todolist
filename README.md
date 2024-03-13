Vue To Do List
===
Rifare l’esercizio della to do list.
Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
- text, una stringa che indica il testo del todo
- done, un booleano (true/false) che indica se il todo è stato fatto oppure no

MILESTONE 1
Stampare all’interno di una lista HTML un item per ogni todo.
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

MILESTONE 2

Visualizzare a fianco ad ogni item ha una “x”: cliccando su di essa, il todo viene rimosso dalla lista.

MILESTONE 3

Predisporre un campo di input testuale e un pulsante “aggiungi”: cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
Oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista

Bonus:
1- esporre un messaggio di errore se il testo inserito ha meno di 4 caratteri

2- cliccando sul testo dell’item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)

3- rendere eliminabili solo i task con done === true. In caso contrario esporre un messaggio di errore diverso dal precedente

4- Se la lista è vuota stampare “Non sono presenti task” al posto della lista
## Svolgimento
DEFAULT
1. creare un array di oggetti con i vari task + una vraiabile booleana done.
2. con un ciclo v-for in cui passiamo sia l'elemento che l'indice stampiamo tutti i task

AGGIUNTA DI UN TODO

3. creo un data (stringa) da associare al v-model dell'input
4. al @keyup.enter dell'input e al @click del bottone .unshift della variabile temporanea nel todo
5. resetto la variabile temporanea

GESTIONE ERRORE INSERIMENTO

6. creare un data (stringa) messaggio di errore
7. nella funzione addTask mettere un controllo sulla lunghezza della stringa da aggiungere all'array
8. SE la stringa < 4 caratteri : valorizzare la variabile errorMsg con il messaggio appropriato
9. ALTRIMENTI: -> punto 4 e reset errore


ELIMAZIONE TODO

10. @click del cestino -> funzione deleteTask passando come parametro l'indice della task da eliminare
11. deleteTask effettua lo splice dell'indice passato per un solo elemento da eliminare dall'array dei todo
