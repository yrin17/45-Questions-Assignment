// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.



let guests: String[] = ["Albert Einstein", "Marie Curie", "Nikola Tesla"];



let unableToAttend = "Nikola Tesla";
console.log(`${unableToAttend} can't make it to dinner.`);

// Replace the guest
let newGuest = "Leonardo da Vinic";
guests[guests.indexOf(unableToAttend)] = newGuest;

//New iniviations
guests.forEach(guest =>{
    console.log(`Dear ${guests}, would you likde to join me for dinner?`);
});

